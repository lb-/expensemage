import Varo from './services';
import React from 'react';
// import {SendButton} from './send_button.jsx'

//forms testing
import {Fieldset, Field, createValue} from 'react-forms'

const schema = {
  type: 'object',
  properties: {
    firstName: {type: 'string'},
    lastName: {type: 'string'},
    "age": {
      "description": "Age in years",
      "type": "integer",
      "minimum": 0
    }
  }
};

export class Form extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // let formValue = createValue({value: props.value, onChange: this.onChange});
    let formValue = createValue({
      schema,
      initialValue: props.value,
      onChange: this.onChange
    });
    this.state = {formValue};
  }

  onChange(formValue) {
    console.log(this);
    this.setState({formValue});
  }

  render() {
    return (
      <Fieldset formValue={this.state.formValue}>
        <Field select="firstName" label="First name" />
        <Field select="lastName" label="Last name" />
        <Field select="age" label="Age" />
      </Fieldset>
    )
  }

};

//original form below

// export class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       emailTo: '',
//       emailFrom: '',
//       description: '',
//     };
//     //https://medium.com/@goatslacker/react-0-13-x-and-autobinding-b4906189425d#.yhbuhu80i
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleNameChange(event) {
//     this.setState({name: event.target.value});
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     let message = {role: 'submit'};
//     message.data = this.state;
//     // console.log(this.state, event);
//     Varo.act(message, function (err, reply) {
//       console.log(reply)
//     });
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} role="form">
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.handleNameChange}
//           placeholder="Enter your name..."
//         />
//         <label htmlFor="emailTo">To Email</label>
//         <input type="email" name="emailTo" placeholder="accounts@mybusiness.com" />
//         <label htmlFor="emailFrom">From Email</label>
//         <input type="email" name="emailFrom" placeholder="myname@mybusiness.com" />
//         <label htmlFor="description">Description</label>
//         <textarea name="description" rows="3" placeholder="Coffee with Joe, meeting expense..."></textarea>
//         <SendButton/>
//       </form>
//     )
//   }
// }
