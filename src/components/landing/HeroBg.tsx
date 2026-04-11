// "use client";

// import { useEffect, useRef } from "react";

// export default function HeroBg() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d")!;

//     const CELL = 52;
//     const BLUE = "rgba(79,142,255,";
//     const TEAL = "rgba(56,189,248,";
//     const DRONE_COUNT = 3;
//     const LABELS = ["ALT 120m","SPD 18m/s","TMP 28°C","SIG 98%","ID-07","ID-12","ID-03"];

//     type Drone = {
//       x: number; y: number; tx: number; ty: number;
//       speed: number; trail: {x:number;y:number}[];
//       scanR: number; scanAlpha: number; scanning: boolean;
//       pingR: number; pingAlpha: number; pinging: boolean;
//       color: string; waitTimer: number; waiting: boolean;
//     };
//     type Target = { x:number; y:number; life:number; dying:boolean };
//     type Label  = { x:number; y:number; text:string; alpha:number; fadein:boolean };

//     let W = 0, H = 0;
//     const drones: Drone[] = [];
//     const targets: Target[] = [];
//     const labels: Label[] = [];
//     let sweepY = 0, sweepDir = 1;
//     let frame = 0;
//     let raf = 0;

//     function resize() {
//       W = canvas.offsetWidth;
//       H = canvas.offsetHeight;
//       canvas.width  = W;
//       canvas.height = H;
//     }

//     function cols() { return Math.floor(W / CELL); }
//     function rows() { return Math.floor(H / CELL); }

//     function nextNode(d: Drone) {
//       const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
//       const [dx,dy] = dirs[Math.floor(Math.random()*4)];
//       const steps = 2 + Math.floor(Math.random()*5);
//       d.tx = Math.max(0, Math.min((cols()-1)*CELL, d.x + dx*CELL*steps));
//       d.ty = Math.max(0, Math.min((rows()-1)*CELL, d.y + dy*CELL*steps));
//     }

//     function makeDrone(i: number): Drone {
//       const gx = Math.floor(Math.random()*cols());
//       const gy = Math.floor(Math.random()*rows());
//       return {
//         x: gx*CELL, y: gy*CELL, tx: gx*CELL, ty: gy*CELL,
//         speed: 0.6 + Math.random()*0.5, trail: [],
//         scanR: 0, scanAlpha: 0, scanning: false,
//         pingR: 0, pingAlpha: 0, pinging: false,
//         color: i === 1 ? TEAL : BLUE,
//         waitTimer: 0, waiting: false,
//       };
//     }

//     function spawnTarget() {
//       targets.push({
//         x: Math.floor(Math.random()*cols())*CELL,
//         y: Math.floor(Math.random()*rows())*CELL,
//         life: 1, dying: false,
//       });
//     }

//     function spawnLabel() {
//       labels.push({
//         x: Math.floor(Math.random()*cols())*CELL + 4,
//         y: Math.floor(Math.random()*rows())*CELL - 4,
//         text: LABELS[Math.floor(Math.random()*LABELS.length)],
//         alpha: 0, fadein: true,
//       });
//     }

//     function init() {
//       drones.length = 0; targets.length = 0; labels.length = 0;
//       for (let i = 0; i < DRONE_COUNT; i++) { const d = makeDrone(i); nextNode(d); drones.push(d); }
//       for (let i = 0; i < 4; i++) spawnTarget();
//       for (let i = 0; i < 5; i++) spawnLabel();
//     }

//     function draw() {
//       ctx.clearRect(0, 0, W, H);

//       // vignette
//       const vig = ctx.createRadialGradient(W/2,H/2,H*0.15,W/2,H/2,H*0.8);
//       vig.addColorStop(0,"rgba(5,7,9,0)");
//       vig.addColorStop(1,"rgba(2,3,5,0.7)");
//       ctx.fillStyle = vig; ctx.fillRect(0,0,W,H);

//       // grid
//       ctx.lineWidth = 0.5;
//       for (let x = 0; x <= W; x += CELL) {
//         ctx.beginPath(); ctx.strokeStyle = "rgba(79,142,255,0.06)";
//         ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke();
//       }
//       for (let y = 0; y <= H; y += CELL) {
//         ctx.beginPath(); ctx.strokeStyle = "rgba(79,142,255,0.06)";
//         ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke();
//       }
//       for (let x = 0; x <= W; x += CELL)
//         for (let y = 0; y <= H; y += CELL) {
//           ctx.beginPath(); ctx.arc(x,y,1,0,Math.PI*2);
//           ctx.fillStyle = "rgba(79,142,255,0.12)"; ctx.fill();
//         }

//       // sweep
//       sweepY += 0.35 * sweepDir;
//       if (sweepY > H) sweepDir = -1;
//       if (sweepY < 0) sweepDir = 1;
//       const sg = ctx.createLinearGradient(0,sweepY-2,0,sweepY+28);
//       sg.addColorStop(0,"rgba(79,142,255,0)");
//       sg.addColorStop(0.3,"rgba(79,142,255,0.06)");
//       sg.addColorStop(1,"rgba(79,142,255,0)");
//       ctx.fillStyle = sg; ctx.fillRect(0,sweepY-2,W,30);
//       ctx.beginPath(); ctx.moveTo(0,sweepY); ctx.lineTo(W,sweepY);
//       ctx.strokeStyle = "rgba(79,142,255,0.18)"; ctx.lineWidth = 0.8; ctx.stroke();

//       // targets
//       for (let i = targets.length-1; i >= 0; i--) {
//         const t = targets[i];
//         if (t.dying) t.life -= 0.025;
//         if (t.life <= 0) { targets.splice(i,1); spawnTarget(); continue; }
//         const a = t.life * 0.7;
//         ctx.strokeStyle = `rgba(79,142,255,${a*0.5})`; ctx.lineWidth = 0.6;
//         ([-8,8] as number[]).forEach(dx => { ctx.beginPath(); ctx.moveTo(t.x+dx-3,t.y); ctx.lineTo(t.x+dx+3,t.y); ctx.stroke(); });
//         ([-8,8] as number[]).forEach(dy => { ctx.beginPath(); ctx.moveTo(t.x,t.y+dy-3); ctx.lineTo(t.x,t.y+dy+3); ctx.stroke(); });
//         ctx.beginPath(); ctx.arc(t.x,t.y,6,0,Math.PI*2);
//         ctx.strokeStyle = `rgba(79,142,255,${a*0.4})`; ctx.stroke();
//         ctx.beginPath(); ctx.arc(t.x,t.y,2,0,Math.PI*2);
//         ctx.fillStyle = `rgba(79,142,255,${a*0.8})`; ctx.fill();
//       }

//       // labels
//       if (frame % 140 === 0 && labels.length < 8) spawnLabel();
//       ctx.font = "9px monospace";
//       for (let i = labels.length-1; i >= 0; i--) {
//         const lb = labels[i];
//         if (lb.fadein) { lb.alpha += 0.015; if (lb.alpha >= 0.45) lb.fadein = false; }
//         else lb.alpha -= 0.004;
//         if (lb.alpha <= 0) { labels.splice(i,1); continue; }
//         ctx.fillStyle = `rgba(79,142,255,${lb.alpha})`; ctx.fillText(lb.text,lb.x,lb.y);
//         ctx.beginPath(); ctx.moveTo(lb.x,lb.y+2); ctx.lineTo(lb.x+22,lb.y+2);
//         ctx.strokeStyle = `rgba(79,142,255,${lb.alpha*0.4})`; ctx.lineWidth=0.4; ctx.stroke();
//       }

//       // drones
//       drones.forEach(d => {
//         if (!d.waiting) {
//           const dx = d.tx-d.x, dy = d.ty-d.y;
//           const dist = Math.sqrt(dx*dx+dy*dy);
//           if (dist < 1.5) {
//             d.x=d.tx; d.y=d.ty;
//             d.scanning=true; d.scanR=0; d.scanAlpha=0.6;
//             d.pinging=true; d.pingR=0; d.pingAlpha=0.7;
//             targets.forEach(t => { if (Math.abs(t.x-d.x)<CELL*2 && Math.abs(t.y-d.y)<CELL*2) t.dying=true; });
//             d.waiting=true; d.waitTimer=40+Math.random()*30;
//           } else { d.x+=(dx/dist)*d.speed; d.y+=(dy/dist)*d.speed; }
//         } else { d.waitTimer--; if (d.waitTimer<=0) { d.waiting=false; nextNode(d); } }

//         d.trail.push({x:d.x,y:d.y});
//         if (d.trail.length>60) d.trail.shift();

//         for (let t=1;t<d.trail.length;t++) {
//           ctx.beginPath();
//           ctx.moveTo(d.trail[t-1].x,d.trail[t-1].y); ctx.lineTo(d.trail[t].x,d.trail[t].y);
//           ctx.strokeStyle = d.color+(t/d.trail.length)*0.35+")";
//           ctx.lineWidth=0.8; ctx.stroke();
//         }
//         if (d.scanning) {
//           d.scanR+=1.2; d.scanAlpha-=0.008;
//           ctx.beginPath(); ctx.arc(d.x,d.y,d.scanR,0,Math.PI*2);
//           ctx.strokeStyle=d.color+Math.max(0,d.scanAlpha)+")"; ctx.lineWidth=0.8; ctx.stroke();
//           if (d.scanAlpha<=0) d.scanning=false;
//         }
//         if (d.pinging) {
//           d.pingR+=2.5; d.pingAlpha-=0.018;
//           ctx.beginPath(); ctx.arc(d.x,d.y,d.pingR,0,Math.PI*2);
//           ctx.strokeStyle=d.color+Math.max(0,d.pingAlpha*0.5)+")"; ctx.lineWidth=0.5; ctx.stroke();
//           if (d.pingAlpha<=0) d.pinging=false;
//         }

//         ctx.save(); ctx.translate(d.x,d.y);
//         ctx.beginPath(); ctx.arc(0,0,7,0,Math.PI*2);
//         ctx.strokeStyle=d.color+"0.9)"; ctx.lineWidth=0.8; ctx.stroke();
//         ctx.beginPath(); ctx.arc(0,0,2,0,Math.PI*2);
//         ctx.fillStyle=d.color+"1)"; ctx.fill();
//         ([[6,0],[-6,0],[0,6],[0,-6]] as [number,number][]).forEach(([ax,ay])=>{
//           ctx.beginPath(); ctx.moveTo(ax*0.35,ay*0.35); ctx.lineTo(ax,ay);
//           ctx.strokeStyle=d.color+"0.55)"; ctx.lineWidth=0.7; ctx.stroke();
//           ctx.beginPath(); ctx.arc(ax,ay,1.8,0,Math.PI*2);
//           ctx.fillStyle=d.color+"0.7)"; ctx.fill();
//         });
//         ctx.restore();

//         ctx.save(); ctx.translate(d.x,d.y);
//         ctx.beginPath(); ctx.moveTo(0,0); ctx.arc(0,0,30,Math.PI*0.3,Math.PI*0.7); ctx.closePath();
//         ctx.fillStyle=d.color+"0.04)"; ctx.fill();
//         ctx.strokeStyle=d.color+"0.1)"; ctx.lineWidth=0.5; ctx.stroke();
//         ctx.restore();

//         ctx.save(); ctx.setLineDash([3,5]);
//         ctx.beginPath(); ctx.moveTo(d.x,d.y); ctx.lineTo(d.tx,d.ty);
//         ctx.strokeStyle=d.color+"0.12)"; ctx.lineWidth=0.6; ctx.stroke();
//         ctx.setLineDash([]); ctx.restore();
//       });

//       frame++;
//       raf = requestAnimationFrame(draw);
//     }

//     resize();
//     init();
//     draw();

//     const ro = new ResizeObserver(() => { resize(); init(); });
//     ro.observe(canvas);

//     return () => { cancelAnimationFrame(raf); ro.disconnect(); };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: "absolute", inset: 0,
//         width: "100%", height: "100%",
//         pointerEvents: "none",
//       }}
//     />
//   );
// }

"use client";

import { useEffect, useRef } from "react";

export default function HeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cvs = canvas; // capture non-null ref for nested functions
    const ctx = cvs.getContext("2d")!;

    const CELL = 52;
    const BLUE = "rgba(79,142,255,";
    const TEAL = "rgba(56,189,248,";
    const DRONE_COUNT = 3;
    const LABELS = ["ALT 120m","SPD 18m/s","TMP 28°C","SIG 98%","ID-07","ID-12","ID-03"];

    type Drone = {
      x: number; y: number; tx: number; ty: number;
      speed: number; trail: {x:number;y:number}[];
      scanR: number; scanAlpha: number; scanning: boolean;
      pingR: number; pingAlpha: number; pinging: boolean;
      color: string; waitTimer: number; waiting: boolean;
    };
    type Target = { x:number; y:number; life:number; dying:boolean };
    type Label  = { x:number; y:number; text:string; alpha:number; fadein:boolean };

    let W = 0, H = 0;
    const drones: Drone[] = [];
    const targets: Target[] = [];
    const labels: Label[] = [];
    let sweepY = 0, sweepDir = 1;
    let frame = 0;
    let raf = 0;

    function resize() {
      W = cvs.offsetWidth;
      H = cvs.offsetHeight;
      cvs.width  = W;
      cvs.height = H;
    }

    function cols() { return Math.floor(W / CELL); }
    function rows() { return Math.floor(H / CELL); }

    function nextNode(d: Drone) {
      const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
      const [dx,dy] = dirs[Math.floor(Math.random()*4)];
      const steps = 2 + Math.floor(Math.random()*5);
      d.tx = Math.max(0, Math.min((cols()-1)*CELL, d.x + dx*CELL*steps));
      d.ty = Math.max(0, Math.min((rows()-1)*CELL, d.y + dy*CELL*steps));
    }

    function makeDrone(i: number): Drone {
      const gx = Math.floor(Math.random()*cols());
      const gy = Math.floor(Math.random()*rows());
      return {
        x: gx*CELL, y: gy*CELL, tx: gx*CELL, ty: gy*CELL,
        speed: 0.6 + Math.random()*0.5, trail: [],
        scanR: 0, scanAlpha: 0, scanning: false,
        pingR: 0, pingAlpha: 0, pinging: false,
        color: i === 1 ? TEAL : BLUE,
        waitTimer: 0, waiting: false,
      };
    }

    function spawnTarget() {
      targets.push({
        x: Math.floor(Math.random()*cols())*CELL,
        y: Math.floor(Math.random()*rows())*CELL,
        life: 1, dying: false,
      });
    }

    function spawnLabel() {
      labels.push({
        x: Math.floor(Math.random()*cols())*CELL + 4,
        y: Math.floor(Math.random()*rows())*CELL - 4,
        text: LABELS[Math.floor(Math.random()*LABELS.length)],
        alpha: 0, fadein: true,
      });
    }

    function init() {
      drones.length = 0; targets.length = 0; labels.length = 0;
      for (let i = 0; i < DRONE_COUNT; i++) { const d = makeDrone(i); nextNode(d); drones.push(d); }
      for (let i = 0; i < 4; i++) spawnTarget();
      for (let i = 0; i < 5; i++) spawnLabel();
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // vignette
      const vig = ctx.createRadialGradient(W/2,H/2,H*0.15,W/2,H/2,H*0.8);
      vig.addColorStop(0,"rgba(5,7,9,0)");
      vig.addColorStop(1,"rgba(2,3,5,0.7)");
      ctx.fillStyle = vig; ctx.fillRect(0,0,W,H);

      // grid
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= W; x += CELL) {
        ctx.beginPath(); ctx.strokeStyle = "rgba(79,142,255,0.06)";
        ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke();
      }
      for (let y = 0; y <= H; y += CELL) {
        ctx.beginPath(); ctx.strokeStyle = "rgba(79,142,255,0.06)";
        ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke();
      }
      for (let x = 0; x <= W; x += CELL)
        for (let y = 0; y <= H; y += CELL) {
          ctx.beginPath(); ctx.arc(x,y,1,0,Math.PI*2);
          ctx.fillStyle = "rgba(79,142,255,0.12)"; ctx.fill();
        }

      // sweep
      sweepY += 0.35 * sweepDir;
      if (sweepY > H) sweepDir = -1;
      if (sweepY < 0) sweepDir = 1;
      const sg = ctx.createLinearGradient(0,sweepY-2,0,sweepY+28);
      sg.addColorStop(0,"rgba(79,142,255,0)");
      sg.addColorStop(0.3,"rgba(79,142,255,0.06)");
      sg.addColorStop(1,"rgba(79,142,255,0)");
      ctx.fillStyle = sg; ctx.fillRect(0,sweepY-2,W,30);
      ctx.beginPath(); ctx.moveTo(0,sweepY); ctx.lineTo(W,sweepY);
      ctx.strokeStyle = "rgba(79,142,255,0.18)"; ctx.lineWidth = 0.8; ctx.stroke();

      // targets
      for (let i = targets.length-1; i >= 0; i--) {
        const t = targets[i];
        if (t.dying) t.life -= 0.025;
        if (t.life <= 0) { targets.splice(i,1); spawnTarget(); continue; }
        const a = t.life * 0.7;
        ctx.strokeStyle = `rgba(79,142,255,${a*0.5})`; ctx.lineWidth = 0.6;
        ([-8,8] as number[]).forEach(dx => { ctx.beginPath(); ctx.moveTo(t.x+dx-3,t.y); ctx.lineTo(t.x+dx+3,t.y); ctx.stroke(); });
        ([-8,8] as number[]).forEach(dy => { ctx.beginPath(); ctx.moveTo(t.x,t.y+dy-3); ctx.lineTo(t.x,t.y+dy+3); ctx.stroke(); });
        ctx.beginPath(); ctx.arc(t.x,t.y,6,0,Math.PI*2);
        ctx.strokeStyle = `rgba(79,142,255,${a*0.4})`; ctx.stroke();
        ctx.beginPath(); ctx.arc(t.x,t.y,2,0,Math.PI*2);
        ctx.fillStyle = `rgba(79,142,255,${a*0.8})`; ctx.fill();
      }

      // labels
      if (frame % 140 === 0 && labels.length < 8) spawnLabel();
      ctx.font = "9px monospace";
      for (let i = labels.length-1; i >= 0; i--) {
        const lb = labels[i];
        if (lb.fadein) { lb.alpha += 0.015; if (lb.alpha >= 0.45) lb.fadein = false; }
        else lb.alpha -= 0.004;
        if (lb.alpha <= 0) { labels.splice(i,1); continue; }
        ctx.fillStyle = `rgba(79,142,255,${lb.alpha})`; ctx.fillText(lb.text,lb.x,lb.y);
        ctx.beginPath(); ctx.moveTo(lb.x,lb.y+2); ctx.lineTo(lb.x+22,lb.y+2);
        ctx.strokeStyle = `rgba(79,142,255,${lb.alpha*0.4})`; ctx.lineWidth=0.4; ctx.stroke();
      }

      // drones
      drones.forEach(d => {
        if (!d.waiting) {
          const dx = d.tx-d.x, dy = d.ty-d.y;
          const dist = Math.sqrt(dx*dx+dy*dy);
          if (dist < 1.5) {
            d.x=d.tx; d.y=d.ty;
            d.scanning=true; d.scanR=0; d.scanAlpha=0.6;
            d.pinging=true; d.pingR=0; d.pingAlpha=0.7;
            targets.forEach(t => { if (Math.abs(t.x-d.x)<CELL*2 && Math.abs(t.y-d.y)<CELL*2) t.dying=true; });
            d.waiting=true; d.waitTimer=40+Math.random()*30;
          } else { d.x+=(dx/dist)*d.speed; d.y+=(dy/dist)*d.speed; }
        } else { d.waitTimer--; if (d.waitTimer<=0) { d.waiting=false; nextNode(d); } }

        d.trail.push({x:d.x,y:d.y});
        if (d.trail.length>60) d.trail.shift();

        for (let t=1;t<d.trail.length;t++) {
          ctx.beginPath();
          ctx.moveTo(d.trail[t-1].x,d.trail[t-1].y); ctx.lineTo(d.trail[t].x,d.trail[t].y);
          ctx.strokeStyle = d.color+(t/d.trail.length)*0.35+")";
          ctx.lineWidth=0.8; ctx.stroke();
        }
        if (d.scanning) {
          d.scanR+=1.2; d.scanAlpha-=0.008;
          ctx.beginPath(); ctx.arc(d.x,d.y,d.scanR,0,Math.PI*2);
          ctx.strokeStyle=d.color+Math.max(0,d.scanAlpha)+")"; ctx.lineWidth=0.8; ctx.stroke();
          if (d.scanAlpha<=0) d.scanning=false;
        }
        if (d.pinging) {
          d.pingR+=2.5; d.pingAlpha-=0.018;
          ctx.beginPath(); ctx.arc(d.x,d.y,d.pingR,0,Math.PI*2);
          ctx.strokeStyle=d.color+Math.max(0,d.pingAlpha*0.5)+")"; ctx.lineWidth=0.5; ctx.stroke();
          if (d.pingAlpha<=0) d.pinging=false;
        }

        ctx.save(); ctx.translate(d.x,d.y);
        ctx.beginPath(); ctx.arc(0,0,7,0,Math.PI*2);
        ctx.strokeStyle=d.color+"0.9)"; ctx.lineWidth=0.8; ctx.stroke();
        ctx.beginPath(); ctx.arc(0,0,2,0,Math.PI*2);
        ctx.fillStyle=d.color+"1)"; ctx.fill();
        ([[6,0],[-6,0],[0,6],[0,-6]] as [number,number][]).forEach(([ax,ay])=>{
          ctx.beginPath(); ctx.moveTo(ax*0.35,ay*0.35); ctx.lineTo(ax,ay);
          ctx.strokeStyle=d.color+"0.55)"; ctx.lineWidth=0.7; ctx.stroke();
          ctx.beginPath(); ctx.arc(ax,ay,1.8,0,Math.PI*2);
          ctx.fillStyle=d.color+"0.7)"; ctx.fill();
        });
        ctx.restore();

        ctx.save(); ctx.translate(d.x,d.y);
        ctx.beginPath(); ctx.moveTo(0,0); ctx.arc(0,0,30,Math.PI*0.3,Math.PI*0.7); ctx.closePath();
        ctx.fillStyle=d.color+"0.04)"; ctx.fill();
        ctx.strokeStyle=d.color+"0.1)"; ctx.lineWidth=0.5; ctx.stroke();
        ctx.restore();

        ctx.save(); ctx.setLineDash([3,5]);
        ctx.beginPath(); ctx.moveTo(d.x,d.y); ctx.lineTo(d.tx,d.ty);
        ctx.strokeStyle=d.color+"0.12)"; ctx.lineWidth=0.6; ctx.stroke();
        ctx.setLineDash([]); ctx.restore();
      });

      frame++;
      raf = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(cvs);

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}