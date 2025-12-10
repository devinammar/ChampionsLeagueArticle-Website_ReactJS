import "./cardschedule.css";

export const Cardschedule = ({ match }) => { 
  return (
    <div className="scheduleparent">
      {match.map((schedule) => (
        <a href={schedule.url} key={schedule.id} className="schedulelink" target="_blank" rel="noopener noreferrer">
          <div className="schedulecard">
            <img className="logo1" src={schedule.logo1} alt="logo"/>
            <img className="logo2" src={schedule.logo2} alt="logo"/>
            <p className="nameclub1">{schedule.nameclub1}</p>
            <p className="nameclub2">{schedule.nameclub2}</p>
            <p className="versus">VS</p>
            <p className="clock">{schedule.clock}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
