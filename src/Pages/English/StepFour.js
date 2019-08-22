import React from "react";
import '../../Stylesheets/instructions.scss'

const StepFour = props => {
  return (
    <div className="steps">
      <h1 id="instruction-header">step 4: start collecting</h1>
      <ol>
        <li id="instruction-li"> Be transparent, share your goals, grant details, process, etc with your community.</li>
        <li id="instruction-li"> Decentralize information. Don't replicate the same structures that excluded your community in the first place.</li>
        <li id="instruction-li"> Make a good faith effort to secure permission to use contributors' materials.</li>
        <li id="instruction-li"> Let people know if you plan on making your archive available online and add a takedown policy for sensitive, harmful or copyrighted content.</li>
        <li id="instruction-li"> Incorporating a community advisory board to collectively establish themes, priorities and advocate for the archive for the long-term.</li>
        <li id="instruction-li"> Transitions in stewardship happen and as such, it is important to keep records of your inventory and workflow systems used to manage the archive in the event that you need to hand it over to someone else.</li>
        <li id="instruction-li"> How will you protect the privacy of your contributors? Will there be any kind of access restrictions to the archive?</li>
      </ol>
    </div>
  );
};

export default StepFour;
