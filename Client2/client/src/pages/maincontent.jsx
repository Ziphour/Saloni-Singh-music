// MainContent.jsx
import Upcoming from "../components/Upcoming.jsx";

const MainContent = () => (
  <div className="main-content big-flow">
    <div className="Small-flow">
      <h1 className="loop">Saloni Singh</h1>
      <p className="subtext">
        Fresh on the scene, Saloni is a rising pop singer with a passion for
        delivering energetic and captivating covers of todays biggest hits. With
        a voice that effortlessly blends into the world of modern pop, Saloni
        brings a personal touch to every song
      </p>
      <p className="subtext">Want to see Salonis full discography?</p>
      <div>
        <a href="https://soundcloud.com/salonismusic" className="cta-button">
          Click here
        </a>
      </div>
    </div>
    <Upcoming />

    {/* Links and routers here? */}
  </div>
);

export default MainContent;
