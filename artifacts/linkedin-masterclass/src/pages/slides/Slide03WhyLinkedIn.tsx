export default function Slide03WhyLinkedIn() {
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
          Why LinkedIn
        </div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1, textWrap: "balance" }}>
          Not just social media
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
            <div style={{ width: "2.2vw", height: "2.2vw", background: "#F7F9FB", border: "1px solid #E5E7EB", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.3vh" }}>
              <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <div>
              <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111111" }}>Your career identity</div>
              <div style={{ fontSize: "1.2vw", color: "#666666", marginTop: "0.3vh" }}>A living resume, always online</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
            <div style={{ width: "2.2vw", height: "2.2vw", background: "#F7F9FB", border: "1px solid #E5E7EB", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.3vh" }}>
              <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111111" }}>Opportunities come to you</div>
              <div style={{ fontSize: "1.2vw", color: "#666666", marginTop: "0.3vh" }}>Recruiters search LinkedIn daily</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
            <div style={{ width: "2.2vw", height: "2.2vw", background: "#F7F9FB", border: "1px solid #E5E7EB", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.3vh" }}>
              <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div>
              <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111111" }}>People discover you</div>
              <div style={{ fontSize: "1.2vw", color: "#666666", marginTop: "0.3vh" }}>Be visible before you apply</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right column — LinkedIn dashboard card */}
      <div
        className="flex items-center justify-center"
        style={{ width: "58%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div
          style={{
            width: "34vw",
            background: "#F7F9FB",
            borderRadius: "1.2vw",
            border: "1px solid #E5E7EB",
            overflow: "hidden",
            boxShadow: "0 0.5vh 2.5vh rgba(0,0,0,0.07)",
          }}
        >
          {/* Top bar */}
          <div style={{ background: "#0A66C2", padding: "1.5vh 1.8vw", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.6vw", lineHeight: 1 }}>in</span>
              <span style={{ color: "#fff", fontWeight: 600, fontSize: "1.1vw", marginLeft: "0.3vw" }}>LinkedIn</span>
            </div>
            <div style={{ display: "flex", gap: "1.2vw" }}>
              <div style={{ width: "1.5vw", height: "0.2vh", background: "rgba(255,255,255,0.5)", borderRadius: "2px" }} />
              <div style={{ width: "1.5vw", height: "0.2vh", background: "rgba(255,255,255,0.5)", borderRadius: "2px" }} />
              <div style={{ width: "1.5vw", height: "0.2vh", background: "rgba(255,255,255,0.5)", borderRadius: "2px" }} />
            </div>
          </div>

          {/* Profile section */}
          <div style={{ padding: "1.8vh 1.8vw", borderBottom: "1px solid #E5E7EB", background: "#fff" }}>
            <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
              <div style={{ width: "5.5vh", height: "5.5vh", borderRadius: "50%", background: "linear-gradient(135deg, #0A66C2, #004182)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "2.2vh" }}>P</span>
              </div>
              <div>
                <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#111111" }}>Priya Sharma</div>
                <div style={{ fontSize: "1vw", color: "#666666" }}>CSE Student · Open to Internships</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw", marginTop: "1.5vh" }}>
              <div>
                <div style={{ fontSize: "1.4vw", fontWeight: 800, color: "#0A66C2" }}>247</div>
                <div style={{ fontSize: "1vw", color: "#666666" }}>Connections</div>
              </div>
              <div>
                <div style={{ fontSize: "1.4vw", fontWeight: 800, color: "#0A66C2" }}>1,840</div>
                <div style={{ fontSize: "1vw", color: "#666666" }}>Profile views</div>
              </div>
              <div>
                <div style={{ fontSize: "1.4vw", fontWeight: 800, color: "#0A66C2" }}>12</div>
                <div style={{ fontSize: "1vw", color: "#666666" }}>Post views</div>
              </div>
            </div>
          </div>

          {/* Feed items */}
          <div style={{ padding: "1.5vh 1.8vw", display: "flex", flexDirection: "column", gap: "1.2vh" }}>
            <div style={{ background: "#fff", borderRadius: "0.8vw", padding: "1.2vh 1.2vw", border: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>Google · Job opportunity</div>
              <div style={{ fontSize: "1vw", color: "#666666", marginTop: "0.3vh" }}>SWE Intern · Bangalore · Easy Apply</div>
            </div>
            <div style={{ background: "#fff", borderRadius: "0.8vw", padding: "1.2vh 1.2vw", border: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>Microsoft · Recruiter viewed your profile</div>
              <div style={{ fontSize: "1vw", color: "#666666", marginTop: "0.3vh" }}>React to be seen · 5 minutes ago</div>
            </div>
            <div style={{ background: "#fff", borderRadius: "0.8vw", padding: "1.2vh 1.2vw", border: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#111111" }}>Ravi Kumar · 2nd · Alumni</div>
              <div style={{ fontSize: "1vw", color: "#666666", marginTop: "0.3vh" }}>"Great to connect! Happy to help with internship questions."</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
