/*eslint-disable no-unused-vars*/
import React from 'react'
/*eslint-enable no-unused-vars*/

let Star = function statelessFunctionComponentClass(props) {
    const style = {
        position: 'absolute',
        top: props.top,
        left: props.left,
        width: '1px',
        height: '1px',
        opacity: props.opacity,
        backgroundColor: 'white'
    }

    return <div className="star" style={style} />
}

export default Star
