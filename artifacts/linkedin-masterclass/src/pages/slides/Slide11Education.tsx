export default function Slide11Education() {
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
          Step 3 of 6
        </div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          Add Your
          <br />
          Education
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#0A66C2", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.2vh" }}>1</span>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Your college name</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#0A66C2", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.2vh" }}>2</span>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Degree (B.Tech / BE)</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#0A66C2", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.2vh" }}>3</span>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Branch and start year</div>
          </div>
        </div>

        <div style={{ marginTop: "3vh", padding: "1.3vh 1.5vw", borderRadius: "0.8vw", background: "#F7F9FB", border: "1px solid #E5E7EB" }}>
          <div style={{ fontSize: "1vw", color: "#666", marginBottom: "0.3vh" }}>Where to find it</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0A66C2" }}>Profile → Add profile section → Education</div>
        </div>
      </div>

      {/* Right column — Education section UI */}
      <div
        className="flex items-center justify-center"
        style={{ width: "58%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ width: "33vw", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          {/* Section card */}
          <div style={{ background: "#fff", borderRadius: "1.2vw", border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 0.5vh 2vh rgba(0,0,0,0.07)" }}>
            <div style={{ padding: "1.8vh 2vw", borderBottom: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111111" }}>Education</div>
              <div style={{ display: "flex", gap: "0.8vw" }}>
                <div style={{ width: "3vh", height: "3vh", borderRadius: "50%", background: "#F7F9FB", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", cursor: "default" }}>
                  <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>
              </div>
            </div>

            {/* Education entry */}
            <div style={{ padding: "2vh 2vw", display: "flex", gap: "1.2vw", alignItems: "flex-start" }}>
              <div style={{ width: "6vh", height: "6vh", borderRadius: "0.8vw", background: "#F7F9FB", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round"><path d="M12 3L2 9l10 6 10-6-10-6z"/><path d="M2 9v6c0 3.31 4.48 6 10 6s10-2.69 10-6V9"/></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#111111" }}>Dr. Babasaheb Ambedkar Technological University</div>
                <div style={{ fontSize: "1vw", color: "#9CA3AF", marginTop: "0.1vh" }}>Lonere, Raigad, Maharashtra</div>
                <div style={{ fontSize: "1.1vw", color: "#666666", marginTop: "0.3vh" }}>Bachelor of Technology · Computer Science & Engineering</div>
                <div style={{ fontSize: "1vw", color: "#9CA3AF", marginTop: "0.3vh" }}>Aug 2024 – May 2028</div>
                <div style={{ fontSize: "1vw", color: "#666666", marginTop: "0.5vh" }}>Activities: Coding Club, Hackathons</div>
              </div>
            </div>

            {/* Add another prompt */}
            <div style={{ padding: "1.5vh 2vw", borderTop: "1px solid #F3F4F6", display: "flex", alignItems: "center", gap: "0.8vw" }}>
              <svg width="1.8vw" height="1.8vw" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              <span style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0A66C2" }}>Add another education</span>
            </div>
          </div>

          {/* Tip */}
          <div style={{ padding: "1.3vh 1.8vw", borderRadius: "0.8vw", background: "#F7F9FB", border: "1px solid #E5E7EB" }}>
            <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>Add your 10th / 12th school too — it fills the profile faster</div>
          </div>
        </div>
      </div>
    </div>
  );
}
