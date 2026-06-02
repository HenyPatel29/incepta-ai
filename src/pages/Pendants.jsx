import { useState } from "react";

function Pendants() {

const [selectedProduct, setSelectedProduct] = useState(null);

const [showInquiry, setShowInquiry] = useState(false);

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

const products = [

{
name:"Diamond Heart Pendant",
price:"₹22,999",
image:"https://tse2.mm.bing.net/th/id/OIP.0b2mFtd68IYjY3LpFS4OWAHaHa?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
},

{
name:"Gold Drop Pendant",
price:"₹18,499",
image:"https://normjewels.com/cdn/shop/files/PearlDropNecklaceinGold_1_800x.jpg?v=1700154715"
},

{
name:"Luxury Diamond Pendant",
price:"₹35,999",
image:"https://resovon.com/wp-content/uploads/2025/02/High-Luxury-Diamond-Pendant-Jewelry.jpg"
},

{
name:"Pearl Pendant",
price:"₹15,999",
image:"https://tse3.mm.bing.net/th/id/OIP.uup2R-o_sGjBzS006Tdy6QHaHa?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
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

<section className="pendants-banner">

<h1>PENDANTS</h1>

<p>Browse our luxury pendant collection</p>

</section>

<section className="rings-products">

<h2>Featured Pendants</h2>

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

export default Pendants;