export default function Slide18PostExample() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex"
      style={{ background: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left */}
      <div
        className="flex flex-col justify-center"
        style={{ width: "38%", paddingLeft: "7vw", paddingRight: "3vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>Post Example</div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          Your First
          <br />
          Real Post
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />
        <div style={{ fontSize: "1.5vw", fontWeight: 400, color: "#666666", lineHeight: 1.6 }}>
          Keep it genuine.
          <br />
          Share your journey.
          <br />
          You don't need to
          <br />
          be an expert.
        </div>
        <div style={{ marginTop: "3vh", padding: "1.3vh 1.5vw", borderRadius: "0.8vw", background: "#F7F9FB", border: "1px solid #E5E7EB" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0A66C2" }}>One post per week is enough</div>
        </div>
      </div>

      {/* Right — Full LinkedIn post UI */}
      <div
        className="flex items-center justify-center"
        style={{ width: "62%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div
          style={{
            width: "34vw",
            background: "#fff",
            borderRadius: "1.2vw",
            border: "1px solid #E5E7EB",
            overflow: "hidden",
            boxShadow: "0 0.5vh 2.5vh rgba(0,0,0,0.1)",
          }}
        >
          {/* Post header */}
          <div style={{ padding: "1.8vh 2vw", display: "flex", alignItems: "flex-start", gap: "1vw" }}>
            <div style={{ width: "5.5vh", height: "5.5vh", borderRadius: "50%", background: "linear-gradient(135deg, #0A66C2, #004182)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "2.2vh" }}>P</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#111111" }}>Priya Sharma</div>
              <div style={{ fontSize: "1vw", color: "#666666" }}>CSE Student | Web Dev | Open to Internships</div>
              <div style={{ fontSize: "0.9vw", color: "#9CA3AF", marginTop: "0.2vh" }}>3 hours ago · Public</div>
            </div>
            <div style={{ padding: "0.5vh 1vw", borderRadius: "100px", border: "1.5px solid #0A66C2", fontSize: "1vw", fontWeight: 600, color: "#0A66C2", flexShrink: 0 }}>+ Follow</div>
          </div>

          {/* Post text */}
          <div style={{ padding: "0 2vw 1.5vh" }}>
            <div style={{ fontSize: "1.15vw", color: "#374151", lineHeight: 1.65 }}>Day 1 of learning Python.</div>
            <div style={{ fontSize: "1.15vw", color: "#374151", lineHeight: 1.65, marginTop: "0.6vh" }}>Today I learned about variables and loops. It took me 2 hours to write a simple calculator — and it worked!</div>
            <div style={{ fontSize: "1.15vw", color: "#374151", lineHeight: 1.65, marginTop: "0.6vh" }}>Small win, but it feels big when you're just starting out.</div>
            <div style={{ fontSize: "1.15vw", color: "#374151", lineHeight: 1.65, marginTop: "0.6vh" }}>If you're also a first-year student learning something new, let's connect. We grow faster together.</div>
            <div style={{ marginTop: "0.8vh", fontSize: "1.1vw", fontWeight: 600, color: "#0A66C2" }}>#Python #Day1 #FirstYear #Engineering #LearnInPublic</div>
          </div>

          {/* Reactions */}
          <div style={{ padding: "0.8vh 2vw", borderTop: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4vw" }}>
              <div style={{ display: "flex", gap: "-0.2vw" }}>
                <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#0A66C2", border: "1.5px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1vh" }}>👍</div>
                <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#F5A623", border: "1.5px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1vh", marginLeft: "-0.5vw" }}>❤️</div>
              </div>
              <span style={{ fontSize: "1.1vw", color: "#666", marginLeft: "0.5vw" }}>148 reactions</span>
            </div>
            <span style={{ fontSize: "1.1vw", color: "#666" }}>23 comments · 5 reposts</span>
          </div>

          {/* Action bar */}
          <div style={{ padding: "0.8vh 2vw", display: "flex", alignItems: "center", justifyContent: "space-around", borderTop: "1px solid #E5E7EB" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4vw" }}>
              <svg width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
              <span style={{ fontSize: "1.1vw", color: "#666", fontWeight: 500 }}>Like</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4vw" }}>
              <svg width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <span style={{ fontSize: "1.1vw", color: "#666", fontWeight: 500 }}>Comment</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4vw" }}>
              <svg width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              <span style={{ fontSize: "1.1vw", color: "#666", fontWeight: 500 }}>Repost</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
