export default function Slide24ThankYou() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(160deg, #0A66C2 0%, #004182 55%, #003166 100%)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Radial glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80vw", height: "80vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 65%)", pointerEvents: "none" }} />

      {/* Top mark */}
      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "0.8vw" }}>
        <div style={{ width: "2.8vw", height: "2.8vw", borderRadius: "0.4vw", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.6vw", lineHeight: 1 }}>in</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "1vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>LinkedIn Masterclass</span>
      </div>

      {/* Slide number */}
      <div style={{ position: "absolute", bottom: "4vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>24 / 24</div>

      {/* Content */}
      <div style={{ textAlign: "center", zIndex: 1, maxWidth: "60vw" }}>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "3vh" }}>
          That's a wrap
        </div>

        <div style={{ fontSize: "9vw", fontWeight: 800, color: "#fff", lineHeight: 0.95, letterSpacing: "-0.04em" }}>
          Thank
          <br />
          You.
        </div>

        <div style={{ width: "5vw", height: "2px", background: "rgba(255,255,255,0.3)", margin: "3.5vh auto" }} />

        <div style={{ fontSize: "2.2vw", fontWeight: 600, color: "rgba(255,255,255,0.85)", lineHeight: 1.4, letterSpacing: "-0.01em" }}>
          Your career started the day
          <br />
          you decided to begin.
        </div>

        <div style={{ marginTop: "4.5vh", display: "inline-flex", alignItems: "center", gap: "1vw", padding: "1.4vh 3vw", borderRadius: "100px", background: "#fff" }}>
          <div style={{ width: "1.8vh", height: "1.8vh", borderRadius: "50%", background: "#0A66C2" }} />
          <span style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0A66C2" }}>Start Now. linkedin.com</span>
        </div>

        {/* Speaker credit */}
        <div style={{ marginTop: "3vh", display: "flex", alignItems: "center", gap: "0.6vw", justifyContent: "center" }}>
          <svg width="1.2vw" height="1.2vw" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>Presented by <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: 700 }}>Sohel Sayyad</span></span>
        </div>
      </div>
    </div>
  );
}
