//this gets the Varo(); if it is not a path it will get from npm?
import Varo from './services';
import Sum from './services/sum';
import Submit from './services/submit';

//react
import React from 'react';
import {mount} from 'react-mounter';

//react templates
import {Layout} from './layout.jsx';
import {ExpenseForm} from './form.jsx';

//adds the plugins to Varo for use by the components further down
Varo.plugin(Sum);
Varo.plugin(Submit);

//base route
FlowRouter.route('/', {
  action() {
    mount(Layout, {
      content: (<ExpenseForm/>)
    });
  }
});
