import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {

  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className='container mx-auto text-center'>

        <h2 className='text-xl font-semibold text-purple-500'>
          Satyam Kumar
        </h2>

        {/* navigation link */}
        <nav className='flex flex-wrap justify-center gap-4 sm:gap-6 mt-4'>
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className='hover:text-purple-500 text-sm sm:text-base transition'
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* social media icons */}
        <div className='flex flex-wrap justify-center gap-4 mt-6'>
          {[
            { icon: <FaFacebook />, link: "#", label: "Facebook" },
            { icon: <FaSquareXTwitter />, link: "https://x.com/SATYAYDV65", label: "Twitter" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/satyam-kumar-209597323/", label: "LinkedIn" },
            { icon: <FaInstagram />, link: "#", label: "Instagram" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/@satyamkumar4901", label: "YouTube" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={item.label}
              className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* copyright */}
        <p className="text-gray-400 text-sm mt-6">
          © 2026 Satyam Kumar. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer