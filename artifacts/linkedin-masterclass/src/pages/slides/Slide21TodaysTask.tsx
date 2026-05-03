export default function Slide21TodaysTask() {
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
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>Action Now</div>
        <div style={{ fontSize: "4.5vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          Today's
          <br />
          Checklist
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />
        <div style={{ fontSize: "1.5vw", fontWeight: 400, color: "#666666", lineHeight: 1.6 }}>
          Complete these 6 tasks
          <br />
          before you sleep tonight.
        </div>
        <div style={{ marginTop: "3vh", padding: "1.5vh 1.5vw", borderRadius: "0.8vw", background: "#0A66C2", display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ fontSize: "3vw", fontWeight: 800, color: "#fff" }}>6</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>tasks · ~45 minutes total</div>
        </div>
      </div>

      {/* Right — Checklist UI */}
      <div
        className="flex items-center justify-center"
        style={{ width: "58%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div
          style={{
            width: "33vw",
            background: "#fff",
            borderRadius: "1.2vw",
            border: "1px solid #E5E7EB",
            overflow: "hidden",
            boxShadow: "0 0.5vh 2vh rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ padding: "1.8vh 2vw", borderBottom: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#111111" }}>LinkedIn Setup Checklist</div>
            <div style={{ padding: "0.4vh 1vw", borderRadius: "100px", background: "rgba(10,102,194,0.08)", fontSize: "1vw", fontWeight: 700, color: "#0A66C2" }}>4/6 done</div>
          </div>

          <div style={{ padding: "1vh 0" }}>
            {/* Task 1 — done */}
            <div style={{ padding: "1.3vh 2vw", display: "flex", alignItems: "center", gap: "1vw", borderBottom: "1px solid #F9FAFB" }}>
              <div style={{ width: "2.5vh", height: "2.5vh", borderRadius: "50%", background: "#0A66C2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div style={{ fontSize: "1.25vw", fontWeight: 500, color: "#9CA3AF", textDecoration: "line-through" }}>Download LinkedIn app</div>
            </div>
            {/* Task 2 — done */}
            <div style={{ padding: "1.3vh 2vw", display: "flex", alignItems: "center", gap: "1vw", borderBottom: "1px solid #F9FAFB" }}>
              <div style={{ width: "2.5vh", height: "2.5vh", borderRadius: "50%", background: "#0A66C2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div style={{ fontSize: "1.25vw", fontWeight: 500, color: "#9CA3AF", textDecoration: "line-through" }}>Create your account</div>
            </div>
            {/* Task 3 — done */}
            <div style={{ padding: "1.3vh 2vw", display: "flex", alignItems: "center", gap: "1vw", borderBottom: "1px solid #F9FAFB" }}>
              <div style={{ width: "2.5vh", height: "2.5vh", borderRadius: "50%", background: "#0A66C2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div style={{ fontSize: "1.25vw", fontWeight: 500, color: "#9CA3AF", textDecoration: "line-through" }}>Upload profile photo</div>
            </div>
            {/* Task 4 — done */}
            <div style={{ padding: "1.3vh 2vw", display: "flex", alignItems: "center", gap: "1vw", borderBottom: "1px solid #F9FAFB" }}>
              <div style={{ width: "2.5vh", height: "2.5vh", borderRadius: "50%", background: "#0A66C2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div style={{ fontSize: "1.25vw", fontWeight: 500, color: "#9CA3AF", textDecoration: "line-through" }}>Add education details</div>
            </div>
            {/* Task 5 — pending */}
            <div style={{ padding: "1.3vh 2vw", display: "flex", alignItems: "center", gap: "1vw", borderBottom: "1px solid #F9FAFB", background: "rgba(10,102,194,0.03)" }}>
              <div style={{ width: "2.5vh", height: "2.5vh", borderRadius: "50%", border: "2px solid #0A66C2", flexShrink: 0 }} />
              <div style={{ fontSize: "1.25vw", fontWeight: 600, color: "#111111" }}>Add 5 skills</div>
              <div style={{ marginLeft: "auto", padding: "0.3vh 0.7vw", borderRadius: "100px", background: "rgba(10,102,194,0.1)", fontSize: "0.9vw", fontWeight: 600, color: "#0A66C2" }}>Up next</div>
            </div>
            {/* Task 6 — pending */}
            <div style={{ padding: "1.3vh 2vw", display: "flex", alignItems: "center", gap: "1vw" }}>
              <div style={{ width: "2.5vh", height: "2.5vh", borderRadius: "50%", border: "2px solid #D1D5DB", flexShrink: 0 }} />
              <div style={{ fontSize: "1.25vw", fontWeight: 500, color: "#666666" }}>Send 5 connection requests</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
