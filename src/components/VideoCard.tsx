import { useState } from "react";
import YoutubeLogo from "../assets/youtube.png";
import "../styles/VideoCard.css"

export interface Props {
    title: string;
    body: string;
    src: string;
    href: string;
    id: string;
}

const VideoCard: React.FC<Props> = ({ title, src, body, href, id }) => {
    const imageLinkPrefix: string = "https://i.imgur.com/";

    const linkedImage = imageLinkPrefix + id;

    const [showVideo, setShowVideo] = useState<boolean>(false);

    const handleVideo = () => {
        setShowVideo(true);
    }

    return (
        <div className="link-card hidden" >
            <h2 className="article-title hidden">
                {title}
            </h2>
            <p className="article-body hidden">
                {body}
            </p>
            <div className="video-container hidden" onClick={handleVideo}>
                {showVideo ?
                    <iframe
                        loading="lazy"
                        src={href}
                        title="YouTube video player"
                        frameBorder={"0"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                    :
                    <div className="lazy-loading-content image-container">
                        <div className="preview-wrapper">
                            <img className="preview-image" src={linkedImage} alt={title} />
                            <button className="play-container-button"><img className="play-button" src={YoutubeLogo} alt="play" /></button>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export default VideoCard
