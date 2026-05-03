export default function Slide16Message() {
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
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>Messaging</div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          How to
          <br />
          Message a Senior
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Keep it short and respectful</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Mention who you are clearly</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#0A66C2", flexShrink: 0 }} />
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Ask one specific question</div>
          </div>
        </div>
      </div>

      {/* Right — Chat UI */}
      <div
        className="flex items-center justify-center"
        style={{ width: "58%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div
          style={{
            width: "32vw",
            background: "#fff",
            borderRadius: "1.2vw",
            border: "1px solid #E5E7EB",
            overflow: "hidden",
            boxShadow: "0 0.5vh 2vh rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Chat header */}
          <div style={{ padding: "1.5vh 1.8vw", borderBottom: "1px solid #E5E7EB", display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "5vh", height: "5vh", borderRadius: "50%", background: "linear-gradient(135deg, #0A66C2, #004182)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "2vh" }}>V</span>
            </div>
            <div>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#111111" }}>Vikram Rao</div>
              <div style={{ fontSize: "1vw", color: "#16A34A" }}>SDE @ Flipkart · Active now</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ padding: "2vh 1.8vw", flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            {/* Sent message */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div
                style={{
                  maxWidth: "75%",
                  padding: "1.2vh 1.2vw",
                  borderRadius: "1vw 1vw 0.2vw 1vw",
                  background: "#0A66C2",
                  color: "#fff",
                }}
              >
                <div style={{ fontSize: "1.1vw", lineHeight: 1.55 }}>
                  Hello Sir,
                </div>
                <div style={{ fontSize: "1.1vw", lineHeight: 1.55, marginTop: "0.5vh" }}>
                  I am Priya, a first-year CSE student at NIT Raipur. I came across your profile and was really inspired by your journey.
                </div>
                <div style={{ fontSize: "1.1vw", lineHeight: 1.55, marginTop: "0.5vh" }}>
                  I would love to learn how you prepared for your first internship. Any one tip would be really helpful.
                </div>
                <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.65)", marginTop: "0.5vh", textAlign: "right" }}>12:42 PM · Seen</div>
              </div>
            </div>

            {/* Received message */}
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div
                style={{
                  maxWidth: "75%",
                  padding: "1.2vh 1.2vw",
                  borderRadius: "1vw 1vw 1vw 0.2vw",
                  background: "#F7F9FB",
                  border: "1px solid #E5E7EB",
                }}
              >
                <div style={{ fontSize: "1.1vw", lineHeight: 1.55, color: "#111" }}>
                  Hi Priya! Great to hear from you. My one tip: start with DSA early. LeetCode easy problems every day. Good luck!
                </div>
                <div style={{ fontSize: "0.9vw", color: "#9CA3AF", marginTop: "0.5vh" }}>12:58 PM</div>
              </div>
            </div>
          </div>

          {/* Message input */}
          <div style={{ padding: "1.2vh 1.5vw", borderTop: "1px solid #E5E7EB", display: "flex", gap: "0.8vw", alignItems: "center" }}>
            <div style={{ flex: 1, background: "#F7F9FB", borderRadius: "100px", padding: "0.8vh 1.2vw", border: "1px solid #E5E7EB" }}>
              <span style={{ fontSize: "1.1vw", color: "#9CA3AF" }}>Write a message...</span>
            </div>
            <div style={{ width: "4vh", height: "4vh", borderRadius: "50%", background: "#0A66C2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
