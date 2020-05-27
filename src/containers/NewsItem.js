import React from 'react';
import {connect} from 'react-redux';

const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive',
  border: '1px solid #dadce0',
  borderRadius: '10px'
}

const imageStyle={
  width: '100%',
  height: 'auto',
  border: '1px solid white',
  borderRadius: '10px'
}
const NewsItem = ({article}) => (
  article ?
  <article style={articleStyle}>
  <div>
  <img src={article.urlToImage} alt="" style={imageStyle}/>
  <h4>{article.title}</h4>
  <a href="article.url" target="_blank">Read more</a>
  </div>
  </article>

: null)


const mapStateToProps = state =>{
console.log('state', state);
  return{
    article: state.newsReducer.news
  }
}
export default connect(mapStateToProps, null)(NewsItem);
