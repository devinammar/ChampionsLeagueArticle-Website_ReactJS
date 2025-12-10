import "./video.css";

export const Video = ({ sumber }) => {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="videoplay">
        <source src={sumber} type="video/mp4" />
        <source src={sumber} type="video/ogg" />
        Video not supported
      </video>
    </div>
  );
};
