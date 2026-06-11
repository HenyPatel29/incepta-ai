import { useState } from "react";

function Rings() {

const [selectedProduct, setSelectedProduct] = useState(null);

const [showInquiry, setShowInquiry] = useState(false);

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

const products = [

{
name:"Diamond Solitaire Ring",
price:"₹75,157",
image:"https://i.etsystatic.com/41617456/r/il/035fe8/6145942807/il_794xN.6145942807_lc2a.jpg"
},

{
name:"Gold Engagement Ring",
price:"₹88,767",
image:"https://th.bing.com/th/id/R.bb0eddcd9196bab7f8888edb382aed80?rik=DbwwU5Vjv37yAg&riu=http%3a%2f%2fwww.lamoredesign.com%2fcdn%2fshop%2fproducts%2fovalpeachsapphireengagementringrosegoldhalodiamondringlowprofileringbylamoredesignjewelry-6.jpg%3fv%3d1680881744%26width%3d2000&ehk=yzrONl%2bPTDugpT3arhO6gyD%2bhgxhyW0rVOepm2gfuU8%3d&risl=&pid=ImgRaw&r=0"
},

{
name:"Luxury Diamond Ring",
price:"₹1,06,798",
image:"https://cdn-yotpo-images-production.yotpo.com/instagram/13/18047605969460513/low_resolution.jpg"
},

{
name:"Princess Cut Ring",
price:"₹74,115",
image:"https://www.moissaniteco.com/cache/media/products-media-large/enr067pr-rg-3_88512.jpg"
}

];

return(

<div>

<section className="rings-banner">
<h1>RINGS</h1>
<p>Browse our luxury diamond ring collection</p>
</section>

<section className="rings-products">

<h2>Featured Rings</h2>

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
required
/>

<input
type="email"
placeholder="Your Email"
className="inquiry-input"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
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
  onClick={() => {

    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    alert("✅ Inquiry Submitted Successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setShowInquiry(false);

  }}
>
  Submit Inquiry
</button>


</div>

</div>

)}

<img
src={selectedProduct.image}
alt={selectedProduct.name}
/>

<h2>{selectedProduct.name}</h2>

<p>{selectedProduct.price}</p>

<button
  className="buy-btn"
  onClick={() => setShowInquiry(true)}
>
  Buy Now
</button>

</div>

</div>

)}

</div>

);
}

export default Rings;