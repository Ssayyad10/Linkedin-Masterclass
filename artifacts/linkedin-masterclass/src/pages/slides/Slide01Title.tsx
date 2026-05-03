export default function Slide01Title() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex"
      style={{ background: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left blue accent bar */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "0.35vw", background: "#0A66C2" }} />
      {/* Left column */}
      <div
        className="flex flex-col justify-center"
        style={{ width: "48%", paddingLeft: "7vw", paddingRight: "3vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        {/* LinkedIn badge */}
        <div className="flex items-center gap-[0.7vw]" style={{ marginBottom: "3vh" }}>
          <div
            style={{
              width: "2.6vw",
              height: "2.6vw",
              background: "#0A66C2",
              borderRadius: "0.4vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.5vw", lineHeight: 1 }}>in</span>
          </div>
          <span style={{ color: "#0A66C2", fontWeight: 700, fontSize: "1vw", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            LinkedIn Masterclass
          </span>
        </div>

        {/* Main headline */}
        <div style={{ fontSize: "5vw", fontWeight: 800, color: "#111111", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
          Build Your
          <br />
          <span style={{ color: "#0A66C2" }}>Career</span>
          <br />
          From Day 1
        </div>

        {/* Divider */}
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />

        {/* Subtitle */}
        <div style={{ fontSize: "1.6vw", fontWeight: 400, color: "#666666", lineHeight: 1.55 }}>For  Students</div>

        {/* Speaker */}
        <div style={{ marginTop: "2vh", display: "flex", alignItems: "center", gap: "0.6vw" }}>
          <svg width="1.3vw" height="1.3vw" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <div style={{ fontSize: "1.2vw", color: "#9CA3AF", fontWeight: 500 }}>Presented by <span style={{ color: "#0A66C2", fontWeight: 700 }}>Sohel Sayyad</span></div>
        </div>

        {/* Tags */}
        <div className="flex gap-[0.8vw]" style={{ marginTop: "3vh" }}>
          <div style={{ padding: "0.5vh 1.1vw", borderRadius: "100px", background: "#F7F9FB", border: "1px solid #E5E7EB", fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>Free</div>
          <div style={{ padding: "0.5vh 1.1vw", borderRadius: "100px", background: "#F7F9FB", border: "1px solid #E5E7EB", fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>Beginner Friendly</div>
          <div style={{ padding: "0.5vh 1.1vw", borderRadius: "100px", background: "#F7F9FB", border: "1px solid #E5E7EB", fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>Action-Oriented</div>
        </div>
      </div>
      {/* Right column — laptop visual */}
      <div
        className="flex items-center justify-center"
        style={{ width: "52%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        {/* Student + laptop visual card */}
        <div
          style={{
            width: "36vw",
            height: "72vh",
            borderRadius: "1.5vw",
            background: "linear-gradient(145deg, #E8F1FB 0%, #D0E4F7 40%, #B8D4F0 100%)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 2vh 5vh rgba(10,102,194,0.12)",
          }}
        >
          {/* Decorative circles */}
          <div style={{ position: "absolute", top: "-5vh", right: "-5vw", width: "20vw", height: "20vw", borderRadius: "50%", background: "rgba(10,102,194,0.08)" }} />
          <div style={{ position: "absolute", bottom: "-3vh", left: "-3vw", width: "14vw", height: "14vw", borderRadius: "50%", background: "rgba(10,102,194,0.06)" }} />

          {/* Laptop SVG */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <svg width="22vw" height="16vh" viewBox="0 0 320 200" fill="none">
              {/* Screen */}
              <rect x="40" y="10" width="240" height="155" rx="8" fill="#1B2A3A" />
              <rect x="48" y="18" width="224" height="139" rx="4" fill="#0A66C2" opacity="0.85" />
              {/* LinkedIn UI on screen */}
              <rect x="56" y="26" width="80" height="10" rx="3" fill="rgba(255,255,255,0.3)" />
              <rect x="56" y="44" width="60" height="8" rx="3" fill="rgba(255,255,255,0.5)" />
              <rect x="56" y="58" width="100" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
              <rect x="56" y="70" width="100" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
              <circle cx="228" cy="60" r="28" fill="rgba(255,255,255,0.15)" />
              <circle cx="228" cy="52" r="10" fill="rgba(255,255,255,0.4)" />
              <rect x="210" y="68" width="36" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
              {/* Base */}
              <path d="M20 168 L40 165 L280 165 L300 168 L320 185 H0 Z" fill="#CBD5E1" />
              <rect x="140" y="165" width="40" height="4" rx="2" fill="#94A3B8" />
            </svg>
          </div>

          {/* Top-right badge */}
          <div
            style={{
              position: "absolute",
              top: "3vh",
              right: "2vw",
              background: "#0A66C2",
              borderRadius: "0.8vw",
              padding: "0.8vh 1.2vw",
            }}
          >
            <div style={{ color: "#fff", fontSize: "1vw", fontWeight: 700 }}>Start Today</div>
          </div>

          {/* Bottom stat */}
          <div
            style={{
              position: "absolute",
              bottom: "3vh",
              left: "2vw",
              right: "2vw",
              background: "rgba(255,255,255,0.9)",
              borderRadius: "1vw",
              padding: "1.2vh 1.5vw",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#0A66C2" }}>1B+</div>
              <div style={{ fontSize: "1vw", color: "#666", marginTop: "0.2vh" }}>professionals waiting</div>
            </div>
            <div style={{ width: "1px", height: "4vh", background: "#E5E7EB" }} />
            <div>
              <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#0A66C2" }}>Year 1</div>
              <div style={{ fontSize: "1vw", color: "#666", marginTop: "0.2vh" }}>the right time to start</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
