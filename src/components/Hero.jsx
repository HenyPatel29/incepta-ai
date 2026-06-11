function Hero() {

  const exploreCollection = () => {
    const section = document.getElementById("featured");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
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
  );
}

export default Hero;