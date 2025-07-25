import React from 'react'
import './Services.css'
import ServiceCard from '../../ui/ServiceCard'
import { services } from '../../data'

const Services = () => {
  return (
    <section id="services">
      <h2 className="shine section__title">
        Serv<span>ices</span>
      </h2>
      <div className="services__container">
        {services.map(({title, description, icon, color, colorRGB},index)=>(
          <ServiceCard
            title={title}
            description={description}
            icon={icon}
            color={color}
            colorRGB={colorRGB}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Services