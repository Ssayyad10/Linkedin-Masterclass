export default function Slide04Download() {
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
          Step 1 of 6
        </div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          Download
          <br />
          LinkedIn
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#0A66C2", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.2vh" }}>1</span>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Open Play Store or App Store</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#0A66C2", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.2vh" }}>2</span>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Search "LinkedIn"</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#0A66C2", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.2vh" }}>3</span>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Tap Install — it's free</div>
          </div>
        </div>

        <div style={{ marginTop: "3vh", padding: "1.3vh 1.5vw", borderRadius: "0.8vw", background: "#F7F9FB", border: "1px solid #E5E7EB" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0A66C2" }}>Also available at linkedin.com</div>
        </div>
      </div>

      {/* Right column — App store mockup */}
      <div
        className="flex items-center justify-center"
        style={{ width: "58%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        {/* Phone frame */}
        <div
          style={{
            width: "22vw",
            height: "75vh",
            borderRadius: "2.5vw",
            border: "0.3vw solid #D1D5DB",
            background: "#F9FAFB",
            boxShadow: "0 2vh 4vh rgba(0,0,0,0.12)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Status bar */}
          <div style={{ background: "#fff", padding: "1.5vh 2vw 0.5vh", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "1.1vw", fontWeight: 700, color: "#111" }}>9:41</span>
            <div style={{ display: "flex", gap: "0.3vw", alignItems: "center" }}>
              <svg width="1.2vw" height="1.2vw" viewBox="0 0 24 24" fill="#111"><path d="M1 6l5 5 5-5 5 5 5-5"/></svg>
              <svg width="1.2vw" height="1.2vw" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M22 11h2v2h-2"/></svg>
            </div>
          </div>

          {/* App store header */}
          <div style={{ background: "#fff", padding: "0.8vh 2vw 1.2vh", borderBottom: "1px solid #E5E7EB" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111" }}>Play Store</div>
          </div>

          {/* Search bar */}
          <div style={{ padding: "1vh 1.5vw", background: "#fff" }}>
            <div style={{ background: "#F3F4F6", borderRadius: "100px", padding: "0.8vh 1.2vw", display: "flex", alignItems: "center", gap: "0.5vw" }}>
              <svg width="1.3vw" height="1.3vw" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <span style={{ fontSize: "1.1vw", color: "#9CA3AF" }}>LinkedIn</span>
            </div>
          </div>

          {/* App listing */}
          <div style={{ flex: 1, padding: "1.5vh 1.5vw", background: "#fff", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            {/* App card */}
            <div style={{ borderRadius: "1.2vw", border: "1px solid #E5E7EB", padding: "1.5vh 1.5vw", boxShadow: "0 0.3vh 1vh rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1.2vh" }}>
                {/* App icon */}
                <div style={{ width: "5.5vh", height: "5.5vh", borderRadius: "1.2vw", background: "#0A66C2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontWeight: 800, fontSize: "2.2vh" }}>in</span>
                </div>
                <div>
                  <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#111" }}>LinkedIn</div>
                  <div style={{ fontSize: "1vw", color: "#666" }}>Business Networking</div>
                </div>
              </div>

              {/* Rating */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5vw", marginBottom: "1.2vh" }}>
                <div style={{ display: "flex" }}>
                  <span style={{ fontSize: "1.2vw", color: "#F59E0B" }}>★★★★★</span>
                </div>
                <span style={{ fontSize: "1vw", color: "#666" }}>4.8 · 4.7M reviews</span>
              </div>

              {/* Screenshots row */}
              <div style={{ display: "flex", gap: "0.5vw", marginBottom: "1.2vh" }}>
                <div style={{ flex: 1, height: "6vh", borderRadius: "0.5vw", background: "linear-gradient(135deg, #EBF3FB, #D0E4F7)" }} />
                <div style={{ flex: 1, height: "6vh", borderRadius: "0.5vw", background: "linear-gradient(135deg, #EBF3FB, #D0E4F7)" }} />
                <div style={{ flex: 1, height: "6vh", borderRadius: "0.5vw", background: "linear-gradient(135deg, #EBF3FB, #D0E4F7)" }} />
              </div>

              {/* Install button */}
              <div style={{ background: "#0A66C2", borderRadius: "100px", padding: "1vh", textAlign: "center" }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.2vw" }}>Install</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
