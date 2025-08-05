// MainContent.jsx

const HomePage = () => (
  <div className="">
    {/* Hero */}
    <section className="hero noise Screen-sizing-2 flexAround marginEven">
      {/* written text */}
      <div className=" flow-1 textAlign">
        <h2 className="">THE IT GIRL</h2>
        <h1 className="text-clr-white">SALONI</h1>
        <h2 className="">MUSIC OUT NOW </h2>
        <div>
          <a href="" alt="">
            <button className="marginEven">Stream Here</button>
          </a>
        </div>
      </div>
      <div>
        <img
          src="./assets/Images/SaloniIMG.png"
          alt="Image of the music artist Saloni"
        />
      </div>
    </section>
    {/* Promo */}
    <section className="flexSpread">
      <div>
        <p>
          Guess what just dropped, folks? I've got a shiny new song cover hot
          off the mic and ready to bless your ears! It's got the vibes, the
          feels, and just the right sprinkle of magic to make you hit replay
          (like...a lot). Whether you're singing along in the shower or jamming
          out in traffic, this one’s for you. Go check it out, turn it up, and
          let the music do its thing For you
        </p>
      </div>
      <div>
        <img src="./assets/Images/CD.png" />
      </div>
    </section>
  </div>
);

export default HomePage;
