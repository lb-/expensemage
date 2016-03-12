import React from 'react';
import {mount} from 'react-mounter';
import {Layout} from './layout.jsx';
import {Form} from './form.jsx';

FlowRouter.route('/', {
  action() {
    mount(Layout, {
      content: (<Form/>)
    });
  }
});
