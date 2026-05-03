export default function Slide01Title() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex"
      style={{ background: "linear-gradient(135deg, #F0F4F8 0%, #EBF3FB 100%)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[0.4vw]" style={{ background: "#0A66C2" }} />

      {/* Background subtle shape */}
      <div
        className="absolute"
        style={{
          right: "-8vw",
          bottom: "-10vh",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(10,102,194,0.06) 0%, rgba(10,102,194,0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-[7vw] pr-[3vw]" style={{ width: "52%", zIndex: 1 }}>
        {/* LinkedIn badge */}
        <div className="flex items-center gap-[0.8vw] mb-[2.5vh]">
          <div
            className="flex items-center justify-center rounded-[0.4vw]"
            style={{ width: "2.8vw", height: "2.8vw", background: "#0A66C2" }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.6vw", letterSpacing: "-0.02em", lineHeight: 1 }}>in</span>
          </div>
          <span style={{ color: "#0A66C2", fontWeight: 700, fontSize: "1.1vw", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            LinkedIn Masterclass
          </span>
        </div>

        {/* Main headline */}
        <div style={{ fontSize: "5.6vw", fontWeight: 800, lineHeight: 1.05, color: "#1B1B1B", letterSpacing: "-0.03em", textWrap: "balance" }}>
          Build Your
          <br />
          <span style={{ color: "#0A66C2" }}>Professional</span>
          <br />
          Presence
        </div>

        {/* Divider */}
        <div className="my-[2.5vh]" style={{ width: "5vw", height: "0.35vh", background: "#0A66C2", borderRadius: "2px" }} />

        {/* Sub text */}
        <div style={{ fontSize: "1.7vw", fontWeight: 400, color: "#4B5563", lineHeight: 1.55, textWrap: "pretty" }}>
          For first-year engineering students
          <br />
          from every background.
        </div>

        {/* Tag row */}
        <div className="flex gap-[1vw] mt-[3vh]">
          <div
            style={{
              padding: "0.6vh 1.2vw",
              borderRadius: "100px",
              background: "rgba(10,102,194,0.08)",
              color: "#0A66C2",
              fontSize: "1.2vw",
              fontWeight: 600,
            }}
          >
            Free
          </div>
          <div
            style={{
              padding: "0.6vh 1.2vw",
              borderRadius: "100px",
              background: "rgba(10,102,194,0.08)",
              color: "#0A66C2",
              fontSize: "1.2vw",
              fontWeight: 600,
            }}
          >
            Beginner Friendly
          </div>
          <div
            style={{
              padding: "0.6vh 1.2vw",
              borderRadius: "100px",
              background: "rgba(10,102,194,0.08)",
              color: "#0A66C2",
              fontSize: "1.2vw",
              fontWeight: 600,
            }}
          >
            Career Starter
          </div>
        </div>
      </div>

      {/* Right column — LinkedIn Profile Card Mockup */}
      <div className="flex items-center justify-center" style={{ width: "48%", zIndex: 1 }}>
        <div
          style={{
            width: "28vw",
            borderRadius: "1.2vw",
            background: "#fff",
            boxShadow: "0 2vh 5vh rgba(0,0,0,0.12)",
            overflow: "hidden",
          }}
        >
          {/* Banner */}
          <div
            style={{
              height: "8vh",
              background: "linear-gradient(135deg, #0A66C2 0%, #0073B1 60%, #005885 100%)",
            }}
          />

          {/* Avatar + info */}
          <div style={{ padding: "0 1.8vw 1.8vw" }}>
            {/* Avatar circle — overlaps banner */}
            <div style={{ marginTop: "-4vh", marginBottom: "1.2vh" }}>
              <div
                style={{
                  width: "7.5vh",
                  height: "7.5vh",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%)",
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

            {/* Name */}
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1B1B1B", lineHeight: 1.2 }}>
              Priya Sharma
            </div>
            {/* Headline */}
            <div style={{ fontSize: "1.1vw", fontWeight: 400, color: "#4B5563", marginTop: "0.4vh", lineHeight: 1.4 }}>
              CSE Student at NIT Raipur · Passionate about Web Dev · Open to Internships
            </div>
            {/* Location */}
            <div style={{ fontSize: "1vw", color: "#6B7280", marginTop: "0.4vh" }}>
              Raipur, Chhattisgarh, India
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "#E5E7EB", margin: "1.4vh 0" }} />

            {/* Stats row */}
            <div className="flex gap-[1.5vw]">
              <div>
                <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#0A66C2" }}>247</div>
                <div style={{ fontSize: "0.95vw", color: "#6B7280" }}>Connections</div>
              </div>
              <div>
                <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#0A66C2" }}>1,840</div>
                <div style={{ fontSize: "0.95vw", color: "#6B7280" }}>Profile views</div>
              </div>
              <div>
                <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#0A66C2" }}>12</div>
                <div style={{ fontSize: "0.95vw", color: "#6B7280" }}>Post impressions</div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "#E5E7EB", margin: "1.4vh 0" }} />

            {/* Open to work badge */}
            <div
              className="flex items-center gap-[0.6vw]"
              style={{
                padding: "0.7vh 1vw",
                borderRadius: "0.6vw",
                background: "rgba(10,102,194,0.07)",
                border: "1px solid rgba(10,102,194,0.15)",
              }}
            >
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", background: "#0A66C2" }} />
              <span style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2" }}>Open to Work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
