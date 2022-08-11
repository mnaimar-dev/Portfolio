import React from 'react'
import '../App.css'
import imagen from '../img/Nicolas.jpeg'

const About = () => {
  return (
    <section id="about">
        <h2 className="about__title">About Me</h2>

        <div className="about__container">
            <p className="about__text">
                Hi! Welcome to my personal portfolio 😀. My name is Nicolas Aimar, a
                young Front-End Developer who loves to create things that live on the
                web. I have knowledge in HTML5, CSS3, Styled Components, Emotion, Bootstrap, Tailwind, JavaScript, React.js, Git, C# and I’m
                taking my first steps in Java, Python and Solidity.
                <br />
                <br />
                Before I started learning web development I obtained numerous
                certificates related to finance and capital markets until I became a
                Certified Financial Advisor (AFC®). It is thanks to this that I worked for the argentinean stock broker 
                <a className="btoro" href="https://blacktoro.com.ar/" target="_blank"
                > Blacktoro.com.ar</a>.
                <br />
                <br />
                I consider myself an entrepreneur. This led me to found NorFitness in
                2018, a sports supplement selling venture, and co-founded Greenally in
                2021, a BaaS that provides a bridge between web 3.0 and businesses
                through blockchain-based tools and ethereum smart contracts, in order
                to achieve real utility and measurable benefits.
                <br />
                <br />
                Finally, my hobbies are CrossFit, family and friends.
            </p>

            <div className="imgContainer">
                <img className="about__img" src={ imagen } alt="Nicolás's Image" />
            </div>
        </div>
    </section>
    )
}

export default About