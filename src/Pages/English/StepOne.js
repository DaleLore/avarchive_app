import React from "react";
import '../../Stylesheets/instructions.scss'

const StepOne = props => {

  return (
    <div className="steps">
      <h1 id="instruction-header">Step 1: Set out your archive's mission and objectives</h1>
      <ol>
      <li id="instruction-li">Whose stories do you want to preserve and/or amplify?</li>
      <li id="instruction-li">Decide on what kind of formats you want/can save</li>
      <li id="instruction-li">Define the period of time, scope and geographical area</li>
      <li id="instruction-li">Who do you want to tell that story/stories to? Why should it be YOU
      making this project and what’s your relationship to this content</li>
      <li id="instruction-li">Establish the resources that each objective will need – people, partners,
      premises, equipment?</li>
      <li id="instruction-li">Define your budgetary needs – how much money will this project need to
      succeed?</li>
      </ol>
    </div>
  );
};

export default StepOne;
