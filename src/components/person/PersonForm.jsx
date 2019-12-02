import React from 'react';
import { reduxForm, Field } from  'redux-form'
import { compose } from 'redux';
import ErrorField from '../common/ErrorField'

function PersonForm({
  handleSubmit
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first-name">First Name</label>
        <Field type="text" name="firstName" id="first-name" component={ErrorField} placeholder="First Name" title="First Name"/>
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <Field type="text" name="lastName" id="last-name" component={ErrorField} placeholder="Last Name" title="last-name"/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" id="email" component={ErrorField} placeholder="Email" title="Email"/>
      </div>
      <div>
        <input type="submit" />
      </div>
      </form>
    </>
  );
}

export default compose(
  reduxForm({
    form: 'people',
  }),
)(PersonForm)



