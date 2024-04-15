import logo1 from "./logo1.png";

const logoStyle = {
  height: "50px",
  width: "50px",
};

function Logo() {
  return (
    <a href="/">
      <img src={logo1} style={logoStyle} alt="sites logo" />
    </a>
  );
}

export default Logo;
