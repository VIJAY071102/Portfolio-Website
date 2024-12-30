import React from 'react'
import './Services.css'
function Services() {
  return (
    <div>
        <div className='services-container'>
            <div className='services-list-container'>
                <div className='services-desc-container'>
                    <h1>
                        My Awesome <span>Services</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque quidem. Voluptatum, incidunt possimus! Quisquam minus iure, asperiores debitis vitae ratione aliquam, facere voluptas, magni doloribus quae inventore in temporibus.
                    </p>
                    <button>Hire me</button>
                </div>
                <div className='services-item-container'>
                <div className='services-items'>
                    <i className='fa-solid fa-code'></i>
                    <div className="item-desc">
                        <h3>Web Development</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde beatae reprehenderit corrupti dolor labore at, nostrum consectetur aspernatur distinctio, eligendi cumque tempore commodi ut. Sequi natus eum quos quas fugiat?
                        </p>
                    </div>

                </div>


                <div className='services-items'>
                    <i className='fa-solid fa-desktop'></i>
                    <div className="item-desc">
                        <h3>Desktop Development</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde beatae reprehenderit corrupti dolor labore at, nostrum consectetur aspernatur distinctio, eligendi cumque tempore commodi ut. Sequi natus eum quos quas fugiat?
                        </p>
                    </div>

                </div>



                <div className='services-items'>
                    <i className='fa-solid fa-tablet-alt'></i>
                    <div className="item-desc">
                        <h3>U/X Design</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde beatae reprehenderit corrupti dolor labore at, nostrum consectetur aspernatur distinctio, eligendi cumque tempore commodi ut. Sequi natus eum quos quas fugiat?
                        </p>
                    </div>

                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services