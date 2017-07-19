//Displays either a timer or a timer’s edit form
import React, {Component} from 'react';
import EditableTimer from './EditableTimer';

class TimerList extends Component {
    render() {
        return (
            <div id='timers'>

                <EditableTimer title='Learn React'
                    project='Web Domination'
                    elapsed='8986300'
                    runningSince={null}
                    editFormOpen={false}/>
                <EditableTimer
                    title='Learn extreme ironing'
                    project='World Domination'
                    elapsed='3890985'
                    runningSince={null}
                    editFormOpen={true}/>

            </div>
        )
    }
}
export default TimerList;
