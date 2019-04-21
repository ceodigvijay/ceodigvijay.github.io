import React from "react";
import myImg from "../images/me.jpg";
import Footer from './Footer'
import TopNav from './TopNav'
export default function About() {
    var divStyle = {
        backgroundColor: '#1C1C1F'
      };
    return (
        <div id="about">
        <TopNav toApply={divStyle}/>
            <div id="about-img">
                <img src={myImg} alt="Digvijay Singh" />
            </div>
            <div id="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                molestie purus et dui fringilla mattis. In varius lacinia lectus
                eu malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vestibulum gravida nunc sit amet lorem viverra, in
                ullamcorper turpis dapibus. Nullam imperdiet arcu at ex
                placerat, vitae pretium eros aliquet. Donec eget rutrum odio.
                Sed sit amet pellentesque dui. Aenean auctor at ante quis
                vulputate. Phasellus ornare dolor dui, at ultrices magna dictum
                porta.
                <br />
                <br />
                <br /> Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Pellentesque fermentum
                nulla sit amet lorem maximus feugiat gravida vel ligula. Etiam
                leo lectus, molestie eu eleifend quis, congue a nulla. Morbi
                congue maximus mattis. Aenean cursus porttitor nunc nec blandit.
                Quisque euismod leo in ipsum viverra, et facilisis metus congue.
                Nunc varius magna id rutrum ornare. Aliquam luctus lectus ut
                mauris egestas, vel elementum sem consectetur. Morbi elementum
                dignissim leo vitae rutrum. Proin dictum mi ac ipsum interdum
                ornare. Proin non quam commodo, finibus massa interdum,
                sollicitudin ligula. <br />
                <br />
                <br /> Vestibulum at nisi in purus bibendum dignissim. Donec
                facilisis orci sed turpis mollis dignissim. Sed sed arcu sed
                lacus pulvinar interdum quis sit amet purus. Vestibulum et
                tellus ullamcorper, tristique elit ut, sagittis tellus. Aenean
                erat erat, rutrum ac nulla nec, consectetur imperdiet arcu.
                Integer congue sapien sit amet aliquam interdum. Phasellus
                bibendum scelerisque tincidunt. Morbi dapibus, quam eu interdum
                porttitor, ante risus scelerisque orci, hendrerit luctus felis
                est eu velit.
            </div>
            <div id="about-contact"></div>
            <Footer />
        </div>
    );
}
