import React from 'react';

export default function ErrorField({
  input,
  type,
  meta:  { touched, error, warning }
}) {
  console.log(error, touched);

  const errorText = touched && error && <div style={{color: 'tomato'}} >{error} </div>
  return (
    <>
      <label>{ input.name }</label>
      <input { ...input } type={type} />
      {errorText}
    </>
  );
}
