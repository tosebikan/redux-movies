import React from 'react';
import {connect} from 'react-redux';
import {getNews} from '../actions';

const Button = ({getNews}) => (
  <button onClick={getNews}>Press for news</button>
)

const mapDispatchToProps = {
  getNews: getNews
}

export default connect(null,mapDispatchToProps)(Button);
