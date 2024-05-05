function Navbar(props) {
  return (
    <>
      <div className="flex p-4">
        <h1 className="navbar-header">{props.name}</h1>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Resume</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
