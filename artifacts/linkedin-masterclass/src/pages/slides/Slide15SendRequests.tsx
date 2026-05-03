export default function Slide15SendRequests() {
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
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>Step 6 of 6</div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          Send 5
          <br />
          Connection Requests
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Start with 5 today</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Go to My Network tab</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Tap "Connect" on each person</div>
          </div>
        </div>
        <div style={{ marginTop: "3vh", padding: "1.5vh 1.5vw", borderRadius: "0.8vw", background: "#F7F9FB", border: "1px solid #E5E7EB" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0A66C2" }}>Classmates → Seniors → Alumni → Professors</div>
        </div>
      </div>

      {/* Right — Send request UI with progress */}
      <div
        className="flex items-center justify-center"
        style={{ width: "58%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ width: "33vw", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          {/* Progress tracker */}
          <div style={{ background: "#fff", borderRadius: "1.2vw", border: "1px solid #E5E7EB", padding: "2vh 2vw", boxShadow: "0 0.5vh 2vh rgba(0,0,0,0.07)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2vh" }}>
              <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#111111" }}>Today's Goal</div>
              <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#0A66C2" }}>3/5</div>
            </div>
            {/* Progress bar */}
            <div style={{ height: "1vh", background: "#F3F4F6", borderRadius: "100px", overflow: "hidden" }}>
              <div style={{ width: "60%", height: "100%", background: "linear-gradient(90deg, #0A66C2, #0073B1)", borderRadius: "100px" }} />
            </div>
            <div style={{ fontSize: "1vw", color: "#666", marginTop: "0.8vh" }}>2 more to go — you're almost there</div>
          </div>

          {/* Sent cards */}
          <div style={{ background: "#fff", borderRadius: "1.2vw", border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 0.5vh 2vh rgba(0,0,0,0.07)" }}>
            <div style={{ padding: "1.5vh 2vw", borderBottom: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#111111" }}>Sent requests</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "1.2vh 2vw", display: "flex", alignItems: "center", gap: "1vw", borderBottom: "1px solid #F3F4F6" }}>
                <div style={{ width: "4.5vh", height: "4.5vh", borderRadius: "50%", background: "linear-gradient(135deg, #a5b4fc, #818cf8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.8vh" }}>S</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#111" }}>Sanjay Kumar</div>
                  <div style={{ fontSize: "0.95vw", color: "#666" }}>CSE · 2nd year</div>
                </div>
                <div style={{ padding: "0.4vh 0.9vw", borderRadius: "100px", background: "#F3F4F6", fontSize: "0.95vw", fontWeight: 600, color: "#6B7280" }}>Pending</div>
              </div>
              <div style={{ padding: "1.2vh 2vw", display: "flex", alignItems: "center", gap: "1vw", borderBottom: "1px solid #F3F4F6" }}>
                <div style={{ width: "4.5vh", height: "4.5vh", borderRadius: "50%", background: "linear-gradient(135deg, #86efac, #4ade80)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.8vh" }}>N</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#111" }}>Neha Patel</div>
                  <div style={{ fontSize: "0.95vw", color: "#666" }}>ECE · 3rd year · Intern @ TCS</div>
                </div>
                <div style={{ padding: "0.4vh 0.9vw", borderRadius: "100px", background: "rgba(22,163,74,0.08)", fontSize: "0.95vw", fontWeight: 600, color: "#16A34A" }}>Accepted</div>
              </div>
              <div style={{ padding: "1.2vh 2vw", display: "flex", alignItems: "center", gap: "1vw" }}>
                <div style={{ width: "4.5vh", height: "4.5vh", borderRadius: "50%", background: "linear-gradient(135deg, #fbbf24, #f59e0b)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.8vh" }}>V</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#111" }}>Vikram Rao</div>
                  <div style={{ fontSize: "0.95vw", color: "#666" }}>Alumni · SDE @ Flipkart</div>
                </div>
                <div style={{ padding: "0.4vh 0.9vw", borderRadius: "100px", background: "rgba(22,163,74,0.08)", fontSize: "0.95vw", fontWeight: 600, color: "#16A34A" }}>Accepted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
