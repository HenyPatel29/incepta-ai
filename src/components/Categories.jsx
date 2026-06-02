import { Link } from "react-router-dom";
import { useRef } from "react";

function Categories(){

const sliderRef = useRef(null);

const scrollLeft = () => {
  sliderRef.current.scrollBy({
    left: -300,
    behavior: "smooth"
  });
};

const scrollRight = () => {
  sliderRef.current.scrollBy({
    left: 300,
    behavior: "smooth"
  });
};

const data = [

{
name:"Rings",
path:"/rings",
image:"https://di2ponv0v5otw.cloudfront.net/posts/2024/03/30/6607b9f36da06e5b8d79c942/m_6639fa39b4ee5b63c21bdad4.jpeg"
},

{
name:"Earrings",
path:"/earrings",
image:"https://i.pinimg.com/originals/7b/3f/ab/7b3fab4455c0ca5214c619c5d3ff4dcc.jpg"
},

{
name:"Bracelets",
path:"/bracelets",
image:"https://www.dgjewelry.com/wp-content/uploads/2024/09/Arm-adorned-with-multiple-thin-gold-bracelets-featuring-diamonds.webp"
},

{
name:"Pendants",
path:"/pendants",
image:"https://down-ph.img.susercontent.com/file/sg-11134201-7reny-m8d2iti59w9d5f"
},

{
name:"Necklaces",
path:"/necklaces",
image:"https://img.kilimall.com/c/obs/seller/100002083/goods_image/240812175110_b7e3d9072959e17f894f0b5dda116275.png"
}
]

return(

<section className="categories">

<h2>Shop By Category</h2>

<p>Explore our fine jewellery collection</p>

<div className="category-wrapper">

<div className="category-controls">
  <button onClick={scrollLeft}>❮</button>
  <button onClick={scrollRight}>❯</button>
</div>

<div className="category-grid" ref={sliderRef}>
  {data.map((item,index)=>(
   <Link
      to={item.path}
      className="category-card"
      key={index}>

<img src={item.image} alt={item.name} />

<h3>{item.name}</h3>

</Link>
  ))}
</div>

</div>

</section>

)
}

export default Categories