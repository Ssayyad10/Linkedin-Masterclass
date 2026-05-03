export default function Slide02Hook() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col items-center justify-center"
      style={{ background: "#F8FAFF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* LinkedIn mark */}
      <div style={{ position: "absolute", top: "4.5vh", left: "5vw" }}>
        <div style={{ width: "2.4vw", height: "2.4vw", background: "#0A66C2", borderRadius: "0.3vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.4vw", lineHeight: 1 }}>in</span>
        </div>
      </div>

      {/* Eyebrow */}
      <div style={{ fontSize: "1.05vw", fontWeight: 700, color: "#0A66C2", letterSpacing: "0.13em", textTransform: "uppercase", marginBottom: "3.5vh" }}>
        The Head Start
      </div>

      {/* Two profile cards */}
      <div style={{ display: "flex", gap: "3.5vw", alignItems: "stretch", marginBottom: "3.5vh" }}>

        {/* WRONG card */}
        <div style={{ width: "26vw", borderRadius: "1.4vw", overflow: "hidden", boxShadow: "0 4px 32px rgba(220,38,38,0.13), 0 1px 6px rgba(0,0,0,0.07)", border: "2px solid #FEE2E2", background: "#FFFFFF" }}>
          {/* Banner */}
          <div style={{ height: "6vh", background: "linear-gradient(90deg,#f3f4f6 0%,#e5e7eb 100%)", position: "relative" }}>
            {/* Wrong badge */}
            <div style={{ position: "absolute", top: "1vh", right: "1vw", background: "#EF4444", color: "#fff", borderRadius: "999px", padding: "0.3vh 0.9vw", fontSize: "0.85vw", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.3vw" }}>
              <span>✕</span> <span>Wrong</span>
            </div>
          </div>
          {/* Avatar — no photo */}
          <div style={{ padding: "0 1.5vw", paddingBottom: "1.5vh" }}>
            <div style={{ marginTop: "-3.2vh", marginBottom: "1.2vh", width: "6vw", height: "6vw", borderRadius: "50%", background: "#D1D5DB", border: "3px solid #fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="45%" height="45%" viewBox="0 0 24 24" fill="#9CA3AF">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#111827" }}>Rahul Sharma</div>
            <div style={{ fontSize: "0.9vw", color: "#6B7280", marginTop: "0.3vh", lineHeight: 1.4 }}>Student at Some College</div>
            <div style={{ marginTop: "1.2vh", display: "flex", gap: "0.5vw", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.78vw", background: "#F3F4F6", color: "#9CA3AF", borderRadius: "999px", padding: "0.2vh 0.7vw" }}>No summary</span>
              <span style={{ fontSize: "0.78vw", background: "#F3F4F6", color: "#9CA3AF", borderRadius: "999px", padding: "0.2vh 0.7vw" }}>No skills</span>
            </div>
            {/* Stats */}
            <div style={{ marginTop: "1.8vh", display: "flex", gap: "2vw" }}>
              <div>
                <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#9CA3AF" }}>12</div>
                <div style={{ fontSize: "0.72vw", color: "#9CA3AF" }}>Connections</div>
              </div>
              <div>
                <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#9CA3AF" }}>0</div>
                <div style={{ fontSize: "0.72vw", color: "#9CA3AF" }}>Posts</div>
              </div>
              <div>
                <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#9CA3AF" }}>0</div>
                <div style={{ fontSize: "0.72vw", color: "#9CA3AF" }}>Endorsements</div>
              </div>
            </div>
            {/* Profile strength */}
            <div style={{ marginTop: "1.8vh" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75vw", color: "#9CA3AF", marginBottom: "0.4vh" }}>
                <span>Profile strength</span><span>20%</span>
              </div>
              <div style={{ height: "0.6vh", background: "#F3F4F6", borderRadius: "999px" }}>
                <div style={{ width: "20%", height: "100%", background: "#EF4444", borderRadius: "999px" }} />
              </div>
            </div>
            <div style={{ marginTop: "1.4vh", fontSize: "0.78vw", color: "#EF4444", fontWeight: 600 }}>
              ⚠ Started LinkedIn in Final Year
            </div>
          </div>
        </div>

        {/* GOOD card */}
        <div style={{ width: "26vw", borderRadius: "1.4vw", overflow: "hidden", boxShadow: "0 4px 32px rgba(10,102,194,0.16), 0 1px 6px rgba(0,0,0,0.07)", border: "2px solid #BFDBFE", background: "#FFFFFF" }}>
          {/* Banner */}
          <div style={{ height: "6vh", background: "linear-gradient(90deg,#0A66C2 0%,#1D8CF8 100%)", position: "relative" }}>
            {/* Good badge */}
            <div style={{ position: "absolute", top: "1vh", right: "1vw", background: "#22C55E", color: "#fff", borderRadius: "999px", padding: "0.3vh 0.9vw", fontSize: "0.85vw", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.3vw" }}>
              <span>✓</span> <span>Right</span>
            </div>
          </div>
          {/* Avatar — has photo */}
          <div style={{ padding: "0 1.5vw", paddingBottom: "1.5vh" }}>
            <div style={{ marginTop: "-3.2vh", marginBottom: "1.2vh", width: "6vw", height: "6vw", borderRadius: "50%", background: "linear-gradient(135deg,#0A66C2,#1D8CF8)", border: "3px solid #fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: "2vw" }}>S</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#111827" }}>Sohel Sayyad</div>
              <span style={{ background: "#EFF6FF", color: "#0A66C2", fontSize: "0.7vw", fontWeight: 700, borderRadius: "999px", padding: "0.15vh 0.55vw" }}>Open to Work</span>
            </div>
            <div style={{ fontSize: "0.9vw", color: "#374151", marginTop: "0.3vh", lineHeight: 1.4 }}>B.Tech CSE | DBATU | Aspiring Developer</div>
            <div style={{ marginTop: "1.2vh", display: "flex", gap: "0.5vw", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.78vw", background: "#EFF6FF", color: "#0A66C2", borderRadius: "999px", padding: "0.2vh 0.7vw" }}>Python</span>
              <span style={{ fontSize: "0.78vw", background: "#EFF6FF", color: "#0A66C2", borderRadius: "999px", padding: "0.2vh 0.7vw" }}>Java</span>
              <span style={{ fontSize: "0.78vw", background: "#EFF6FF", color: "#0A66C2", borderRadius: "999px", padding: "0.2vh 0.7vw" }}>Leadership</span>
            </div>
            {/* Stats */}
            <div style={{ marginTop: "1.8vh", display: "flex", gap: "2vw" }}>
              <div>
                <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0A66C2" }}>500+</div>
                <div style={{ fontSize: "0.72vw", color: "#6B7280" }}>Connections</div>
              </div>
              <div>
                <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0A66C2" }}>24</div>
                <div style={{ fontSize: "0.72vw", color: "#6B7280" }}>Posts</div>
              </div>
              <div>
                <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0A66C2" }}>18</div>
                <div style={{ fontSize: "0.72vw", color: "#6B7280" }}>Endorsements</div>
              </div>
            </div>
            {/* Profile strength */}
            <div style={{ marginTop: "1.8vh" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75vw", color: "#6B7280", marginBottom: "0.4vh" }}>
                <span>Profile strength</span><span>95%</span>
              </div>
              <div style={{ height: "0.6vh", background: "#EFF6FF", borderRadius: "999px" }}>
                <div style={{ width: "95%", height: "100%", background: "#0A66C2", borderRadius: "999px" }} />
              </div>
            </div>
            <div style={{ marginTop: "1.4vh", fontSize: "0.78vw", color: "#22C55E", fontWeight: 600 }}>
              🚀 Started LinkedIn in Year 1
            </div>
          </div>
        </div>
      </div>

      {/* Bottom message */}
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2.6vw", fontWeight: 800, color: "#111111", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Most students start in <span style={{ color: "#EF4444" }}>final year.</span>
        </div>
        <div style={{ fontSize: "2.6vw", fontWeight: 800, color: "#0A66C2", lineHeight: 1.1, letterSpacing: "-0.02em", marginTop: "0.6vh" }}>
          You're starting in <span style={{ color: "#22C55E" }}>first year.</span>
        </div>
        <div style={{ marginTop: "2vh", fontSize: "1.3vw", fontWeight: 500, color: "#6B7280" }}>
          That's a <strong style={{ color: "#0A66C2" }}>3-year head start</strong> over your competition.
        </div>
      </div>
    </div>
  );
}
