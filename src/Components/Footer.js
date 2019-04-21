import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer(props) {
    return (
        <footer>
            <div id="about-social">
                <SocialIcon url="http://twitter.com/jaketrent" />
                <SocialIcon url="http://facebook.com.com/jaketrent" />
                <SocialIcon url="http://github.com/digvijayrn555" bgColor="#eee"/>
                <SocialIcon url="http://linkedin.com/digvijayrn555" />
            </div>
            <div id="copyright-credit">
                &copy; Created with <span id="heart">&hearts;</span> by Digvijay
                Singh
            </div>
        </footer>
    );
}
