import Varo from './services';
import React, { Component } from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";

const handleSubmit = function (formObject) {

  let message = {
    role: 'submit',
    data: formObject.formData
  };

  Varo.act(message, function (err, reply) {
    console.log(reply)
  });

};

const schema = {
  title: "Expense Form",
  type: "object",
  required: ['name', 'emailTo', 'emailFrom'],
  properties: {
    name: {
      type: 'string', title: 'Full Name',
      description: 'Andrew Nofry'
    },
    emailTo: {
      type: 'string', title: 'Email to',
      description: 'accounts@business.com',
      format: 'email'
    },
    emailFrom: {
      type: 'string', title: 'Email from',
      description: 'me@business.com'
    },
    description: {
      type: 'string', title: 'Description',
      description: 'Bought chicken'
    },
  }
};

const uiSchema = {
  description: {
    "ui:widget": "textarea"
  }
};

export class ExpenseForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={handleSubmit}
      />
    );
  }

};
