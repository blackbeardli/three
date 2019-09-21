import React from 'react'
import MajorClock from './MajorClock'
const SplitTimes = (props) => {
    // console.log(props)
    let { value } = props;
    // console.log(value)
    return (
        value.map((item, index) =>
            <MajorClock
                state={item}
                key={index}
            />
        )
    )
}

export default SplitTimes;
