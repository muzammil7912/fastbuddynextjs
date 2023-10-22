"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react';

const HomeBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.muted = true; // Mute the video
      video.play()
        .then(() => {
          // Video successfully played
        })
        .catch(error => {
          console.error('Error playing video:', error);
        });
    }
  }, []);
  return (
    <section className="banner relative">
      <ul className="list">
        <li>
          <video ref={videoRef} autoPlay muted loop poster="https://fastbuddys.com/webImages/banners/1.jpg">
            <source src="https://fastbuddys.com/webImages/1.mp4" type="video/mp4" />
          </video>
          <div className="banner__txt">
            <h2>Transform Your Brand with</h2>
            <h1>Revolutionary Digital Experiences</h1>
            <p>We’re a creative technology lab that delivers groundbreaking experiences through web and mobile
              development, user experience design and innovative engineering services.</p>
            <Link href="/" className="btn btn-primary"><b>Packages</b>
              <span style={{ transitionDelay: ".3s" }}></span>
              <span style={{ transitionDelay: ".4s" }}></span>
              <span style={{ transitionDelay: ".5s" }}></span>
              <span style={{ transitionDelay: ".6s" }}></span></Link>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default HomeBanner