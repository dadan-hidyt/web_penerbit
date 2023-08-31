import NavLink from "./Navbar/NavLink";

export default function Navbar({ props }) {
    return <>
        <nav className="navbar text-white navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img width={30} height={24} src="https://megapress.co.id/img/logo.png" alt="" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavLink active={true}><i className="fa fa-home"></i>&nbsp;Home</NavLink>
                        <NavLink active={false}><i className="fa fa-book"></i>&nbsp;Katalog</NavLink>
                        <NavLink active={false}><i className="fa fa-question"></i>&nbsp;Profile</NavLink>
                    </ul>
                   <div className="d-flex">
                    <button className="btn btn-outline-primary"><i className="fa fa-user"></i>&nbsp;Kontak</button>
                   </div>
                </div>
            </div>
        </nav>

    </>
}