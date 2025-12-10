import "./footer.css";

export function Footer() {
  return (
    <footer className="footercontainer">
      <div className="footercopyright">
        <a href="#" className="footerlink">UCL™ &copy; 2025</a>
      </div>
      <div className="footergroup">
        <a href="#" className="footerlink">About</a>
        <a href="#" className="footerlink">Privacy Policy</a>
        <a href="#" className="footerlink">Licensing</a>
        <a href="#" className="footerlink">Contact</a>
      </div>
    </footer>
  );
}
