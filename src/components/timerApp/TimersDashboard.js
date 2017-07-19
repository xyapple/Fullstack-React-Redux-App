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
    handleEditFormSubmit=(attrs)=>{
        this.updateTimer(attrs);
    };
    handleTrashClick=(timerId)=>{
        this.deleteTimer(timerId);
    }
    handleStartClick=(timerId)=>{
        this.startTimer(timerId);
    }
    handleStopClick=(timerId)=>{
        this.stopTimer(timerId);
    }
    createTimer=(timer)=>{
        const time = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(time)
        })
    };
    updateTimer=(attrs)=>{
        this.setState({
            timers: this.state.timers.map((timer)=>{
                if(timer.id === attrs.id){
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    });

                } else{
                    return timer;
                }
            }),
        });
    };
    deleteTimer=(timerId)=>{
        this.setState({
            timers:this.state.timers.filter(t=>t.id !== timerId),
        });
    };
    startTimer=(timerId)=>{
        const now =Date.now();
        this.setState({
            timers: this.state.timers.map((timer)=>{
                if(timer.id === timerId){
                    return Object.assign({}, timer, {
                        runningSince:now,
                    });
                }else{
                    return timer;
                }
            })
        })
    }
    stopTimer=(timerId)=>{
        const now = Date.now();
        this.setState({
            timers:this.state.timers.map((timer)=>{
                if(timer.id === timerId){
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null,
                    });
                } else{
                    return timer;
                }
            }),
        });
    };
    render(){
        return(
            <div className='ui three column centered grid'>
                <div className='column'>
                    <TimerList
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onTrashClick={this.handleTrashClick}
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}/>
                    <ToggleableTimerForm
                    onFormSubmit={this.handleCreateFormSubmit} />
                </div>
            </div>
        )
    }
}

export default TimersDashboard;
