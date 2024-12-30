import React from 'react'

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i class="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Product <br /> Designer</h3>
                </div>

                <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i class="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Product Designer</h3>
                        <p className="services__modal-description">Providing services backed by over 3 years of experience, offering quality and expertise in every project.</p>
                
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create ux element interactions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I position our company brand.</p>
                            </li>

                            <li className="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design and mockups of productos for companies.</p>
                            </li>

                        </ul>
                </div>
            </div>
            </div>

            <div className="services__content">
                <div>
                    <i class="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Ui/Ux <br /> Designer</h3>
                </div>

                <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i class="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Ui/Ux Designer</h3>
                        <p className="services__modal-description">Providing services backed by over 3 years of experience, offering quality and expertise in every project.</p>
                
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create ux element interactions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I position our company brand.</p>
                            </li>

                            <li className="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design and mockups of productos for companies.</p>
                            </li>

                        </ul>
                </div>
            </div>
            </div>

            <div className="services__content">
                <div>
                    <i class="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Visual <br /> Designer</h3>
                </div>

                <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i class="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="services__modal-description">Providing services backed by over 3 years of experience, offering quality and expertise in every project.</p>
                
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create ux element interactions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I position our company brand.</p>
                            </li>

                            <li className="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design and mockups of productos for companies.</p>
                            </li>

                        </ul>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Services