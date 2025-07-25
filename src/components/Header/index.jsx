import React from 'react'
import './Header.css'

import Facts from '../../ui/Facts'
import SocialHandles from '../../ui/SocialHandles';
import BreathCircle from '../../ui/BreathCircle';


const code = `
const developer = {
            firstName: 'Lantana',
            lastName: 'Tijani',
            aka: 'pulseByLan',
            hobby: () => {
              //eat();
              //sleep();
              //code();
              //repeat();
            }
            }
              `;

const Header = () => {
  return (
    <header id='header'>
      <BreathCircle/>
      <div className="section__wrapper">
        <div className="grid upper md:flex md:items-center md:justify-between p-4">
          <div className="column left-content w-full md:w-1/2">
            <div className="typing-container">
              <h1 className="typing-text text-2xl md:text-4xl font-bold mb-4">Hi 👋, I'm Lantana Tijani</h1>
              <div className="typing-cursor"></div>
            </div>
            <p className='text__muted description text-sm md:text-base mb-6'>
           A passionate and results-driven software engineer with a deep love for crafting elegant and efficient solutions to complex problems. I thrive on turning ideas into reality through code and innovation</p>
            <div className="button-group flex flex-col md:flex-row gap-4">
              <a href="https://github.com/LANTANA01" className="btn btn-primary w-full md:w-auto text-center px-6 py-2">
                ⭐ Star Me On Github
              </a>
              <a href="https://drive.google.com/file/d/1esXGgl2n0q6ocxaJ7nkWNkXnYYG0hBcC/view?usp=sharing" className="btn btn-secondary w-full md:w-auto text-center px-6 py-2">
                See My Resume
              </a>
            </div>
            <Facts/>
            <SocialHandles/>
          </div>
          <div className="column image-container">
            <div className="profile-wrapper">
              {/* <img 
                src={tushar11} 
                className='profile__photo'
                alt="Profile"
                loading="lazy"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header