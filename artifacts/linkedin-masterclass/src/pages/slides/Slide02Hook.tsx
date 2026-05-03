export default function Slide02Hook() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(160deg, #0A66C2 0%, #005885 100%)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Subtle radial highlight */}
      <div
        style={{
          position: "absolute",
          top: "-10vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "80vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 65%)",
          pointerEvents: "none",
        }}
      />

      {/* LinkedIn "in" mark top-left */}
      <div style={{ position: "absolute", top: "5vh", left: "5vw" }}>
        <div
          style={{
            width: "2.8vw",
            height: "2.8vw",
            borderRadius: "0.4vw",
            background: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.6vw", lineHeight: 1 }}>in</span>
        </div>
      </div>

      {/* Centered content */}
      <div className="flex flex-col items-center" style={{ zIndex: 1, textAlign: "center" }}>
        {/* Eyebrow */}
        <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "rgba(255,255,255,0.65)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "2vh" }}>
          The Reality Check
        </div>

        {/* Big stat */}
        <div style={{ fontSize: "13vw", fontWeight: 800, color: "#fff", lineHeight: 0.9, letterSpacing: "-0.04em" }}>
          1B+
        </div>

        {/* Stat label */}
        <div style={{ fontSize: "2.2vw", fontWeight: 500, color: "rgba(255,255,255,0.85)", marginTop: "1.5vh", letterSpacing: "-0.01em" }}>
          professionals on LinkedIn
        </div>

        {/* Divider */}
        <div style={{ width: "4vw", height: "2px", background: "rgba(255,255,255,0.35)", margin: "3vh 0" }} />

        {/* Three chips */}
        <div className="flex gap-[2vw]">
          <div
            style={{
              padding: "1vh 1.8vw",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: "1.3vw",
              fontWeight: 600,
            }}
          >
            90% of recruiters use it
          </div>
          <div
            style={{
              padding: "1vh 1.8vw",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: "1.3vw",
              fontWeight: 600,
            }}
          >
            58M+ companies listed
          </div>
          <div
            style={{
              padding: "1vh 1.8vw",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: "1.3vw",
              fontWeight: 600,
            }}
          >
            10B+ job applications/year
          </div>
        </div>

        {/* Quote */}
        <div
          style={{
            marginTop: "4vh",
            fontSize: "1.8vw",
            fontWeight: 400,
            color: "rgba(255,255,255,0.75)",
            maxWidth: "50vw",
            lineHeight: 1.55,
            textWrap: "balance",
          }}
        >
          Your profile is your first impression —
          <br />
          <span style={{ color: "#fff", fontWeight: 600 }}>before you say a word.</span>
        </div>
      </div>

      {/* Bottom slide number */}
      <div style={{ position: "absolute", bottom: "3vh", right: "4vw", fontSize: "1vw", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
        02 / 10
      </div>
    </div>
  );
}
