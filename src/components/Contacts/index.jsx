import React from 'react'
import "./Contact.css"
import Pyramid from '../../ui/Pyramid'
import { contactInfo } from "../../data"
import SocialHandles from '../../ui/SocialHandles'
import { BsFillSendFill } from "react-icons/bs"

const Contact = () => {
  return (
    <section id='contact'>
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid/>
        </div>
        <div className="contact__group">
          <div className="contact__info">
            <h3 className='title'>
              Let's talk on your <span className='shine'>great project</span>{" "} together
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact, index) => (
                <article className='flex option' key={index}>
                  <div className="contact__icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="flex contact__content">
                    <div>
                      <h3 className='name'>{contact.name}</h3>
                      <p className='text__muted line__clamp__1 value'>{contact.value}</p>
                    </div>
                    <a href={contact.link} target='_blank' className='flex__center btn'>
                      <span className='btn__shine text'>Message</span>
                      <div className='flex__center icon'
                      style={{ background: contact.color}}
                      >
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SocialHandles/>
          </div>
          <form>
            <input type="text"
            placeholder='Your full name'
            name='name'
            required
            />
            <input type="email"
             placeholder='Your email'
             name='email'
             required
            />
            <textarea name="message" rows={7} placeholder='Your message' required></textarea>
            <button 
              type='submit' 
              className='btn flex__center submit__btn'
              onClick={(e) => {
                e.preventDefault();
                const name = document.querySelector('input[name="name"]').value;
                const email = document.querySelector('input[name="email"]').value;
                const message = document.querySelector('textarea[name="message"]').value;
                
                if (!name || !email || !message) {
                  alert('Please fill in all fields');
                  return;
                }

                const mailtoLink = `mailto:lantanat62@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(email)}`;
                window.location.href = mailtoLink;
              }}
            >
              <div className="icon">
                <BsFillSendFill/>
              </div>
              <span>Send Now</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact