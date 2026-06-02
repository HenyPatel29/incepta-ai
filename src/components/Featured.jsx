import { useState } from "react";

function Featured(){

const [selectedImage, setSelectedImage] = useState(null);

const products = [

{
name:"Diamond Ring",
price:"₹28,999",
image:"https://th.bing.com/th/id/R.24e6f04ba143628214962728e2af40bd?rik=vdK4WlcbcEbGBA&riu=http%3a%2f%2fwww.lamoredesign.com%2fcdn%2fshop%2fproducts%2flabdiamondringstackrosegoldovaldiamondsolitaireengagementringsetLaMoreDesignJewelry-3.jpg%3fv%3d1680624450%26width%3d2000&ehk=oEra9H4lxa6DufKyBCkCn%2fdHXlk94u9whuf1%2fGrobEY%3d&risl=&pid=ImgRaw&r=0"
},

{
name:"Luxury Necklace",
price:"₹15,999",
image:"https://1e28f681eeff7ea54f60-50679d511c2bf63e2cb884e502a353e4.ssl.cf2.rackcdn.com/product-original-55480-10426-1350171795-7b2b0228a0873ccf88421cb2b0344026.jpg"
},

{
name:"Gold Bracelet",
price:"₹18,999",
image:"https://i.pinimg.com/originals/2b/b8/0c/2bb80c3a26683a20dc3606a56f138805.jpg"
},

{
name:"Premium Earrings",
price:"₹10,999",
image:"https://tse1.explicit.bing.net/th/id/OIP.5XfJwquuMmzadKqBVH4UHwHaHa?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
}

];

return(

<section className="featured">

<h2>Featured Collection</h2>

<p>
Explore our latest luxury jewellery collection
</p>

<div className="featured-grid">

{products.map((item,index)=>(

<div className="featured-card" key={index}>

<img src={item.image} alt={item.name} />

<div className="featured-content">

<h3>{item.name}</h3>

<p>{item.price}</p>

<button onClick={() => setSelectedImage(item.image)}>
View Product
</button>

</div>

</div>

))}

</div>

{selectedImage && (

<div
className="image-modal"
onClick={() => setSelectedImage(null)}
>

<div
className="image-modal-content"
onClick={(e) => e.stopPropagation()}
>

<span
className="close-btn"
onClick={() => setSelectedImage(null)}
>
×
</span>

<img src={selectedImage} alt="Product" />

</div>

</div>

)}

</section>

);
}

export default Featured;