export default function Slide22RealityCheck() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col items-center justify-center"
      style={{ background: "#111111", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Top LinkedIn mark */}
      <div style={{ position: "absolute", top: "5vh", left: "5vw" }}>
        <div style={{ width: "2.4vw", height: "2.4vw", background: "#0A66C2", borderRadius: "0.3vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.4vw", lineHeight: 1 }}>in</span>
        </div>
      </div>

      {/* Slide number */}
      <div style={{ position: "absolute", bottom: "4vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.2)", fontWeight: 600 }}>22 / 24</div>

      {/* Subtle divider lines */}
      <div style={{ position: "absolute", left: 0, top: "50%", right: 0, height: "1px", background: "rgba(255,255,255,0.05)" }} />

      <div style={{ textAlign: "center", maxWidth: "62vw", zIndex: 1 }}>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "3.5vh" }}>
          Reality Check
        </div>

        <div style={{ fontSize: "5.2vw", fontWeight: 800, color: "#fff", lineHeight: 1.08, letterSpacing: "-0.03em", textWrap: "balance" }}>
          No one will notice you
          <br />
          at the start.
        </div>

        <div style={{ width: "5vw", height: "2px", background: "#0A66C2", margin: "3.5vh auto" }} />

        <div style={{ fontSize: "5.2vw", fontWeight: 800, color: "#0A66C2", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
          Keep going anyway.
        </div>

        <div style={{ marginTop: "4.5vh", fontSize: "1.7vw", fontWeight: 400, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
          Consistency beats perfection. Every time.
        </div>
      </div>
    </div>
  );
}
