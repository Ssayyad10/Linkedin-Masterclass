export default function Slide06Comparison() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{ background: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Header */}
      <div style={{ padding: "4vh 6vw 2vh", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5vh" }}>Platform Comparison</div>
          <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>Instagram vs LinkedIn</div>
        </div>
        <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#666666" }}>Same habits. Different results.</div>
      </div>

      {/* Two cards */}
      <div style={{ flex: 1, display: "flex", gap: "2vw", padding: "0 6vw 5vh", minHeight: 0 }}>

        {/* Instagram */}
        <div style={{ flex: 1, borderRadius: "1.2vw", border: "1px solid #E5E7EB", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.05)" }}>
          <div style={{ padding: "2vh 2.5vw", background: "linear-gradient(135deg, #833AB4 0%, #FD1D1D 55%, #FCAF45 100%)", display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "4.5vh", height: "4.5vh", borderRadius: "30%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid rgba(255,255,255,0.4)" }}>
              <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>
            </div>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "2vw" }}>Instagram</span>
          </div>
          <div style={{ padding: "2.5vh 2.5vw", flex: 1, display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            <div style={{ display: "flex", gap: "0.8vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#FD1D1D", marginTop: "0.8vh", flexShrink: 0 }} />
              <div><div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111" }}>Entertainment</div><div style={{ fontSize: "1.2vw", color: "#666", marginTop: "0.2vh" }}>Reels, stories, trends</div></div>
            </div>
            <div style={{ display: "flex", gap: "0.8vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#FD1D1D", marginTop: "0.8vh", flexShrink: 0 }} />
              <div><div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111" }}>Followers &amp; likes</div><div style={{ fontSize: "1.2vw", color: "#666", marginTop: "0.2vh" }}>Popularity as the metric</div></div>
            </div>
            <div style={{ display: "flex", gap: "0.8vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#FD1D1D", marginTop: "0.8vh", flexShrink: 0 }} />
              <div><div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111" }}>Personal life</div><div style={{ fontSize: "1.2vw", color: "#666", marginTop: "0.2vh" }}>Photos, moments, memories</div></div>
            </div>
            <div style={{ marginTop: "auto", padding: "1.2vh 1.5vw", borderRadius: "0.8vw", background: "rgba(253,29,29,0.06)", border: "1px solid rgba(253,29,29,0.15)" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#B91C1C" }}>Result: Likes</div>
            </div>
          </div>
        </div>

        {/* VS */}
        <div style={{ width: "6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <div style={{ width: "4.5vw", height: "4.5vw", borderRadius: "50%", background: "#111111", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.4vw" }}>vs</span>
          </div>
        </div>

        {/* LinkedIn */}
        <div style={{ flex: 1, borderRadius: "1.2vw", border: "1px solid #E5E7EB", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.05)" }}>
          <div style={{ padding: "2vh 2.5vw", background: "linear-gradient(135deg, #0A66C2, #004182)", display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "4.5vh", height: "4.5vh", borderRadius: "20%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid rgba(255,255,255,0.3)" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: "2.5vh" }}>in</span>
            </div>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "2vw" }}>LinkedIn</span>
          </div>
          <div style={{ padding: "2.5vh 2.5vw", flex: 1, display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            <div style={{ display: "flex", gap: "0.8vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.8vh", flexShrink: 0 }} />
              <div><div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111" }}>Network</div><div style={{ fontSize: "1.2vw", color: "#666", marginTop: "0.2vh" }}>Seniors, alumni, leaders</div></div>
            </div>
            <div style={{ display: "flex", gap: "0.8vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.8vh", flexShrink: 0 }} />
              <div><div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111" }}>Opportunities</div><div style={{ fontSize: "1.2vw", color: "#666", marginTop: "0.2vh" }}>Jobs, internships, referrals</div></div>
            </div>
            <div style={{ display: "flex", gap: "0.8vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.8vh", flexShrink: 0 }} />
              <div><div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#111" }}>Career identity</div><div style={{ fontSize: "1.2vw", color: "#666", marginTop: "0.2vh" }}>Your professional brand</div></div>
            </div>
            <div style={{ marginTop: "auto", padding: "1.2vh 1.5vw", borderRadius: "0.8vw", background: "rgba(10,102,194,0.06)", border: "1px solid rgba(10,102,194,0.2)" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#0A66C2" }}>Result: Career Growth</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "6.5vh", background: "#111111", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#fff", fontSize: "1.5vw", fontWeight: 700 }}>Same habits. Different arena. <span style={{ color: "#0A66C2" }}>10x the impact.</span></span>
      </div>
    </div>
  );
}
