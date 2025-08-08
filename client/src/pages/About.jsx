// import "./About.css";
import ConcertImages from "../components/ConcertImages";

const About = () => {
  return (
    // Flow?
    <div className="">
      <div className="flex flexAround">
        <div>
          <img
            src="/assets/Images/polaroidFrame.png"
            alt="Image of the artist Saloni Singh"
          />
        </div>
        <p>
          Hey, I’m Saloni Singh — a pop artist with glitter in my veins and a
          love for making music that makes people *feel*. I grew up in the heart
          of Miami, where the sounds of dance beats and soulful melodies were
          always in the air. From the time I could walk, I was putting on shows
          in the living room, stealing my mom’s hairbrush to use as a mic, and
          dreaming of singing to crowds who knew every word. Now, I’m living
          that dream one beat at a time. constantly chasing the next big sound
          that’ll make your heart race. For me, music is magic — it’s how we
          connect, how we heal, how we celebrate. So if you’re into big
          choruses, honest lyrics, and the kind of songs that make you want to
          sing with the windows down, I’m your girl. Welcome to my world — let’s
          dance through it together. Honest lyrics, and the kind of songs that
          make y your girl. Welcome to my world — let’s dance through it
          together. Hey, I’m Saloni Singh — a pop artist with glitter in my
          veins and a love for
        </p>
      </div>
      <p>
        My music is all about emotion you can move to. I blend catchy pop
        melodies with dancefloor-ready beats, but I always make sure the lyrics
        come from something real—love, heartbreak, self-discovery, and
        everything in between.
      </p>
      <ConcertImages />
    </div>
  );
};

export default About;
