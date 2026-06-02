import { useState } from "react";

function Bracelets() {

const [selectedProduct, setSelectedProduct] = useState(null);

const [showInquiry, setShowInquiry] = useState(false);

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

const products = [

{
name:"Diamond Tennis Bracelet",
price:"₹45,999",
image:"https://i.pinimg.com/originals/2b/b8/0c/2bb80c3a26683a20dc3606a56f138805.jpg"
},

{
name:"Gold Chain Bracelet",
price:"₹28,999",
image:"https://normjewels.com/cdn/shop/products/14kSolidGoldRopeChainBracelet.jpg?v=1638267307"
},

{
name:"Luxury Diamond Bracelet",
price:"₹65,999",
image:"https://i.pinimg.com/originals/c8/1a/2a/c81a2a2a620c88b66edd7bc7f7adb5e6.jpg"
},

{
name:"Rose Gold Bracelet",
price:"₹35,999",
image:"https://i.pinimg.com/736x/35/9f/00/359f00a01f652efa27ce37466a27c4ba.jpg"
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

alert("✅ Inquiry Submitted Successfully!");

setName("");
setEmail("");
setPhone("");

setShowInquiry(false);

};

return (

<div>

<section className="bracelets-banner">

<h1>BRACELETS</h1>

<p>Browse our luxury bracelet collection</p>

</section>

<section className="rings-products">

<h2>Featured Bracelets</h2>

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
onChange={(e) => setPhone(e.target.value)}
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

export default Bracelets;