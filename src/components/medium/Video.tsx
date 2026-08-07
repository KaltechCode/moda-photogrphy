"use client";
import React from "react";
import { Icon } from "../small/Icon";

const Video = () => {
  return (
    <div className="tp-video-area">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-video-wrap p-relative">
              <video
                className="play-video"
                loop={true}
                muted={true}
                autoPlay={true}
                playsInline={true}
              >
                <source
                  // src="https://player.cloudinary.com/embed/?cloud_name=dxjqb74cz&public_id=Mado_reel_xvzh9c"
                  src="https://res.cloudinary.com/dxjqb74cz/video/upload/v1786071039/Mado_reel_xvzh9c.mp4"
                  type="video/mp4"
                />
              </video>
              {/* <div className="tp-video-content text-center">
                <span className="tp-video-subtitle">
                  <span>
                    <Icon name="leaf" />
                  </span>
                  Work in motion
                </span>
                <h2 className="tp-video-title">Play Reel</h2>
                <p>
                  Our work is best experienced in motion. {"Don't"}
                  forget to put on your headphones.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
