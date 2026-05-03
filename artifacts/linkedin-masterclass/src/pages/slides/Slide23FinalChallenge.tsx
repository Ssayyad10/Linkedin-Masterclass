export default function Slide23FinalChallenge() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex"
      style={{ background: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left blue bar */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "0.35vw", background: "#0A66C2" }} />

      {/* Slide number */}
      <div style={{ position: "absolute", bottom: "4vh", right: "5vw", fontSize: "1vw", color: "#E5E7EB", fontWeight: 600 }}>23 / 24</div>

      <div style={{ flex: 1, display: "flex" }}>
        {/* Left */}
        <div className="flex flex-col justify-center" style={{ width: "45%", paddingLeft: "7vw", paddingRight: "4vw" }}>
          <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>Final Challenge</div>
          <div style={{ fontSize: "5vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Your
            <br />
            <span style={{ color: "#0A66C2" }}>24-Hour</span>
            <br />
            Challenge
          </div>
          <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />
          <div style={{ fontSize: "1.5vw", fontWeight: 400, color: "#666666", lineHeight: 1.6 }}>
            Do this before tomorrow morning.
          </div>
        </div>

        {/* Right — 3 challenge cards */}
        <div className="flex items-center justify-center" style={{ width: "55%", paddingRight: "6vw" }}>
          <div style={{ width: "30vw", display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            {/* Challenge 1 */}
            <div style={{ background: "#FAFAFA", borderRadius: "1.2vw", padding: "2.2vh 2vw", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "6vh", height: "6vh", borderRadius: "50%", background: "#0A66C2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: "2.5vh" }}>1</span>
              </div>
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111111" }}>Complete your profile</div>
                <div style={{ fontSize: "1.2vw", color: "#666", marginTop: "0.3vh" }}>Photo · Headline · Education · Skills</div>
              </div>
            </div>

            {/* Challenge 2 */}
            <div style={{ background: "#FAFAFA", borderRadius: "1.2vw", padding: "2.2vh 2vw", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "6vh", height: "6vh", borderRadius: "50%", background: "#0A66C2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: "2.5vh" }}>2</span>
              </div>
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111111" }}>Send 5 connections</div>
                <div style={{ fontSize: "1.2vw", color: "#666", marginTop: "0.3vh" }}>Classmates · Seniors · Alumni</div>
              </div>
            </div>

            {/* Challenge 3 */}
            <div style={{ background: "#0A66C2", borderRadius: "1.2vw", padding: "2.2vh 2vw", display: "flex", alignItems: "center", gap: "1.5vw", boxShadow: "0 0.5vh 2vh rgba(10,102,194,0.3)" }}>
              <div style={{ width: "6vh", height: "6vh", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: "2.5vh" }}>3</span>
              </div>
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#fff" }}>Post in 24 hours</div>
                <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.8)", marginTop: "0.3vh" }}>Share anything you learned today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
