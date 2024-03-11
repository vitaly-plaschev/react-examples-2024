import Logo from "../logo/Logo.js";
import Navbar from "../navbar/Navbar.js";
import headerStyle from "./header.module.css";

export default function Header() {
  return (
    <header className={headerStyle.header}>
      <Logo />
      <Navbar />
    </header>
  );
}
