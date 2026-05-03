export default function Slide08WhatNotToDo() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{ background: "#F0F4F8", fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "5vh 6vw" }}
    >
      {/* Header */}
      <div style={{ marginBottom: "3vh" }}>
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#DC2626", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1vh" }}>
          Common Mistakes
        </div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#1B1B1B", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          What Not to Do
        </div>
      </div>

      {/* 2x2 grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "1.8vh 2vw",
          flex: 1,
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            background: "#fff",
            borderRadius: "1.2vw",
            padding: "2.5vh 2vw",
            boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "flex-start",
            gap: "1.2vw",
          }}
        >
          <div
            style={{
              width: "5vh",
              height: "5vh",
              borderRadius: "50%",
              background: "rgba(220,38,38,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: "0.3vh",
            }}
          >
            <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#1B1B1B", marginBottom: "0.8vh" }}>
              Copy-paste others' posts
            </div>
            <div style={{ fontSize: "1.25vw", color: "#6B7280", lineHeight: 1.5 }}>
              Authenticity is your edge. Recruiters can spot templates. Share your own thoughts and experiences.
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={{
            background: "#fff",
            borderRadius: "1.2vw",
            padding: "2.5vh 2vw",
            boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "flex-start",
            gap: "1.2vw",
          }}
        >
          <div
            style={{
              width: "5vh",
              height: "5vh",
              borderRadius: "50%",
              background: "rgba(220,38,38,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: "0.3vh",
            }}
          >
            <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#1B1B1B", marginBottom: "0.8vh" }}>
              Add skills you don't have
            </div>
            <div style={{ fontSize: "1.25vw", color: "#6B7280", lineHeight: 1.5 }}>
              Interviewers verify skills. List only what you can actually speak to — honesty builds real credibility.
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          style={{
            background: "#fff",
            borderRadius: "1.2vw",
            padding: "2.5vh 2vw",
            boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "flex-start",
            gap: "1.2vw",
          }}
        >
          <div
            style={{
              width: "5vh",
              height: "5vh",
              borderRadius: "50%",
              background: "rgba(220,38,38,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: "0.3vh",
            }}
          >
            <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#1B1B1B", marginBottom: "0.8vh" }}>
              Leave your profile blank for months
            </div>
            <div style={{ fontSize: "1.25vw", color: "#6B7280", lineHeight: 1.5 }}>
              An incomplete profile gets skipped. Fill it in now, even if imperfect — you can always improve it later.
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          style={{
            background: "#fff",
            borderRadius: "1.2vw",
            padding: "2.5vh 2vw",
            boxShadow: "0 0.3vh 1.5vh rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "flex-start",
            gap: "1.2vw",
          }}
        >
          <div
            style={{
              width: "5vh",
              height: "5vh",
              borderRadius: "50%",
              background: "rgba(220,38,38,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: "0.3vh",
            }}
          >
            <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#1B1B1B", marginBottom: "0.8vh" }}>
              Only connect — never engage
            </div>
            <div style={{ fontSize: "1.25vw", color: "#6B7280", lineHeight: 1.5 }}>
              Connections without interaction are invisible. Comment, react, and share to stay visible in your network.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
