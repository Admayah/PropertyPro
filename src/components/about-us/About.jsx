import React from 'react'
import Navbar from '../Navbar/Navbar'
import Btn from '../Btn/Btn'
import Footer from '../footer/Footer'
import './about.css'

const About = () => {
    return (
        <>
        <Navbar />
            <div className='about__container'>
                <div className='about__first__section'>
                    <div className='about__first_section__tagline'>
                        <span>welcome to 9japroperty agency</span>
                        <span>call us today</span>
                        <span>080-000-3333-222</span>
                        <Btn value='contact us' className='abt__btn' />

                    </div>
                </div>
                <div className='about__overview'>
                    <div className='about__second__section'>
                        <div className='about__second__section__l'>
                            <span>about us</span>
                            <span>let us guide you home</span>
                            <span></span>
                        </div>
                        <div className='about__second__section__r'>
                            <p>
                                The 9japroperty Agency focuses on our clients needs and wants. With having a full design and construction team, we are able to walk you through the process, from preconstruction to the final product. We specialize in new builds and major remodels for residential and commercial. When you are looking for 100% dependability, there is no denying the positive facts of our business.
                            </p>

                        </div>

                    </div>
                </div>
                <div className="client__overview">
                    <div className='about__fourth__section'>
                        <div className='about__fourth__section__l'>
                            <span>from start to finish</span>
                            <span>client values</span>
                            <span></span>
                        </div>
                        <div className='about__fourth__section__r'>
                            <p>
                                The ultimate goal for every client we encounter is the value and the maximum return on their investment. The quality of the project, the cost and schedule are key factors in determining that value. Many contractors do not view these factors as such. They believe quality is achieved when the cost is high and spend more time on the job. This creates disasters. We love our clients to be happy. We don’t like disasters.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="guaranteed__overview">
                    <div className='about__fifth_section'>
                        <div className='about__fifth_section__l'>
                            <h4>guaranteed</h4>
                            <h2>100% satisfaction</h2>
                            <ul>
                                <li className='guaranteed__item'>Fully licensed and insured with industry-leading manufacturer and labor warranties.</li>
                                <li className='guaranteed__item'>The best customer service in the business, no joke!</li>
                                <li className='guaranteed__item'>The highest quality products and certified, trained and professional contractors on every project with safety as our top priority.</li>
                                <li className='guaranteed__item'>24/7 residential and commercial emergency services and repair always available.</li>
                            </ul>
                        </div>
                        <div className='about__fifth_section__r'>
                            <img src='/images/houseimg.jpg' />
                        </div>
                    </div>
                </div>


                {/* <div className="about_sixth_section">
                <div className="about_sixth_section__l">
                    <h4>visiting us</h4>
                    <h2>contact</h2>
                    <span></span>
                </div>
                <div className="about__sixth__section__r">

                </div>
            </div> */}
                {/* <div className='about__third__section'>
                <div className='about__third__section__l'></div>
                <img src="/public/images/overview.jpg" />
                <div className='about__third__section__r'>
                    <h4>about us</h4>
                    <h2>company overview</h2>
                    <span>
                        TCA collaborates closely with our owners, architects and designers to develop an innovative, efficient plan that will define the projects goals. This helps us deliver quality work. Once the plan is created, it is fully communicated and followed to a throughout the life of the project. From start to finish, our team shows total project control to have a successful project execution.
                    </span>
                    <span>

                    </span>
                </div>
            </div> */}
            </div>
<Footer />
        </>

    )
}

export default About