import React from 'react';
import { reduxForm, Field } from 'redux-form'

function SigninForm({
  handleSubmit
}) {
  return (
    <>
    <h1>Sign In</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" id="email" component="input" placeholder="Email" title="Email"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" id="password" component="input" placeholder="Password" title="Password"/>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
    </>
  );
}

export default reduxForm({
  form: 'auth'
})(SigninForm)
