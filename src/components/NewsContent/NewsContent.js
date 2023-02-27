import { Container } from '@mui/system';
import React from 'react'
import './NewsContent.css';
const NewsContent = () => {
  return (
    <Container maxWidth="md">
    <div className='banner'>
    <p>For the best experience use <a href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3DNews%2520In%2520Shorts%2520Website" target="__blank" style={{textDecoration:"none", color:"#FDFFFF", fontWeight:"bold"}}>inshorts</a> app on your smartphone</p>
    <div>
    <a href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3DNews%2520In%2520Shorts%2520Website" target="__blank">
    <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="App Store" width={90}/>
    </a>
    <a href="https://apps.apple.com/us/app/news-in-shorts/id892146527" target="__blank">
    <img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="Google Play" width={90}/>
    </a>
    </div>
    </div>
    </Container>
  )
}

export default NewsContent