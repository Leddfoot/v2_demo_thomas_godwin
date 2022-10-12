import React from 'react'

import './IntroSection.css'

function IntroSection() {
  return (
    <div className="intro-section">
          <h1 className="intro-header">Hi. I'm Thomas Godwin.</h1>
          <h2 className="intro-subheader">Aspiring Frontend Developer</h2>
          <p className='tldr__intro-section'>#TLDR: Masters degree OlsoMet-Universal Design of IT (aka accessibility expert), (4year) Bachelors degree University Greensboro Information Systems/Operations Management. I am an aspiring Frontend Developer. I love overthinking user interactions, UX, and securing accessibility. I like writing code that I can understand later. Mobile First comes natural to me. Check out my <a href="#portfolio">Portfolio</a> and a <a href="#skills">skills self assessment</a> below</p>

          <div className='long-winded-explanation'>
          <p>While working on a Universal Design of IT Masters Degree at what is now OlsoMet, I created a working prototype web application to test and support my research. I'm not gonna lie, it was terrible, but usable for the research. I was instantly attracted to Frontend developing, because it dovetailed nicely with what I had learned. To keep it succint we can just call it an incredibly deep dive into gathering user requirements. But not for just any users, specifically users that had accessibility challenges. During that time I realized the importance of Frontend Development in regards to accessibility. This is indeed where most accessibility transgressions occur.</p>
          <p>I have since dedicated my efforts to improving my frontend skills, while trying to apply what I have learned about accessibility. I have diverse experience unrelated fields. Most often however these positions involved troubleshooting something or streamlining a process. I like to learn and find that life is better when acquiring some new knowledge. Creating understandable and accessible code is a neverending challenge, which requires humility and sometimes learning that what you believed was right, was actually the opposite. This difficulty and constant challenge is what attracts me to this discipline. </p>
          
          
          </div>
          
        </div>
  )
}

export default IntroSection