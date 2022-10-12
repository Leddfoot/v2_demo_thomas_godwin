import React from 'react'

import './IntroSection.css'

function IntroSection() {
  return (
    <div className="intro-section">
          <h1 className="intro-header">Hi. I'm Thomas Godwin.</h1>
          <h2 className="intro-subheader">Aspiring Frontend Developer</h2>
          <p className='tldr__intro-section'>#TLDR: Masters degree OlsoMet-Universal Design of IT (aka accessibility expert), (4year) Bachelors degree University Greensboro Information Systems/Operations Management. I am an aspiring Frontend Developer. I love overthinking user interactions, UX, and securing accessibility. I like writing code that I can understand later. Mobile First comes natural to me.</p>

          <div className='long-winded-explanation'>
          <p>While working on a Universal Design of IT Masters Degree at what is now OlsoMet, I created a working prototype web application to test and support my research.  I was instantly attracted to Frontend programming, because it is tightly coupled with accessibility/UX/user friendliness and other concepts of this focus.</p>
          <p>After earning my masters, I interviewed with many possible employers , and learned that I would need to increase my programming skills if I wanted to work as a developer. I have been and am constantly building my skillset, and I am a perpetual learner. My goal is to produce high quality, maintainable code. I am also interested in testing. I always design "mobile-first". Checkout my code yourself, source code for this page and all of the demo pages can be found on <a target="blank" rel="noreferrer" href="https://github.com/Leddfoot"> Github</a>   </p>
          
          
          </div>
          
        </div>
  )
}

export default IntroSection