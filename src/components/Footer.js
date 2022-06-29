import React from "react";

function Footer() {
  let today = new Date();
  let year = today.getFullYear();

  return (
    <footer className="footer fixed-bottom py-3 bg-light">
      <div className="container mx-auto">
        <div className="d-flex justify-content-center">
          <div className="mx-1 text-muted">developer's joint</div>
          <div className="mx-1">•</div>
          <div className="mx-1 text-muted">© {year}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
