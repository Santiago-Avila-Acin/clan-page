import ReactPlayer from "react-player";
import "./VideoCard.css";

interface VideoCardProps {
  url: string;
}

export const VideoCard = ({ url }: VideoCardProps) => {
  const isYouTubeUrl = url.includes("youtube.com") || url.includes("youtu.be");

  return (
    <div className="video_card__container">
      {isYouTubeUrl && <ReactPlayer url={url} width="92%" height="20rem" className="single_video" controls />}
    </div>
  );
};
