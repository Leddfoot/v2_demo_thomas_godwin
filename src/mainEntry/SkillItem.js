import React from "react";

function SkillItem({ skill }) {
  return (
    <section className="skill-section">
      <h2>{skill.title}</h2>
      <section className="skill-visual-component-wrapper">
        <section className="skill-image__wrapper">{skill.icon}</section>
      </section>

    </section>
  );
}

export default SkillItem;
