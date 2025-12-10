import "./carousel.css";

const isi = [
    {id:1, gambar:"/allgoalsmessi.jpg", caption:"Every LIONEL MESSI UEFA Champions League goals", url: "https://youtu.be/oC4EWup-D6g?si=Sx73arXdXHuFk-vj"},
    {id:2, gambar:"/uclanthem.jpg", caption:"The official UEFA Champions League anthem", url: "https://youtu.be/Eef69_st5oI?si=cG8xs1u85HCp3Mrm"},
    {id:3, gambar:"/20162017goals.jpg", caption:"UEFA Champions League 2016/17 - Top ten goals", url: "https://youtu.be/-Fb0g6J1fEs?si=VRMgDqgBEclnYLAZ"},
    {id:4, gambar:"/ronaldogoals.jpg", caption:"Every Ronaldo Champions League Goal!", url: "https://youtu.be/UK5cu3LJ9qk?si=L0acePO_aIerdvh5"},
    {id:5, gambar:"/violinuefa.jpg", caption:"Hankook Tire presents: Symphony of Silence", url: "https://youtu.be/Eef69_st5oI?si=cG8xs1u85HCp3Mrm"},
    {id:6, gambar:"/ronaldobicyclekick.jpg", caption:"Ronaldo's overhead kick and 5 other UCL goals", url: "https://youtu.be/fmGdOYFwHsE?si=iBnz1EQ-1W_Ev1LA"},
    {id:7, gambar:"/2002highlight.jpg", caption:"Real Madrid v Leverkusen | 2002 final highlights", url: "https://youtu.be/ca-O58vdPTQ?si=aJq5y7zpHreJtVW3"},
    {id:8, gambar:"/fastestgoals.jpg", caption:"5 quickest UEFA Champions League goals", url: "https://youtu.be/2eHiFXhZrDQ?si=Lie1jwZOBz91NyFh"},
    {id:9, gambar:"/bayernuclfinal.jpg", caption:"Bayern v Dortmund: 2013 final highlights", url: "https://youtu.be/wA4ChhQ38GQ?si=izax5DbcwxUKHY81"},
    {id:10, gambar:"/ajaxtottenham.jpg", caption:"AJAX 2-3 TOTTENHAM UCL HIGHLIGHTS", url: "https://youtu.be/uGuQiSSBPkg?si=nWmyX5TRuUEy9j2j"},
];

export const Carousel = () => {
  return (
    <div className="carouselparent">
      <div className="carousel">
      {isi.map((carousel) => (
        <a href={carousel.url} key={carousel.id} className="card-link" target="_blank" rel="noopener noreferrer">
          <div className="carouselcard">
            <img className="gambarcarousel" src={carousel.gambar} />
            <p className="captioncarousel">{carousel.caption}</p>
          </div>
        </a>
      ))}
    </div>
    <div aria-hidden className="carousel">
      {isi.map((carousel) => (
        <a href={carousel.url} key={carousel.id} className="card-link" target="_blank" rel="noopener noreferrer">
          <div className="carouselcard">
            <img className="gambarcarousel" src={carousel.gambar} />
            <p className="captioncarousel">{carousel.caption}</p>
          </div>
        </a>
      ))}
    </div>
    <div aria-hidden className="carousel">
      {isi.map((carousel) => (
        <a href={carousel.url} key={carousel.id} className="card-link" target="_blank" rel="noopener noreferrer">
          <div className="carouselcard">
            <img className="gambarcarousel" src={carousel.gambar} />
            <p className="captioncarousel">{carousel.caption}</p>
          </div>
        </a>
      ))}
    </div>
    </div>
  );
};
