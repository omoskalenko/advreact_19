import React from 'react';
import { Link } from 'react-router-dom'

export default function Unauthorized() {
  return (
    <>
    <main>
      <h1>Unauthorized, please <Link to="/auth/signin">Sign in</Link> or <Link to="/auth/signup">Sign up</Link></h1>
    </main>
    </>
  );
}
