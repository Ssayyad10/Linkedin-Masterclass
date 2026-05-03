export default function Slide17WhatToPost() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex"
      style={{ background: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left */}
      <div
        className="flex flex-col justify-center"
        style={{ width: "42%", paddingLeft: "7vw", paddingRight: "3vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>Content</div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          What to
          <br />
          Post
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vw", height: "2.2vw", background: "#F7F9FB", border: "1px solid #E5E7EB", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>What you learned this week</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vw", height: "2.2vw", background: "#F7F9FB", border: "1px solid #E5E7EB", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Small projects you built</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vw", height: "2.2vw", background: "#F7F9FB", border: "1px solid #E5E7EB", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Questions to your network</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vw", height: "2.2vw", background: "#F7F9FB", border: "1px solid #E5E7EB", borderRadius: "0.5vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Your journey as a student</div>
          </div>
        </div>
      </div>

      {/* Right — 2 mini post cards */}
      <div
        className="flex items-center justify-center"
        style={{ width: "58%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ width: "34vw", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          {/* Post card 1 */}
          <div style={{ background: "#fff", borderRadius: "1.2vw", border: "1px solid #E5E7EB", padding: "1.8vh 2vw", boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8vw", marginBottom: "1.2vh" }}>
              <img src="https://i.pravatar.cc/150?img=12" alt="Sohel Sayyad" style={{ width: "4.5vh", height: "4.5vh", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#111" }}>Sohel Sayyad</div>
                <div style={{ fontSize: "0.95vw", color: "#9CA3AF" }}>2 days ago</div>
              </div>
            </div>
            <div style={{ fontSize: "1.1vw", color: "#374151", lineHeight: 1.6 }}>
              Completed my first Python course today on Coursera. Learned variables, loops, and functions.
              <span style={{ color: "#0A66C2", fontWeight: 600 }}> #Python #Learning #FirstYear</span>
            </div>
            <div style={{ marginTop: "1vh", display: "flex", gap: "1.5vw", paddingTop: "0.8vh", borderTop: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: "1vw", color: "#666" }}>42 likes</span>
              <span style={{ fontSize: "1vw", color: "#666" }}>8 comments</span>
            </div>
          </div>

          {/* Post card 2 */}
          <div style={{ background: "#fff", borderRadius: "1.2vw", border: "1px solid #E5E7EB", padding: "1.8vh 2vw", boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8vw", marginBottom: "1.2vh" }}>
              <img src="https://i.pravatar.cc/150?img=12" alt="Sohel Sayyad" style={{ width: "4.5vh", height: "4.5vh", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#111" }}>Sohel Sayyad</div>
                <div style={{ fontSize: "0.95vw", color: "#9CA3AF" }}>1 week ago</div>
              </div>
            </div>
            <div style={{ fontSize: "1.1vw", color: "#374151", lineHeight: 1.6 }}>
              Question for my network: Which programming language should a CSE first-year start with? I'm currently doing C++.
              <span style={{ color: "#0A66C2", fontWeight: 600 }}> #CSE #Beginners #Engineering</span>
            </div>
            <div style={{ marginTop: "1vh", display: "flex", gap: "1.5vw", paddingTop: "0.8vh", borderTop: "1px solid #F3F4F6" }}>
              <span style={{ fontSize: "1vw", color: "#666" }}>78 likes</span>
              <span style={{ fontSize: "1vw", color: "#666" }}>31 comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
