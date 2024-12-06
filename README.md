# Counter-Begal
Deployed Link: https://counter-begal.netlify.app

## Deskripsi Proyek
Counter-Begal adalah aplikasi peta interaktif berbasis web yang dirancang untuk membantu masyarakat merasa lebih aman. Aplikasi ini mengumpulkan laporan langsung dari pengguna tentang aktivitas begal di berbagai lokasi. Dengan begitu, siapa pun dapat melihat area mana yang perlu diwaspadai dan mengambil tindakan pencegahan. Aplikasi ini dapat menjadi media bagi masyarakat untuk saling berbagi informasi kejahatan serta berbagi kewaspadaan dan meningkatkan kewaspadaan masyarakat terhadap potensi tindak kejahatan.
Secara garis besar, fitur-fitur yang dimiliki aplikasi ini diantaranya:
* Menampilkan peta interaktif yang berisi informasi aktivitas begal
* Menerima laporan tindak kejahatan secara detail (nama pelapor, deskripsi, tempat, lokasi dan foto)
* Menampilkan detail suatu laporan kejahatan

## Tipe Konten
Aplikasi ini merupakan website yang terhubung dengan server rest api https://counter-begal-api.onrender.com. Server bertugas memproses masukkan dari pengguna untuk setelahnya diolah oleh client app untuk ditampilkan dalam bentuk peta interaktif.

## Masalah yang Diangkat
Proyek ini dilatarbelakangi oleh keterbatasan aksesibilitas terhadap data akurat mengenai aktivitas begal. Informasi terkait kejadian begal saat ini tersebar di berbagai platform media yang berbeda-beda, sehingga sulit bagi masyarakat untuk memperoleh gambaran komprehensif dan terkini. Kurangnya sentralisasi data ini menghambat upaya pencegahan dan penanggulangan kejahatan begal.

## Solusi
Counter-Begal merupakan sebuah platform digital yang dirancang untuk meningkatkan kesadaran dan kewaspadaan masyarakat terhadap tindak kejahatan, khususnya kasus begal. Aplikasi ini berfungsi sebagai pusat informasi interaktif yang memungkinkan pengguna untuk melaporkan aktivitas begal, berbagi pengalaman, serta mengakses data mengenai lokasi-lokasi yang rawan aktivitas begal. Melalui visualisasi data dalam bentuk peta interaktif, pengguna dapat dengan mudah mengidentifikasi area-area yang perlu diwaspadai. Dengan antarmuka yang user-friendly dan fitur-fitur yang komprehensif, Counter-Begal diharapkan dapat berkontribusi secara signifikan dalam upaya pencegahan dan penanggulangan tindak kejahatan, serta menciptakan lingkungan yang lebih aman bagi masyarakat.

<hr>

### Built With
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/>



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Penggunaan Aplikasi

### Prasyarat

sebelum menjalankan atau memodifikasi proyek, jalankan perintah ini pada terminal terlebih dahulu untuk menginstall node js.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalasi

1. Clone repository
   ```sh
   git clone https://github.com/naozumi-nao/counter-begal-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run in Dev Mode
    ```sh
    npm run start-dev
    ```
4. Build Project
   ```sh
   npm run build
   ```
5. Run in Production Mode
    ```sh
    npm run serve
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>