import React from 'react'
import '../App.css'

const WhatsappButton = () => {
  return (
    <a
        href="https://api.whatsapp.com/send?phone=+5493515634327&text=Hi%20Nicolas!%20I'm%20interested%20in%20your%20developer%20services%20"
        className="float"
        target="_blank"
    >
        <i className="fab fa-whatsapp"></i>
    </a>
  )
}

export default WhatsappButton