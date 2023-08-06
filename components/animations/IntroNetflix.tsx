import { useEffect, useRef, useState } from "react";
import AudioPlayer from "./AudioPlayer";

export const AnimationComponentNetflix = ({ onAnimationEnd }: any): JSX.Element => {

    return (
        <div className="container_netflix" onAnimationEnd={onAnimationEnd}>
            <div className="logo">
                <AudioPlayer />
                {/* <audio preload="auto" crossOrigin="anonymous" autoPlay src={`/assets/sounds/intro.mp3?${Date.now()}`} /> */}

                <div className="netflix">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h3>Netflix</h3>
            </div>
        </div>

    );
};