const Navbar = () => {
  return (
    <>
      <nav className="flexSpread">
        <ul className="flexAround">
          <li>Home</li>
          <li>My story</li>
          <li>Work with me</li>
        </ul>
        <ul className="flexAround">
          <li>
            <button>
              <img src="" alt="Instagram Icon" />{" "}
            </button>
          </li>
          <li>
            <button>
              <img src="" alt="Youtube Icon" />{" "}
            </button>
          </li>
          <li>
            <button>
              <img src="" alt="Soundcloud Icon" />{" "}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
