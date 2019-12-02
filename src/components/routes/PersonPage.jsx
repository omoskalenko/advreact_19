import React from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../ducks/people'
import PersonForm from '../person/PersonForm'

function PersonPage({
  addPerson
}) {
  return (
    <main id="person">
      <h1>Person Page</h1>
      <PersonForm onSubmit={addPerson}/>
    </main>
  );
}

export default connect(
null,
(dispatch) => ({
  addPerson: person => dispatch(addPerson(person))
})
)(PersonPage)

