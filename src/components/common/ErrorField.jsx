import React from 'react';

export default function ErrorField({
  input,
  type,
  meta:  { touched, error, warning }
}) {
  const errorText = touched && error && <div style={{color: 'tomato'}} >{error} </div>
  return (
    <div>
      {/* <label>{ input.name }</label> */}
      <input { ...input } type={type} />
      {errorText}
    </div>
  );
}
