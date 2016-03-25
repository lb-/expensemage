# Tasks

## To Do

* use a forms library:
  * look through: https://github.com/enaqx/awesome-react#forms
  * Requirements (in order)
    * should not have to set the field name more than once, schema only
    * ES6 examples (eg. this.setState = this.setState.bind(this))
    * uses JSON Schema  or at least some semi-standard schema
    * Flexible with state (not sure if will use redux in future)
    * Flexible to add an upload component
  * Ideas
    * Might be able to host the json schema externally, user can edit fields that way :)
  * Might Try
    * https://github.com/christianalfoni/formsy-react
    * http://gcanti.github.io/tcomb-form/
  * Have Tried
    * https://github.com/prometheusresearch/react-forms // documentation is a bit odd, basic validation (is integer), doesnt convert from text to string in field
    * https://github.com/erikras/redux-form // major issues with getting this working, seems to be not ready for es6, but used some ES7 functions that caused issues

* Host code online for safety

* get some basic ui response
  * indicator that form is submitting
  * indicator that form has submitted
  * clear the form when submitted

* Get an email sending working

* Get a file upload working

## Done

* get a basic set up of https://github.com/senecajs/varo working
  * good example: https://github.com/senecajs/react-example

* get the send button calling some function

* get it saving to myjson via Fetch (actually Reqwest)
  * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  * http://myjson.com/api
  * TEST: 12hvu //http://myjson.com/12hvu
    * https://api.myjson.com/bins/12hvu
