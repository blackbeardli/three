import React from 'react'
import ControlButtons from './Buttons';
import MajorClock from './MajorClock';
import SplitTimes from './SplitTime';

class StopWatch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
            startTime: null,
            currentTime: null,
            splits: [],
        };
    }

    intervalHandle() {
        this.timer = setInterval(() => {
            this.setState({ currentTime: new Date() });
        }, 126);
    }
    onSplit = () => {
        this.setState({
            splits: [...this.state.splits, this.state]
        });
    }

    onStart = () => {
        this.setState({
            isStarted: true,
            startTime: new Date(),
            currentTime: new Date(),
        });
        this.intervalHandle();
    }
    onPause = () => {

        clearInterval(this.timer);
        this.setState({
            isStarted: false,
        });
    }
    onReset = () => {

        this.setState({
            startTime: null,
            currentTime: null,
            splits: [],
        })
    }

    render() {
        return (
            <div>
                <MajorClock
                    state={this.state}
                />
                <ControlButtons
                    activated={this.state.isStarted}
                    onReset={this.onReset}
                    onPause={this.onPause}
                    onStart={this.onStart}
                    onSplit={this.onSplit}
                />
                <SplitTimes
                    value={this.state.splits}
                />
            </div>
        )
    }
}

export default StopWatch;
