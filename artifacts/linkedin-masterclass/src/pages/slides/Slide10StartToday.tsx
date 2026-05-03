export default function Slide10StartToday() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(160deg, #0A66C2 0%, #004182 55%, #003166 100%)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70vw",
          height: "70vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Top LinkedIn mark */}
      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "0.8vw" }}>
        <div
          style={{
            width: "2.8vw",
            height: "2.8vw",
            borderRadius: "0.4vw",
            background: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.6vw", lineHeight: 1 }}>in</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "1vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          LinkedIn Masterclass
        </span>
      </div>

      {/* Center content */}
      <div style={{ textAlign: "center", zIndex: 1, maxWidth: "70vw" }}>
        {/* Eyebrow */}
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "3vh" }}>
          Your turn
        </div>

        {/* Main quote — three lines */}
        <div style={{ fontSize: "5.5vw", fontWeight: 800, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.035em", textWrap: "balance" }}>
          You don't need
          <br />
          experience.
        </div>

        <div style={{ width: "5vw", height: "2px", background: "rgba(255,255,255,0.3)", margin: "3vh auto" }} />

        <div style={{ fontSize: "2.8vw", fontWeight: 500, color: "rgba(255,255,255,0.85)", lineHeight: 1.35, letterSpacing: "-0.01em", textWrap: "balance" }}>
          You need a profile, a story,
          <br />
          and consistency.
        </div>

        <div style={{ marginTop: "4vh", fontSize: "1.6vw", fontWeight: 400, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
          Every expert was once a beginner who just started.
        </div>

        {/* CTA chip */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.8vw",
            marginTop: "4.5vh",
            padding: "1.5vh 2.5vw",
            borderRadius: "100px",
            background: "#fff",
          }}
        >
          <div style={{ width: "1.8vh", height: "1.8vh", borderRadius: "50%", background: "#0A66C2" }} />
          <span style={{ fontSize: "1.4vw", fontWeight: 700, color: "#0A66C2" }}>
            Create your profile today
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ position: "absolute", bottom: "4vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>
        10 / 10
      </div>
    </div>
  );
}
