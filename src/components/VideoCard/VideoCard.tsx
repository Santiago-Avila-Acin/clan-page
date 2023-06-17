import { useLayoutEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./VideoCard.css";

interface VideoCardProps {
  url: string;
}

export const VideoCard = ({ url }: VideoCardProps) => {
  const isYouTubeUrl = url.includes("youtube.com") || url.includes("youtu.be");
  const [playerSize, setPlayerSize] = useState({ width: "100%", height: "auto" });

  useLayoutEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 458) {
        setPlayerSize({ width: "80%", height: "16rem" });
      } else if (screenWidth < 800) {
        setPlayerSize({ width: "80%", height: "30rem" });
      } else if (screenWidth < 1000) {
        setPlayerSize({ width: "80%", height: "40rem" });
      } else {
        setPlayerSize({ width: "70%", height: "56rem" });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="video_card__container">
      {isYouTubeUrl && <ReactPlayer url={url} {...playerSize} className="single_video" controls />}
    </div>
  );
};
