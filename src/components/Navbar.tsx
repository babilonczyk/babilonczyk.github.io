
const Navbar: React.FC  = () => {

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
        <a className="nav-btn--active" href="#about-me"><span>About_Me</span></a>
        <a href="#services"><span>Services</span></a> 
        <a href="#experience"><span>Experience</span></a>
        <a href="https://babilonczyk-blog.herokuapp.com/" target="_blank" rel="noreferrer"><span>Blog</span></a>
      </div>
    </nav>
  ); 
};

export default Navbar;