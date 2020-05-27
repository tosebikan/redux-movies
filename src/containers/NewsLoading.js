import React from 'react';
import {connect} from 'react-redux';


const NewsLoading = ({loading}) => {
  //console.log('loading', loading)
  return(
  loading ?
  <div style={{textAlign: 'center'}}>
  <img src={require('./loading2.gif')} style={{width: 20, height: 20}} resizemode="contain"
  alt="loading"
  />
  </div>
  : null)
}

const mapStateToProps = state =>{
console.log('state', state);
  return{
    loading: state.newsReducer.loading
  }
}

export default connect(mapStateToProps, null)(NewsLoading);
