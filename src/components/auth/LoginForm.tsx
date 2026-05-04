"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const API_BASE = "https://agrani-api.bravesand-0ce3058c.uaenorth.azurecontainerapps.io";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function validatePassword(pw: string) {
  return {
    minLength: pw.length >= 6,
    hasUpper: /[A-Z]/.test(pw),
    hasLower: /[a-z]/.test(pw),
    hasNumber: /[0-9]/.test(pw),
    hasSpecial: /[^A-Za-z0-9]/.test(pw),
  };
}

function allValid(checks: Record<string, boolean>) {
  return Object.values(checks).every(Boolean);
}

export default function LoginForm() {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  const emailValid = validateEmail(email);
  const pwChecks = validatePassword(password);
  const pwValid = allValid(pwChecks);

  const handleLogin = async () => {
    setTouched({ email: true, password: true });
    
    // Front-end validation
    if (!emailValid || !pwValid) return;

    setLoading(true);
    setApiError(null);

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const data = await res.json().catch(() => ({}));

      // --- STRICT VALIDATION LOGIC ---
      // 1. Check if HTTP status is error (e.g., 401, 500)
      // 2. Check if the API returned an explicit error object (e.g., FastAPI 'detail' key)
      const hasError = !res.ok || (data && (data.detail || data.error || data.message));

      if (hasError) {
        // Grab the error message, fallback to generic
        const msg = data?.detail || data?.message || data?.error || "Invalid email or password.";
        setApiError(typeof msg === "string" ? msg : JSON.stringify(msg));
        setLoading(false);
        return; // EXIT: Do not proceed to router.push
      }

      // SUCCESS: If we made it here, there were no errors
      router.push("/dashboard");

    } catch (err) {
      setApiError("Could not reach the server. Please check your internet connection.");
      setLoading(false);
    }
  };

  const showEmailError = touched.email && email.length > 0 && !emailValid;
  const showPwRules = touched.password && password.length > 0 && !pwValid;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Syne:wght@600;700;800&display=swap');
        .lf-card { font-family: 'IBM Plex Mono', monospace; background: #0a0a0f; border: 1px solid #1e1e2e; border-radius: 16px; width: 100%; max-width: 420px; overflow: hidden; box-shadow: 0 0 0 1px #0d0d1a, 0 32px 64px rgba(0,0,0,0.6); position: relative; }
        .lf-top { height: 3px; background: linear-gradient(90deg, transparent, #4f46e5, #7c3aed, transparent); }
        .lf-noise { position: absolute; inset: 0; pointer-events: none; opacity: 0.35; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"); }
        .lf-body { padding: clamp(24px, 5vw, 40px); position: relative; }
        .lf-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 9px; letter-spacing: .15em; text-transform: uppercase; color: #4f46e5; background: rgba(79,70,229,.1); border: 1px solid rgba(79,70,229,.25); border-radius: 4px; padding: 3px 10px; margin-bottom: 20px; }
        .lf-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 6px #22c55e; animation: lf-blink 2s ease-in-out infinite; }
        @keyframes lf-blink { 0%,100%{opacity:1} 50%{opacity:.35} }
        .lf-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(20px, 3vw, 26px); color: #f0f0ff; letter-spacing: -.5px; margin: 0 0 4px; }
        .lf-sub { font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: #4a4a6a; margin-bottom: 28px; }
        .lf-field { margin-bottom: 14px; }
        .lf-label { display: block; font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: #5a5a7a; margin-bottom: 6px; }
        .lf-input { width: 100%; background: #0d0d1a; border: 1px solid #1e1e35; border-radius: 6px; font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: #c8c8e8; padding: 12px 14px; outline: none; transition: border-color .2s, box-shadow .2s; box-sizing: border-box; }
        .lf-input:focus { border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79,70,229,.12); color: #e8e8ff; }
        .lf-input::placeholder { color: #2e2e4a; }
        .lf-input-error { border-color: #ef4444 !important; box-shadow: 0 0 0 3px rgba(239,68,68,.1) !important; }
        .lf-input-ok { border-color: #22c55e !important; }
        .lf-pw-wrap { position: relative; }
        .lf-pw-wrap .lf-input { padding-right: 58px; }
        .lf-toggle { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: .06em; color: #3a3a5a; cursor: pointer; padding: 4px; transition: color .2s; }
        .lf-toggle:hover { color: #6a6a9a; }
        .lf-error-msg { font-size: 10px; color: #ef4444; letter-spacing: .06em; margin-top: 5px; }
        .lf-rules { margin-top: 8px; display: flex; flex-direction: column; gap: 4px; }
        .lf-rule { font-size: 10px; letter-spacing: .05em; display: flex; align-items: center; gap: 6px; transition: color .2s; }
        .lf-rule-ok { color: #22c55e; }
        .lf-rule-fail { color: #3a3a5a; }
        .lf-rule-icon { font-size: 10px; width: 12px; text-align: center; }
        .lf-divider { border: none; border-top: 1px solid #14141f; margin: 24px 0; }
        .lf-btn { width: 100%; padding: 13px; border: none; border-radius: 6px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; cursor: pointer; background: #4f46e5; color: #fff; transition: background .2s, transform .1s, box-shadow .2s; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .lf-btn:hover:not(:disabled) { background: #4338ca; box-shadow: 0 4px 20px rgba(79,70,229,.4); }
        .lf-btn:active:not(:disabled) { transform: scale(.99); }
        .lf-btn:disabled { opacity: .6; cursor: not-allowed; }
        .lf-spinner { width: 12px; height: 12px; border: 1.5px solid rgba(255,255,255,.3); border-top-color: #fff; border-radius: 50%; animation: lf-spin .7s linear infinite; }
        @keyframes lf-spin { to { transform: rotate(360deg); } }
        .lf-links { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
        .lf-link { font-size: 11px; color: #3a3a5a; background: none; border: none; cursor: pointer; font-family: 'IBM Plex Mono', monospace; letter-spacing: .05em; padding: 0; transition: color .2s; }
        .lf-link:hover { color: #7c7caa; }
        .lf-link-accent { color: #4f46e5; }
        .lf-link-accent:hover { color: #7c73ff !important; }
        .lf-api-error { display: flex; align-items: flex-start; gap: 8px; background: rgba(239,68,68,.08); border: 1px solid rgba(239,68,68,.25); border-radius: 6px; padding: 10px 12px; margin-bottom: 16px; font-size: 11px; color: #f87171; letter-spacing: .04em; line-height: 1.5; }
        .lf-api-error-icon { font-size: 13px; flex-shrink: 0; margin-top: 1px; }
      `}</style>

      <div className="lf-card">
        <div className="lf-top" />
        <div className="lf-noise" />
        <div className="lf-body">
          <div className="lf-tag"><span className="lf-dot" /> Secure portal</div>
          <h1 className="lf-title">Sign in</h1>
          <p className="lf-sub">Authenticated access — authorized users only</p>

          <div className="lf-field">
            <label className="lf-label">Email address</label>
            <input className={`lf-input${showEmailError ? " lf-input-error" : touched.email && emailValid && email ? " lf-input-ok" : ""}`} type="email" placeholder="user@organization.com" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => setTouched((t) => ({ ...t, email: true }))} />
            {showEmailError && <div className="lf-error-msg">Enter a valid email address</div>}
          </div>

          <div className="lf-field">
            <label className="lf-label">Password</label>
            <div className="lf-pw-wrap">
              <input className={`lf-input${showPwRules ? " lf-input-error" : touched.password && pwValid && password ? " lf-input-ok" : ""}`} type={showPw ? "text" : "password"} placeholder="••••••••••••" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={() => setTouched((t) => ({ ...t, password: true }))} />
              <button className="lf-toggle" onClick={() => setShowPw(!showPw)} type="button" tabIndex={-1}>{showPw ? "HIDE" : "SHOW"}</button>
            </div>
          </div>

          {apiError && (
            <div className="lf-api-error"><span className="lf-api-error-icon">⚠</span><span>{apiError}</span></div>
          )}

          <hr className="lf-divider" />

          <button className="lf-btn" onClick={handleLogin} disabled={loading}>{loading ? <><span className="lf-spinner" /> Authenticating…</> : "Authenticate →"}</button>

          <div className="lf-links">
            <button className="lf-link lf-link-accent" onClick={() => router.push("/signup")}>No account? Create Organization</button>
            <button className="lf-link" onClick={() => router.push("/forgot-password")}>Forgot password</button>
          </div>
        </div>
      </div>
    </>
  );
}