import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="Screen-sizing-2 marginEven flex flexSpread nav ">
        <ul className="flex gap-50">
          <li>
            <Link className="navbtn padding-10" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbtn padding-10" to="/About">
              My World
            </Link>
          </li>
          <li>
            <Link className="navbtn padding-10" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
        {/* apply relative on here and then
          push it all the way to the left, look it up online if needed */}
        <ul className="flex gap-10 right-position">
          <li>
            <button>
              <img src="/assets/Icons/Instagram.png" alt="Instagram Icon" />
            </button>
          </li>
          <li>
            <button>
              <img src="/assets/Icons/Youtube.png" alt="Youtube Icon" />
            </button>
          </li>
          <li>
            <button>
              <img src="/assets/Icons/SoundCloud.png" alt="Soundcloud Icon" />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
