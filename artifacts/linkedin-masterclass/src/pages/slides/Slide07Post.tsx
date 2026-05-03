export default function Slide07Post() {
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
          Content
        </div>
        <div style={{ fontSize: "3.8vw", fontWeight: 800, color: "#1B1B1B", letterSpacing: "-0.03em", lineHeight: 1.1, textWrap: "balance" }}>
          Your First
          <br />
          LinkedIn Post
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
          <div className="flex items-start gap-[0.8vw]">
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.9vh", flexShrink: 0 }} />
            <div style={{ fontSize: "1.45vw", fontWeight: 500, color: "#374151", lineHeight: 1.5 }}>
              Share what you learned this week
            </div>
          </div>
          <div className="flex items-start gap-[0.8vw]">
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.9vh", flexShrink: 0 }} />
            <div style={{ fontSize: "1.45vw", fontWeight: 500, color: "#374151", lineHeight: 1.5 }}>
              Talk about a project, a book, a class takeaway
            </div>
          </div>
          <div className="flex items-start gap-[0.8vw]">
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.9vh", flexShrink: 0 }} />
            <div style={{ fontSize: "1.45vw", fontWeight: 500, color: "#374151", lineHeight: 1.5 }}>
              You don't need to be an expert — just be genuine
            </div>
          </div>
          <div className="flex items-start gap-[0.8vw]">
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", marginTop: "0.9vh", flexShrink: 0 }} />
            <div style={{ fontSize: "1.45vw", fontWeight: 500, color: "#374151", lineHeight: 1.5 }}>
              One post a week is enough to get noticed
            </div>
          </div>
        </div>
      </div>

      {/* Right column — LinkedIn post mockup */}
      <div
        className="flex items-center justify-center"
        style={{ width: "55%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div
          style={{
            width: "30vw",
            background: "#fff",
            borderRadius: "1.2vw",
            boxShadow: "0 0.5vh 2.5vh rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          {/* Post header */}
          <div style={{ padding: "1.8vh 1.5vw 1.2vh", display: "flex", alignItems: "flex-start", gap: "0.8vw" }}>
            <div
              style={{
                width: "5.5vh",
                height: "5.5vh",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0A66C2, #004182)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "2vh" }}>P</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1B1B1B" }}>Priya Sharma</div>
              <div style={{ fontSize: "1vw", color: "#6B7280", lineHeight: 1.4 }}>
                CSE Student | Web Dev | Open to Internships
              </div>
              <div style={{ fontSize: "0.9vw", color: "#9CA3AF", marginTop: "0.2vh" }}>2 hours ago · Public</div>
            </div>
            {/* Follow button */}
            <div
              style={{
                padding: "0.5vh 1vw",
                borderRadius: "100px",
                border: "1.5px solid #0A66C2",
                fontSize: "1vw",
                fontWeight: 600,
                color: "#0A66C2",
                flexShrink: 0,
              }}
            >
              + Follow
            </div>
          </div>

          {/* Post body */}
          <div style={{ padding: "0 1.5vw 1.5vh" }}>
            <div style={{ fontSize: "1.15vw", color: "#374151", lineHeight: 1.65, textWrap: "pretty" }}>
              Just finished my first C++ assignment and it completely broke my brain.
            </div>
            <div style={{ fontSize: "1.15vw", color: "#374151", lineHeight: 1.65, marginTop: "0.8vh", textWrap: "pretty" }}>
              I kept getting errors for 2 hours. Then realized I forgot a semicolon.
            </div>
            <div style={{ fontSize: "1.15vw", color: "#374151", lineHeight: 1.65, marginTop: "0.8vh", textWrap: "pretty" }}>
              Lesson learned: debugging is a skill, not a failure.
            </div>
            <div style={{ fontSize: "1.15vw", color: "#374151", lineHeight: 1.65, marginTop: "0.8vh" }}>
              If you're also a first-year student figuring things out, let's connect.
            </div>

            {/* Hashtags */}
            <div style={{ marginTop: "1vh", fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>
              #Engineering #Coding #FirstYear #LearnInPublic
            </div>
          </div>

          {/* Reactions bar */}
          <div
            style={{
              padding: "0.8vh 1.5vw",
              borderTop: "1px solid #E5E7EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.3vw" }}>
              {/* Reaction icons */}
              <div style={{ display: "flex", marginRight: "0.3vw" }}>
                <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#0A66C2", border: "1.5px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3 }}>
                  <span style={{ fontSize: "1.2vh" }}>👍</span>
                </div>
                <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#F5A623", border: "1.5px solid #fff", marginLeft: "-0.4vh", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                  <span style={{ fontSize: "1.2vh" }}>🧡</span>
                </div>
              </div>
              <span style={{ fontSize: "1.1vw", color: "#6B7280" }}>148 reactions</span>
            </div>
            <span style={{ fontSize: "1.1vw", color: "#6B7280" }}>23 comments</span>
          </div>

          {/* Action bar */}
          <div
            style={{
              padding: "1vh 1.5vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              borderTop: "1px solid #E5E7EB",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.4vw", cursor: "default" }}>
              <svg width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
              </svg>
              <span style={{ fontSize: "1.1vw", color: "#6B7280", fontWeight: 500 }}>Like</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4vw", cursor: "default" }}>
              <svg width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span style={{ fontSize: "1.1vw", color: "#6B7280", fontWeight: 500 }}>Comment</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4vw", cursor: "default" }}>
              <svg width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
              <span style={{ fontSize: "1.1vw", color: "#6B7280", fontWeight: 500 }}>Repost</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
