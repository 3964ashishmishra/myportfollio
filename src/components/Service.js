import React from 'react'
import { Link } from 'react-router-dom'

const Service = () => {
    return (

        <>

<h1 className="vice">What I Offer?</h1>
<div class="container">
  <div class="row">

    <div class="col-md-4 my-4">
      <div class="main-1">
        <div class="service">
          <div class="service-logo">
            <img src="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-apple.png" alt=""/>
          </div>
          <h4>Web Design</h4>
          <p>We creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals. We create design on customer preference.</p>
          <Link className="btn-4" to="/contact">Contact Now For Service</Link>
        </div>
      </div>
    </div>

    <div class="col-md-4 my-4">
      <div class="main-1">
        <div class="service">
          <div class="service-logo">
            <img src="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-android.png" alt=""/>
          </div>
          <h4>Web Development</h4>
          <p>Our team of experts delivers custom website solutions for companies, depending on their needs. We conduct a complete research on the market trends and use top technological elements for scalable website development with customizable features.</p>
          <Link className="btn-4" to="/contact">Contact Now For Service</Link>
        </div>
      </div>
    </div>

    <div class="col-md-4 my-4">
      <div class="main-1">
        <div class="service">
          <div class="service-logo">
            <img src="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-geography.png" alt=""/>
          </div>
          <h4>Development</h4>
          <p>we include many skilled software developers with a high range of skills and expertise in different avenues of software development. We can create strong and stable desktop-based apps/websites, mobile apps, and digital platforms with responsive and insightful features.</p>
          <Link className="btn-4" to="/contact">Contact Now For Service</Link>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
      
    )
}

export default Service
