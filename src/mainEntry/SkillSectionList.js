import React from "react";
import skillExplanations from "./skillExplanations";
import SkillItem from "./SkillItem";

function SkillSectionList() {

  
  return (
    <section className="skill-section__wrapper">
      <section className="skill-list" id="skills">
              {
                skillExplanations.map((skill)=> (
                        <SkillItem key={skill.id}
                        skill={skill}
                        />
                    ))}

      </section> 
    </section>
  );
}

export default SkillSectionList;
