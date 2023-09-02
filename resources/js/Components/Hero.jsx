export default function Hero({ props, children }) {
    return <>
        <section id="hero" className="bg-soft-blue position-relative hero_hero__7Ygjg">
            <div className="container p-5 content">
                <div className="row">
                    <div className="col-lg-6 order-last order-md-first my-5 my-md-auto">
                        <h1 className="hero_title-hero__pQ5hJ text-white fw-bold">
                            CV. Mega Press Nusantara
                        </h1>
                        <div className="d-inline-flex text-white flex-column">
                            <span>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse fuga laudantium quo voluptate magnam? Amet asperiores voluptate ad facilis quidem nostrum, culpa, optio deserunt magnam corrupti quaerat alias eum consequatur.
                            </span>
                          
                        </div>
                        <p />
                        <div className="input-group shadow-sm mt-5">
                            <span className="input-group-text bg-white border-0">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="magnifying-glass"
                                    className="svg-inline--fa fa-magnifying-glass text-muted"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                className="form-control py-3 border-0 px-1"
                                placeholder="Cari buku disini"
                                aria-label="Cari buku disini"
                                defaultValue=""
                            />
                            <button
                                className="d-none bg-white d-sm-block btn btn-white border-start border-1 dropdown-toggle px-4"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Kurikulum Merdeka
                            </button>
                            <ul className="dropdown-menu" style={{}}>
                                <li>
                                    <div className="dropdown-item" style={{ cursor: "pointer" }}>
                                        Kurikulum Merdeka
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown-item" style={{ cursor: "pointer" }}>
                                        Teks K13
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown-item" style={{ cursor: "pointer" }}>
                                        Nonteks
                                    </div>
                                </li>
                            </ul>
                            <div className="bg-white my-auto" style={{ padding: 9 }}>
                                <button className="btn btn-primary" type="button">
                                    Cari
                                </button>
                            </div>
                        </div>
                        <div className="position-relative bg-danger" />
                    </div>
                    <div className="col-lg-6">
                        <img
                            src="/assets/image/home/aset home day.png"
                            className="w-100 d-block d-lg-none"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <img
                src="/dadan.png"
                className=" d-none d-lg-block position-absolute"
                alt=""
                style={{ zIndex: 1, left: "45%", bottom: "-6%" }}
            />
        </section>

    </>
}