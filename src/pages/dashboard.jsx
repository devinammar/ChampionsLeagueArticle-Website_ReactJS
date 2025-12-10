import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Card } from "../components/card";
import { Paragraph } from "../components/paragraph";
import { Video } from "../components/video";
import { Footer } from "../components/footer";
import { Carousel } from "../components/carousel";
import { Boxcontent1 } from "../components/boxcontent1";
import { Boxcontent2 } from "../components/boxcontent2";

export function Dashboard() {
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
        <h2 className="subtittle">UEFA Champions League</h2>
        <Paragraph paragraf="kompetisi sepak bola paling prestisius di Eropa, yang mempertemukan tim-tim terbaik dari liga-liga utama di benua ini. Dengan format yang menggabungkan fase grup dan sistem gugur, Liga Champions tidak hanya menjadi ajang perebutan gelar, tetapi juga tempat di mana para pemain terbaik dunia menunjukkan keterampilan dan semangat juang mereka. Setiap musim, ratusan tim dari berbagai negara berkompetisi untuk mendapatkan tiket ke turnamen ini, dan hanya yang paling unggul yang bisa melaju ke babak final. Dari sana, tim yang berhasil meraih kemenangan akan menambah koleksi trofi mereka dan dikenal sebagai klub terbaik Eropa untuk satu musim penuh." />
        <Paragraph paragraf="Liga Champions juga menjadi salah satu ajang yang paling dinantikan oleh penggemar sepak bola di seluruh dunia, karena menyajikan pertandingan yang penuh kejutan dan drama. Berbagai klub top seperti Real Madrid, Barcelona, Bayern Munich, Juventus, dan Manchester City saling berhadapan dengan ambisi besar untuk meraih trofi yang bergengsi ini. Lebih dari sekadar pertandingan, Liga Champions menawarkan sebuah platform bagi para pemain untuk memperlihatkan kualitas mereka di panggung internasional. Selain itu, keberhasilan di Liga Champions dapat memberikan dampak besar dalam hal finansial dan reputasi global bagi klub-klub yang berhasil mengukir sejarah di turnamen ini." />
        <Carousel />
        <Paragraph paragraf="Liga Champions juga menjadi salah satu ajang yang paling dinantikan oleh penggemar sepak bola di seluruh dunia, karena menyajikan pertandingan yang penuh kejutan dan drama. Berbagai klub top seperti Real Madrid, Barcelona, Bayern Munich, Juventus, dan Manchester City saling berhadapan dengan ambisi besar untuk meraih trofi yang bergengsi ini. Lebih dari sekadar pertandingan, Liga Champions menawarkan sebuah platform bagi para pemain untuk memperlihatkan kualitas mereka di panggung internasional. Selain itu, keberhasilan di Liga Champions dapat memberikan dampak besar dalam hal finansial dan reputasi global bagi klub-klub yang berhasil mengukir sejarah di turnamen ini." />
      </section>
      <section className="sectiondashboard2">
        <Boxcontent1 isi={[
                    {
                      id: 1,
                      imagecontent: "/barcainter7.png",
                      tittlecontent: "Most Dramatic Champions League Match 2024/2025",
                      captioncontent: "Pertandingan terbaik di ajang Champions League musim 2024/2025, Internazinale v Barcelona, Man City v Real Madrid, Ac Milan v Liverpool dan masih banyak lagi. Dari kejutan yang tak terduga hingga comeback yang mendebarkan, setiap laga ini menghadirkan drama menit akhir, hujan gol, dan adu taktik yang menguras emosi.",
                      url: "https://youtu.be/BER8cWTt4XA?si=STlb3ChgYws8MIyv",
                    },
                ]}/>
        <Boxcontent2 isi={[
            {
              id: 2,
              imagecontent: "/ricegoal2.png",
              tittlecontent: "Top 10 Goals of the Season - 2024/2025",
              captioncontent: "10 Goals terbaik dalam gelaran Champions League musim 2024/2025, Momen-momen di mana kreativitas pemain menghasilkan gol indah dan setiap assist menceritakan kisah kejeniusan. Saksikan bagaimana para bintang lapangan hijau menciptakan sihir, dengan skill individu yang memukau, kombinasi tim yang indah, dan penyelesaian akhir yang brilian.",
              url: "https://youtu.be/r2r5Ly-cZ-k?si=l6wukMxZNpLHKCoI",
            },
        ]}/>
        <Boxcontent1 isi={[
                    {
                      id: 2,
                      imagecontent: "/donaruma4.png",
                      tittlecontent: "Best Save of the Season - 2024/2025",
                      captioncontent: "Saksikan momen-momen penyelamatan paling dramatis dan krusial dari penjaga gawang terbaik di Champions League musim 2024/2025. Setiap 'save' ini tidak hanya menghentikan laju bola, tetapi juga mengubah arah pertandingan dan menjaga asa tim untuk meraih kejayaan.",
                      url: "https://youtu.be/JAU8zIpIM_o?si=wjlH0C-UHVfDcuZG",
                    },
        ]}/>
        <Video sumber="/UEFAChampionsLeagueIntro20204KHD.mp4" />
      </section>
      </div>
      <footer className="footerdashboard">
        <Footer />
      </footer>
    </div>
  );
}
