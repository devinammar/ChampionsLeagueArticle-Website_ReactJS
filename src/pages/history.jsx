import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Paragraph } from "../components/paragraph";
import { Footer } from "../components/footer";
import { Boxcontent1 } from "../components/boxcontent1";
import { Boxcontenthistory } from "../components/boxcontenthistory";
import { Boxcontent2 } from "../components/boxcontent2";

export function History() {
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
        <h2 className="subtittle">Sejarah</h2>
        <Paragraph paragraf="UEFA Champions League, yang sebelumnya dikenal sebagai Piala Eropa, adalah kompetisi sepak bola antar klub paling bergengsi di Eropa. Didirikan pada tahun 1955, liga ini awalnya diikuti oleh tim-tim juara dari liga-liga Eropa yang saling bersaing memperebutkan gelar klub terbaik benua. Kompetisi ini tidak hanya menjadi ajang pertarungan fisik di lapangan, tetapi juga tempat di mana strategi, taktik, dan keterampilan individu para pemain terbaik dunia diuji. Piala Eropa pertama kali dimenangkan oleh Real Madrid pada tahun 1956, yang menjadi penanda dimulainya era dominasi mereka di kompetisi ini, dengan klub tersebut memenangkan lima gelar berturut-turut hingga 1960." />
        <Paragraph paragraf="Seiring berjalannya waktu, kompetisi ini semakin berkembang, diikuti oleh klub-klub terbaik dari liga-liga besar Eropa, seperti Spanyol, Inggris, Jerman, Italia, dan Prancis. Formatnya pun mengalami perubahan, dengan babak penyisihan grup diperkenalkan pada tahun 1992, memberikan kesempatan bagi lebih banyak klub untuk berkompetisi dalam ajang ini. Perubahan ini juga menandai era baru bagi kompetisi yang kini dikenal sebagai UEFA Champions League. Pada tahun 1992, turnamen ini resmi mengganti nama dari Piala Eropa menjadi UEFA Champions League, sebuah langkah simbolis yang mencerminkan evolusi dan globalisasi kompetisi ini." />
        <Paragraph paragraf="Selama beberapa dekade, Liga Champions telah menjadi rumah bagi klub-klub terbaik dunia yang telah mengukir sejarah legendaris. Klub-klub seperti Real Madrid, Barcelona, Bayern Munich, dan AC Milan menjadi simbol dominasi dalam kompetisi ini. Real Madrid, khususnya, telah mencapai puncak prestasi dengan meraih 14 gelar, menjadikannya klub yang paling banyak memenangkan trofi tersebut. Sebagai klub yang telah mendominasi hampir sepanjang sejarah kompetisi ini, Real Madrid telah menjadi simbol kejayaan dan ambisi di dunia sepak bola Eropa. Selain itu, klub-klub seperti Barcelona dengan permainan tiki-taka mereka, Bayern Munich dengan kekuatan fisik dan dominasi mereka, serta AC Milan dengan sejarah besar mereka, telah menciptakan rivalitas yang memikat penggemar di seluruh dunia." />
        <Paragraph paragraf="Namun, meskipun tim-tim besar sering kali mendominasi kompetisi ini, UEFA Champions League juga terkenal dengan kejutan-kejutan yang selalu terjadi setiap musimnya. Kejutan terbesar adalah ketika tim yang tidak diunggulkan mampu mengalahkan klub-klub besar dan melaju ke babak final, atau bahkan memenangkan gelar. Salah satu contoh paling mencolok adalah kemenangan Liverpool atas Barcelona di semifinal musim 2018-2019, di mana mereka berhasil membalikkan defisit tiga gol pada leg pertama untuk akhirnya melaju ke final dan menjuarai kompetisi tersebut. Kejutan lainnya adalah kemenangan tim-tim seperti Chelsea pada 2012 dan Borussia Dortmund pada 1997, yang menunjukkan bahwa dalam sepak bola, segalanya mungkin terjadi." />
        <Paragraph paragraf="Di sisi lain, kompetisi ini juga menjadi panggung bagi pemain-pemain legendaris dunia, yang tak hanya dikenal karena keterampilan teknis mereka, tetapi juga karena kemampuan mereka untuk mengubah jalannya pertandingan di panggung terbesar Eropa. Para pemain seperti Cristiano Ronaldo, Lionel Messi, Zinedine Zidane, dan Ronaldo Nazário, di antara banyak lainnya, telah memberikan kontribusi luar biasa pada kompetisi ini. Ronaldo, khususnya, menjadi pencetak gol terbanyak sepanjang sejarah kompetisi ini, dengan lebih dari 130 gol, sementara Messi dengan gaya permainannya yang memukau telah menjadi simbol dari keindahan sepak bola." />
        <Paragraph paragraf="" />
      </section>
      <section className="sectiondashboard2">
        <Boxcontenthistory isi={[
            {
              id: 1,
              imagecontent: "/UCL_logo.png",
              tittlecontent: "The Entire History of Champions League",
              captioncontent: "Sejarah lengkap dari ajang sepak bola paling bergengsi antar klub eropa - UEFA Champions League",
              url: "https://youtu.be/klfcqxBs4_o?si=VKqUrKQivpNRNPgI",
            },
        ]}/>
      </section>
      </div>
      <footer className="footerdashboard">
        <Footer />
      </footer>
    </div>
  );
}
