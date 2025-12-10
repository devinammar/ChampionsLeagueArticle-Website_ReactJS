import "./table.css";

export function Table() {
  const data = [
     { id: 1, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "1955-1956" },
  { id: 2, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "1956-1957" },
  { id: 3, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "1957-1958" },
  { id: 4, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "1958-1959" },
  { id: 5, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "1959-1960" },
  { id: 6, logo: "/benfica.png", namaKlub: "Benfica", tahun: "1960-1961" },
  { id: 7, logo: "/benfica.png", namaKlub: "Benfica", tahun: "1961-1962" },
  { id: 8, logo: "/acmilan.png", namaKlub: "AC Milan", tahun: "1962-1963" },
  { id: 9, logo: "/internazionale.png", namaKlub: "Inter Milan", tahun: "1963-1964" },
  { id: 10, logo: "/internazionale.png", namaKlub: "Inter Milan", tahun: "1964-1965" },
  { id: 11, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "1965-1966" },
  { id: 12, logo: "/celtic.png", namaKlub: "Celtic", tahun: "1966-1967" },
  { id: 13, logo: "/manunited.png", namaKlub: "Manchester United", tahun: "1967-1968" },
  { id: 14, logo: "/acmilan.png", namaKlub: "AC Milan", tahun: "1968-1969" },
  { id: 15, logo: "/feyenoord.png", namaKlub: "Feyenoord", tahun: "1969-1970" },
  { id: 16, logo: "/ajax.png", namaKlub: "Ajax", tahun: "1970-1971" },
  { id: 17, logo: "/ajax.png", namaKlub: "Ajax", tahun: "1971-1972" },
  { id: 18, logo: "/ajax.png", namaKlub: "Ajax", tahun: "1972-1973" },
  { id: 19, logo: "/bayern.png", namaKlub: "Bayern Munich", tahun: "1973-1974" },
  { id: 20, logo: "/bayern.png", namaKlub: "Bayern Munich", tahun: "1974-1975" },
  { id: 21, logo: "/bayern.png", namaKlub: "Bayern Munich", tahun: "1975-1976" },
  { id: 22, logo: "/liverpool.png", namaKlub: "Liverpool", tahun: "1976-1977" },
  { id: 23, logo: "/liverpool.png", namaKlub: "Liverpool", tahun: "1977-1978" },
  { id: 24, logo: "/nottingham.png", namaKlub: "Nottingham Forest", tahun: "1978-1979" },
  { id: 25, logo: "/nottingham.png", namaKlub: "Nottingham Forest", tahun: "1979-1980" },
  { id: 26, logo: "/liverpool.png", namaKlub: "Liverpool", tahun: "1980-1981" },
  { id: 27, logo: "/astonvilla.png", namaKlub: "Aston Villa", tahun: "1981-1982" },
  { id: 28, logo: "/hamburg.png", namaKlub: "Hamburg", tahun: "1982-1983" },
  { id: 29, logo: "/juventus.png", namaKlub: "Juventus", tahun: "1984-1985" },
  { id: 30, logo: "/ste.png", namaKlub: "Steaua Bucharest", tahun: "1985-1986" },
  { id: 31, logo: "/porto.png", namaKlub: "FC Porto", tahun: "1986-1987" },
  { id: 32, logo: "/barcelona.png", namaKlub: "Barcelona", tahun: "1987-1988" },
  { id: 33, logo: "/acmilan.png", namaKlub: "AC Milan", tahun: "1988-1989" },
  { id: 34, logo: "/acmilan.png", namaKlub: "AC Milan", tahun: "1989-1990" },
  { id: 35, logo: "/redstar.png", namaKlub: "Red Star Belgrade", tahun: "1990-1991" },
  { id: 36, logo: "/marseille.png", namaKlub: "Olympique Marseille", tahun: "1992-1993" },
  { id: 37, logo: "/acmilan.png", namaKlub: "AC Milan", tahun: "1993-1994" },
  { id: 38, logo: "/ajax.png", namaKlub: "Ajax", tahun: "1994-1995" },
  { id: 39, logo: "/juventus.png", namaKlub: "Juventus", tahun: "1996-1997" },
  { id: 40, logo: "/dortmund.png", namaKlub: "Borussia Dortmund", tahun: "1997-1998" },
  { id: 41, logo: "/manunited.png", namaKlub: "Manchester United", tahun: "1998-1999" },
  { id: 42, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "1999-2000" },
  { id: 43, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "2000-2001" },
  { id: 44, logo: "/leverkusen.png", namaKlub: "Bayer Leverkusen", tahun: "2001-2002" },
  { id: 45, logo: "/barcelona.png", namaKlub: "Barcelona", tahun: "2005-2006" },
  { id: 46, logo: "/acmilan.png", namaKlub: "AC Milan", tahun: "2006-2007" },
  { id: 47, logo: "/manunited.png", namaKlub: "Manchester United", tahun: "2007-2008" },
  { id: 48, logo: "/barcelona.png", namaKlub: "Barcelona", tahun: "2008-2009" },
  { id: 49, logo: "/internazionale.png", namaKlub: "Inter Milan", tahun: "2009-2010" },
  { id: 50, logo: "/barcelona.png", namaKlub: "Barcelona", tahun: "2010-2011" },
  { id: 51, logo: "/chelsea.png", namaKlub: "Chelsea", tahun: "2011-2012" },
  { id: 52, logo: "/bayern.png", namaKlub: "Bayern Munich", tahun: "2012-2013" },
  { id: 53, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "2013-2014" },
  { id: 54, logo: "/barcelona.png", namaKlub: "Barcelona", tahun: "2014-2015" },
  { id: 55, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "2015-2016" },
  { id: 56, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "2016-2017" },
  { id: 56, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "2017-2018" },
  { id: 56, logo: "/liverpool.png", namaKlub: "Liverpool", tahun: "2018-2019" },
  { id: 57, logo: "/bayern.png", namaKlub: "Bayern Munich", tahun: "2019-2020" },
  { id: 58, logo: "/chelsea.png", namaKlub: "Chelsea", tahun: "2020-2021" },
  { id: 59, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "2021-2022" },
  { id: 60, logo: "/mancity.png", namaKlub: "Manchester City", tahun: "2022-2023" },
  { id: 61, logo: "/realmadrid.png", namaKlub: "Real Madrid", tahun: "2024-2025" },
];

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Nama Klub</th>
            <th>Tahun</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td><img 
                  src={item.logo}
                  className="clublogo"
                /></td>
              <td>{item.namaKlub}</td>
              <td>{item.tahun}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
