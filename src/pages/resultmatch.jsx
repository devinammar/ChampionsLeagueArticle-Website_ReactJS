import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Paragraph } from "../components/paragraph";
import { Footer } from "../components/footer";
import { Cardschedule } from "../components/cardschedule";
import { Cardmatch } from "../components/cardmatch";
import "./resultmatch.css"

export function Resultmatch() {
  return (
    <div id="gridresult">
      <header id="headerdashboardresult">
        <Header text="" />
      </header>
      <nav id="navdashboardresult">
        <Sidebar />
      </nav>
      <section id="sectiondashboardfirst">
        <h2 id="subtittleschedule">Hasil Pertandingan</h2>
        <Paragraph paragraf="Rabu, 26 November 2025" />
        <Cardmatch result={[
          {
              id: 1,
              image: "/ajaxbenfica.jpg",
              nameclub1: "Ajax",
              nameclub2: "Benfica",
              score1:"0",
              score2:"2",
              url: "https://youtu.be/oxaqPoWiAQY?si=0oZbLrMWH2nZD50z",
            },
            {
              id: 2,
              image: "/glimtjuventus.jpg",
              nameclub1: "Bodo/Glimt",
              nameclub2: "Juventus",
              score1:"2",
              score2:"3",
              url: "https://youtu.be/A56dO7j86vI?si=9l2iP6WRrJWh8Jov",
            },
            {
              id: 3,
              image: "/marseillenewcastle.jpg",
              nameclub1: "Marseille",
              nameclub2: "Newcastle",
              score1:"2",
              score2:"1",
              url: "https://youtu.be/6bjMumVPQ5Q?si=vVedIibwCPN00Qu6",
            },
            {
              id: 4,
              image: "/dortmundvillareal.jpg",
              nameclub1: "Borussia Dortmund",
              nameclub2: "Villareal",
              score1:"4",
              score2:"0",
              url: "https://youtu.be/o3Y0EEPOmjo?si=vd7SIHNSmA99lN11",
            },
            {
              id: 5,
              image: "/arsenalbayern.jpg",
              nameclub1: "Arsenal",
              nameclub2: "Bayern Munchen",
              score1:"3",
              score2:"1",
              url: "https://youtu.be/7B_looq4zM4?si=g8K8HRbAdRIW1FQ_",
            },
            {
              id: 6,
              image: "/psgtottenham.jpg",
              nameclub1: "PSG",
              nameclub2: "Tottenham",
              score1:"5",
              score2:"3",
              url: "https://youtu.be/50ZR4BA9Y9k?si=IxXa5xYfVZTamwOA",
            },
        ]} />
        <Paragraph paragraf="Rabu, 5 November 2025" />
        <Cardmatch result={[
          {
              id: 1,
              image: "/napolifrankfurt.jpg",
              nameclub1: "Napoli",
              nameclub2: "Frankfurt",
              score1:"0",
              score2:"0",
              url: "https://youtu.be/UlTH1baUBgU?si=XY-7C_pMyOJqZUGX",
            },
            {
              id: 2,
              image: "/tottenhamcopenhagen.jpg",
              nameclub1: "Tottenham",
              nameclub2: "Copenhagen",
              score1:"4",
              score2:"0",
              url: "https://youtu.be/Yjnjh6ieTRA?si=xwsFU_Iow503iZ1n",
            },
            {
              id: 3,
              image: "/psgbayern.jpg",
              nameclub1: "PSG",
              nameclub2: "Bayern Munchen",
              score1:"1",
              score2:"2",
              url: "https://youtu.be/-0p1P5GAEDc?si=G0vatrVQS4sdmVEf",
            },
            {
              id: 4,
              image: "/mancitydortmund.jpg",
              nameclub1: "Man City",
              nameclub2: "Dortmund",
              score1:"4",
              score2:"1",
              url: "https://youtu.be/pGRSOA5Wxo0?si=Glx9jo1bwvAXFN6c",
            },
        ]} />
        <Paragraph paragraf="Selasa, 21 Oktober 2025" />
        <Cardmatch result={[
          {
              id: 1,
              image: "/barcelonaolympiacos.jpg",
              nameclub1: "Barcelona",
              nameclub2: "Olympiakos",
              score1:"0",
              score2:"0",
              url: "https://youtu.be/0nchdzW23bk?si=5ZgCs2oP4z78GR4P",
            },
            {
              id: 2,
              image: "/newcastlebenfica.jpg",
              nameclub1: "Newcastle",
              nameclub2: "Benfica",
              score1:"3",
              score2:"0",
              url: "https://youtu.be/ikTH7VLlLf4?si=dHPpOeYH10woNMdR",
            },
            {
              id: 3,
              image: "/psgleverkusen.jpg",
              nameclub1: "PSG",
              nameclub2: "Leverkusen",
              score1:"7",
              score2:"2",
              url: "https://youtu.be/fWq4686oP3s?si=Oh4F8E9YXV4zavr3",
            },
            {
              id: 4,
              image: "/chelseaajax.jpg",
              nameclub1: "Chelsea",
              nameclub2: "Ajax",
              score1:"5",
              score2:"1",
              url: "https://youtu.be/SJoaSEMAZIE?si=GmiQqjXA03LGi5Ly",
            },
            {
              id: 5,
              image: "/arsenalatletico.jpg",
              nameclub1: "Arsenal",
              nameclub2: "Atletico Madrid",
              score1:"5",
              score2:"1",
              url: "https://youtu.be/Ij8axvnqnq8?si=75V_an1EfVuencSl",
            },
        ]} />
      </section>
      <footer id="footerdashboardresult">
        <Footer />
      </footer>
    </div>
  );
}
