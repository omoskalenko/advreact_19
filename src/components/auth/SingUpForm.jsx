import React from 'react';
import { reduxForm, Field } from 'redux-form'
import validator  from 'validator'
import ErrorField from '../common/ErrorField'

function SignUpForm({
  handleSubmit,
  errorMessage,
}) {
  return (
    <>
    <h1>Sign Up</h1>
    {errorMessage && <div style={{color: 'tomato'}} >{errorMessage}</div>}
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" id="email" component={ErrorField} placeholder="Email" title="Email"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" id="password" component={ErrorField} placeholder="Password" title="Password"/>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
    </>
  );

}

const validate = ({ email, password }) => {
  const errors = {}

  if(!email) errors.email = 'Email is required'
  else if (!validator.isEmail(email)) errors.email = 'Invalid Email'


  if(!password) errors.password = 'Password is required'

  else if (password.lenght < 6) {
    console.log(password.lenght)
    errors.email = 'Password should be at least 6 characters'

  }
  return errors
}

export default reduxForm({
  form: 'auth',
  validate,
})(SignUpForm)
