export default function Slide09Headline() {
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
          Profile Headline
        </div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          Your Headline
          <br />
          Speaks First
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0, marginTop: "0.8vh" }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>LinkedIn adds one automatically</div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0, marginTop: "0.8vh" }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>You can improve it anytime</div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0, marginTop: "0.8vh" }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Shows in every search result</div>
          </div>
        </div>

        <div style={{ marginTop: "3vh", padding: "1.3vh 1.5vw", borderRadius: "0.8vw", background: "#F7F9FB", border: "1px solid #E5E7EB" }}>
          <div style={{ fontSize: "1vw", color: "#666", marginBottom: "0.3vh" }}>Formula</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#0A66C2" }}>[Role] | [Skill] | [Goal]</div>
        </div>
      </div>

      {/* Right column — profile headline UI */}
      <div
        className="flex items-center justify-center"
        style={{ width: "58%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ width: "32vw", display: "flex", flexDirection: "column", gap: "2vh" }}>
          {/* Profile card */}
          <div style={{ background: "#fff", borderRadius: "1.2vw", border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 0.5vh 2vh rgba(0,0,0,0.08)" }}>
            <div style={{ height: "7vh", background: "linear-gradient(135deg, #0A66C2, #004182)" }} />
            <div style={{ padding: "0 1.8vw 1.8vw" }}>
              <div style={{ marginTop: "-3.5vh", marginBottom: "1vh" }}>
                <img src="/linkedin-masterclass/sohel.png" alt="Sohel Sayyad" style={{ width: "6.5vh", height: "6.5vh", borderRadius: "50%", objectFit: "cover", border: "0.3vh solid #fff", display: "block" }} />
              </div>
              <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#111111" }}>Sohel Sayyad</div>

              {/* Highlighted headline */}
              <div style={{ marginTop: "1vh", padding: "0.8vh 1vw", borderRadius: "0.5vw", background: "rgba(10,102,194,0.07)", border: "1.5px solid rgba(10,102,194,0.3)" }}>
                <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.3vh" }}>Your headline</div>
                <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>CSE Student | Passionate about Web Dev | Open to Internships</div>
              </div>

              <div style={{ fontSize: "1vw", color: "#666", marginTop: "0.6vh" }}>DBATU · Lonere, Maharashtra, India</div>
            </div>
          </div>

          {/* Edit indicator */}
          <div style={{ background: "#F7F9FB", borderRadius: "1vw", padding: "1.5vh 1.8vw", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", gap: "1vw" }}>
            <svg width="2vw" height="2vw" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            <div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#111111" }}>Edit your headline anytime</div>
              <div style={{ fontSize: "1vw", color: "#666666" }}>Profile → Edit intro → Headline field</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
