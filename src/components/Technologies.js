import React from 'react'
import t1 from '../images/001.png';
import t2 from '../images/002.png';
import t3 from '../images/003.png';
import t4 from '../images/004.png';
import t5 from '../images/005.png';

const Technologies = () => {
    return (
        <div>
            <section>
                <div className="technologies">
                    <div className="container">
                        <div className="technologies__inner">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="technologies-content">
                                        <div className="title">
                                            <h2>Technologies we're working with</h2>
                                        </div>
                                        <div className="sub-title">
                                            <p>Proceed to the first steps of your cloud transformation. Our team has proven expertise with the most <br /> comprehensive technologies</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-12">
                                    <div className="technologies-images">
                                        <div className="technologies-images-box">
                                        <img src={t1} />
                                        </div>
                                        <div className="technologies-images-box">
                                        <img src={t2} />
                                        </div>
                                        <div className="technologies-images-box">
                                        <img src={t3} />
                                        </div>
                                        <div className="technologies-images-box">
                                        <img src={t4} />
                                        </div>
                                        <div className="technologies-images-box">
                                        <img src={t5} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Technologies;
