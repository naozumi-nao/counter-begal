const About = {
  async render() {
    return `
    <article id="about">
      <h2>Apa itu Counter-Begal?</h2>
      <p>Counter-Begal adalah aplikasi peta interaktif berbasis web yang dirancang untuk membantu masyarakat merasa lebih aman. Aplikasi ini mengumpulkan laporan langsung dari pengguna tentang aktivitas begal di berbagai lokasi. Dengan begitu, siapa pun dapat melihat area mana yang perlu diwaspadai dan mengambil tindakan pencegahan. Aplikasi ini dapat menjadi media bagi masyarakat untuk saling berbagi informasi kejahatan serta berbagi kewaspadaan dan meningkatkan kewaspadaan masyarakat terhadap potensi tindak kejahatan.</p>
      <h3>Fitur Utama</h3>
      <ul>
          <li>Menampilkan peta interaktif yang berisi informasi aktivitas begal</li>
          <li>Menerima laporan tindak kejahatan secara detail (nama pelapor, deskripsi, tempat, lokasi dan foto)</li>
          <li>Menampilkan detail suatu laporan kejahatan</li>
      </ul>

      <h3>Teknologi yang Digunakan</h3>
      <p>Aplikasi ini merupakan website yang terhubung dengan server <a href="https://counter-begal-api.onrender.com">Counter-Begal API</a>. Server bertugas memproses masukkan dari pengguna untuk setelahnya diolah oleh client app untuk ditampilkan dalam bentuk peta interaktif.</p>

      <h3>Masalah yang Diangkat</h3>
      <p>Proyek ini dilatarbelakangi oleh keterbatasan aksesibilitas terhadap data akurat mengenai aktivitas begal. Informasi terkait kejadian begal saat ini tersebar di berbagai platform media yang berbeda-beda, sehingga sulit bagi masyarakat untuk memperoleh gambaran komprehensif dan terkini. Kurangnya sentralisasi data ini menghambat upaya pencegahan dan penanggulangan kejahatan begal.</p>

      <h3>Solusi</h3>
      <p>Counter-Begal merupakan sebuah platform digital yang dirancang untuk meningkatkan kesadaran dan kewaspadaan masyarakat terhadap tindak kejahatan, khususnya kasus begal. Aplikasi ini berfungsi sebagai pusat informasi interaktif yang memungkinkan pengguna untuk melaporkan aktivitas begal, berbagi pengalaman, serta mengakses data mengenai lokasi-lokasi yang rawan aktivitas begal. Melalui visualisasi data dalam bentuk peta interaktif, pengguna dapat dengan mudah mengidentifikasi area-area yang perlu diwaspadai. Dengan antarmuka yang user-friendly dan fitur-fitur yang komprehensif, Counter-Begal diharapkan dapat berkontribusi secara signifikan dalam upaya pencegahan dan penanggulangan tindak kejahatan, serta menciptakan lingkungan yang lebih aman bagi masyarakat.</p>
    </article>
    `;
  },

  async afterRender() {
  },
};

export default About;
