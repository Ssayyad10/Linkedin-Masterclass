export default function Slide06Networking() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex"
      style={{ background: "#F0F4F8", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left column */}
      <div
        className="flex flex-col justify-center"
        style={{ width: "45%", paddingLeft: "6vw", paddingRight: "3vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>
          Networking
        </div>
        <div style={{ fontSize: "3.8vw", fontWeight: 800, color: "#1B1B1B", letterSpacing: "-0.03em", lineHeight: 1.1, textWrap: "balance" }}>
          Connect
          <br />
          With Purpose
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
          <div className="flex items-start gap-[0.8vw]">
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.9vh", flexShrink: 0 }} />
            <div style={{ fontSize: "1.45vw", fontWeight: 500, color: "#374151", lineHeight: 1.5 }}>
              Start with classmates, professors, and alumni
            </div>
          </div>
          <div className="flex items-start gap-[0.8vw]">
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.9vh", flexShrink: 0 }} />
            <div style={{ fontSize: "1.45vw", fontWeight: 500, color: "#374151", lineHeight: 1.5 }}>
              Send a short note with every connection request
            </div>
          </div>
          <div className="flex items-start gap-[0.8vw]">
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.9vh", flexShrink: 0 }} />
            <div style={{ fontSize: "1.45vw", fontWeight: 500, color: "#374151", lineHeight: 1.5 }}>
              50 connections = 10x more profile views
            </div>
          </div>
        </div>

        {/* Stat highlight */}
        <div
          style={{
            marginTop: "3vh",
            padding: "1.8vh 1.5vw",
            borderRadius: "0.8vw",
            background: "#0A66C2",
            display: "flex",
            alignItems: "center",
            gap: "1vw",
          }}
        >
          <div style={{ fontSize: "3vw", fontWeight: 800, color: "#fff" }}>50+</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>
            connections to unlock
            <br />
            the LinkedIn algorithm
          </div>
        </div>
      </div>

      {/* Right column — connection request + people you may know UI */}
      <div
        className="flex items-center justify-center"
        style={{ width: "55%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ width: "30vw", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          {/* Section header */}
          <div
            style={{
              background: "#fff",
              borderRadius: "1vw 1vw 0 0",
              padding: "1.5vh 1.5vw",
              borderBottom: "1px solid #E5E7EB",
              boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1B1B1B" }}>People you may know</div>
            <div style={{ fontSize: "1vw", color: "#6B7280", marginTop: "0.2vh" }}>Based on your college</div>
          </div>

          {/* Person 1 */}
          <div
            style={{
              background: "#fff",
              padding: "1.5vh 1.5vw",
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                width: "5vh",
                height: "5vh",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #a5b4fc, #818cf8)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.8vh" }}>A</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1B1B1B" }}>Ananya Singh</div>
              <div style={{ fontSize: "1vw", color: "#6B7280" }}>CSE · 2nd year · NIT Raipur</div>
              <div style={{ fontSize: "0.95vw", color: "#9CA3AF" }}>12 mutual connections</div>
            </div>
            <div
              style={{
                padding: "0.7vh 1.2vw",
                borderRadius: "100px",
                border: "1.5px solid #0A66C2",
                fontSize: "1.1vw",
                fontWeight: 700,
                color: "#0A66C2",
                flexShrink: 0,
              }}
            >
              Connect
            </div>
          </div>

          {/* Person 2 */}
          <div
            style={{
              background: "#fff",
              padding: "1.5vh 1.5vw",
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                width: "5vh",
                height: "5vh",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #86efac, #4ade80)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.8vh" }}>R</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1B1B1B" }}>Rohan Gupta</div>
              <div style={{ fontSize: "1vw", color: "#6B7280" }}>Senior · SDE Intern @ Amazon</div>
              <div style={{ fontSize: "0.95vw", color: "#9CA3AF" }}>4 mutual connections</div>
            </div>
            <div
              style={{
                padding: "0.7vh 1.2vw",
                borderRadius: "100px",
                border: "1.5px solid #0A66C2",
                fontSize: "1.1vw",
                fontWeight: 700,
                color: "#0A66C2",
                flexShrink: 0,
              }}
            >
              Connect
            </div>
          </div>

          {/* Person 3 */}
          <div
            style={{
              background: "#fff",
              padding: "1.5vh 1.5vw",
              borderRadius: "0 0 1vw 1vw",
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                width: "5vh",
                height: "5vh",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #fca5a5, #f87171)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.8vh" }}>M</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1B1B1B" }}>Meera Nair</div>
              <div style={{ fontSize: "1vw", color: "#6B7280" }}>Alumni · Product @ Infosys</div>
              <div style={{ fontSize: "0.95vw", color: "#9CA3AF" }}>NIT Raipur Alumni</div>
            </div>
            <div
              style={{
                padding: "0.7vh 1.2vw",
                borderRadius: "100px",
                border: "1.5px solid #0A66C2",
                fontSize: "1.1vw",
                fontWeight: 700,
                color: "#0A66C2",
                flexShrink: 0,
              }}
            >
              Connect
            </div>
          </div>

          {/* Tip */}
          <div
            style={{
              background: "rgba(10,102,194,0.06)",
              border: "1px solid rgba(10,102,194,0.15)",
              borderRadius: "0.8vw",
              padding: "1.3vh 1.4vw",
            }}
          >
            <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>
              Always add a personal note when connecting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
