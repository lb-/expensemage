//this gets the Varo(); if it is not a path it will get from npm?
import Varo from './services';
import Sum from './services/sum';
import Submit from './services/submit';

//react
import React from 'react';
import {mount} from 'react-mounter';

//react templates
import {Layout} from './layout.jsx';
import {MyForm} from './form.jsx';

//forms


//adds the plugins to Varo for use by the components further down
Varo.plugin(Sum);
Varo.plugin(Submit);

// Varo.act({role: 'submit', data: {total: 1, description: 'my money'}}, function (err, reply) {
//   console.log(reply)
// });

FlowRouter.route('/', {
  action() {
    mount(Layout, {
      content: (<MyForm/>)
    });
  }
});

//TESTING
// Varo.act({role: 'sum', left: 1, right: 2}, function (err, reply) {
//   console.log(reply)
// });

// export default Varo; /
