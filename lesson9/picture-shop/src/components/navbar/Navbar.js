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
          <a href="/todos">Todos</a>
        </li>
        <li>
          <a href="/scroll">Scroll</a>
        </li>
        <li>
          <a href="/game">Game</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
