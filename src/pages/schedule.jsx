import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Paragraph } from "../components/paragraph";
import { Footer } from "../components/footer";
import { Cardschedule } from "../components/cardschedule";
import "./schedule.css"

export function Schedule() {
  return (
    <div id="gridschedule">
      <header id="headerdashboardschedule">
        <Header text="" />
      </header>
      <nav id="navdashboardschedule">
        <Sidebar />
      </nav>
      <section id="sectiondashboardfirst">
        <h2 id="subtittleschedule">Jadwal</h2>
        <Paragraph paragraf="Kamis, 27 November 2025" />
{/* Card 1 */}
        <Cardschedule
          match={[
            {
              id: 1,
              logo1: "/manunited.png",
              logo2: "/liverpool.png",
              clock: "21.00",
              nameclub1: "Man United",
              nameclub2: "Liverpool",
              url: "",
            },
            {
              id: 2,
              logo1: "/marseille.png",
              logo2: "/juventus.png",
              clock: "21.00",
              nameclub1: "Marseille",
              nameclub2: "Juventus",
              url: "",
            },
            {
              id: 3,
              logo1: "/bayern.png",
              logo2: "/realmadrid.png",
              clock: "23.00",
              nameclub1: "Bayern Munich",
              nameclub2: "Real Madrid",
              url: "",
            },
            {
              id: 4,
              logo1: "/ajax.png",
              logo2: "/redstar.png",
              clock: "02.00",
              nameclub1: "Ajax",
              nameclub2: "Red Star",
              url: "",
            },
          ]}
        />
        <Paragraph paragraf="Jumat, 27 November 2025" />
{/* Card 2 */}
        <Cardschedule
          match={[
            {
              id: 1,
              logo1: "/mancity.png",
              logo2: "/leverkusen.png",
              clock: "21.00",
              nameclub1: "Man City",
              nameclub2: "Bayer Leverkusen",
              url: "",
            },
            {
              id: 2,
              logo1: "/dortmund.png",
              logo2: "/chelsea.png",
              clock: "23.00",
              nameclub1: "Borussia Dortmund",
              nameclub2: "Chelsea",
              url: "",
            },
            {
              id: 3,
              logo1: "/benfica.png",
              logo2: "/barcelona.png",
              clock: "23.00",
              nameclub1: "Benfica",
              nameclub2: "Barcelona",
              url: "",
            },
            {
              id: 4,
              logo1: "/celtic.png",
              logo2: "/acmilan.png",
              clock: "02.00",
              nameclub1: "Celtic",
              nameclub2: "AC Milan",
              url: "",
            },
            {
              id: 5,
              logo1: "/internazionale.png",
              logo2: "/feyenoord.png",
              clock: "02.00",
              nameclub1: "Internazionale",
              nameclub2: "Feyenoord",
              url: "",
            },
          ]}
        />
        <Paragraph paragraf="Sabtu, 28 November 2025" />
{/* Card 3 */} 
        <Cardschedule match={[{
              id: 1,
              logo1: "/manunited.png",
              logo2: "/liverpool.png",
              clock: "23.00",
              nameclub1: "Man United",
              nameclub2: "Liverpool",
              url: "",
            },
            {
              id: 2,
              logo1: "/marseille.png",
              logo2: "/juventus.png",
              clock: "23.00",
              nameclub1: "Marseille",
              nameclub2: "Juventus",
              url: "",
            },
            {
              id: 3,
              logo1: "/bayern.png",
              logo2: "/realmadrid.png",
              clock: "02.00",
              nameclub1: "Bayern Munich",
              nameclub2: "Real Madrid",
              url: "",
            },
            ]} />
        <Paragraph paragraf="Jumat, 9 Januari 2026" />
        <Cardschedule match={[{
              id: 1,
              logo1: "/manunited.png",
              logo2: "/liverpool.png",
              clock: "09.00",
              nameclub1: "Man United",
              nameclub2: "Liverpool",
              url: "",
            },
            {
              id: 2,
              logo1: "/marseille.png",
              logo2: "/juventus.png",
              clock: "09.00",
              nameclub1: "Marseille",
              nameclub2: "Juventus",
              url: "",
            },
            {
              id: 3,
              logo1: "/bayern.png",
              logo2: "/realmadrid.png",
              clock: "21.00",
              nameclub1: "Bayern Munich",
              nameclub2: "Real Madrid",
              url: "",
            },
            {
              id: 4,
              logo1: "/bayern.png",
              logo2: "/realmadrid.png",
              clock: "21.00",
              nameclub1: "Bayern Munich",
              nameclub2: "Real Madrid",
              url: "",
            },]} />
      </section>
      <footer id="footerdashboardschedule">
        <Footer />
      </footer>
    </div>
  );
}
