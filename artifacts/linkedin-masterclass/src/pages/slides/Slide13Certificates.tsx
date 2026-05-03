export default function Slide13Certificates() {
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
          Step 5 of 6
        </div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          Add
          <br />
          Certificates
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Online courses (Coursera, NPTEL)</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>College workshops and events</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Any certificate counts</div>
          </div>
        </div>

        <div style={{ marginTop: "3vh", padding: "1.3vh 1.5vw", borderRadius: "0.8vw", background: "#F7F9FB", border: "1px solid #E5E7EB" }}>
          <div style={{ fontSize: "1vw", color: "#666", marginBottom: "0.3vh" }}>Where to find it</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0A66C2" }}>Profile → Licenses &amp; Certifications</div>
        </div>
      </div>

      {/* Right column — Certificate UI */}
      <div
        className="flex items-center justify-center"
        style={{ width: "58%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ width: "33vw", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <div style={{ background: "#fff", borderRadius: "1.2vw", border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 0.5vh 2vh rgba(0,0,0,0.07)" }}>
            <div style={{ padding: "1.8vh 2vw", borderBottom: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111111" }}>Licenses &amp; Certifications</div>
              <div style={{ width: "3vh", height: "3vh", borderRadius: "50%", background: "#F7F9FB", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </div>
            </div>

            {/* Certificate 1 */}
            <div style={{ padding: "2vh 2vw", display: "flex", gap: "1.2vw", alignItems: "flex-start", borderBottom: "1px solid #F3F4F6" }}>
              <div style={{ width: "6vh", height: "6vh", borderRadius: "0.8vw", background: "linear-gradient(135deg, #1E3A5F, #0A66C2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#111111" }}>Python for Everybody</div>
                <div style={{ fontSize: "1.1vw", color: "#666666", marginTop: "0.2vh" }}>Coursera · University of Michigan</div>
                <div style={{ fontSize: "1vw", color: "#9CA3AF", marginTop: "0.2vh" }}>Issued Oct 2024</div>
                <div style={{ marginTop: "0.8vh", display: "inline-block", padding: "0.4vh 0.8vw", borderRadius: "100px", background: "rgba(10,102,194,0.08)", border: "1px solid rgba(10,102,194,0.2)", fontSize: "0.95vw", fontWeight: 600, color: "#0A66C2" }}>
                  Show credential
                </div>
              </div>
            </div>

            {/* Certificate 2 */}
            <div style={{ padding: "2vh 2vw", display: "flex", gap: "1.2vw", alignItems: "flex-start" }}>
              <div style={{ width: "6vh", height: "6vh", borderRadius: "0.8vw", background: "linear-gradient(135deg, #065F46, #059669)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#111111" }}>Web Development Bootcamp</div>
                <div style={{ fontSize: "1.1vw", color: "#666666", marginTop: "0.2vh" }}>NPTEL · IIT Madras</div>
                <div style={{ fontSize: "1vw", color: "#9CA3AF", marginTop: "0.2vh" }}>Issued Dec 2024</div>
                <div style={{ marginTop: "0.8vh", display: "inline-block", padding: "0.4vh 0.8vw", borderRadius: "100px", background: "rgba(10,102,194,0.08)", border: "1px solid rgba(10,102,194,0.2)", fontSize: "0.95vw", fontWeight: 600, color: "#0A66C2" }}>
                  Show credential
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
