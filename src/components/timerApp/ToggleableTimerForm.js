//Displays a form to create a new timer
import React, {Component} from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends Component {
    // constructor(props){
    //     super(props);
    //     state={
    //         isOpen:false,
    //     }
    //     this.handleFormOpen = this.handleFormOpen.bind(this);
    // }
    // handleFormOpen(){
    //     this.setState({isOpen: true})
    // }

    state={
        isOpen: false,
    };
    handleFormOpen =()=>{
        this.setState({isOpen: true});
    };
    handleFormClose =()=>{
        this.setState({isOpen: false});
    }
    handleFormSubmit =(timer)=>{
        this.props.onFormSubmit(timer);
        this.setState({isOpen: false});
    }
    render(){
        if(this.state.isOpen){
            return(
                <TimerForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else{
            return(
                <div className='ui basic content center aligned segment'>
                    <button
                        className='ui basic button icon'
                        onClick={this.handleFormOpen}>
                        <i className='plus icon' />
                    </button>
                </div>
            )
        }
    }
}
export default ToggleableTimerForm;
