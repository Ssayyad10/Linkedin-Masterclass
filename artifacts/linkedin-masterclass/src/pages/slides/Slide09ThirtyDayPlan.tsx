export default function Slide09ThirtyDayPlan() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{ background: "#F0F4F8", fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "5vh 5vw 4vh" }}
    >
      {/* Header */}
      <div style={{ marginBottom: "3vh" }}>
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.8vh" }}>
          Action Plan
        </div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <div style={{ fontSize: "4vw", fontWeight: 800, color: "#1B1B1B", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Your 30-Day LinkedIn Plan
          </div>
          <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#6B7280" }}>
            One step at a time.
          </div>
        </div>
      </div>

      {/* 4-column week cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "1.5vw",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Week 1 */}
        <div
          style={{
            background: "#fff",
            borderRadius: "1.2vw",
            overflow: "hidden",
            boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.07)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ background: "#0A66C2", padding: "2vh 1.5vw" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Week 1</div>
            <div style={{ fontSize: "1.6vw", fontWeight: 800, color: "#fff", marginTop: "0.3vh" }}>Foundation</div>
          </div>
          <div style={{ padding: "1.8vh 1.5vw", display: "flex", flexDirection: "column", gap: "1.4vh", flex: 1 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.7vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Create your LinkedIn account</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.7vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Upload a profile photo</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.7vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Write your headline</div>
            </div>
          </div>
          <div style={{ padding: "0 1.5vw 1.5vh" }}>
            <div style={{ padding: "0.8vh 1vw", borderRadius: "0.6vw", background: "rgba(10,102,194,0.08)", fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>
              Days 1–7
            </div>
          </div>
        </div>

        {/* Week 2 */}
        <div
          style={{
            background: "#fff",
            borderRadius: "1.2vw",
            overflow: "hidden",
            boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.07)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ background: "#0073B1", padding: "2vh 1.5vw" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Week 2</div>
            <div style={{ fontSize: "1.6vw", fontWeight: 800, color: "#fff", marginTop: "0.3vh" }}>Your Story</div>
          </div>
          <div style={{ padding: "1.8vh 1.5vw", display: "flex", flexDirection: "column", gap: "1.4vh", flex: 1 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.7vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0073B1", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Write your About section</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.7vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0073B1", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Add education details</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.7vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0073B1", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Add 5+ relevant skills</div>
            </div>
          </div>
          <div style={{ padding: "0 1.5vw 1.5vh" }}>
            <div style={{ padding: "0.8vh 1vw", borderRadius: "0.6vw", background: "rgba(0,115,177,0.08)", fontSize: "1.1vw", fontWeight: 600, color: "#0073B1" }}>
              Days 8–14
            </div>
          </div>
        </div>

        {/* Week 3 */}
        <div
          style={{
            background: "#fff",
            borderRadius: "1.2vw",
            overflow: "hidden",
            boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.07)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ background: "#005885", padding: "2vh 1.5vw" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Week 3</div>
            <div style={{ fontSize: "1.6vw", fontWeight: 800, color: "#fff", marginTop: "0.3vh" }}>Network</div>
          </div>
          <div style={{ padding: "1.8vh 1.5vw", display: "flex", flexDirection: "column", gap: "1.4vh", flex: 1 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.7vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#005885", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Send 10 connection requests</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.7vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#005885", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Write your first post</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.7vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#005885", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Turn on "Open to Work"</div>
            </div>
          </div>
          <div style={{ padding: "0 1.5vw 1.5vh" }}>
            <div style={{ padding: "0.8vh 1vw", borderRadius: "0.6vw", background: "rgba(0,88,133,0.08)", fontSize: "1.1vw", fontWeight: 600, color: "#005885" }}>
              Days 15–21
            </div>
          </div>
        </div>

        {/* Week 4 */}
        <div
          style={{
            background: "#fff",
            borderRadius: "1.2vw",
            overflow: "hidden",
            boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.07)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ background: "#1B1B1B", padding: "2vh 1.5vw" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Week 4</div>
            <div style={{ fontSize: "1.6vw", fontWeight: 800, color: "#fff", marginTop: "0.3vh" }}>Engage</div>
          </div>
          <div style={{ padding: "1.8vh 1.5vw", display: "flex", flexDirection: "column", gap: "1.4vh", flex: 1 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.7vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#1B1B1B", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Comment on 5 posts</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.7vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#1B1B1B", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Message one senior or alumni</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.7vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#1B1B1B", marginTop: "0.7vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "#374151", lineHeight: 1.45 }}>Review and improve profile</div>
            </div>
          </div>
          <div style={{ padding: "0 1.5vw 1.5vh" }}>
            <div style={{ padding: "0.8vh 1vw", borderRadius: "0.6vw", background: "rgba(27,27,27,0.07)", fontSize: "1.1vw", fontWeight: 600, color: "#1B1B1B" }}>
              Days 22–30
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
