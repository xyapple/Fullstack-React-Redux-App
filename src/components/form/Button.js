import React, {Component} from 'react';

class Button extends Component {
     state={
         fields:{
             name:'',
             email:'',
         },
         people:[]
     }

     onInputChange=(e)=>{
         const fields = this.state.fields;
         fields[e.target.name]= e.target.value
         this.setState({
             fields
          });
     }
     onFormSubmit = (e) => {
          const people = [ ...this.state.people, this.state.fields];
          this.setState({
            people,
            fields: {
                name: '',
                email: ''
              }
           });
          e.preventDefault();
        };
    render(){
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                    />
                <input type='submit'/>
                </form>
                <ul>
                {this.state.people.map(({name , email}, i) =><li key={i}>{name}({email})</li>)}

                </ul>

            </div>
        )
    }
}

export default Button;
