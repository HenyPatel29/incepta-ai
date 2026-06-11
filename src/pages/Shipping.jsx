function Shipping() {
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
          Shipping & Delivery
        </h1>

        <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
          At <strong>Incepta Jewels</strong>, we are committed to delivering
          your jewellery safely and securely. Every order is carefully packaged
          and insured to ensure it reaches you in perfect condition.
        </p>

        <h3>Delivery Timeline</h3>
        <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
          • Standard Delivery: 3–7 business days across India.<br />
          • Remote locations may require additional delivery time.<br />
          • Customers will receive tracking details once the order is dispatched.
        </p>

        <h3>Shipping Charges</h3>
        <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
          We offer <strong>free shipping</strong> on all jewellery orders
          across India.
        </p>

        <h3>Order Tracking</h3>
        <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
          Once your order has been shipped, a tracking ID will be shared via
          email or SMS so you can monitor your delivery status.
        </p>

        <h3>Secure Packaging</h3>
        <p style={{ lineHeight: "1.8" }}>
          All products are delivered in premium packaging designed to protect
          your jewellery and provide a luxury unboxing experience.
        </p>
      </div>
    </div>
  );
}

export default Shipping;