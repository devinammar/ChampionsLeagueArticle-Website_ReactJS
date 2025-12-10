import "./card.css";

export const Card = ({ topscoreplayer }) => {
  return (
    <div className="cardparent">
      {topscoreplayer.map((card) => (
        <a href={card.url} key={card.id} className="card-link" target="_blank" rel="noopener noreferrer">
          <div className="card">
            <img className="gambar" src={card.gambar} alt="gambar"/>
            <h2 className="judul">{card.judul}</h2>
            <p className="caption">{card.caption}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
