import React, {useState} from 'react'
import propTypes from 'prop-types'
export default function Stepper(props) {

  const {steps, initialStep} = props;
  const stepKeys = Object.keys(steps); 

  const [currenStep, setCurrentStep] = useState(
    stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]
  );

  const totalStep = Object.keys(steps).length;
  const indexStep = stepKeys.indexOf(currenStep);

  function prevStep() {
    if(+indexStep > 0) setCurrentStep(stepKeys[indexStep-1]);
  }

  function nextStep() {
    if(+indexStep < totalStep - 1) setCurrentStep(stepKeys[indexStep+1]);
  }

  return (
    <>{props.children(prevStep, nextStep, currenStep, steps)}</>
  )
}

Stepper.propTypes = {
    steps: propTypes.object.isRequired,
    initialStep: propTypes.string
}
