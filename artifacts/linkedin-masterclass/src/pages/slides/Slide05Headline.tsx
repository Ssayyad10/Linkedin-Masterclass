export default function Slide05Headline() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex"
      style={{ background: "#F0F4F8", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left column */}
      <div
        className="flex flex-col justify-center"
        style={{ width: "45%", paddingLeft: "6vw", paddingRight: "3vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>
          Profile Headline
        </div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#1B1B1B", letterSpacing: "-0.03em", lineHeight: 1.1, textWrap: "balance" }}>
          Your Headline
          <br />
          Is Your Pitch
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />

        <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#4B5563", lineHeight: 1.6, textWrap: "pretty" }}>
          Your headline appears in every search result,
          <br />
          every connection request, every notification.
        </div>

        <div
          style={{
            marginTop: "3vh",
            padding: "1.5vh 1.5vw",
            borderRadius: "0.8vw",
            background: "rgba(10,102,194,0.07)",
            border: "1px solid rgba(10,102,194,0.15)",
          }}
        >
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0A66C2" }}>
            120 characters — use every one of them.
          </div>
        </div>
      </div>

      {/* Right column — LinkedIn profile mockup with headline focus */}
      <div
        className="flex items-center justify-center"
        style={{ width: "55%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ width: "32vw" }}>
          {/* Profile card */}
          <div
            style={{
              background: "#fff",
              borderRadius: "1.2vw",
              boxShadow: "0 0.5vh 2.5vh rgba(0,0,0,0.1)",
              overflow: "hidden",
              marginBottom: "2vh",
            }}
          >
            {/* Banner */}
            <div style={{ height: "7vh", background: "linear-gradient(135deg, #0A66C2, #004182)" }} />

            <div style={{ padding: "0 1.8vw 1.8vw" }}>
              {/* Avatar */}
              <div style={{ marginTop: "-3.5vh", marginBottom: "1vh" }}>
                <div
                  style={{
                    width: "6.5vh",
                    height: "6.5vh",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #cbd5e1, #94a3b8)",
                    border: "0.3vh solid #fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="45%" height="45%" viewBox="0 0 24 24" fill="#6B7280">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
                </div>
              </div>

              <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1B1B1B" }}>Rahul Verma</div>

              {/* Bad headline */}
              <div style={{ marginTop: "1.5vh" }}>
                <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5vh" }}>
                  Before
                </div>
                <div
                  style={{
                    padding: "1.2vh 1.2vw",
                    borderRadius: "0.6vw",
                    background: "rgba(239,68,68,0.06)",
                    border: "1px solid rgba(239,68,68,0.2)",
                  }}
                >
                  <div style={{ fontSize: "1.1vw", fontWeight: 500, color: "#DC2626" }}>
                    Student at XYZ College
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div style={{ textAlign: "center", fontSize: "1.5vw", color: "#9CA3AF", margin: "1vh 0" }}>
                ↓
              </div>

              {/* Good headline */}
              <div>
                <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5vh" }}>
                  After
                </div>
                <div
                  style={{
                    padding: "1.2vh 1.2vw",
                    borderRadius: "0.6vw",
                    background: "rgba(10,102,194,0.06)",
                    border: "1.5px solid rgba(10,102,194,0.3)",
                  }}
                >
                  <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>
                    CSE Student | Passionate about Web Dev | Open to Internships
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tip card */}
          <div
            style={{
              background: "#1B1B1B",
              borderRadius: "1vw",
              padding: "1.8vh 1.8vw",
            }}
          >
            <div style={{ fontSize: "1vw", fontWeight: 600, color: "#9CA3AF", marginBottom: "0.5vh" }}>Pro formula</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#fff", lineHeight: 1.5 }}>
              [Role] | [Skill/Interest] | [What you want]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
