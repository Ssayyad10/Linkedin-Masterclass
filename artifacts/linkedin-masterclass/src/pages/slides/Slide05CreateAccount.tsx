export default function Slide05CreateAccount() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex"
      style={{ background: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left column */}
      <div
        className="flex flex-col justify-center"
        style={{ width: "42%", paddingLeft: "7vw", paddingRight: "3vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A66C2", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5vh" }}>
          Step 2 of 6
        </div>
        <div style={{ fontSize: "4vw", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          Create
          <br />
          Your Account
        </div>
        <div style={{ width: "4vw", height: "0.3vh", background: "#0A66C2", borderRadius: "2px", margin: "2.5vh 0" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#0A66C2", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.2vh" }}>1</span>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Enter your full name</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#0A66C2", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.2vh" }}>2</span>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Add email or phone number</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#0A66C2", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.2vh" }}>3</span>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Create a strong password</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.2vh", height: "2.2vh", borderRadius: "50%", background: "#0A66C2", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.2vh" }}>4</span>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#111111" }}>Tap "Agree &amp; Join"</div>
          </div>
        </div>
      </div>

      {/* Right column — LinkedIn signup UI */}
      <div
        className="flex items-center justify-center"
        style={{ width: "58%", paddingRight: "5vw", paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <div
          style={{
            width: "28vw",
            background: "#fff",
            borderRadius: "1.2vw",
            border: "1px solid #E5E7EB",
            boxShadow: "0 1vh 3vh rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          {/* Top bar */}
          <div style={{ background: "#0A66C2", padding: "1.8vh 2vw", display: "flex", alignItems: "center", gap: "0.5vw" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "2vw", lineHeight: 1 }}>in</span>
            <span style={{ color: "#fff", fontWeight: 600, fontSize: "1.2vw" }}>LinkedIn</span>
          </div>

          {/* Form */}
          <div style={{ padding: "2vh 2vw" }}>
            <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#111111", marginBottom: "0.5vh" }}>
              Make the most of your
            </div>
            <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#111111", marginBottom: "2vh" }}>
              professional life
            </div>

            {/* First + Last name row */}
            <div style={{ display: "flex", gap: "0.8vw", marginBottom: "1.2vh" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "1vw", color: "#666", marginBottom: "0.4vh" }}>First name</div>
                <div style={{ border: "1.5px solid #0A66C2", borderRadius: "0.4vw", padding: "0.8vh 0.8vw", fontSize: "1.1vw", color: "#111", background: "#F7F9FB" }}>
                  Sohel
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "1vw", color: "#666", marginBottom: "0.4vh" }}>Last name</div>
                <div style={{ border: "1px solid #D1D5DB", borderRadius: "0.4vw", padding: "0.8vh 0.8vw", fontSize: "1.1vw", color: "#9CA3AF", background: "#fff" }}>
                  Sayyad
                </div>
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: "1.2vh" }}>
              <div style={{ fontSize: "1vw", color: "#666", marginBottom: "0.4vh" }}>Email or phone number</div>
              <div style={{ border: "1px solid #D1D5DB", borderRadius: "0.4vw", padding: "0.8vh 0.8vw", fontSize: "1.1vw", color: "#9CA3AF", background: "#fff" }}>
                sohel@gmail.com
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: "1.8vh" }}>
              <div style={{ fontSize: "1vw", color: "#666", marginBottom: "0.4vh" }}>Password (6+ characters)</div>
              <div style={{ border: "1px solid #D1D5DB", borderRadius: "0.4vw", padding: "0.8vh 0.8vw", fontSize: "1.1vw", color: "#111", background: "#fff", letterSpacing: "0.2em" }}>
                ••••••••
              </div>
            </div>

            {/* Terms */}
            <div style={{ fontSize: "0.9vw", color: "#666", marginBottom: "1.5vh", lineHeight: 1.5 }}>
              By clicking Agree &amp; Join, you agree to LinkedIn's User Agreement, Privacy Policy, and Cookie Policy.
            </div>

            {/* CTA button */}
            <div style={{ background: "#0A66C2", borderRadius: "100px", padding: "1.2vh", textAlign: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.3vw" }}>Agree &amp; Join</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
