import React from 'react'

import { connect } from 'react-redux';



function Message(props) {
  return <div id="message">Nice job!</div>
}

const mapStateToProps = (state) => {
  return{
//message
  }
}

export default connect(mapStateToProps, {})()