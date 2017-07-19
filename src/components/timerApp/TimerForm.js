//Displays a given timer’s edit form
import React, {Component} from 'react';

class TimerForm extends Component {
    state={
        title:this.props.title ||'',
        project:this.props.project ||'',
    }
    handleTitleChange=(e)=>{
        this.setState({title:e.target.value});

    }
    handleProjectChange=(e)=>{
        this.setState({project:e.target.value});
    }
    handleSubmit=()=>{
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.props.title,
            project:this.props.project,
        });
    };
    render(){
        const submitText = this.props.title ? 'Update' : 'Create';
        return(
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label >Title</label>
                            <input type='text'
                            value={this.state.title}
                            onClick={this.handleTitleChange}/>
                        </div>
                        <div className='field'>
                            <label >Project</label>
                            <input type='text'
                                value={this.state.project}
                                onClick={this.handleProjectChange}
                            />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button
                                className='ui basic blue button'
                                onClick={this.handleSubmit}>
                                {submitText}
                            </button>
                            <button
                                className='ui basic red button'
                                onClick={this.props.onFormClose}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TimerForm;
