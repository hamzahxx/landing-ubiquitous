function Navbar(props) {
  return (
    <>
      <div className="flex p-4">
        <h1 className="navbar-header">{props.name}</h1>
      </div>
    </>
  );
}

export default Navbar;
