export default function Slide04ProfileSteps() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex"
      style={{ background: "#F0F4F8", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left column — heading */}
      <div
        className="flex flex-col justify-center"
        style={{ width: "38%", paddingLeft: "6vw", paddingRight: "2vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>
          Getting Started
        </div>
        <div style={{ fontSize: "3.8vw", fontWeight: 800, color: "#1B1B1B", letterSpacing: "-0.03em", lineHeight: 1.08, textWrap: "balance" }}>
          Build Your
          <br />
          Profile
          <br />
          <span style={{ color: "#0A66C2" }}>in 5 Steps</span>
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />
        <div style={{ fontSize: "1.5vw", fontWeight: 400, color: "#6B7280", lineHeight: 1.55 }}>
          Takes less than
          <br />
          30 minutes.
          <br />
          Pays off for years.
        </div>
      </div>

      {/* Right column — step cards */}
      <div
        className="flex flex-col justify-center"
        style={{ width: "62%", paddingRight: "5vw", paddingLeft: "2vw", paddingTop: "5vh", paddingBottom: "5vh", gap: "1.5vh", display: "flex" }}
      >
        {/* Step 1 */}
        <div
          style={{
            background: "#fff",
            borderRadius: "1vw",
            padding: "1.8vh 1.8vw",
            boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            gap: "1.5vw",
          }}
        >
          <div
            style={{
              width: "5vh",
              height: "5vh",
              borderRadius: "50%",
              background: "#0A66C2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.8vh" }}>1</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B" }}>Profile Photo</div>
            <div style={{ fontSize: "1.2vw", color: "#6B7280", marginTop: "0.3vh" }}>Clear, bright, professional — plain background</div>
          </div>
          <div
            style={{
              padding: "0.5vh 1vw",
              borderRadius: "100px",
              background: "rgba(10,102,194,0.08)",
              fontSize: "1vw",
              fontWeight: 600,
              color: "#0A66C2",
              flexShrink: 0,
            }}
          >
            High impact
          </div>
        </div>

        {/* Step 2 */}
        <div
          style={{
            background: "#fff",
            borderRadius: "1vw",
            padding: "1.8vh 1.8vw",
            boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            gap: "1.5vw",
          }}
        >
          <div
            style={{
              width: "5vh",
              height: "5vh",
              borderRadius: "50%",
              background: "#0A66C2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.8vh" }}>2</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B" }}>Headline</div>
            <div style={{ fontSize: "1.2vw", color: "#6B7280", marginTop: "0.3vh" }}>Who you are + what you're learning</div>
          </div>
          <div
            style={{
              padding: "0.5vh 1vw",
              borderRadius: "100px",
              background: "rgba(10,102,194,0.08)",
              fontSize: "1vw",
              fontWeight: 600,
              color: "#0A66C2",
              flexShrink: 0,
            }}
          >
            Always visible
          </div>
        </div>

        {/* Step 3 */}
        <div
          style={{
            background: "#fff",
            borderRadius: "1vw",
            padding: "1.8vh 1.8vw",
            boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            gap: "1.5vw",
          }}
        >
          <div
            style={{
              width: "5vh",
              height: "5vh",
              borderRadius: "50%",
              background: "#0A66C2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.8vh" }}>3</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B" }}>About Section</div>
            <div style={{ fontSize: "1.2vw", color: "#6B7280", marginTop: "0.3vh" }}>Your story in 3–4 sentences</div>
          </div>
          <div
            style={{
              padding: "0.5vh 1vw",
              borderRadius: "100px",
              background: "rgba(10,102,194,0.08)",
              fontSize: "1vw",
              fontWeight: 600,
              color: "#0A66C2",
              flexShrink: 0,
            }}
          >
            Your voice
          </div>
        </div>

        {/* Step 4 */}
        <div
          style={{
            background: "#fff",
            borderRadius: "1vw",
            padding: "1.8vh 1.8vw",
            boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            gap: "1.5vw",
          }}
        >
          <div
            style={{
              width: "5vh",
              height: "5vh",
              borderRadius: "50%",
              background: "#0A66C2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.8vh" }}>4</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B" }}>Education</div>
            <div style={{ fontSize: "1.2vw", color: "#6B7280", marginTop: "0.3vh" }}>Your college, branch, year</div>
          </div>
          <div
            style={{
              padding: "0.5vh 1vw",
              borderRadius: "100px",
              background: "rgba(10,102,194,0.08)",
              fontSize: "1vw",
              fontWeight: 600,
              color: "#0A66C2",
              flexShrink: 0,
            }}
          >
            Builds trust
          </div>
        </div>

        {/* Step 5 */}
        <div
          style={{
            background: "#fff",
            borderRadius: "1vw",
            padding: "1.8vh 1.8vw",
            boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            gap: "1.5vw",
          }}
        >
          <div
            style={{
              width: "5vh",
              height: "5vh",
              borderRadius: "50%",
              background: "#0A66C2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.8vh" }}>5</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B" }}>Skills</div>
            <div style={{ fontSize: "1.2vw", color: "#6B7280", marginTop: "0.3vh" }}>Add at least 5 relevant skills</div>
          </div>
          <div
            style={{
              padding: "0.5vh 1vw",
              borderRadius: "100px",
              background: "rgba(10,102,194,0.08)",
              fontSize: "1vw",
              fontWeight: 600,
              color: "#0A66C2",
              flexShrink: 0,
            }}
          >
            Search boost
          </div>
        </div>
      </div>
    </div>
  );
}
