import React from "react";
import '../../Stylesheets/instructions.scss'

const StepThree = props => {
  console.log('i here now');
  return (
    <div className="steps">
      <h1 id="instruction-header">Decide How You'll Preserve Your Archive</h1>
      <p>
      Before you start collecting, it's important to know how you will preserve your archive (flip to get some info on preserving different types of materials). If you have digital files, be sure to make copies. For example, you can have onecopy on your laptop; another on an external hard drive and another on a cloud service or server.
      </p>
    </div>
  );
};

export default StepThree;
