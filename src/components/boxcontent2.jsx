import "./boxcontent2.css";

export const Boxcontent2 = ({ isi }) => {
  return (
    <div className="boxcontentparent2">
      {isi.map((content) => (
        <a
          key={content.id}
          className="boxcontentlink2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="boxcontent2">
            <img
              className="imagecontent2"
              src={content.imagecontent}
              alt="logo"
            />
            <h2 className="tittlecontent2">{content.tittlecontent}</h2>
            <p className="captioncontent2">{content.captioncontent}</p>
            <div className="buttonparent2"><a
              href={content.url}
              className="button2"
              target="_blank"
              rel="noopener"
            >
              <span className="button-text2">Lihat</span>
            </a>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
