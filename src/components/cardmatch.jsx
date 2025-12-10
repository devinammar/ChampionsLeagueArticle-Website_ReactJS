import "./cardmatch.css";

export const Cardmatch = ({ result }) => { 
  return (
    <div id="matchparent">
      {result.map((match) => (
        <a href={match.url} key={match.id} id="matchlink" target="_blank" rel="noopener noreferrer">
          <div id="matchcard">
            <img id="matchimage" src={match.image} alt="logo"/>
            <p id="clubmatch1">{match.nameclub1}</p>
            <p id="clubmatch2">{match.nameclub2}</p>
            <p id="score1">{match.score1}</p>
            <p id="score2">{match.score2}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
