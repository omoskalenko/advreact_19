import React from 'react'
import SigninForm from '../auth/SigninForm'

export default function AdminPage() {
  const submit = value => console.log(value);

  return (
    <main id="auth">
      <h1>Auth Page</h1>
       <SigninForm onSubmit={submit}/>
    </main>
  );
}
