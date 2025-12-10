import React, { useState, useEffect } from "react";
import './schedule.css';

export const Schedule = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("https://www.openligadb.de/api/getmatchesbyseason/CL/2025")
      .then((response) => response.json())
      .then((data) => setMatches(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <table id="schedule-table">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Waktu</th>
            <th>Tim 1</th>
            <th>Tim 2</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => {
            const date = new Date(match.matchDateTime);
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            const formattedTime = `${date.getHours()}:${date.getMinutes()}`;
            return (
              <tr key={match.matchID}>
                <td>{formattedDate}</td>
                <td>{formattedTime}</td>
                <td>
                  <img src={match.team1.teamIconUrl} alt={match.team1.teamName} width="30" />
                  {match.team1.teamName}
                </td>
                <td>
                  <img src={match.team2.teamIconUrl} alt={match.team2.teamName} width="30" />
                  {match.team2.teamName}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
