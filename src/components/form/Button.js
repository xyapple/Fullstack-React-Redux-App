import React, {Component} from 'react';

class Button extends Component {
     state={
         name:'',
         names:[]
     }
     onNameChange=(e)=>{
         this.setState({ name: e.target.value });
     }
     onFormSubmit = (e) => {

          const names = [ ...this.state.names, this.state.name ];
          this.setState({
              names: names,
              name:''
           });
          e.preventDefault();
        };
    render(){
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type='text'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                <input type='submit'/>
                </form>
                <ul>
                {this.state.names.map((name , i) =><li key={i}>{name}</li>)}
                </ul>

            </div>
        )
    }
}

export default Button;
