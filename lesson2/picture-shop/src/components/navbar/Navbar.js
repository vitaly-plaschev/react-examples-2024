import navbarStyle from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={navbarStyle.navbar}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/pictures">Pictures</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
