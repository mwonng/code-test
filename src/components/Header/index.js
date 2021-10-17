import qantasLogo from "./qantas-logo.png";

function Header() {
  return (
    <div className="Header">
      <img src={qantasLogo} className="logo" alt="qantasLogo" />
    </div>
  );
}

export default Header;
