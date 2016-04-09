import Varo from './services';
// import React from 'react';
// import {SendButton} from './send_button.jsx'

////////////////
//forms testing

import React, { Component } from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";

const schema = {
  title: "Todo Tasks",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const formData = {
  title: "First task",
  done: true
};

const log = (type) => console.log.bind(console, type);

export class MyForm extends React.Component {
  constructor(props) {
    super(props);
  }
render () {
  return (
    <Form schema={schema}
      formData={formData}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")} />
    );
  }
};



////////////////
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
