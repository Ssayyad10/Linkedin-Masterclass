export default function Slide12Skills() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex"
      style={{ background: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left column */}
      <div
        className="flex flex-col justify-center"
        style={{ width: "42%", paddingLeft: "7vw", paddingRight: "3vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>
          Step 4 of 6
        </div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          Add Your
          <br />
          Skills
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Add 3–5 basic skills to start</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Keep it honest and simple</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Boosts your search visibility</div>
          </div>
        </div>

        <div style={{ marginTop: "3vh", padding: "1.3vh 1.5vw", borderRadius: "0.8vw", background: "#F7F9FB", border: "1px solid #E5E7EB" }}>
          <div style={{ fontSize: "1vw", color: "#666", marginBottom: "0.3vh" }}>Where to find it</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0A66C2" }}>Profile → Add profile section → Skills</div>
        </div>
      </div>

      {/* Right column — Skills UI */}
      <div
        className="flex items-center justify-center"
        style={{ width: "58%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ width: "33vw", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <div style={{ background: "#fff", borderRadius: "1.2vw", border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 0.5vh 2vh rgba(0,0,0,0.07)" }}>
            <div style={{ padding: "1.8vh 2vw", borderBottom: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111111" }}>Skills</div>
              <div style={{ padding: "0.5vh 1.2vw", borderRadius: "100px", background: "#0A66C2", fontSize: "1vw", fontWeight: 600, color: "#fff" }}>+ Add skill</div>
            </div>

            <div style={{ padding: "2vh 2vw" }}>
              {/* Added skills */}
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>Added skills</div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8vh 0.8vw", marginBottom: "2vh" }}>
                <div style={{ padding: "0.8vh 1.2vw", borderRadius: "100px", background: "rgba(10,102,194,0.08)", border: "1.5px solid rgba(10,102,194,0.25)", fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>Python</div>
                <div style={{ padding: "0.8vh 1.2vw", borderRadius: "100px", background: "rgba(10,102,194,0.08)", border: "1.5px solid rgba(10,102,194,0.25)", fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>HTML</div>
                <div style={{ padding: "0.8vh 1.2vw", borderRadius: "100px", background: "rgba(10,102,194,0.08)", border: "1.5px solid rgba(10,102,194,0.25)", fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>Problem Solving</div>
                <div style={{ padding: "0.8vh 1.2vw", borderRadius: "100px", background: "rgba(10,102,194,0.08)", border: "1.5px solid rgba(10,102,194,0.25)", fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>C++</div>
                <div style={{ padding: "0.8vh 1.2vw", borderRadius: "100px", background: "rgba(10,102,194,0.08)", border: "1.5px solid rgba(10,102,194,0.25)", fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>Communication</div>
              </div>

              {/* Suggested skills */}
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.2vh" }}>Suggested for you</div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8vh 0.8vw" }}>
                <div style={{ padding: "0.7vh 1.1vw", borderRadius: "100px", background: "#F7F9FB", border: "1px solid #E5E7EB", fontSize: "1.1vw", fontWeight: 500, color: "#374151", display: "flex", alignItems: "center", gap: "0.4vw" }}>
                  <span style={{ fontSize: "1.1vw", color: "#0A66C2" }}>+</span> CSS
                </div>
                <div style={{ padding: "0.7vh 1.1vw", borderRadius: "100px", background: "#F7F9FB", border: "1px solid #E5E7EB", fontSize: "1.1vw", fontWeight: 500, color: "#374151", display: "flex", alignItems: "center", gap: "0.4vw" }}>
                  <span style={{ fontSize: "1.1vw", color: "#0A66C2" }}>+</span> Java
                </div>
                <div style={{ padding: "0.7vh 1.1vw", borderRadius: "100px", background: "#F7F9FB", border: "1px solid #E5E7EB", fontSize: "1.1vw", fontWeight: 500, color: "#374151", display: "flex", alignItems: "center", gap: "0.4vw" }}>
                  <span style={{ fontSize: "1.1vw", color: "#0A66C2" }}>+</span> Git
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
