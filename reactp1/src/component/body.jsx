const Body1 = () => {
  return (
    <main className="Hero container">
      <div className="Hero-Con">
        <h1> YOR FEET DESERVE THE BEST</h1>
        {/* Changed uppercase <P> to lowercase <p> */}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          vero dolorem expedita dolores deserunt! Vel quam necessitatibus
          consequatur maxime fugiat.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="sec-btn">Catogory</button>
        </div>

        <div className="shopping">
          <p>Lorem, ipsum dolor.</p>

          <div className="brand-icons">
            <img src="/amazon.svg" alt="Amazon logo" />
            <img src="/flipkart.png" alt="flipkart logo" />
          </div>
        </div>
      </div>
      <div className="hero-img">

        <img className="shoes" src="/shoes.png" alt="" />
      </div>
    </main>
  );
};

export default Body1;