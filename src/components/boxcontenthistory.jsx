import "./boxcontenthistory.css";

export const Boxcontenthistory = ({ isi }) => {
  return (
    <div id="boxcontentparenthistory">
      {isi.map((content) => (
        <a
          key={content.id}
          id="boxcontentlinkhistory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="boxcontenthistory">
            <img
              id="imagecontenthistory"
              src={content.imagecontent}
              alt="logo"
            />
            <h2 id="tittlecontenthistory">{content.tittlecontent}</h2>
            <p id="captioncontenthistory">{content.captioncontent}</p>
            <div id="buttonparenthistory"><a
              href={content.url}
              id="buttonhistory"
              target="_blank"
              rel="noopener"
            >
              <span id="button-texthistory">Lihat</span>
            </a>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
