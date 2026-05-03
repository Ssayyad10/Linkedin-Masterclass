export default function Slide03Comparison() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{ background: "#F0F4F8", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-[5vw] pt-[5vh] pb-[2vh]">
        <div>
          <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5vh" }}>
            Platform Comparison
          </div>
          <div style={{ fontSize: "3.8vw", fontWeight: 800, color: "#1B1B1B", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Instagram vs LinkedIn
          </div>
        </div>
        <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#6B7280" }}>
          Same habits. Different arena.
        </div>
      </div>

      {/* Two column cards */}
      <div className="flex gap-[2vw] px-[5vw] pb-[5vh]" style={{ flex: 1, minHeight: 0 }}>

        {/* Instagram column */}
        <div
          style={{
            flex: 1,
            borderRadius: "1.2vw",
            background: "#fff",
            boxShadow: "0 0.5vh 2vh rgba(0,0,0,0.07)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "2.5vh 2.5vw",
              background: "linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCAF45 100%)",
              display: "flex",
              alignItems: "center",
              gap: "1vw",
            }}
          >
            {/* Instagram icon */}
            <div
              style={{
                width: "4.5vh",
                height: "4.5vh",
                borderRadius: "30%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px solid rgba(255,255,255,0.4)",
              }}
            >
              <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="white" stroke="none"/>
              </svg>
            </div>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "2vw", letterSpacing: "-0.01em" }}>Instagram</span>
          </div>

          {/* Items */}
          <div style={{ padding: "2.5vh 2.5vw", flex: 1, display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            <div className="flex items-start gap-[1vw]">
              <div style={{ width: "0.55vw", height: "0.55vw", borderRadius: "50%", background: "#FD1D1D", marginTop: "0.8vh", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B" }}>Followers &amp; Likes</div>
                <div style={{ fontSize: "1.2vw", color: "#6B7280", marginTop: "0.3vh" }}>Popularity drives visibility</div>
              </div>
            </div>
            <div className="flex items-start gap-[1vw]">
              <div style={{ width: "0.55vw", height: "0.55vw", borderRadius: "50%", background: "#FD1D1D", marginTop: "0.8vh", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B" }}>Personal Life</div>
                <div style={{ fontSize: "1.2vw", color: "#6B7280", marginTop: "0.3vh" }}>Photos, stories, reels</div>
              </div>
            </div>
            <div className="flex items-start gap-[1vw]">
              <div style={{ width: "0.55vw", height: "0.55vw", borderRadius: "50%", background: "#FD1D1D", marginTop: "0.8vh", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B" }}>Influencer Economy</div>
                <div style={{ fontSize: "1.2vw", color: "#6B7280", marginTop: "0.3vh" }}>Brand deals, sponsorships</div>
              </div>
            </div>
            <div className="flex items-start gap-[1vw]">
              <div style={{ width: "0.55vw", height: "0.55vw", borderRadius: "50%", background: "#FD1D1D", marginTop: "0.8vh", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B" }}>Passive Scrolling</div>
                <div style={{ fontSize: "1.2vw", color: "#6B7280", marginTop: "0.3vh" }}>Entertainment first</div>
              </div>
            </div>

            {/* Result pill */}
            <div
              style={{
                marginTop: "auto",
                padding: "1.2vh 1.5vw",
                borderRadius: "0.8vw",
                background: "rgba(253,29,29,0.06)",
                border: "1px solid rgba(253,29,29,0.15)",
              }}
            >
              <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#B91C1C" }}>Result: Entertainment &amp; Clout</div>
            </div>
          </div>
        </div>

        {/* VS badge */}
        <div className="flex items-center justify-center" style={{ width: "6vw", flexShrink: 0 }}>
          <div
            style={{
              width: "4.5vw",
              height: "4.5vw",
              borderRadius: "50%",
              background: "#1B1B1B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.5vw" }}>vs</span>
          </div>
        </div>

        {/* LinkedIn column */}
        <div
          style={{
            flex: 1,
            borderRadius: "1.2vw",
            background: "#fff",
            boxShadow: "0 0.5vh 2vh rgba(0,0,0,0.07)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "2.5vh 2.5vw",
              background: "linear-gradient(135deg, #0A66C2 0%, #004182 100%)",
              display: "flex",
              alignItems: "center",
              gap: "1vw",
            }}
          >
            <div
              style={{
                width: "4.5vh",
                height: "4.5vh",
                borderRadius: "20%",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px solid rgba(255,255,255,0.3)",
              }}
            >
              <span style={{ color: "#fff", fontWeight: 800, fontSize: "2.5vh" }}>in</span>
            </div>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "2vw", letterSpacing: "-0.01em" }}>LinkedIn</span>
          </div>

          {/* Items */}
          <div style={{ padding: "2.5vh 2.5vw", flex: 1, display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            <div className="flex items-start gap-[1vw]">
              <div style={{ width: "0.55vw", height: "0.55vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.8vh", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B" }}>Opportunities</div>
                <div style={{ fontSize: "1.2vw", color: "#6B7280", marginTop: "0.3vh" }}>Jobs, internships, referrals</div>
              </div>
            </div>
            <div className="flex items-start gap-[1vw]">
              <div style={{ width: "0.55vw", height: "0.55vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.8vh", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B" }}>Recruiter Visibility</div>
                <div style={{ fontSize: "1.2vw", color: "#6B7280", marginTop: "0.3vh" }}>Be found, not just follow</div>
              </div>
            </div>
            <div className="flex items-start gap-[1vw]">
              <div style={{ width: "0.55vw", height: "0.55vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.8vh", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B" }}>Career Growth</div>
                <div style={{ fontSize: "1.2vw", color: "#6B7280", marginTop: "0.3vh" }}>Skills, knowledge, mentors</div>
              </div>
            </div>
            <div className="flex items-start gap-[1vw]">
              <div style={{ width: "0.55vw", height: "0.55vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.8vh", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B" }}>Professional Network</div>
                <div style={{ fontSize: "1.2vw", color: "#6B7280", marginTop: "0.3vh" }}>Peers, seniors, leaders</div>
              </div>
            </div>

            {/* Result pill */}
            <div
              style={{
                marginTop: "auto",
                padding: "1.2vh 1.5vw",
                borderRadius: "0.8vw",
                background: "rgba(10,102,194,0.06)",
                border: "1px solid rgba(10,102,194,0.2)",
              }}
            >
              <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0A66C2" }}>Result: Career Acceleration</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom banner */}
      <div
        className="flex items-center justify-center"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "7vh",
          background: "#1B1B1B",
        }}
      >
        <span style={{ color: "#fff", fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.01em" }}>
          Same habits. Different arena.
          <span style={{ color: "#0A66C2", marginLeft: "0.8vw" }}>10x the impact.</span>
        </span>
      </div>
    </div>
  );
}
