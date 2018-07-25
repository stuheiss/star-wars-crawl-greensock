/*eslint-disable no-unused-vars*/
import React from 'react'
/*eslint-enable no-unused-vars*/

let Star = function statelessFunctionComponentClass(props) {
    const style = {
        position: 'absolute',
        //border: '5px solid #73AD21',
        top: props.top,
        left: props.left,
        width: '2px',
        height: '2px',
        opacity: props.opacity,
        color: 'white'
    }

    return (
        <div className="star" style={style}>
            {props.children}
        </div>
    )
}

export default Star
