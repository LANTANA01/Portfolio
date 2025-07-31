import React from 'react'
import './About.css'
// import Hole from "../../ui/Hole"
import { skills } from "../../data";
import mypix from "../../assets/portfoliopix.jpg"
import CardUi from "../../assets/CardUi";

const About = () => {
  return (
    <section id="about">
       <div className="card section__wrapper">
        {/* <Hole/> */}
        <div className="column left-column">
          <img src={mypix} alt='portfolio picture' style={{height: '50px'}}/>
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
          {/* <CardUi className="card__ui-item" color={"var(--color-primary)"}/> */}
        </div>
        <div className="column right-column">
          <h2 className='shine'>About Me</h2>
          <h1 className='title'>
            I am <span className='color__primary'>Lantant Tijani</span>
          </h1>
          <p className='text__muted description'>
          An AWS Cloud Solutions Architect at CloudTech Solutions, where I specialize in designing scalable, cost-effective cloud infrastructures for enterprise clients. With a passion for bridging the gap between traditional IT systems and modern cloud technologies, I aim to become a recognized thought leader in cloud transformation strategies while helping organizations achieve their digital modernization goals.
My expertise is built on a foundation of impressive achievements that demonstrate my technical prowess and leadership capabilities. I successfully led the migration of a Fortune 500 manufacturing company's entire IT infrastructure to AWS, resulting in a 40% reduction in operational costs and 99.9% system uptime. Additionally, I earned three AWS certifications—Cloud Practitioner, Solutions Architect Associate, and Developer Associate—within an eight-month period while maintaining my full-time responsibilities. My innovative approach to automated deployment pipelines has been adopted across my organization, reducing deployment time by 60% and significantly improving system reliability.
Currently focused on expanding my influence in the cloud computing space, I regularly contribute to industry publications and speak at technology conferences about sustainable cloud practices and cost optimization strategies. I am committed to mentoring the next generation of cloud professionals while continuing to drive innovation in enterprise cloud solutions.
I solve urban drainage problems by day and create my own delicious messes in the kitchen by night. I solve urban drainage problems by day and create my own delicious messes in the kitchen by night.
</p>
        </div>
       </div>
    </section>
  )
}

export default About