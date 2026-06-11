function Contact() {
  return (
    <div style={{ padding: "120px 8%", paddingTop: "100px" }}>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
        }}
      >
        <h1 style={{ marginBottom: "25px", textAlign: "center" }}>
          Contact Us
        </h1>

        <p style={{ marginBottom: "20px", fontSize: "18px" }}>
          📧 Email:
          <a
            href="mailto:contact@inceptajewels.com"
            style={{ marginLeft: "10px", color: "#d4af37" }}
          >
            contact@inceptajewels.com
          </a>
        </p>

        <p style={{ marginBottom: "20px", fontSize: "18px" }}>
          📞 Phone:
          <a
            href="tel:+918718871800"
            style={{ marginLeft: "10px", color: "#d4af37" }}
          >
            +91 8718-8718-00
          </a>
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          📍 Address:
          <a
            href="https://maps.google.com/?q=Aaron+Spectra+210+Rajpath+Rangoli+Road+Bodakdev+Ahmedabad+Gujarat+380054"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: "10px",
              color: "#d4af37",
              textDecoration: "none"
            }}
          >
            Aaron Spectra 210, Rajpath Rangoli Rd, Bodakdev, Ahmedabad, Gujarat 380054
          </a>
        </p>
      </div>

    </div>
  );
}

export default Contact;