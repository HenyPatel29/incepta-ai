import { useState } from "react";

function Returns() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [orderId, setOrderId] = useState("");
const [reason, setReason] = useState("");

const handleSubmit = () => {

  if (!name || !email || !phone || !orderId || !reason) {
    alert("Please fill in all fields");
    return;
  }

   if (!email.includes("@gmail.com")) {
    alert("Please enter a valid email address.");
    return;
  }

  if (phone.length !== 10) {
    alert("Phone number must contain exactly 10 digits");
    return;
  }

  alert("✅ Return Request Submitted Successfully!");
};

  return (
    <div style={{ padding: "120px 8%", paddingTop: "100px" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px"
          }}
        >
          Returns & Exchanges Policy
        </h1>

        <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
          At <strong>Incepta Jewels</strong>, customer satisfaction is our
          priority. If you are not completely satisfied with your purchase,
          please review our return and exchange policy below.
        </p>

        <h3>Return Eligibility</h3>
        <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
          Products may be returned within <strong>7 days</strong> of delivery.
          Items must be unused, unworn, and returned in their original
          condition along with all packaging, certificates, and invoices.
        </p>

        <h3>Non-Returnable Items</h3>
        <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
          The following items are not eligible for returns:
          <br />
          • Customized or engraved jewellery
          <br />
          • Resized jewellery
          <br />
          • Special-order products
          <br />
          • Gift cards and promotional items
        </p>

        <h3>Exchange Policy</h3>
        <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
          Eligible products may be exchanged within 7 days of delivery,
          subject to product availability and quality inspection.
        </p>

        <h3>Refund Process</h3>
        <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
          Once the returned item passes our inspection process, refunds will
          be initiated within 5–7 business days and credited to the original
          payment method used during purchase.
        </p>

        <h3>Damaged or Incorrect Products</h3>
        <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
          If you receive a damaged, defective, or incorrect item, please
          contact us within <strong>48 hours</strong> of delivery and provide
          supporting photographs for verification.
        </p>

        <h3>Need Assistance?</h3>

<p>
  📧 <a href="mailto:contact@inceptajewels.com">
    contact@inceptajewels.com
  </a>

  <br />

  📞 <a href="tel:+918718871800">
    +91 8718-8718-00
  </a>
</p>

<h3 style={{ marginTop: "30px" }}>
  Return Request Form
</h3>

<input
  type="text"
  placeholder="Full Name"
  className="inquiry-input"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<input
  type="email"
  placeholder="Email Address"
  className="inquiry-input"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  type="tel"
  placeholder="Phone Number"
  className="inquiry-input"
  value={phone}
  onChange={(e) => {

    let value = e.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
      setPhone(value);
    }

  }}
/>

<input
  type="text"
  placeholder="Order ID"
  className="inquiry-input"
  value={orderId}
  onChange={(e) => setOrderId(e.target.value)}
/>

<textarea
  placeholder="Reason for Return"
  className="inquiry-input"
  rows="4"
  value={reason}
  onChange={(e) => setReason(e.target.value)}
></textarea>

<button
  className="buy-btn"
  onClick={handleSubmit}
>
  Submit Return Request
</button>

      </div>
    </div>
  );
}

export default Returns;