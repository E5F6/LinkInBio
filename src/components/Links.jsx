import React from "react";

function Links(){

    const github = '/assets/github.png';
    const linkedin = '/assets/linkedin.png';
    const youtube = '/assets/youtube.png';
    const twitter = '/assets/twitter.png';
    const reddit = '/assets/reddit.png';
    const instagram = '/assets/instagram.png';

    return(
        <section className="links">
            <div className="link">
                <a href="https://github.com/Priyannxhuu" target="blank">
                    <img className="linkimage" src={github} alt="" />
                    <p className="socialname">Github</p>
                </a>
                </div>
                <div className="link">
                <a href="#" target="blank">
                    <p className="socialname">Linkedin</p>
                    <img className="linkimage" src={linkedin} alt="" />
                </a>
                </div>
                <div className="link">
                <a href="https://www.youtube.com/@Priyanxhuu" target="blank">
                    <img className="linkimage" src={youtube} alt="" />
                    <p className="socialname">Youtube</p>
                </a>
                </div>
                <div className="link">
                <a href="https://twitter.com/Priyannxhuu" target="blank">
                    <p className="socialname">Twitter</p>
                    <img className="linkimage" src={twitter} alt="" />
                </a>
                </div>
                <div className="link">
                <a href="https://www.reddit.com/user/Priyannxhuu" target="blank">
                    <img className="linkimage" src={reddit} alt="" />
                    <p className="socialname">Reddit</p>
                </a>
                </div>
                <div className="link">
                <a href="https://www.instagram.com/priyannxhuu" target="blank">
                    <p className="socialname">Instagram</p>
                    <img className="linkimage" src={instagram} alt="" />
                </a>
            </div>
        </section>
    );
};

export default Links;
