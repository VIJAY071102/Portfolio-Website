import React from 'react'
import portfolioImg from "../../assets/image.jpg"
import './Header.css'
function Header() {
    return (
        <>
            <div className="header-container">

                <div className="header-content">
                    <h1>Hello! I'm</h1>
                    <h2 className='fullname'>Vijay J S</h2>
                    <h2>
                        I'm a {' '}
                        {/* <Typical
                            steps={[
                                "Full Stack Developer", 1000,
                                "Frontend Developer", 1000,
                                "JavaScript Developer", 1000,
                                "React Developer", 1000,
                            ]} loop={Infinity}
                            wrapper='b'
                        /> */}

                    </h2>

                    <p>A recent Bachelor of Technology graduate with strong foundational knowledge in JavaScript and React.js, seeking an entry-level position in the IT industry. Eager to contribute to a dynamic team, utilize technical skills in front-end development, and continuously grow through new challenges and learning opportunities. Looking forward to applying problem-solving and coding abilities to develop innovative and user-friendly web applications.</p>
                    <div className="header-payment-container">
                        <button>Hire Me</button>
                        <i className='fa brands fa-paypal '></i>
                        <i className='fa brands fa-cc-visa '></i>
                        <i className='fa brands fa-cc-mastercard'></i>
                        <i className='fa brands fa-cc-amex'></i>
                    </div>
                </div>



                <div className="portfolio-img-container">
                    <img src={portfolioImg} alt="" />
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                </div>



            </div>
        </>
    )
}

export default Header