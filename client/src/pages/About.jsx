// import "./About.css";
import ConcertImages from "../components/ConcertImages";

const About = () => {
  return (
    // Flow?
    <div className="flow-3">
      <section className="flow-2  Screen-sizing-3 marginEven">
        <h2 className="textAlign"> About me :P</h2>
        <div className="grid grid-3 gap-50">
          <div className="span-1 gap-50">
            <img
              src="/assets/Images/polaroidFrame.png"
              alt="Image of the artist Saloni Singh"
            />
          </div>
          <p className="span-2">
            Hey, I’m Saloni Singh — a pop artist with glitter in my veins and a
            love for making music that makes people *feel*. I grew up in the
            heart of Miami, where the sounds of dance beats and soulful melodies
            were always in the air. From the time I could walk, I was putting on
            shows in the living room, stealing my mom’s hairbrush to use as a
            mic, and dreaming of singing to crowds
          </p>
        </div>
        <p>
          My music is all about emotion you can move to. I blend catchy pop
          melodies with dancefloor-ready beats, but I always make sure the
          lyrics come from something real—love, heartbreak, self-discovery, and
          everything in between. My music is all about emotion you can move to.
          I blend catchy pop melodies with dancefloor-ready beats, but I always
          make sure the lyrics come from something real—love, heartbreak,
          self-discovery, and everything in between. My music is all about
          emotion you can move to. I blend catchy pop melodies with
          dancefloor-ready beats, but I always make sure the lyrics come from
          something real—love, heartbreak, self-discovery, and everything in
          between.
        </p>
      </section>
      <section className="flow-2 textAlign">
        <h2>Tour</h2>
        <div>
          <ConcertImages />
        </div>
      </section>
    </div>
  );
};

export default About;
