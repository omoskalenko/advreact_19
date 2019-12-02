import React from 'react';
import { reduxForm, Field } from 'redux-form'
import ErrorField from './ErrorField'
import validator  from 'validator'

function SignInForm({
  handleSubmit
}) {
  return (
    <>
    <h1>Sign In</h1>
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
  else if (!validator.isAlphanumeric(password)) errors.email ='Invalid Password'

  return errors
}

export default reduxForm({
  form: 'auth',
  validate
})(SignInForm)
