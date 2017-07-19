//Parent container
import React, {Component} from 'react';
import TimerList from './TimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
// import uuid from './vendor/uuid.js';
import helpers from './helpers.js';
const uuidv4 = require('uuid/v4');

class  TimersDashboard extends Component{
    state={
        timers:[
        {
            title:'clean garden',
            project:'Summer garden',
            id: uuidv4,
            elapsed: 5456099,
            runningSince: Date.now()
            },
         {
            title: 'Bake squash',
            project: 'Kitchen Chores',
            id: uuidv4,
            elapsed: 1273998,
            runningSince: null,
          },
          {
            title: 'Practice squat',
            project: 'Gym Chores',
            id: uuidv4,
            elapsed: 5456099,
            runningSince: Date.now(),
          }
        ]
    }
    handleCreateFormSubmit =(timer)=>{
        this.createTimer(timer);
    };
    createTimer=(timer)=>{
        const time = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(time)
        })
    }
    render(){
        return(
            <div className='ui three column centered grid'>
                <div className='column'>
                    <TimerList
                        timers={this.state.timers}/>
                    <ToggleableTimerForm
                    onFormSubmit={this.handleCreateFormSubmit} />
                </div>
            </div>
        )
    }
}

export default TimersDashboard;
