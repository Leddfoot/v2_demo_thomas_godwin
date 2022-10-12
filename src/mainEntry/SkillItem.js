import React from "react";

function SkillItem({ skill }) {
  return (
    <div className="skill-section">
      <h2>{skill.title}</h2>
      <div className="skill-visual-component-wrapper">
        <div className="skill-image__wrapper">{skill.icon}</div>
      </div>

    </div>
  );
}

export default SkillItem;
