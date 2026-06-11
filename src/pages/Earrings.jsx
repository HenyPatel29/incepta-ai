import { useState } from "react";

function Earrings() {

const [selectedProduct, setSelectedProduct] = useState(null);

const [showInquiry, setShowInquiry] = useState(false);

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

const products = [

{
name:"Diamond Earrings",
price:"₹25,999",
image:"https://tse1.explicit.bing.net/th/id/OIP.Fng-JqymzevlHasrmB6Q0AHaHa?r=0&cb=thfc1falcon&w=1500&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3"
},

{
name:"Gold Hoop Earrings",
price:"₹18,499",
image:"https://i.pinimg.com/originals/7b/3f/ab/7b3fab4455c0ca5214c619c5d3ff4dcc.jpg"
},

{
name:"Luxury Stud Earrings",
price:"₹34,999",
image:"https://thf.bing.com/th/id/OIP.eGFISAYdJt0507-MUvC5FgHaHa?w=188&h=188&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.4&pid=1.7&rm=3"
},

{
name:"Pearl Earrings",
price:"₹15,999",
image:"https://i.pinimg.com/originals/dc/23/af/dc23afcb9fd3f1452fe4e58286c23389.jpg"
}

];

const handleInquiry = () => {

  if (!name || !email || !phone) {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  // ✅ PHONE VALIDATION (ONLY 10 DIGITS)
  const phoneRegex = /^[0-9]{10}$/;

  if (!phoneRegex.test(phone)) {
    alert("Phone number must be exactly 10 digits.");
    return;
  }

  alert("✅ Inquiry Submitted Successfully!");

  setName("");
  setEmail("");
  setPhone("");

  setShowInquiry(false);
};

return (

<div>

<section className="earrings-banner">
<h1>EARRINGS</h1>
<p>Browse our elegant earrings collection</p>
</section>

<section className="rings-products">

<h2>Featured Earrings</h2>

<div className="rings-grid">

{products.map((item,index)=>(

<div className="ring-card" key={index}>

<img src={item.image} alt={item.name} />

<h3>{item.name}</h3>

<p>{item.price}</p>

<button onClick={() => setSelectedProduct(item)}>
View Product
</button>

</div>

))}

</div>

</section>

{/* Product Popup */}

{selectedProduct && (

<div
className="product-modal"
onClick={() => setSelectedProduct(null)}
>

<div
className="product-modal-content"
onClick={(e) => e.stopPropagation()}
>

<span
className="close-modal"
onClick={() => setSelectedProduct(null)}
>
×
</span>

<img
src={selectedProduct.image}
alt={selectedProduct.name}
/>

<h2>{selectedProduct.name}</h2>

<p>{selectedProduct.price}</p>

<button
className="buy-btn"
onClick={() => {
setSelectedProduct(null);
setShowInquiry(true);
}}
>
Buy Now
</button>

</div>

</div>

)}

{/* Inquiry Popup */}

{showInquiry && (

<div
className="product-modal"
onClick={() => setShowInquiry(false)}
>

<div
className="product-modal-content"
onClick={(e) => e.stopPropagation()}
>

<span
className="close-modal"
onClick={() => setShowInquiry(false)}
>
×
</span>

<h2>✨ Product Inquiry</h2>

<p>
Thank you for your interest in this jewellery piece.
Please enter your details and our team will contact you.
</p>

<input
type="text"
placeholder="Your Name"
className="inquiry-input"
value={name}
onChange={(e) => setName(e.target.value)}
/>

<input
type="email"
placeholder="Your Email"
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

<button
className="buy-btn"
onClick={handleInquiry}
>
Submit Inquiry
</button>

</div>

</div>

)}

</div>

);
}

export default Earrings;