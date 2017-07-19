//Displays either a timer or a timer’s edit form
import React, {Component} from 'react';
import EditableTimer from './EditableTimer';

class TimerList extends Component {
    
    render() {

        const timers = this.props.timers.map((timer)=>(
            <EditableTimer
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                />
        ))
        return (
            <div id='timers'>

                {timers}

            </div>
        )
    }
}
export default TimerList;
