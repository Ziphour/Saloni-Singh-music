const Navbar = () => {
  return (
    <>
      <nav className="marginLeft flexAround">
        <ul className="flexAround gap-20">
          <li>Home</li>
          <li>My story</li>
          <li>Work with me</li>
        </ul>
        <ul className="flexAround gap-10">
          <li>
            <button>
              <img
                src="/assets/Icons/Instagram.png"
                alt="Instagram Icon"
              />{" "}
            </button>
          </li>
          <li>
            <button>
              <img src="/assets/Icons/Youtube.png" alt="Youtube Icon" />{" "}
            </button>
          </li>
          <li>
            <button>
              <img
                src="/assets/Icons/SoundCloud.png"
                alt="Soundcloud Icon"
              />{" "}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
