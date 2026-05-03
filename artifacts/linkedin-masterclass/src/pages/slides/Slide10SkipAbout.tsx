export default function Slide10SkipAbout() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{ background: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left accent */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "0.35vw", background: "#0A66C2" }} />


      <div style={{ flex: 1, display: "flex" }}>
        {/* Left */}
        <div className="flex flex-col justify-center" style={{ width: "50%", paddingLeft: "7vw", paddingRight: "4vw" }}>
          <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>About Section</div>
          <div style={{ fontSize: "5vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Skip it
            <br />
            for now.
          </div>
          <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />
          <div style={{ fontSize: "1.6vw", fontWeight: 400, color: "#666666", lineHeight: 1.6 }}>
            Focus on completing the basics first.
            <br />
            Come back when you have a story to tell.
          </div>
        </div>

        {/* Right — About section UI */}
        <div className="flex items-center justify-center" style={{ width: "50%", paddingRight: "6vw" }}>
          <div style={{ width: "28vw", background: "#F7F9FB", borderRadius: "1.2vw", border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 0.5vh 2vh rgba(0,0,0,0.07)" }}>
            <div style={{ padding: "1.8vh 2vw", borderBottom: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#111111" }}>About</div>
              <div style={{ padding: "0.5vh 1.2vw", borderRadius: "100px", background: "#0A66C2", fontSize: "1vw", fontWeight: 600, color: "#fff" }}>+ Add</div>
            </div>
            <div style={{ padding: "2vh 2vw" }}>
              <div style={{ padding: "2vh 2vw", borderRadius: "0.8vw", background: "#fff", border: "1.5px dashed #D1D5DB", textAlign: "center" }}>
                <svg width="3vw" height="3vw" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="1.5" style={{ margin: "0 auto 1vh", display: "block" }}><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#9CA3AF", marginBottom: "0.5vh" }}>No about section yet</div>
                <div style={{ fontSize: "1vw", color: "#D1D5DB" }}>You can add this later</div>
              </div>

              <div style={{ marginTop: "2vh", padding: "1.3vh 1.5vw", borderRadius: "0.8vw", background: "rgba(10,102,194,0.06)", border: "1px solid rgba(10,102,194,0.15)" }}>
                <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>Priority: Profile photo + Headline + Education first</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
