import React, {Component} from 'react';
import isEmail from 'validator/lib/isEmail';


class Button extends Component {
     state={
         fields:{
             name:'',
             email:'',
         },
         fieldErrors: {},
         people:[]
     }

     onInputChange=(e)=>{
         const fields = this.state.fields;
         fields[e.target.name]= e.target.value
         this.setState({
             fields
          });
     }
     validate = (person) => {
        const errors = {};
        if (!person.name) errors.name = 'Name Required';
        if (!person.email) errors.email = 'Email Required';
        if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
        return errors;
      };

     onFormSubmit = (e) => {
          const people = [ ...this.state.people];
          const person = this.state.fields;
          const fieldErrors = this.validate(person);
          this.setState({ fieldErrors });
          e.preventDefault();

          if (Object.keys(fieldErrors).length) return;
          this.setState({
              people: people.concat(person),
              fields:{
                  name:'',
                  email:'',
              },
          });

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
                    <span style={{ color: 'red' }}>{ this.state.fieldErrors.name }</span>

                    <input
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                    />
                    <span style={{ color: 'red' }}>{ this.state.fieldErrors.email }</span>

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
