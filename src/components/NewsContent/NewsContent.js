import { Container } from '@mui/system';
import React from 'react'
import './NewsContent.css';
import NewsCard from '../NewsCard/NewsCard';
const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResult, loading }) => {
  return (
    <Container maxWidth="md" style={{marginTop:'10rem'}}>
      <div className='banner'>
        <p>For the best experience use <a href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3DNews%2520In%2520Shorts%2520Website" target="__blank" style={{ textDecoration: "none", color: "#FDFFFF", fontWeight: "bold" }}>inshorts</a> app on your smartphone</p>
        <div>
          <a href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3DNews%2520In%2520Shorts%2520Website" target="__blank">
            <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="App Store" width={90} />
          </a>
          <a href="https://apps.apple.com/us/app/news-in-shorts/id892146527" target="__blank">
            <img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="Google Play" width={90} />
          </a>
        </div>
      </div>
      <div id="/">
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title}/>
        ))}
      </div>
      { loading ? (<div className='btn-div'><span className="loader"></span></div>) : (loadMore <= newsResult && (
      <div className='btn-div'>
      <button onClick={()=>setLoadMore(loadMore + 20)} className='load-more-btn'>Load More</button>
      </div>)
      )}
    </Container>
  )
}

export default NewsContent