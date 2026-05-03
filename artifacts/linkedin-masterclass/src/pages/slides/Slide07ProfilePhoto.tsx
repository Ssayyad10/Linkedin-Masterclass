export default function Slide07ProfilePhoto() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex"
      style={{ background: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left column */}
      <div
        className="flex flex-col justify-center"
        style={{ width: "40%", paddingLeft: "7vw", paddingRight: "3vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>
          Profile Photo
        </div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          Your Photo
          <br />
          = First Impression
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Clear face, looking at camera</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Plain or simple background</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Good natural lighting</div>
          </div>
        </div>

        <div style={{ marginTop: "3vh", padding: "1.3vh 1.5vw", borderRadius: "0.8vw", background: "#F7F9FB", border: "1px solid #E5E7EB" }}>
          <div style={{ fontSize: "1vw", color: "#666", marginBottom: "0.3vh" }}>How to add</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0A66C2" }}>Open Profile → Edit → Upload Photo</div>
        </div>
      </div>

      {/* Right column — Good vs Bad comparison */}
      <div
        className="flex items-center justify-center gap-[3vw]"
        style={{ width: "60%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        {/* Bad photo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5vh" }}>
          <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#DC2626", textTransform: "uppercase", letterSpacing: "0.08em" }}>Bad</div>
          <div
            style={{
              width: "15vw",
              height: "15vw",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #374151, #1F2937)",
              border: "0.4vw solid #FCA5A5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Dark/unclear face silhouette */}
            <svg width="50%" height="50%" viewBox="0 0 60 60" fill="rgba(255,255,255,0.15)">
              <circle cx="30" cy="22" r="10"/>
              <path d="M10 50 C10 35 20 30 30 30 C40 30 50 35 50 50 Z"/>
            </svg>
            {/* X overlay */}
            <div style={{ position: "absolute", inset: 0, background: "rgba(220,38,38,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="30%" height="30%" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8vh", alignItems: "flex-start", width: "15vw" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
              <svg width="1.2vw" height="1.2vw" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              <span style={{ fontSize: "1.2vw", color: "#666" }}>Dark or blurry</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
              <svg width="1.2vw" height="1.2vw" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              <span style={{ fontSize: "1.2vw", color: "#666" }}>Group photo</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
              <svg width="1.2vw" height="1.2vw" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              <span style={{ fontSize: "1.2vw", color: "#666" }}>Selfie with filter</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div style={{ fontSize: "3vw", color: "#D1D5DB" }}>→</div>

        {/* Good photo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5vh" }}>
          <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#16A34A", textTransform: "uppercase", letterSpacing: "0.08em" }}>Good</div>
          <div
            style={{
              width: "15vw",
              height: "15vw",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #DBEAFE, #93C5FD)",
              border: "0.4vw solid #86EFAC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Clear face silhouette */}
            <svg width="50%" height="50%" viewBox="0 0 60 60" fill="#3B82F6">
              <circle cx="30" cy="22" r="10"/>
              <path d="M10 50 C10 35 20 30 30 30 C40 30 50 35 50 50 Z"/>
            </svg>
            {/* Check overlay */}
            <div style={{ position: "absolute", bottom: "0.5vw", right: "0.5vw", width: "3.5vw", height: "3.5vw", borderRadius: "50%", background: "#16A34A", border: "0.2vw solid #fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8vh", alignItems: "flex-start", width: "15vw" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
              <svg width="1.2vw" height="1.2vw" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span style={{ fontSize: "1.2vw", color: "#666" }}>Bright, clear face</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
              <svg width="1.2vw" height="1.2vw" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span style={{ fontSize: "1.2vw", color: "#666" }}>Plain background</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
              <svg width="1.2vw" height="1.2vw" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span style={{ fontSize: "1.2vw", color: "#666" }}>Just you, smiling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
