import React from 'react'
import '../Pages/Project.css'
function Projects() {
  return (
    <>
    <h3>E-commerce Website</h3>
      <div className="Projects">
        
        <div className="E-comm-pro">
          <ul>
            <li><h4>Technologies Used:</h4>React.js, Bootstrap, Font Awesome</li>
            <li><h4>Description:</h4></li>
            <ul>
              <li>Developed a fully responsive e-commerce website using React.js and Bootstrap. The website allows users to browse products, add items to the cart, and view product details.</li>
              <li>The layout and styling were handled using Bootstrap for responsiveness and UI components. Font Awesome icons were used to enhance the user interface.</li>
              <li>Used a random dataset sourced from Google to display products with descriptions, images, and pricing.</li>
            </ul>
          </ul>

          <ul>
            <li><h4>Features:</h4></li>
            <ul>
              <li>Dynamic product listing with filtering options.</li>
              <li>Interactive shopping cart functionality.</li>
              <li>Responsive design across various screen sizes.</li>
            </ul>
          </ul>

          <ul>
            <li><h4>Challenges Overcome:</h4></li>
            <ul>
              <li>Managed state efficiently using React hooks for cart and product pages.</li>
              <li>Created a scalable layout using Bootstrap grids and components.</li>
            </ul>
          </ul>

        </div>




      </div>
    </>
  )
}

export default Projects