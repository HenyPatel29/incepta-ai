function Hero(){

const exploreCollection = () => {
alert("Explore Collection Clicked")
}

return(
<section className="hero" id="home">

<div>

<h1>
Luxury Jewellery Experience
</h1>

<p>
Explore elegant collections with modern design and AI powered assistance.
</p>

<button onClick={exploreCollection}>
Explore Collection
</button>

</div>

</section>
)
}

export default Hero