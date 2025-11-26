import React from "react";
import styles from "./VideoSection.module.css";

function VideoSection() {
    return (
        <section className={ styles.videoSection }>
            <div className={ styles.videoContainer }>
                <iframe 
                    className={styles.video}
                    src="https://www.youtube.com/embed/0VFTJSOeba4?autoplay=1&mute=1&loop=1&playlist=0VFTJSOeba4" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            </div>
        </section>
    );
}

export default VideoSection;