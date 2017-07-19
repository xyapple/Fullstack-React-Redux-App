//Parent container
import React, {Component} from 'react';
import TimerList from './TimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class  TimersDashboard extends Component{
    render(){
        return(
            <div className='ui three column centered grid'>
                <div className='column'>
                    <TimerList />
                    <ToggleableTimerForm isOpen={true} />
                </div>
            </div>
        )
    }
}

export default TimersDashboard;
