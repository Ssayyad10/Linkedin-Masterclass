export default function Slide20WeeklyPlan() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{ background: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "5vh 5vw 4vh" }}
    >
      <div style={{ marginBottom: "3vh" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.8vh" }}>Weekly Routine</div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>Your Weekly Plan</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#666666" }}>Small actions. Big results over time.</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5vw", flex: 1 }}>
        {/* Monday */}
        <div style={{ background: "#FAFAFA", borderRadius: "1.2vw", overflow: "hidden", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column" }}>
          <div style={{ background: "#0A66C2", padding: "2vh 1.8vw" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Monday</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#fff", marginTop: "0.3vh" }}>Learn</div>
          </div>
          <div style={{ padding: "2vh 1.8vw", display: "flex", flexDirection: "column", gap: "1.4vh", flex: 1 }}>
            <div style={{ display: "flex", gap: "0.7vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Complete one lesson online</div>
            </div>
            <div style={{ display: "flex", gap: "0.7vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Take notes on key points</div>
            </div>
            <div style={{ display: "flex", gap: "0.7vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Save for LinkedIn post</div>
            </div>
          </div>
          <div style={{ padding: "0 1.8vw 1.5vh" }}>
            <div style={{ padding: "0.7vh 1vw", borderRadius: "0.6vw", background: "rgba(10,102,194,0.08)", fontSize: "1vw", fontWeight: 600, color: "#0A66C2" }}>30 min</div>
          </div>
        </div>

        {/* Wednesday */}
        <div style={{ background: "#FAFAFA", borderRadius: "1.2vw", overflow: "hidden", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column" }}>
          <div style={{ background: "#0073B1", padding: "2vh 1.8vw" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Wednesday</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#fff", marginTop: "0.3vh" }}>Connect</div>
          </div>
          <div style={{ padding: "2vh 1.8vw", display: "flex", flexDirection: "column", gap: "1.4vh", flex: 1 }}>
            <div style={{ display: "flex", gap: "0.7vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0073B1", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Send 2 connection requests</div>
            </div>
            <div style={{ display: "flex", gap: "0.7vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0073B1", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Add a personal note</div>
            </div>
            <div style={{ display: "flex", gap: "0.7vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0073B1", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Reply to messages</div>
            </div>
          </div>
          <div style={{ padding: "0 1.8vw 1.5vh" }}>
            <div style={{ padding: "0.7vh 1vw", borderRadius: "0.6vw", background: "rgba(0,115,177,0.08)", fontSize: "1vw", fontWeight: 600, color: "#0073B1" }}>15 min</div>
          </div>
        </div>

        {/* Friday */}
        <div style={{ background: "#FAFAFA", borderRadius: "1.2vw", overflow: "hidden", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column" }}>
          <div style={{ background: "#005885", padding: "2vh 1.8vw" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Friday</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#fff", marginTop: "0.3vh" }}>Post</div>
          </div>
          <div style={{ padding: "2vh 1.8vw", display: "flex", flexDirection: "column", gap: "1.4vh", flex: 1 }}>
            <div style={{ display: "flex", gap: "0.7vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#005885", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Write your weekly post</div>
            </div>
            <div style={{ display: "flex", gap: "0.7vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#005885", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Share what you learned</div>
            </div>
            <div style={{ display: "flex", gap: "0.7vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#005885", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Add 3–4 hashtags</div>
            </div>
          </div>
          <div style={{ padding: "0 1.8vw 1.5vh" }}>
            <div style={{ padding: "0.7vh 1vw", borderRadius: "0.6vw", background: "rgba(0,88,133,0.08)", fontSize: "1vw", fontWeight: 600, color: "#005885" }}>20 min</div>
          </div>
        </div>

        {/* Sunday */}
        <div style={{ background: "#FAFAFA", borderRadius: "1.2vw", overflow: "hidden", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column" }}>
          <div style={{ background: "#111111", padding: "2vh 1.8vw" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Sunday</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#fff", marginTop: "0.3vh" }}>Reflect</div>
          </div>
          <div style={{ padding: "2vh 1.8vw", display: "flex", flexDirection: "column", gap: "1.4vh", flex: 1 }}>
            <div style={{ display: "flex", gap: "0.7vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#111111", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Review your profile</div>
            </div>
            <div style={{ display: "flex", gap: "0.7vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#111111", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Check notifications</div>
            </div>
            <div style={{ display: "flex", gap: "0.7vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#111111", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Plan next week's post</div>
            </div>
          </div>
          <div style={{ padding: "0 1.8vw 1.5vh" }}>
            <div style={{ padding: "0.7vh 1vw", borderRadius: "0.6vw", background: "rgba(17,17,17,0.07)", fontSize: "1vw", fontWeight: 600, color: "#111111" }}>10 min</div>
          </div>
        </div>
      </div>
    </div>
  );
}
