
const Navbar = () => {

  return (
    <nav className="navbar">
      <a href="/" className="nav-title"> 
        <h2>
          <span>Jan</span>
          <span>Piotrzkowski</span>
        </h2>

        <div className="aka">AKA BABILONCZYK</div>
      </a>

      <div></div>

      <div className="nav-btns">
        <a className="nav-btn--active" href="/"><span>About_Me</span></a>
        <a href="/"><span>Services</span></a>
        <a href="/"><span>Projects</span></a>
      </div>
    </nav>
  );
};

export default Navbar;