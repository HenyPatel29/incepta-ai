import { useState } from "react";

function Necklaces() {

const [selectedProduct, setSelectedProduct] = useState(null);

const [showInquiry, setShowInquiry] = useState(false);

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

const products = [

{
name:"Diamond Necklace",
price:"₹73,999",
image:"https://tse2.mm.bing.net/th/id/OIP.aOF_enAEEYCzVnkhaALM-QHaHa?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
},

{
name:"Gold Necklace",
price:"₹89,999",
image:"https://i.pinimg.com/originals/30/7f/2b/307f2b860febc6163c902651c9b6e335.jpg"
},

{
name:"Pearl Necklace",
price:"₹55,999",
image:"https://i.etsystatic.com/5939762/r/il/1694d4/1912592894/il_fullxfull.1912592894_gjdu.jpg"
},

{
name:"Luxury Diamond Necklace",
price:"84,999",
image:"https://img.freepik.com/premium-photo/luxury-diamond-necklace-dark-background_626008-93.jpg?w=740"
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

<section className="necklaces-banner">

<h1>NECKLACES</h1>

<p>Browse our luxury necklace collection</p>

</section>

<section className="rings-products">

<h2>Featured Necklaces</h2>

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

export default Necklaces;