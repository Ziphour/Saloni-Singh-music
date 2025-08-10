// MainContent.jsx

const HomePage = () => (
  <div className="flow-4">
    {/* Hero */}
    <section className="hero  Screen-sizing-2 marginEven">
      {/* written text */}
      <div className="bg-layer heroGradientBG"></div>
      <div className="bg-layer StarBG "></div>
      <div className="bg-layer NoiseBG "></div>
      <div className="flex flexAround heroContent">
        <div className="flow-2 textAlign">
          <div className=" flow-1 ">
            <h2 className="lightgrey-txt">THE IT GIRL</h2>
            <h1 className="text-clr-white">SALONI</h1>
            <h2 className="lightgrey-txt">
              MUSIC OUT NOW <span>&lt;</span>3
            </h2>
          </div>
          <div className="">
            <a href="" className="button-bg-paint padding-10" alt="">
              <button className="marginEven white-txt">Stream Here</button>
            </a>
          </div>
        </div>
        <img
          src="/assets/Images/SaloniIMG.png"
          alt="Image of the music artist Saloni"
        />
      </div>
    </section>
    {/* Promo */}
    <section className="  yellow-bg ">
      <article className="flex Screen-sizing-2 marginEven flexSpread ">
        <div className="">
          <p>
            Guess what just dropped, folks? I've got a shiny new song cover hot
            off the mic and ready to bless your ears! It's got the vibes, the
            feels, and just the right sprinkle of magic to make you hit replay
            (like...a lot). Whether you're singing along in the shower or
            jamming out in traffic, this one’s for you. Go check it out, turn it
            up, and let the music do its thing For you
          </p>
        </div>
        <div>
          <img src="./assets/Images/CD.png" />
        </div>
      </article>
    </section>
  </div>
);

export default HomePage;
