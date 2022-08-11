import React from 'react'
import '../App.css'

const UpButton = () => {
  return (
    <div className="upButton">
        <a href="#header">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="up"
                width="68"
                height="68"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#64ffda"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="16" y1="9" x2="12" y2="5" />
                <line x1="8" y1="9" x2="12" y2="5" />
            </svg>
        </a>
    </div>
  )
}

export default UpButton