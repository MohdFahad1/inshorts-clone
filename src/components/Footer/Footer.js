import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className='footer'>
            <p>Inshorts clone made by - Mohd Fahad</p>
            <hr style={{ width: "90%" }} />
            <div className='links'>
                <a href="https://www.facebook.com/inshortsapp" target="__blank"><FacebookIcon className='icons'/></a>
                <a href="https://twitter.com/inshorts" target="__blank"><TwitterIcon className='icons'/></a>
                <a href="https://www.linkedin.com/company/news-in-shorts/" target="__blank"><LinkedInIcon className='icons'/></a>
            </div>
        </div>
    )
}

export default Footer