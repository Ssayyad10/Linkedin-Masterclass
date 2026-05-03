export default function Slide02Hook() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col items-center justify-center"
      style={{ background: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Top LinkedIn mark */}
      <div style={{ position: "absolute", top: "5vh", left: "5vw" }}>
        <div style={{ width: "2.4vw", height: "2.4vw", background: "#0A66C2", borderRadius: "0.3vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.4vw", lineHeight: 1 }}>in</span>
        </div>
      </div>

      {/* Slide number */}
      <div style={{ position: "absolute", bottom: "4vh", right: "5vw", fontSize: "1vw", color: "#E5E7EB", fontWeight: 600 }}>02 / 24</div>

      {/* Content */}
      <div style={{ textAlign: "center", maxWidth: "65vw" }}>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4vh" }}>
          The Head Start
        </div>

        <div style={{ fontSize: "5.5vw", fontWeight: 800, color: "#111111", lineHeight: 1.05, letterSpacing: "-0.03em", textWrap: "balance" }}>
          Most students start LinkedIn
          <br />
          in final year.
        </div>

        <div style={{ width: "5vw", height: "0.35vh", background: "#0A66C2", margin: "3.5vh auto", borderRadius: "2px" }} />

        <div style={{ fontSize: "5.5vw", fontWeight: 800, color: "#0A66C2", lineHeight: 1.05, letterSpacing: "-0.03em", textWrap: "balance" }}>
          You're starting
          <br />
          in first year.
        </div>

        <div style={{ marginTop: "4vh", fontSize: "1.7vw", fontWeight: 400, color: "#666666", lineHeight: 1.55 }}>
          That's a 3-year head start.
        </div>
      </div>
    </div>
  );
}
