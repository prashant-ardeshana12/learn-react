import React from "react";
import BannerImg from '../images/1.png';

const Banner = () => {
    return (
        <section>
            <div className="hero">
                <div className="container">
                    <div className="hero__inner">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="hero-left">
                                    <div className="hero-title">
                                        <h1>
                                            We lend a hand in cloud migration
                                            and formation solutions
                                        </h1>
                                    </div>
                                    <div className="hero-text">
                                        <p>
                                            We are focused on the legacy
                                            modernization and full automation to
                                            let our partners focus on their
                                            product and business, rather than on
                                            its maintenance
                                        </p>
                                    </div>
                                    <div className="hero-btn-box">
                                        <a href="#" className="hero-btn btn">
                                            Request a quote
                                        </a>
                                        <a
                                            href="#"
                                            className="hero-btn btn-outline"
                                        >
                                            Our services
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="hero-right">
                                    <img src={BannerImg} />
                                    {/* <img src="./img/1.png" alt="hero" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
