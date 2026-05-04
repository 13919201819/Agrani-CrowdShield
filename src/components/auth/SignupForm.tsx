"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const API_BASE = "https://agrani-api.bravesand-0ce3058c.uaenorth.azurecontainerapps.io";

// ── Helpers ────────────────────────────────────────────────────────────────
function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function validatePassword(pw: string) {
  return {
    minLength: pw.length >= 6,
    hasUpper:  /[A-Z]/.test(pw),
    hasLower:  /[a-z]/.test(pw),
    hasNumber: /[0-9]/.test(pw),
    hasSpecial:/[^A-Za-z0-9]/.test(pw),
  };
}

function allValid(checks: Record<string, boolean>) {
  return Object.values(checks).every(Boolean);
}

function passwordStrength(pw: string): number {
  if (!pw) return 0;
  let s = 0;
  if (pw.length >= 6)  s++;
  if (pw.length >= 12) s++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s;
}

const STRENGTH_LABELS = ["", "Weak", "Fair", "Good", "Strong", "Excellent"];
const STRENGTH_COLORS = ["", "#ef4444", "#f97316", "#eab308", "#22c55e", "#4f46e5"];

const PW_RULES = [
  { key: "minLength", label: "At least 6 characters" },
  { key: "hasUpper",  label: "1 uppercase letter" },
  { key: "hasLower",  label: "1 lowercase letter" },
  { key: "hasNumber", label: "1 number" },
  { key: "hasSpecial",label: "1 special character" },
];

export default function SignupForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [org, setOrg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const touch = (field: string) => setTouched((t) => ({ ...t, [field]: true }));

  const emailValid   = validateEmail(email);
  const pwChecks     = validatePassword(password);
  const pwValid      = allValid(pwChecks);
  const confirmMatch = confirm === password;
  const strength     = passwordStrength(password);

  const showEmailErr   = touched.email    && email.length > 0   && !emailValid;
  const showPwRules    = touched.password && password.length > 0 && !pwValid;
  const showConfirmErr = touched.confirm  && confirm.length > 0  && !confirmMatch;

  const handleNext = () => {
    touch("org"); touch("name"); touch("email");
    if (!org.trim() || !name.trim() || !emailValid) return;
    setStep(2);
  };

  const handleSubmit = async () => {
    touch("password"); touch("confirm");
    if (!pwValid || !confirmMatch) return;

    setLoading(true);
    setApiError(null);

    try {
      const res = await fetch(`${API_BASE}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
          organization: org.trim(),
          full_name: name.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));

      // STRICT LOGIC: Even if status is 200, check if the response data says "Error"
      const isError = !res.ok || (data && (data.detail || data.error || data.message));

      if (isError) {
        // Find the most descriptive error message available
        const msg = data?.detail || data?.message || data?.error || `Signup failed (${res.status})`;
        setApiError(typeof msg === "string" ? msg : JSON.stringify(msg));
        setLoading(false);
        return; // EXIT: Do not proceed to router.push
      }

      // ONLY reach here if the request was successful AND there were no error messages
      router.push("/dashboard");
    } catch (e) {
      setApiError("Could not reach the server. Please check your connection.");
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Syne:wght@600;700;800&display=swap');
        .sf-card { font-family: 'IBM Plex Mono', monospace; background: #0a0a0f; border: 1px solid #1e1e2e; border-radius: 16px; width: 100%; max-width: 420px; overflow: hidden; box-shadow: 0 0 0 1px #0d0d1a, 0 32px 64px rgba(0,0,0,0.6); position: relative; }
        .sf-top { height: 3px; background: linear-gradient(90deg, transparent, #7c3aed, #db2777, transparent); }
        .sf-noise { position: absolute; inset: 0; pointer-events: none; opacity: 0.35; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"); }
        .sf-body { padding: clamp(24px, 5vw, 40px); position: relative; }
        .sf-step-row { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }
        .sf-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 9px; letter-spacing: .15em; text-transform: uppercase; color: #7c3aed; background: rgba(124,58,237,.1); border: 1px solid rgba(124,58,237,.25); border-radius: 4px; padding: 3px 10px; }
        .sf-pips { display: flex; gap: 4px; margin-left: auto; }
        .sf-pip { width: 28px; height: 3px; border-radius: 2px; background: #1a1a2e; transition: background .3s; }
        .sf-pip-done { background: #7c3aed; }
        .sf-step-num { font-size: 10px; letter-spacing: .08em; color: #4a4a6a; }
        .sf-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(20px, 3vw, 26px); color: #f0f0ff; letter-spacing: -.5px; margin: 0 0 4px; }
        .sf-sub { font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: #4a4a6a; margin-bottom: 28px; }
        .sf-field { margin-bottom: 12px; }
        .sf-label { display: block; font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: #5a5a7a; margin-bottom: 6px; }
        .sf-input { width: 100%; background: #0d0d1a; border: 1px solid #1e1e35; border-radius: 6px; font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: #c8c8e8; padding: 12px 14px; outline: none; transition: border-color .2s, box-shadow .2s; box-sizing: border-box; }
        .sf-input:focus { border-color: #7c3aed; box-shadow: 0 0 0 3px rgba(124,58,237,.12); color: #e8e8ff; }
        .sf-input::placeholder { color: #2e2e4a; }
        .sf-input-error { border-color: #ef4444 !important; box-shadow: 0 0 0 3px rgba(239,68,68,.1) !important; }
        .sf-input-ok { border-color: #22c55e !important; }
        .sf-pw-wrap { position: relative; }
        .sf-pw-wrap .sf-input { padding-right: 58px; }
        .sf-toggle { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: .06em; color: #3a3a5a; cursor: pointer; padding: 4px; transition: color .2s; }
        .sf-toggle:hover { color: #6a6a9a; }
        .sf-error-msg { font-size: 10px; color: #ef4444; letter-spacing: .06em; margin-top: 5px; }
        .sf-rules { margin-top: 8px; display: flex; flex-direction: column; gap: 4px; }
        .sf-rule { font-size: 10px; letter-spacing: .05em; display: flex; align-items: center; gap: 6px; transition: color .2s; }
        .sf-rule-ok { color: #22c55e; }
        .sf-rule-fail { color: #3a3a5a; }
        .sf-rule-icon { font-size: 10px; width: 12px; text-align: center; }
        .sf-strength { display: flex; gap: 4px; align-items: center; margin-top: 8px; }
        .sf-seg { height: 3px; flex: 1; border-radius: 2px; background: #12121e; transition: background .3s; }
        .sf-s-label { font-size: 9px; letter-spacing: .1em; min-width: 56px; text-align: right; }
        .sf-match { font-size: 10px; margin-top: 5px; letter-spacing: .06em; }
        .sf-divider { border: none; border-top: 1px solid #14141f; margin: 22px 0; }
        .sf-btn { width: 100%; padding: 13px; border: none; border-radius: 6px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; cursor: pointer; background: #7c3aed; color: #fff; transition: background .2s, transform .1s, box-shadow .2s; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .sf-btn:hover:not(:disabled) { background: #6d28d9; box-shadow: 0 4px 20px rgba(124,58,237,.4); }
        .sf-btn:active:not(:disabled) { transform: scale(.99); }
        .sf-btn:disabled { opacity: .6; cursor: not-allowed; }
        .sf-btn-ghost { width: 100%; padding: 12px; border: 1px solid #1e1e35; border-radius: 6px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; cursor: pointer; background: transparent; color: #5a5a7a; margin-top: 10px; transition: background .2s, color .2s; }
        .sf-btn-ghost:hover { background: #0d0d1a; color: #8a8aaa; }
        .sf-spinner { width: 12px; height: 12px; border: 1.5px solid rgba(255,255,255,.3); border-top-color: #fff; border-radius: 50%; animation: sf-spin .7s linear infinite; }
        @keyframes sf-spin { to { transform: rotate(360deg); } }
        .sf-links { display: flex; justify-content: center; align-items: center; gap: 6px; margin-top: 20px; flex-wrap: wrap; }
        .sf-hint { font-size: 11px; color: #3a3a5a; font-family: 'IBM Plex Mono', monospace; }
        .sf-link { font-size: 11px; color: #7c3aed; background: none; border: none; cursor: pointer; font-family: 'IBM Plex Mono', monospace; letter-spacing: .05em; padding: 0; transition: color .2s; }
        .sf-link:hover { color: #a78bfa; }
        .sf-api-error { display: flex; align-items: flex-start; gap: 8px; background: rgba(239,68,68,.08); border: 1px solid rgba(239,68,68,.25); border-radius: 6px; padding: 10px 12px; margin-bottom: 16px; font-size: 11px; color: #f87171; letter-spacing: .04em; line-height: 1.5; }
        .sf-api-error-icon { font-size: 13px; flex-shrink: 0; margin-top: 1px; }
        .sf-sec { display: flex; align-items: center; gap: 6px; margin-top: 28px; padding-top: 20px; border-top: 1px solid #0e0e1c; }
        .sf-sec-text { font-size: 10px; color: #2a2a4a; letter-spacing: .08em; }
      `}</style>

      <div className="sf-card">
        <div className="sf-top" />
        <div className="sf-noise" />
        <div className="sf-body">
          <div className="sf-step-row">
            <div className="sf-tag">New Organization</div>
            <div className="sf-pips">
              <div className={`sf-pip ${step >= 1 ? "sf-pip-done" : ""}`} />
              <div className={`sf-pip ${step >= 2 ? "sf-pip-done" : ""}`} />
            </div>
            <span className="sf-step-num">Step {step} / 2</span>
          </div>

          {step === 1 && (
            <>
              <h1 className="sf-title">Create Account</h1>
              <p className="sf-sub">Organization & identity</p>
              <div className="sf-field">
                <label className="sf-label">Organization Name</label>
                <input className={`sf-input${touched.org && !org.trim() ? " sf-input-error" : touched.org && org.trim() ? " sf-input-ok" : ""}`} type="text" placeholder="Acme Corp" value={org} onChange={(e) => setOrg(e.target.value)} onBlur={() => touch("org")} />
                {touched.org && !org.trim() && <div className="sf-error-msg">Organization name is required</div>}
              </div>
              <div className="sf-field">
                <label className="sf-label">Full Name</label>
                <input className={`sf-input${touched.name && !name.trim() ? " sf-input-error" : touched.name && name.trim() ? " sf-input-ok" : ""}`} type="text" placeholder="Jane Smith" value={name} onChange={(e) => setName(e.target.value)} onBlur={() => touch("name")} />
                {touched.name && !name.trim() && <div className="sf-error-msg">Full name is required</div>}
              </div>
              <div className="sf-field">
                <label className="sf-label">Work Email</label>
                <input className={`sf-input${showEmailErr ? " sf-input-error" : touched.email && emailValid && email ? " sf-input-ok" : ""}`} type="email" placeholder="jane@organization.com" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => touch("email")} />
                {showEmailErr && <div className="sf-error-msg">Enter a valid email address</div>}
              </div>
              <hr className="sf-divider" />
              <button className="sf-btn" onClick={handleNext}>Continue →</button>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="sf-title">Set Password</h1>
              <p className="sf-sub">Secure your account</p>
              <div className="sf-field">
                <label className="sf-label">Password</label>
                <div className="sf-pw-wrap">
                  <input className={`sf-input${showPwRules ? " sf-input-error" : touched.password && pwValid ? " sf-input-ok" : ""}`} type={showPw ? "text" : "password"} placeholder="Min. 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={() => touch("password")} />
                  <button className="sf-toggle" onClick={() => setShowPw(!showPw)} type="button" tabIndex={-1}>{showPw ? "HIDE" : "SHOW"}</button>
                </div>
                {password && (
                  <div className="sf-strength">
                    {[1,2,3,4,5].map((i) => (<div key={i} className="sf-seg" style={{ background: i <= strength ? STRENGTH_COLORS[strength] : "#12121e" }} />))}
                    <span className="sf-s-label" style={{ color: STRENGTH_COLORS[strength] }}>{STRENGTH_LABELS[strength]}</span>
                  </div>
                )}
                {(showPwRules || (touched.password && password.length > 0)) && (
                  <div className="sf-rules">
                    {PW_RULES.map(({ key, label }) => (
                      <div key={key} className={`sf-rule ${pwChecks[key as keyof typeof pwChecks] ? "sf-rule-ok" : "sf-rule-fail"}`}>
                        <span className="sf-rule-icon">{pwChecks[key as keyof typeof pwChecks] ? "✓" : "·"}</span>
                        {label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="sf-field">
                <label className="sf-label">Confirm Password</label>
                <div className="sf-pw-wrap">
                  <input className={`sf-input${showConfirmErr ? " sf-input-error" : touched.confirm && confirmMatch && confirm ? " sf-input-ok" : ""}`} type={showConfirm ? "text" : "password"} placeholder="••••••••••••" value={confirm} onChange={(e) => setConfirm(e.target.value)} onBlur={() => touch("confirm")} />
                  <button className="sf-toggle" onClick={() => setShowConfirm(!showConfirm)} type="button" tabIndex={-1}>{showConfirm ? "HIDE" : "SHOW"}</button>
                </div>
              </div>
              <hr className="sf-divider" />
              {apiError && (
                <div className="sf-api-error"><span className="sf-api-error-icon">⚠</span><span>{apiError}</span></div>
              )}
              <button className="sf-btn" onClick={handleSubmit} disabled={loading}>{loading ? <><span className="sf-spinner" /> Provisioning…</> : "Create Organization →"}</button>
              <button className="sf-btn-ghost" onClick={() => setStep(1)}>← Back</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}