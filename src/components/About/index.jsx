import React from 'react'
import './About.css'
// import Hole from "../../ui/Hole"
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

const About = () => {
  return (
    <section id="about">
       <div className="card section__wrapper">
        {/* <Hole/> */}
        <div className="column left-column">
          {/* <h3 className='skill__title'></h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div> */}
          <CardUi className="card__ui-item" color={"var(--color-primary)"}/>
        </div>
        <div className="column right-column">
          <h2 className='shine'>About Me</h2>
          <h1 className='title'>
            I am <span className='color__primary'>Lantant Tijani</span>
          </h1>
          <p className='text__muted description'>
            A cloud engineer with a strong software engineering foundation and a passion for transforming businesses through scalable cloud solutions. I've transitioned from software development to cloud architecture, successfully migrated over 50 enterprise applications to the cloud reducing operational costs by an average of 40%, and I hold multiple AWS and Azure certifications that keep me at the forefront of cloud innovation.

            My expertise spans **cloud architecture design, DevOps automation, and cost optimization** – the three pillars that drive successful digital transformation. What sets me apart is my unique software engineering background combined with deep cloud expertise; I understand how applications work from the ground up, allowing me to architect cloud solutions that not only scale efficiently but are also optimally designed for performance and maintainability.

            When you work with me, you're not just getting technical implementation – you're getting a partner who eliminates the complexity of cloud migration, reduces your infrastructure costs, and ensures your systems are scalable, secure, and future-ready. This means you can focus on growing your business while I handle the technical heavy lifting.

            I'd love to discuss how my cloud engineering expertise can help accelerate your digital transformation and deliver the scalable, cost-effective infrastructure your business deserves.
          </p>
        </div>
       </div>
    </section>
  )
}

export default About