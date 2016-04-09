# Tasks

## To Do

* get some basic ui response
  * indicator that form is submitting
  * indicator that form has submitted
  * clear the form when submitted

* Get an email sending working using either AWS SMS or Google via Mailgun
  * https://www.metachris.com/2016/03/free-transactional-email-services-the-best-alternatives-to-mandrill/ 

* Get a file upload working
  * Potentially helpful: https://github.com/okonet/react-dropzone

* Investigate pure functions for react
  * https://github.com/ericelliott/react-pure-component-starter

## Done

* use a forms library:
  * WORKS https://github.com/mozilla-services/react-jsonschema-form
  * look through: https://github.com/enaqx/awesome-react#forms
  * Requirements (in order)
    * should not have to set the field name more than once, schema only
    * ES6 examples (eg. this.setState = this.setState.bind(this))
    * uses JSON Schema  or at least some semi-standard schema
    * Flexible with state (not sure if will use redux in future)
    * Flexible to add an upload component
    * Nice to have: validation on the fly
  * Ideas
    * Might be able to host the json schema externally, user can edit fields that way :)
  * Not tried
    * http://gcanti.github.io/tcomb-form/ with https://github.com/gcanti/tcomb-json-schema
  * Have Tried
    * --https://github.com/christianalfoni/formsy-react-- // not good
    * https://github.com/prometheusresearch/react-forms // documentation is a bit odd, basic validation (is integer), doesnt convert from text to string in field
    * https://github.com/erikras/redux-form // major issues with getting this working, seems to be not ready for es6, but used some ES7 functions that caused issues

* Host code online for backing up https://github.com/lb-/expensemage

* get a basic set up of https://github.com/senecajs/varo working
  * good example: https://github.com/senecajs/react-example

* get the send button calling some function

* get it saving to myjson via Fetch (actually Reqwest)
  * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  * http://myjson.com/api
  * TEST: 12hvu //http://myjson.com/12hvu
    * https://api.myjson.com/bins/12hvu
