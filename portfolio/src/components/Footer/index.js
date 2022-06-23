import React from 'react';

function Footer() {
    return (
        <footer>
            <h2>Created By Yunzhu Jin</h2>
            <a href="https://github.com/jyz022020">
                <img
                    src={require(`../../assets/projects/github-logo.png`)}
                    alt="github Repo"
                    width="100" 
                    height="100"
                />
            </a>
            <a href="https://www.linkedin.com/in/kaylee-jin-3394821b6/">
                <img
                    src={require(`../../assets/projects/linkedin.png`)}
                    alt="linkedin page"
                    width="100" 
                    height="100"
                />
            </a>
        </footer>
      );
}

export default Footer;
