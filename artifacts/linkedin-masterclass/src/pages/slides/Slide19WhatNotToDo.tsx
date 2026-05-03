export default function Slide19WhatNotToDo() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{ background: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "5vh 6vw" }}
    >
      <div style={{ marginBottom: "3vh" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#DC2626", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.8vh" }}>Common Mistakes</div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>What Not to Do</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "1.8vh 2vw", flex: 1 }}>
        {/* Card 1 */}
        <div style={{ background: "#FAFAFA", borderRadius: "1.2vw", padding: "2.5vh 2vw", border: "1px solid #E5E7EB", display: "flex", alignItems: "flex-start", gap: "1.2vw" }}>
          <div style={{ width: "5vh", height: "5vh", borderRadius: "50%", background: "rgba(220,38,38,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.3vh" }}>
            <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </div>
          <div>
            <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#111111", marginBottom: "0.8vh" }}>Don't copy-paste posts</div>
            <div style={{ fontSize: "1.25vw", color: "#666666", lineHeight: 1.5 }}>Recruiters can tell. Your real voice stands out more than borrowed words.</div>
          </div>
        </div>

        {/* Card 2 */}
        <div style={{ background: "#FAFAFA", borderRadius: "1.2vw", padding: "2.5vh 2vw", border: "1px solid #E5E7EB", display: "flex", alignItems: "flex-start", gap: "1.2vw" }}>
          <div style={{ width: "5vh", height: "5vh", borderRadius: "50%", background: "rgba(220,38,38,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.3vh" }}>
            <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </div>
          <div>
            <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#111111", marginBottom: "0.8vh" }}>Don't spam connections</div>
            <div style={{ fontSize: "1.25vw", color: "#666666", lineHeight: 1.5 }}>Send meaningful requests. Mass-connecting with strangers hurts your credibility.</div>
          </div>
        </div>

        {/* Card 3 */}
        <div style={{ background: "#FAFAFA", borderRadius: "1.2vw", padding: "2.5vh 2vw", border: "1px solid #E5E7EB", display: "flex", alignItems: "flex-start", gap: "1.2vw" }}>
          <div style={{ width: "5vh", height: "5vh", borderRadius: "50%", background: "rgba(220,38,38,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.3vh" }}>
            <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </div>
          <div>
            <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#111111", marginBottom: "0.8vh" }}>Don't fake skills</div>
            <div style={{ fontSize: "1.25vw", color: "#666666", lineHeight: 1.5 }}>Interviewers verify everything. List only skills you can actually talk about.</div>
          </div>
        </div>

        {/* Card 4 */}
        <div style={{ background: "#FAFAFA", borderRadius: "1.2vw", padding: "2.5vh 2vw", border: "1px solid #E5E7EB", display: "flex", alignItems: "flex-start", gap: "1.2vw" }}>
          <div style={{ width: "5vh", height: "5vh", borderRadius: "50%", background: "rgba(220,38,38,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.3vh" }}>
            <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </div>
          <div>
            <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#111111", marginBottom: "0.8vh" }}>Don't stay inactive</div>
            <div style={{ fontSize: "1.25vw", color: "#666666", lineHeight: 1.5 }}>LinkedIn rewards consistency. Even one post a week keeps you visible.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
