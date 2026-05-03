export default function Slide08LiveAction() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col items-center justify-center"
      style={{ background: "#0A66C2", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Top mark */}
      <div style={{ position: "absolute", top: "5vh", left: "5vw" }}>
        <div style={{ width: "2.4vw", height: "2.4vw", background: "rgba(255,255,255,0.15)", borderRadius: "0.3vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.4vw", lineHeight: 1 }}>in</span>
        </div>
      </div>


      {/* Clock icon */}
      <div style={{ width: "7vh", height: "7vh", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "3vh" }}>
        <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "rgba(255,255,255,0.65)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "2.5vh" }}>
          Live Action
        </div>
        <div style={{ fontSize: "7vw", fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-0.04em" }}>
          2 Minutes.
        </div>
        <div style={{ width: "5vw", height: "2px", background: "rgba(255,255,255,0.3)", margin: "2.5vh auto" }} />
        <div style={{ fontSize: "2.5vw", fontWeight: 500, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>
          Take out your phone right now.
          <br />
          Upload your profile photo.
        </div>
        <div style={{ marginTop: "4vh", display: "inline-flex", alignItems: "center", gap: "0.8vw", padding: "1.2vh 2.5vw", borderRadius: "100px", background: "#fff" }}>
          <div style={{ width: "1.6vh", height: "1.6vh", borderRadius: "50%", background: "#0A66C2" }} />
          <span style={{ fontSize: "1.4vw", fontWeight: 700, color: "#0A66C2" }}>Open LinkedIn · Profile · Edit photo</span>
        </div>
      </div>
    </div>
  );
}
