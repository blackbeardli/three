import React from 'react'
import padStart from 'lodash/padStart';

const MajorClock = (props) => {
    let milliseconds = props.state.currentTime - props.state.startTime
    return <h1>{ms2Time(milliseconds)}</h1>
}

const ms2Time = (miliseconds) => {

    let time = miliseconds
    let ms = miliseconds % 1000;
    time = (miliseconds - ms) / 1000;
    let second = time % 60;
    time = (time - second) / 60;
    let minute = time % 60;
    let hour = (time - minute) / 60;

    let res = padStart(hour, 2, '0') + ':' + padStart(minute, 2, '0') + ':' + padStart(second, 2, '0') + ':' + padStart(ms, 3, '0');
    return res;
}

export default MajorClock;

