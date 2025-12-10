import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Card } from "../components/card";
import { Paragraph } from "../components/paragraph";
import { Video } from "../components/video";
import { Table } from "../components/table";
import { Footer2 } from "../components/footer2";
import { Footer } from "../components/footer";

export function Champions() {
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
        <h2 className="subtittle">Daftar juara</h2>
        <Paragraph paragraf="Sepanjang sejarahnya, banyak klub-klub legendaris yang telah mengukir prestasi luar biasa, dari Real Madrid yang dominan pada era awal hingga kebangkitan tim-tim modern seperti Bayern Munich, Barcelona, dan Chelsea. Pada edisi pertama Piala Eropa pada tahun 1956, Real Madrid menjadi klub pertama yang meraih gelar juara setelah mengalahkan Reims dari Prancis. Keberhasilan ini menandai awal dari dominasi Real Madrid yang menguasai kompetisi ini pada tahun-tahun berikutnya, memenangkan lima gelar berturut-turut dari 1956 hingga 1960. Keberhasilan ini menjadikan Real Madrid sebagai ikon utama dalam sejarah Liga Champions, dan mereka terus menambah koleksi trofinya di sepanjang tahun-tahun berikutnya." />
        <Paragraph paragraf="Di luar dominasi Real Madrid, klub-klub besar Eropa lainnya mulai menunjukkan kekuatan mereka, dengan AC Milan yang mengangkat trofi pada tahun 1963 dan kembali pada tahun 1969. Klub asal Italia ini, dengan sejumlah pemain berbakat seperti Gianni Rivera dan Nereo Rocco, telah menjadi salah satu kekuatan utama dalam sejarah Liga Champions. Pada dekade berikutnya, Bayern Munich muncul sebagai juara pada tahun 1974, 1975, dan 1976, mengukuhkan dirinya sebagai salah satu klub terbesar Eropa di era 70-an, berkat kehebatan pemain seperti Franz Beckenbauer dan Gerd Muller." />
        <Paragraph paragraf="Selama beberapa dekade, Liverpool menjadi salah satu klub paling sukses dalam sejarah Liga Champions, dengan meraih lima gelar juara, termasuk pada tahun 1981 dan 1984, saat mereka mendominasi sepak bola Eropa dengan manajer legendaris Bob Paisley. Setelah itu, Barcelona memulai era kejayaannya dengan mengalahkan Juventus pada 1992 dan meraih trofi Liga Champions lagi pada 2006, 2009, 2011, dan 2015, di bawah kepelatihan Pep Guardiola dan Ernesto Valverde, serta dengan bintang-bintang seperti Lionel Messi yang menjadi pusat permainan mereka." />
        <Paragraph paragraf="Namun, Real Madrid tetap menjadi klub yang tak terbantahkan di kompetisi ini, dengan meraih 13 gelar juara sepanjang sejarah mereka, yang terbagi dari era pertama mereka hingga tahun 2018, ketika mereka berhasil memenangkan gelar ke-13 di bawah kepemimpinan Zinedine Zidane. Keberhasilan ini termasuk meraih tiga gelar berturut-turut pada 2016, 2017, dan 2018, menjadikan mereka klub dengan gelar terbanyak di Liga Champions." />
        <Paragraph paragraf="Selain klub-klub tersebut, beberapa tim besar juga turut menambah koleksi gelar mereka sepanjang dekade-dekade yang berbeda. Manchester United yang meraih gelar pada tahun 1968, 1999, dan 2008, dengan para pemain seperti Sir Bobby Charlton, Eric Cantona, dan Cristiano Ronaldo, membuktikan bahwa mereka juga merupakan salah satu klub besar Eropa. Chelsea, setelah beberapa kali berada di ambang juara, akhirnya berhasil memenangkan gelar pertama mereka pada 2012, mengalahkan Bayern Munich di final yang dramatis, dan kemudian menambah koleksi trofi mereka dengan kemenangan pada 2021." />
        <Paragraph paragraf="Selain klub-klub tersebut, Juventus, Ajax, Benfica, dan Inter Milan juga turut menorehkan namanya di daftar juara Liga Champions, dengan Inter Milan menjadi juara terakhir yang meraih gelar pada 2010, setelah mengalahkan Bayern Munich di final. Ajax meraih tiga gelar pada tahun 1971, 1972, dan 1973, yang menandai dominasi mereka di era 70-an, berkat para pemain seperti Johan Cruyff." />
      </section>
      <section className="sectiondashboard2">
        <Table />
      </section>
      </div>
      <footer className="footerdashboard">
        <Footer />
      </footer>
    </div>
  );
}
