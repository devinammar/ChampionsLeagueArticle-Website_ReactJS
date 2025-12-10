import "./boxcontent1.css";

export const Boxcontent1 = ({ isi }) => {
  return (
    <div className="boxcontentparent">
      {isi.map((content) => (
        <a
          key={content.id}
          className="boxcontentlink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="boxcontent">
            <img
              className="imagecontent"
              src={content.imagecontent}
              alt="logo"
            />
            <h2 className="tittlecontent">{content.tittlecontent}</h2>
            <p className="captioncontent">{content.captioncontent}</p>
            <div className="buttonparent"><a
              href={content.url}
              className="button"
              target="_blank"
              rel="noopener"
            >
              <span className="button-text">Lihat</span>
            </a>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
