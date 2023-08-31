export default function Footer({children}){
    return <>
   <div className="footer-dark">
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-3 item">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#">Web design</a>
            </li>
            <li>
              <a href="#">Development</a>
            </li>
            <li>
              <a href="#">Hosting</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3 item">
          <h3>About</h3>
          <ul>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 item text">
          <h3>Company Name</h3>
          <p>
            Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
            ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique
            lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
          </p>
        </div>
        <div className="col item social">
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-snapchat" />
          </a>
          <a href="#">
            <i className="fa fa-instagram" />
          </a>
        </div>
      </div>
      <p className="copyright">Cv. Mega Press Nusantara &copy; 2023 - Developed By Nusa Agency</p>
    </div>
  </footer>
</div>

    </>
}