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

        {/* Speaker credit with photo */}
        <div style={{ marginTop: "3.5vh", display: "inline-flex", alignItems: "center", gap: "0.9vw", padding: "1vh 1.8vw", borderRadius: "100px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
          <img
            src="/linkedin-masterclass/sohel.png"
            alt="Sohel Sayyad"
            style={{ width: "4.5vh", height: "4.5vh", borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.35)", flexShrink: 0 }}
          />
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#fff" }}>Sohel Sayyad</div>
            <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.5)", marginTop: "0.1vh" }}>B.Tech CSE · DBATU · Presenter</div>
          </div>
        </div>
      </div>
    </div>
  );
}
