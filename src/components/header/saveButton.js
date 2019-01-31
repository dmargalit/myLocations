import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

const SaveButton = ({ dispatch }) =>
  <button onClick={() => dispatch(submit('EditCategoryForm'))} className="btn btn-success">Save</button>

export default connect()(SaveButton)
