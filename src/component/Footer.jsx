export const Footer = () => {
    return (
        <div className={"bg -secondary-color"}>
            <footer className="text-center text-lg-start bg-light text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Shavkat.dev|-|developer</span>
                    </div>

                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100078162585680" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"/>
                        </a>
                        <a href="https://twitter.com/shavkatn440" className="me-4 text-reset">
                            <i className="fab fa-twitter"/>
                        </a>
                        <a href="https://accounts.google.com/SignOutOptions?hl=ru&continue=https://mail.google.com&service=mail&ec=GBRAFw" className="me-4 text-reset">
                            <i className="fab fa-google"/>
                        </a>
                        <a href="https://www.instagram.com/shavkat___0801" className="me-4 text-reset">
                            <i className="fab fa-instagram"/>
                        </a>
                        <a href="https://t.me/shavkat0801" className="me-4 text-reset">
                            <i className="bi bi-telegram"/>
                        </a>
                        <a href="https://www.linkedin.com/in/shavkat-nazarov-649070244/" className="me-4 text-reset">
                            <i className="fab fa-linkedin"/>
                        </a>
                        <a href="https://github.com/shavkatnazarov" className="me-4 text-reset">
                            <i className="fab fa-github"/>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"/>Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            {/*<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">*/}
                            {/*    <h6 className="text-uppercase fw-bold mb-4">*/}
                            {/*        Products*/}
                            {/*    </h6>*/}
                            {/*    <p>*/}
                            {/*        <a href="https://assets.bonappetit.com/photos/57aceacc1b3340441497532d/master/w_2700,h_1621,c_limit/double-rl-ranch-burger.jpg" className="text-reset">burger</a>*/}
                            {/*    </p>*/}
                            {/*    <p>*/}
                            {/*        <a href="https://yukber.uz/image/cache/catalog/179ccd00e22-700x700.jpg" className="text-reset">Lavash</a>*/}
                            {/*    </p>*/}
                            {/*    <p>*/}
                            {/*        <a href="https://mcdonaldsmenu.ru/image/cache/catalog/photo/472778060-kartofel-fri-bolshoj-600x600.jpg" className="text-reset">fri</a>*/}
                            {/*    </p>*/}
                            {/*    <p>*/}
                            {/*        <a href="https://www.wholesomeyum.com/wp-content/uploads/2022/12/wholesomeyum-Baked-Whole-Chicken-Wings-15.jpg" className="text-reset">Chicken wing</a>*/}
                            {/*    </p>*/}
                            {/*</div>*/}

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="https://t.me/shavkat0801" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="https://t.me/shavkat0801" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="https://t.me/shavkat0801" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="https://t.me/shavkat0801" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"/> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"/>
                                        shavkatn440@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"/> +998 90 441 08 01</p>
                                <p><i className="fas fa-print me-3"/> +998 90 441 08 01</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4 bg-light">
                    © 2023 Copyright:
                    <a className="text-reset fw-bold" href="https://t.me/shavkat0801">SHAVKAT</a>
                </div>
            </footer>
        </div>
    )
}