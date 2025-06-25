// MainContent.jsx
import Upcoming from "../components/Upcoming.jsx";

const MainContent = () => (
  <div className="main-content big-flow">
    <h1 className="loop">Saloni Singh</h1>
    <div className="Small-flow">
      <p className="subtext">
        Saloni is a rising pop singer with a passion for delivering energetic
        and captivating covers of todays biggest hits. With a voice that
        effortlessly blends into the world of modern pop, Saloni brings a
        personal touch to every song
      </p>

      <p>
        Driven by a passion for both musical and performance arts, she continues
        to evolve her craft, drawing inspiration from new and old. Her goal is
        to shine and connect with others through her works
      </p>
      <div>
        <a
          target="_blank"
          href="https://soundcloud.com/salonismusic"
          className="cta-button"
        >
          Her discography
        </a>
      </div>
    </div>
    <Upcoming />

    {/* Links and routers here? */}
  </div>
);

export default MainContent;
