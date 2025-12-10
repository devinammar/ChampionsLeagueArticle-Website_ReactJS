import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Paragraph } from "../components/paragraph";
import { Card } from "../components/card";
import { Schedule } from "../components/schedule";
import { Footer } from "../components/footer";

export function Topscore() {
  return (
    <div className="grid">
      <header className="headerdashboard">
        <Header text="" />
      </header>
      <nav className="navdashboard">
        <Sidebar />
      </nav>
      <div className="container">
      <section className="sectiondashboard1">
        <h2 className="subtittle">Top Skor</h2>
        <Paragraph paragraf="Sebagai salah satu ajang paling prestisius di dunia, UEFA Champions League (UCL) tidak hanya mempertemukan klub-klub terbaik, tetapi juga menjadi panggung bagi pemain-pemain top dunia untuk menunjukkan kualitas dan kemampuan mereka. Daftar top skor ini dipenuhi oleh nama-nama legendaris yang telah mengukir sejarah di kompetisi ini, dengan beberapa pemain yang telah mendominasi daftar ini selama bertahun-tahun." />
        <Paragraph paragraf="Salah satu nama yang tak bisa dipisahkan dari daftar ini adalah Cristiano Ronaldo, yang hingga kini memegang gelar pencetak gol terbanyak sepanjang masa di Liga Champions. Dengan lebih dari 130 gol, Ronaldo telah mencetak gol untuk sejumlah klub besar seperti Manchester United, Real Madrid, dan Juventus, serta menjadi simbol ketajaman dan ketahanan dalam kompetisi ini. Sebagai pemain yang dikenal dengan naluri mencetak gol yang tajam, Ronaldo telah mencetak gol di setiap fase kompetisi, dari babak penyisihan grup hingga final, dan tidak jarang ia tampil dengan gol-gol krusial yang menentukan nasib timnya." />
        <Paragraph paragraf="Tidak kalah pentingnya adalah Lionel Messi, yang meskipun seringkali lebih dikenal karena kemampuannya di liga domestik, juga menjadi salah satu pencetak gol terbanyak di UEFA Champions League. Dengan lebih dari 120 gol, Messi telah menunjukkan bahwa ia juga bisa tampil di panggung Eropa dengan sebaik-baiknya. Dengan gaya bermain yang khas dan dribel yang memukau, Messi menjadi ancaman utama bagi tim-tim lawan, mencetak gol dari berbagai situasi, baik itu melalui tendangan bebas, assist dari rekan satu tim, atau melalui individual brilliance yang menakjubkan." />
        <Paragraph paragraf="Selain Ronaldo dan Messi, ada juga sejumlah pemain hebat lainnya yang telah mengukir sejarah di UEFA Champions League. Nama-nama seperti Raul Gonzalez, Robert Lewandowski, Karim Benzema, dan Robert Lewandowski adalah beberapa contoh pemain yang masuk dalam daftar top skor UCL. Raul, misalnya, adalah ikon Real Madrid yang berhasil mencetak lebih dari 70 gol di kompetisi ini, sementara Lewandowski, dengan ketajamannya di lini depan Bayern Munich, juga sukses menambah pundi-pundi golnya di Liga Champions. Karim Benzema, setelah bertahun-tahun menjadi pemain kunci di lini depan Madrid, akhirnya juga memecahkan rekor dan mencatatkan namanya di antara pencetak gol terbanyak." />
        <Paragraph paragraf="Tidak hanya itu, Kylian Mbappe, meskipun relatif lebih muda dibandingkan dengan pemain-pemain lainnya, sudah menunjukkan potensi luar biasa dalam kompetisi ini. Dengan kecepatan luar biasa dan kemampuan untuk mencetak gol di momen-momen penting, Mbappe kini sudah menjadi salah satu pencetak gol terbanyak di generasinya, meskipun usianya masih muda. Begitu juga dengan Thomas Muller yang telah konsisten mencetak gol untuk Bayern Munich, menjadikannya salah satu pemain yang dapat diandalkan di setiap edisi Liga Champions." />
        <Paragraph paragraf="Top Skor UCL tidak hanya mencerminkan ketajaman para pemain, tetapi juga mengingatkan kita akan evolusi kompetisi itu sendiri. Dulu, Liga Champions diikuti oleh tim-tim dari liga-liga besar Eropa, namun seiring waktu, semakin banyak klub dari liga-liga yang lebih kecil mulai merasakan persaingan di panggung Eropa. Para pencetak gol terbaik ini sering kali menjadi pahlawan bagi tim mereka, membawa klub-klub mereka ke babak-babak penting dan memperlihatkan kualitas sepak bola terbaik di dunia." />
        { /* Card Top Skor*/}        
        <Card
          topscoreplayer={[
            {
              id: 1,
              gambar: "/ronaldo.jpg",
              judul: "Cristiano Ronaldo",
              caption: "183 Pertandingan, 140 Gol",
              url: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
            },
            {
              id: 2,
              gambar: "/messi.jpg",
              judul: "Lionel Messi",
              caption: "118 Pertandingan, 20 Gol",
              url: "https://en.wikipedia.org/wiki/Lionel_Messi",
            },
            {
              id: 3,
              gambar: "/lewandowski.jpg",
              judul: "Robert Lewandowski",
              caption: "136 Pertandingan, 105 Gol",
              url: "https://en.wikipedia.org/wiki/Robert_Lewandowski",
            },
            {
              id: 4,
              gambar: "/benzema.jpg",
              judul: "Karim Benzema",
              caption: "152 Pertandingan, 90 Gol",
              url: "https://en.wikipedia.org/wiki/Karim_Benzema",
            },
            {
              id: 5,
              gambar: "/raul.jpg",
              judul: "Raul",
              caption: "142 Pertandingan, 71 Gol",
              url: "https://en.wikipedia.org/wiki/Raúl",
            },
            {
              id: 6,
              gambar: "/mbappe.jpg",
              judul: "Kylian Mbappe",
              caption: "91 Pertandingan, 60 Gol",
              url: "https://en.wikipedia.org/wiki/Kylian_Mbappé",
            },
            {
              id: 7,
              gambar: "/muller.jpg",
              judul: "Thomas Muller",
              caption: "163 Pertandingan, 57 Gol",
              url: "https://en.wikipedia.org/wiki/Thomas_Müller",
            },
            {
              id: 8,
              gambar: "/nistelrooy.jpg",
              judul: "Ruud Van Nistelrooy",
              caption: "73 Pertandingan, 56 Gol",
              url: "https://en.wikipedia.org/wiki/Ruud_van_Nistelrooy",
            },
            {
              id: 9,
              gambar: "/haaland.jpg",
              judul: "Haaland",
              caption: "52 Pertandingan, 54 Gol",
              url: "https://en.wikipedia.org/wiki/Erling_Haaland",
            },
            {
              id: 10,
              gambar: "/henry.jpg",
              judul: "Thierry Henry",
              caption: "112 Pertandingan, 50 Gol",
              url: "https://en.wikipedia.org/wiki/Thierry_Henry",
            },
          ]}
        />
        <h2 className="subtittle">Top Skor 2024/2025</h2>
        <Paragraph paragraf="Tentu, ini adalah deskripsi mengenai daftar pencetak gol terbanyak Liga Champions UEFA (UCL) Musim 2024/2025 dalam bentuk paragraf dengan bahasa yang lebih netral dan deskriptif:

          Daftar pencetak gol terbanyak UCL Musim 2024/2025 dipimpin oleh Serhou Guirassy dan Raphinha, yang masing-masing telah mencatatkan 13 Gol. Selanjutnya dalam daftar ini, terdapat dua pemain dengan koleksi 11 Gol, yaitu Robert Lewandowski dan Harry Kane. Di posisi berikutnya, Lautaro Martínez telah mencetak 9 Gol. Tiga pemain, Erling Haaland, Vinicius Junior, dan Ousmane Dembélé, berada sejajar dengan masing-masing mengumpulkan 8 Gol. Sementara itu, Jonathan David dan Julián Álvarez melengkapi daftar ini dengan torehan masing-masing 7 Gol." />
{ /* Card 2024/2025*/}          
        <Card className="cardtopscore"
          topscoreplayer={[
            {
              id: 1,
              gambar: "/guirassy.jpg",
              judul: "Serhou Guirassy",
              caption: "13 Gol",
              url: "https://id.wikipedia.org/wiki/Serhou_Guirassy",
            },
            {
              id: 2,
              gambar: "/raphinha.jpeg",
              judul: "Raphinha",
              caption: "13 Gol",
              url: "https://id.wikipedia.org/wiki/Raphinha",
            },
            {
              id: 3,
              gambar: "/lewandowski.jpg",
              judul: "Robert Lewandowski",
              caption: "11 Gol",
              url: "https://en.wikipedia.org/wiki/Robert_Lewandowski",
            },
            {
              id: 4,
              gambar: "/kane.jpg",
              judul: "Harry Kane",
              caption: "11 Gol",
              url: "https://id.wikipedia.org/wiki/Harry_Kane",
            },
            {
              id: 5,
              gambar: "/lautaro.jpg",
              judul: "Lautaro Martinez",
              caption: "9 Gol",
              url: "https://id.wikipedia.org/wiki/Lautaro_Mart%C3%ADnez",
            },
            {
              id: 6,
              gambar: "/haaland.jpg",
              judul: "Erling Haaland",
              caption: "8 Gol",
              url: "https://en.wikipedia.org/wiki/Erling_Haaland",
            },
            {
              id: 7,
              gambar: "/vinicius.jpg",
              judul: "Vinicius Junior",
              caption: "8 Gol",
              url: "https://id.wikipedia.org/wiki/Vin%C3%ADcius_J%C3%BAnior",
            },
            {
              id: 8,
              gambar: "/dembele.jpg",
              judul: "Ousmane Dembele",
              caption: "8 Gol",
              url: "https://id.wikipedia.org/wiki/Ousmane_Demb%C3%A9l%C3%A9",
            },
            {
              id: 9,
              gambar: "/jonathandavid.jpg",
              judul: "Jonathan David",
              caption: "7 Gol",
              url: "https://id.wikipedia.org/wiki/Jonathan_David",
            },
            {
              id: 10,
              gambar: "/alvarez.jpg",
              judul: "Julian Alvarez",
              caption: "7 Gol",
              url: "https://id.wikipedia.org/wiki/Juli%C3%A1n_Alvarez",
            },
          ]}
        />
        <Paragraph className="bottomparagraph"/>
      </section>
      <section className="sectiondashboard2">
      </section>
      </div>
      <footer className="footerdashboard">
        <Footer />
      </footer>
    </div>
  );
}
