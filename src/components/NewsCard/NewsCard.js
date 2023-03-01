import React from 'react'
import './NewsCard.css'
const NewsCard = ({ newsItem }) => {

    const fulldate = new Date(newsItem.publishedAt);
    var date = fulldate.toString().split(" ");
    const hour = parseInt(date[4].substring(0, 2));
    const time = hour > 12 ? true : false;


    return (
        <div className='news-card'>
            {/* <img src={newsItem.urlToImage ? newsItem.urlToImage : "https://lightwidget.com/wp-content/uploads/local-file-not-found.png"} alt="logo" /> */}
            <div className='news-content'>
                <h2>{newsItem.title}</h2>
                <hr style={{width:"80%"}}/>
                <p><a href={newsItem.url} target="__blank"><b>short </b></a>by {newsItem.author ? newsItem.author : 'UnKnown'} at {time
                    ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                    : `${hour}:${date[4].substring(3, 5)} am`}{" "}
                    on {date[2]} {date[1]} {date[3]}, {date[0]}</p>
                {/* <p>{newsItem.description}</p> */}
                <p>read more at <b><a href={newsItem.url} target="__blank">{newsItem.source.name}</a></b></p>
            </div>
        </div>
    )
}

export default NewsCard