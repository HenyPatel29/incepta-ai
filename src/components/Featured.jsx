import { useState } from "react";

function Featured() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showInquiry, setShowInquiry] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () => {
  setCurrentIndex(
    currentIndex === 0
      ? products.length - 1
      : currentIndex - 1
  );
};

const nextSlide = () => {
  setCurrentIndex(
    currentIndex === products.length - 1
      ? 0
      : currentIndex + 1
  );
};

  const products = [
    {
      name: "Diamond Ring",
      price: "₹28,999",
      image: "https://th.bing.com/th/id/R.24e6f04ba143628214962728e2af40bd?rik=vdK4WlcbcEbGBA&riu=http%3a%2f%2fwww.lamoredesign.com%2fcdn%2fshop%2fproducts%2flabdiamondringstackrosegoldovaldiamondsolitaireengagementringsetLaMoreDesignJewelry-3.jpg%3fv%3d1680624450%26width%3d2000&ehk=oEra9H4lxa6DufKyBCkCn%2fdHXlk94u9whuf1%2fGrobEY%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      name: "Luxury Necklace",
      price: "₹15,999",
      image: "https://1e28f681eeff7ea54f60-50679d511c2bf63e2cb884e502a353e4.ssl.cf2.rackcdn.com/product-original-55480-10426-1350171795-7b2b0228a0873ccf88421cb2b0344026.jpg"
    },
    {
      name: "Gold Bracelet",
      price: "₹18,999",
      image: "https://i.pinimg.com/originals/2b/b8/0c/2bb80c3a26683a20dc3606a56f138805.jpg"
    },
    {
      name: "Premium Earrings",
      price: "₹10,999",
      image: "https://tse1.explicit.bing.net/th/id/OIP.5XfJwquuMmzadKqBVH4UHwHaHa?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  return (
    <section className="featured" id="featured">

      <h2>Featured Collection</h2>
      <p>Explore our latest luxury jewellery collection</p>

      <div className="featured-banner">

  <button
    className="featured-arrow left-arrow"
    onClick={prevSlide}
  >
    ❮
  </button>

  <div className="featured-card">

    <img
      src={products[currentIndex].image}
      alt={products[currentIndex].name}
    />

    <div className="featured-content">
      <h3>{products[currentIndex].name}</h3>

      <p>{products[currentIndex].price}</p>

      <button
        onClick={() =>
          setSelectedProduct(products[currentIndex])
        }
      >
        View Product
      </button>
    </div>

  </div>

  <button
    className="featured-arrow right-arrow"
    onClick={nextSlide}
  >
    ❯
  </button>

</div>

      {selectedProduct && (
        <div
          className="product-modal"
          onClick={() => {
            setSelectedProduct(null);
            setShowInquiry(false);
          }}
        >

          <div
            className="product-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <span
              className="close-modal"
              onClick={() => {
                setSelectedProduct(null);
                setShowInquiry(false);
              }}
            >
              ×
            </span>

            {showInquiry ? (
              <div>

                <h2>✨ Product Inquiry</h2>

                <p>
                  Fill your details and we will contact you soon
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
                  onClick={() => {

                    if (!name || !email || !phone) {
                      alert("Please fill all fields");
                      return;
                    }

                    alert("Inquiry Submitted Successfully!");

                    setName("");
                    setEmail("");
                    setPhone("");

                    setShowInquiry(false);
                    setSelectedProduct(null);
                  }}
                >
                  Submit Inquiry
                </button>

              </div>
            ) : (
              <>
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
              </>
            )}

          </div>

        </div>
      )}

    </section>
  );
}

export default Featured;