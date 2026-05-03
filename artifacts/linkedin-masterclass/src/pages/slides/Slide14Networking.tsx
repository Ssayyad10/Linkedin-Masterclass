export default function Slide14Networking() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex"
      style={{ background: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left */}
      <div
        className="flex flex-col justify-center"
        style={{ width: "42%", paddingLeft: "7vw", paddingRight: "3vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>Networking</div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          Connect
          <br />
          With Purpose
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Connect with classmates first</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Then seniors and alumni</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Simply tap "Connect"</div>
          </div>
        </div>
        <div style={{ marginTop: "3vh", padding: "1.5vh 1.5vw", borderRadius: "0.8vw", background: "#0A66C2", display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ fontSize: "3vw", fontWeight: 800, color: "#fff" }}>50+</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>connections unlock the LinkedIn algorithm</div>
        </div>
      </div>

      {/* Right — Connection UI */}
      <div
        className="flex items-center justify-center"
        style={{ width: "58%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ width: "33vw", display: "flex", flexDirection: "column", gap: "1vh" }}>
          <div style={{ background: "#fff", borderRadius: "1.2vw", border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 0.5vh 2vh rgba(0,0,0,0.07)" }}>
            <div style={{ padding: "1.5vh 2vw", borderBottom: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#111111" }}>People you may know</div>
              <div style={{ fontSize: "1vw", color: "#666", marginTop: "0.2vh" }}>From NIT Raipur · Computer Science</div>
            </div>

            {/* Person 1 */}
            <div style={{ padding: "1.5vh 2vw", display: "flex", alignItems: "center", gap: "1vw", borderBottom: "1px solid #F3F4F6" }}>
              <div style={{ width: "5.5vh", height: "5.5vh", borderRadius: "50%", background: "linear-gradient(135deg, #a5b4fc, #818cf8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "2vh" }}>A</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#111111" }}>Ananya Singh</div>
                <div style={{ fontSize: "1vw", color: "#666666" }}>CSE · 3rd year · NIT Raipur</div>
                <div style={{ fontSize: "0.95vw", color: "#9CA3AF" }}>12 mutual connections</div>
              </div>
              <div style={{ padding: "0.6vh 1.2vw", borderRadius: "100px", border: "1.5px solid #0A66C2", fontSize: "1.1vw", fontWeight: 700, color: "#0A66C2", flexShrink: 0 }}>Connect</div>
            </div>

            {/* Person 2 */}
            <div style={{ padding: "1.5vh 2vw", display: "flex", alignItems: "center", gap: "1vw", borderBottom: "1px solid #F3F4F6" }}>
              <div style={{ width: "5.5vh", height: "5.5vh", borderRadius: "50%", background: "linear-gradient(135deg, #86efac, #4ade80)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "2vh" }}>R</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#111111" }}>Rohan Gupta</div>
                <div style={{ fontSize: "1vw", color: "#666666" }}>Final year · Intern @ Amazon</div>
                <div style={{ fontSize: "0.95vw", color: "#9CA3AF" }}>Alumni · 4 mutual connections</div>
              </div>
              <div style={{ padding: "0.6vh 1.2vw", borderRadius: "100px", border: "1.5px solid #0A66C2", fontSize: "1.1vw", fontWeight: 700, color: "#0A66C2", flexShrink: 0 }}>Connect</div>
            </div>

            {/* Person 3 */}
            <div style={{ padding: "1.5vh 2vw", display: "flex", alignItems: "center", gap: "1vw" }}>
              <div style={{ width: "5.5vh", height: "5.5vh", borderRadius: "50%", background: "linear-gradient(135deg, #fca5a5, #f87171)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "2vh" }}>M</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#111111" }}>Dr. Meera Nair</div>
                <div style={{ fontSize: "1vw", color: "#666666" }}>Professor · Dept of CSE</div>
                <div style={{ fontSize: "0.95vw", color: "#9CA3AF" }}>Your college · 38 connections</div>
              </div>
              <div style={{ padding: "0.6vh 1.2vw", borderRadius: "100px", border: "1.5px solid #0A66C2", fontSize: "1.1vw", fontWeight: 700, color: "#0A66C2", flexShrink: 0 }}>Connect</div>
            </div>
          </div>

          <div style={{ padding: "1.2vh 1.8vw", borderRadius: "0.8vw", background: "#F7F9FB", border: "1px solid #E5E7EB" }}>
            <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>Always add a personal note when connecting to seniors</div>
          </div>
        </div>
      </div>
    </div>
  );
}
