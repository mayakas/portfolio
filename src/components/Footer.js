import React from "react";

function Footer() {
  let today = new Date();
  let year = today.getFullYear();

  return (
    <footer class="footer fixed-bottom py-3 bg-light">
      <div class="container mx-auto">
        <div class="d-flex justify-content-center">
          <div class="mx-1 text-muted">developer's joint</div>
          <div class="mx-1">•</div>
          <div class="mx-1 text-muted">© {year}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
