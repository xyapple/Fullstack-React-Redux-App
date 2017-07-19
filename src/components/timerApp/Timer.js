//Displays a given timer
//elapsed in this app is in milliseconds.
import React, {Component} from 'react';
import helpers from './helpers.js';
import TimerActionButton from './TimerActionButton';

class Timer extends Component {

    componentDidMount(){
        this.forceUpdateInterval = setInterval(()=>this.forceUpdate(), 50);
    }
    componentWillMount(){
        clearInterval(this.forceUpdateInterval);
    }
    handleStartClick =()=>{
        this.props.onStartClick(this.props.id);
    }
    handleStopClick =()=>{
        this.props.onStopClick(this.props.id);
    }
    handleTrashClick=()=>{
        this.props.onTrashClick(this.props.id)
    };
    render(){
        const elasedString = helpers.renderElapsedString(
            this.props.elapsed,
            this.props.runningSince
        );

        return(
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'>
                        {this.props.title}
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className='center aligned description'>
                        <h2>
                            {elasedString}

                        </h2>
                    </div>
                    <div className='extra content'>
                        <span className='right floated edit icon'
                            onClick={this.props.onEditClick}>
                            <i className='edit icon'></i>
                        </span>
                        <span className='right floated edit icon'
                            onClick={this.props.onTrashClick}>
                            <i className='trash icon'></i>
                        </span>
                    </div>
                </div>
                <div className='ui bottom attached blue basic button '>
                    Start
                </div>
                <TimerActionButton
                  timerIsRunning={!!this.props.runningSince}
                  onStartClick={this.handleStartClick}
                  onStopClick={this.handleStopClick}
                />
            </div>
        )
    }
}

export default Timer;
