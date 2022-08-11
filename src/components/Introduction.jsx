import React from 'react'
import '../App.css'

const Introduction = () => {
  return (
    <div className="main">
        <p className="salute">Hi, my name is</p>
        <h1 className="name">Nicolas Aimar</h1>
        <h2 className="profession mt-1">I Design, Build and Maintain Websites 👨🏻‍💻</h2>
        <p className="main-text">
        I am a Computer Engineering Student, a Front-End Developer, and a Certified Financial Advisor (AFC®).
        <br />
        Currently, I'am working as a Front-End Developer at <a className="btoro" href="https://pagieportal.com" target="_blank"
          >Pagie Portal</a>, a UAE based Company. 
        </p>
    </div>
  )
}

export default Introduction