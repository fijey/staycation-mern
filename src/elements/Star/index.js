import React from 'react';

import propTypes from 'prop-types';
import './index.scss';

export default function Star({className, value, height, width, spacing}) {
    const decimal = Number(value) % 1;

    const star = []
    let leftPos = 0;
    for(let index = 0; index < 5 && index < value < decimal; index++) {
        leftPos = leftPos + width;
        star.push(
            <div className='star' key={'star'-index} style={{left: index * width, width:width, height:height, marginRight: spacing}}>

            </div>
        )
    }
    
    if(decimal > 0 && value <= 5) {
        star.push(
            <div className='star' key={'star with decimal'} style={{left: leftPos, width:width - spacing}}>

            </div>
        )
    }
    const starPlaceholer = [];
    for(let index = 0; index < 5; index++) {
        starPlaceholer.push(
            <div className='star placeholder' key={'star-placeholder'-index} style={{left: index * width, width:decimal*width - spacing}}>

            </div>
        )
    }
  return (
    <>
        <div className={['star', className].join(" ")} style={{height: height}}>
            {starPlaceholer}
            {star}
        </div>
    </>
  );
}

Star.propTypes = {
    className: propTypes.string,
    value: propTypes.number,
    width: propTypes.number,
    height: propTypes.number,
    spacing: propTypes.number,
}
