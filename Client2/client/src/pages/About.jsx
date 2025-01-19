// import "./About.css";
import ConcertImages from "../components/ConcertImages";

const About = () => {
  return (
    <div className=" main-content big-flow">
      <div className="small-flow">
        <h1>About </h1>
        <p>
          Saloni is a musician on a mission to make your playlists way more
          interesting. Starting out with covers; shes down to impact the pop
          scene Saloni is here to bring the fun, beauty and quality into the pop
          scene and your speakers. From Halle Balle covers, to her own original
          works; everything will be heard- Dont be surprised to see her
          excellence show in r&b, soul or alternative genres !
        </p>
        <p>
          What makes Saloni stand out is her ability to blend raw emotion with a
          fresh, modern sound. Whether she’s belting out a soulful ballad or
          creating an upbeat pop anthem, she pours her heart into every note.
          channeling her inner rhythm, she’s all about making music that feels
          like a hug, a party, or a moment of clarity—depending on what you need
          that day. Get ready, because Saloni is just getting started, and she’s
          not slowing down anytime soon. Follow her for the journey because this
          is just the beginning, and she’s about to make some serious noise.
        </p>
      </div>

      {/* Images needed here */}
      {/* Update gradient to makke it more intense */}
      <ConcertImages />
    </div>
  );
};

export default About;
