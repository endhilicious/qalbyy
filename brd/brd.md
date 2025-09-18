saya mau buat aplikasi islam, yang dimana start paling pertama adalah alquran dan terjemahan yang diambil dari https://equran.id/apidev/v2

jadi ditampilan awalnya adalah list menu yang ada di web ini, semuanya saja berdasarkan yang ada di gambar ini halaman-utama-dengan-berbagai-menu.png , yang ada di reference\image\halaman-utama-dengan-berbagai-menu.png

semuanya disabled , kecuali menu alquran. jadi menu alquran ketika di klik akan masuk ke halaman alquran yang dimana kamu dapat mengikuti referensimu digambar-gambar yang ada di sini reference\image

untuk endpointnya / data untuk fetch alqurannya tolong pastikan kamu mengikuti dokumentasinya, yang sudah saya rekap di folder reference\script ,  fokus pada equran-api-docs.md itu karena itu cara pakainya ada disitu. yang json satunya hanyalah contoh
 
pastikan kamu mengikuti beberapa rules yang wajib yang ada di .cursor, terlebih karena ini baru, pastikan struktur foldermu mengikuti nextjs-folder-structure.mdc 

berikut respon-respon dari apinya

GET
/surat

https://equran.id/api/v2/surat

response body : 
{
  "code": 200,
  "message": "Data retrieved successfully",
  "data": [
    {
      "nomor": 1,
      "nama": "الفاتحة",
      "namaLatin": "Al-Fatihah",
      "jumlahAyat": 7,
      "tempatTurun": "Mekah",
      "arti": "Pembukaan",
      "deskripsi": "Surat <i>Al Faatihah</i> (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap  diantara surat-surat yang ada dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat ini disebut <i>Al Faatihah</i> (Pembukaan), karena dengan surat inilah dibuka dan dimulainya Al Quran. Dinamakan <i>Ummul Quran</i> (induk Al Quran) atau <i>Ummul Kitaab</i> (induk Al Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang.<br> Dinamakan pula <i>As Sab'ul matsaany</i> (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/001.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/001.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/001.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/001.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/001.mp3"
      }
    },
    {
      "nomor": 2,
      "nama": "البقرة",
      "namaLatin": "Al-Baqarah",
      "jumlahAyat": 286,
      "tempatTurun": "Madinah",
      "arti": "Sapi",
      "deskripsi": "Surat <i>Al Baqarah</i> yang 286 ayat itu turun di Madinah yang sebahagian besar diturunkan pada permulaan tahun Hijrah, kecuali ayat 281 diturunkan di Mina pada Hajji wadaa' (hajji Nabi Muhammad s.a.w. yang terakhir). Seluruh ayat dari surat Al Baqarah termasuk golongan Madaniyyah, merupakan surat yang terpanjang di antara surat-surat Al Quran yang di dalamnya terdapat pula ayat yang terpancang (ayat 282). Surat ini dinamai <i>Al Baqarah</i> karena di dalamnya disebutkan kisah penyembelihan sapi betina yang diperintahkan Allah kepada Bani Israil (ayat 67 sampai dengan 74), dimana dijelaskan watak orang Yahudi pada umumnya. Dinamai <i>Fusthaatul-Quran</i> (puncak Al Quran) karena memuat beberapa hukum yang tidak disebutkan dalam surat yang lain. Dinamai juga surat  <i>alif-laam-miim</i> karena surat ini dimulai dengan Alif-laam-miim.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/002.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/002.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/002.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/002.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/002.mp3"
      }
    },
    {
      "nomor": 3,
      "nama": "اٰل عمران",
      "namaLatin": "Ali 'Imran",
      "jumlahAyat": 200,
      "tempatTurun": "Madinah",
      "arti": "Keluarga Imran",
      "deskripsi": "Surat <i>Ali 'Imran</i> yang terdiri dari 200 ayat ini adalah surat Madaniyyah.  Dinamakan <i>Ali 'Imran</i> karena memuat kisah keluarga 'Imran yang di dalam kisah itu disebutkan kelahiran Nabi Isa a.s., persamaan kejadiannya dengan Nabi Adam a. s., kenabian dan beberapa mukjizatnya, serta disebut pula kelahiran Maryam puteri 'Imran, ibu dari Nabi Isa a.s. Surat Al Baqarah dan Ali 'Imran ini dinamakan <i>Az Zahrawaani</i> (dua yang cemerlang), karena kedua surat ini menyingkapkan hal-hal yang disembunyikan oleh para Ahli Kitab, seperti kejadian dan kelahiran Nabi Isa a.s., kedatangan Nabi Muhammad s.a.w. dan sebagainya.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/003.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/003.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/003.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/003.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/003.mp3"
      }
    },
    {
      "nomor": 4,
      "nama": "النساۤء",
      "namaLatin": "An-Nisa'",
      "jumlahAyat": 176,
      "tempatTurun": "Madinah",
      "arti": "Wanita",
      "deskripsi": "Surat An Nisaa' yang terdiri dari 176 ayat itu, adalah surat Madaniyyah yang terpanjang sesudah surat Al Baqarah. Dinamakan <i>An Nisaa'</i> karena dalam surat ini banyak dibicarakan hal-hal yang berhubungan dengan wanita serta merupakan surat yang paling membicarakan hal itu dibanding dengan surat-surat yang lain. Surat yang lain banyak juga yang membicarakan tentang hal wanita ialah surat Ath Thalaq. Dalam hubungan ini biasa disebut surat An Nisaa' dengan sebutan: <i>Surat An Nisaa' Al Kubraa</i> (surat An Nisaa' yang besar), sedang  surat Ath Thalaq disebut dengan sebutan: <i>Surat An Nisaa' Ash Shughraa</i> (surat An Nisaa' yang kecil).",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/004.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/004.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/004.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/004.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/004.mp3"
      }
    },
    {
      "nomor": 5,
      "nama": "الماۤئدة",
      "namaLatin": "Al-Ma'idah",
      "jumlahAyat": 120,
      "tempatTurun": "Madinah",
      "arti": "Hidangan",
      "deskripsi": "Surat Al Maa'idah terdiri dari 120 ayat; termasuk golongan surat Madaniyyah. Sekalipun ada ayatnya yang turun di Mekah, namun ayat ini diturunkan sesudah Nabi Muhammad s.a.w. hijrah ke Medinah, yaitu di waktu haji wadaa'. Surat ini dinamakan <i>Al Maa'idah</i> (hidangan) karena memuat kisah pengikut-pengikut setia Nabi Isa a.s. meminta kepada Nabi Isa a.s. agar Allah menurunkan untuk mereka Al Maa'idah (hidangan makanan) dari langit (ayat 112). Dan dinamakan <i>Al Uqud</i> (perjanjian), karena kata itu terdapat pada ayat pertama surat ini, dimana Allah menyuruh agar hamba-hamba-Nya memenuhi janji prasetia terhadap Allah dan perjanjian-perjanjian yang mereka buat sesamanya. Dinamakan juga <i>Al Munqidz</i> (yang menyelamatkan), karena akhir surat ini mengandung kisah tentang Nabi Isa a.s. penyelamat pengikut-pengikut setianya dari azab Allah.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/005.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/005.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/005.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/005.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/005.mp3"
      }
    },
    {
      "nomor": 6,
      "nama": "الانعام",
      "namaLatin": "Al-An'am",
      "jumlahAyat": 165,
      "tempatTurun": "Mekah",
      "arti": "Binatang Ternak",
      "deskripsi": "Surat Al An'aam (binatang ternak: unta, sapi, biri-biri dan kambing) yang terdiri atas 165 ayat, termasuk golongan surat Makkiyah, karena hampur seluruh ayat-ayat-Nya diturunkan di Mekah dekat sebelum hijrah. Dinamakan <i>Al An'aam</i> karena di dalamnya disebut kata <i>An'aam</i> dalam hubungan dengan adat-istiadat kaum musyrikin, yang menurut mereka binatang-binatang ternak itu dapat dipergunakan untuk mendekatkan diri kepada tuhan mereka. Juga dalam surat ini disebutkan hukum-hukum yang berkenaan dengan binatang ternak itu.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/006.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/006.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/006.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/006.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/006.mp3"
      }
    },
    {
      "nomor": 7,
      "nama": "الاعراف",
      "namaLatin": "Al-A'raf",
      "jumlahAyat": 206,
      "tempatTurun": "Mekah",
      "arti": "Tempat Tertinggi",
      "deskripsi": "Surat Al A'raaf yang berjumlah 206 ayat termasuk golongan surat Makkiyah, diturunkan sebelum turunnya surat Al An'aam dan termasuk golongan surat <i>Assab 'uththiwaal</i> (tujuh surat yang panjang). Dinamakan <i>Al A'raaf</i> karena perkataan Al A'raaf terdapat dalam ayat 46 yang mengemukakan tentang keadaan orang-orang yang berada di atas Al A'raaf yaitu: tempat yang tertinggi di batas surga dan neraka.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/007.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/007.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/007.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/007.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/007.mp3"
      }
    },
    {
      "nomor": 8,
      "nama": "الانفال",
      "namaLatin": "Al-Anfal",
      "jumlahAyat": 75,
      "tempatTurun": "Madinah",
      "arti": "Rampasan Perang",
      "deskripsi": "Surat Al Anfaal terdiri atas 75 ayat dan termasuk golongan surat-surat Madaniyyah, karena seluruh ayat-ayatnya diturunkan di Madinah. Surat ini dinamakan <i>Al Anfaal</i> yang berarti harta rampasan perang berhubung kata <i>Al Anfaal</i> terdapat pada permulaan surat ini dan juga persoalan yang menonjol dalam surat ini ialah tentang harta rampasan perang, hukum perang dan hal-hal yang berhubungan dengan peperangan pada umumnya. Menurut riwayat Ibnu Abbas r.a. surat ini diturunkan berkenaan dengan perang Badar Kubra yang terjadi pada tahun kedua hijrah. Peperangan ini sangat penting artinya, karena dialah yang menentukan jalan sejarah Perkembangan Islam. Pada waktu itu umat Islam dengan berkekuatan kecil untuk pertama kali dapat mengalahkan kaum musyrikin yang berjumlah besar, dan berperlengkapan yang cukup, dan mereka dalam peperangan ini memperoleh harta rampasan perang yang tidak sedikit. Oleh sebab itu timbullah masalah bagaimana membagi harta-harta rampasan perang itu, maka kemudian Allah menurunkan ayat pertama dari surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/008.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/008.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/008.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/008.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/008.mp3"
      }
    },
    {
      "nomor": 9,
      "nama": "التوبة",
      "namaLatin": "At-Taubah",
      "jumlahAyat": 129,
      "tempatTurun": "Madinah",
      "arti": "Pengampunan",
      "deskripsi": "Surat At Taubah terdiri atas 129 ayat termasuk golongan surat-surat Madaniyyah. Surat ini dinamakan <i>At Taubah</i> yang berarti pengampunan berhubung kata <i>At Taubah</i> berulang kali disebut dalam surat ini. Dinamakan juga dengan <i>Baraah</i> yang berarti berlepas diri yang di sini maksudnya pernyataan pemutusan perhubungan, disebabkan kebanyakan pokok pembicaraannya tentang pernyataan pemutusan perjanjian damai dengan kaum musyrikin. <br> Di samping kedua nama yang masyhur itu ada lagi beberapa nama yang lain yang merupakan sifat dari surat ini. <br> Berlainan dengan surat-surat yang lain, maka pada permulaan surat ini tidak terdapat basmalah, karena surat ini adalah pernyataan perang dengan arti bahwa segenap kaum muslimin dikerahkan untuk memerangi seluruh kaum musyrikin, sedangkan basmalah bernafaskan perdamaian dan cinta kasih Allah. <br> Surat ini diturunkan sesudah Nabi Muhammad s.a.w. kembali dari peperangan Tabuk yang terjadi pada tahun 9 H. Pengumuman ini disampaikan oleh Saidina 'Ali r.a. pada musim haji tahun itu juga.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/009.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/009.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/009.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/009.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/009.mp3"
      }
    },
    {
      "nomor": 10,
      "nama": "يونس",
      "namaLatin": "Yunus",
      "jumlahAyat": 109,
      "tempatTurun": "Mekah",
      "arti": "Yunus",
      "deskripsi": "Surat Yunus terdiri atas 109 ayat, termasuk golongan surat-surat Makkiyyah kecuali ayat 40, 94, 95, yang diturunkan pada masa Nabi Muhmmad s.a.w. berada di Madinah. Surat ini dinamai <i>surat Yunus</i> karena dalam surat ini terutama ditampilkan kisah Nabi Yunus a.s. dan pengikut-pengikutnya yang teguh imannya.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/010.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/010.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/010.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/010.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/010.mp3"
      }
    },
    {
      "nomor": 11,
      "nama": "هود",
      "namaLatin": "Hud",
      "jumlahAyat": 123,
      "tempatTurun": "Mekah",
      "arti": "Hud",
      "deskripsi": "Surat Huud termasuk golongan surat-surat Makkiyyah, terdiri dari 123 ayat diturunkan sesudah surat Yunus. Surat ini dinamai <i>surat Huud</i> karena ada hubungan dengan terdapatnya kisah Nabi Huud a.s. dan kaumnya dalam surat ini terdapat juga kisah-kisah Nabi yang lain, seperti kisah Nuh a.s., Shaleh a.s., Ibrahim a.s., Luth a.s., Syu'aib a.s. dan Musa a.s.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/011.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/011.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/011.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/011.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/011.mp3"
      }
    },
    {
      "nomor": 12,
      "nama": "يوسف",
      "namaLatin": "Yusuf",
      "jumlahAyat": 111,
      "tempatTurun": "Mekah",
      "arti": "Yusuf",
      "deskripsi": " Surat Yusuf ini terdiri atas 111 ayat, termasuk golongan surat-surat Makkiyyah karena diturunkan di Mekah sebelum hijrah. Surat ini dinamakan <i>surat Yusuf</i> adalah karena titik berat dari isinya mengenai riwayat Nabi Yusuf a.s.  Riwayat tersebut salah satu di antara cerita-cerita ghaib yang diwahyukan kepada Nabi Muhammad s.a.w. sebagai mukjizat bagi beliau, sedang beliau sebelum diturunkan surat ini tidak mengetahuinya.  Menurut riwayat Al Baihaqi dalam kitab <i>Ad Dalail</i> bahwa segolongan orang Yahudi masuk agama Islam sesudah mereka mendengar cerita Yusuf a.s. ini, karena sesuai dengan cerita-cerita yang mereka ketahui. Dari cerita Yusuf a.s. ini, Nabi Muhammad s.a.w. mengambil pelajaran-pelajaran yang banyak dan merupakan penghibur terhadap beliau dalam menjalankan tugasnya.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/012.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/012.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/012.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/012.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/012.mp3"
      }
    },
    {
      "nomor": 13,
      "nama": "الرّعد",
      "namaLatin": "Ar-Ra'd",
      "jumlahAyat": 43,
      "tempatTurun": "Madinah",
      "arti": "Guruh",
      "deskripsi": "Surat Ar Ra'd ini terdiri atas 43 ayat termasuk golongan surat-surat Makkiyyah. Surat ini dinamakan <i>Ar Ra'd</i> yang berarti <i>guruh</i> karena dalam ayat 13 Allah berfirman yang artinya <i>Dan guruh itu bertasbih sambil memuji-Nya</i>, menunjukkan sifat kesucian dan kesempurnaan Allah s.w.t.  Dan lagi sesuai dengan sifat Al Quran yang mengandung ancaman dan harapan, maka demikian pulalah halnya bunyi guruh itu menimbulkan kecemasan dan harapan kepada manusia. Isi yang terpenting dari surat ini ialah bahwa bimbingan Allah kepada makhluk-Nya bertalian erat dengan hukum sebab dan akibat. Bagi Allah s.w.t. tidak ada pilih kasih dalam menetapkan hukuman. Balasan atau hukuman adalah akibat dan ketaatan atau keingkaran terhadap hukum Allah.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/013.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/013.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/013.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/013.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/013.mp3"
      }
    },
    {
      "nomor": 14,
      "nama": "ابرٰهيم",
      "namaLatin": "Ibrahim",
      "jumlahAyat": 52,
      "tempatTurun": "Mekah",
      "arti": "Ibrahim",
      "deskripsi": "Surat Ibrahim ini terdiri atas 52 ayat, termasuk golongan surat-surat Makkiyyah karena diturunkan di Mekah sebelum Hijrah. Dinamakan <i>Ibrahim</i>, karena surat ini mengandung doa Nabi Ibrahim a.s. yaitu ayat 35 sampai dengan 41. Do'a ini isinya antara lain: permohonan agar keturunannya mendirikan shalat, dijauhkan dari menyembah berhala-berhala dan agar Mekah dan daerah sekitarnya menjadi daerah yang aman dan makmur. Doa Nabi Ibrahim a.s. ini telah diperkenankan oleh Allah s.w.t. sebagaimana telah terbukti keamanannya sejak dahulu sampai sekarang. Do'a tersebut dipanjatkan beliau ke hadirat Allah s.w.t. sesudah selesai membina Ka'bah bersama puteranya Ismail a.s., di dataran tanah Mekah yang tandus.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/014.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/014.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/014.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/014.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/014.mp3"
      }
    },
    {
      "nomor": 15,
      "nama": "الحجر",
      "namaLatin": "Al-Hijr",
      "jumlahAyat": 99,
      "tempatTurun": "Mekah",
      "arti": "Hijr",
      "deskripsi": "Surat ini terdiri atas 99 ayat, termasuk golongan surat-surat Makkiyyah,  karena diturunkan di Mekah sebelum hijrah. Al Hijr  adalah nama  sebuah daerah  pegunungan yang didiami zaman dahulu  oleh kaum  Tsamud terletak  di  pinggir  jalan antara Madinah dan Syam (Syria).<br> Nama surat ini diambil dari nama daerah pegunungan itu, berhubung nasib  penduduknya yaitu  kaum Tsamud  diceritakan pada ayat  80 sampai  dengan 84,  mereka  telah  dimusnahkan Allah  s.w.t.,  karena  mendustakan  Nabi  Shaleh  a.s.  dan berpaling   dari ayat-ayat  Allah. Dalam  surat ini terdapat juga kisah-kisah  kaum yang lain yang telah dibinasakan oleh Allah seperti  kaum Luth  a.s. dan kaum Syu'aib a.s. Dari ke semua kisah-kisah  itu dapat  diambil pelajaran bahwa orang-orang  yang  menentang  ajaran  rasul-rasul  akan  mengalami kehancuran.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/015.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/015.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/015.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/015.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/015.mp3"
      }
    },
    {
      "nomor": 16,
      "nama": "النحل",
      "namaLatin": "An-Nahl",
      "jumlahAyat": 128,
      "tempatTurun": "Mekah",
      "arti": "Lebah",
      "deskripsi": "Surat ini terdiri atas 128 ayat, termasuk golongan surat-surat Makkiyyah. Surat ini dinamakan <i>An Nahl</i> yang berarti <i>lebah</i> karena di dalamnya, terdapat firman Allah s.w.t. ayat 68 yang artinya : \"Dan Tuhanmu mewahyukan kepada lebah.\" Lebah adalah makhluk Allah yang banyak memberi manfaat  dan kenikmatan kepada manusia. Ada persamaan antara madu yang dihasilkan oleh lebah dengan Al Quranul Karim. Madu berasal dari bermacam-macam sari bunga dan dia menjadi obat bagi bermacam-macam penyakit manusia (lihat ayat 69). Sedang Al Quran mengandung inti sari dari kitab-kitab yang telah diturunkan kepada Nabi-nabi zaman dahulu ditambah dengan ajaran-ajaran yang diperlukan oleh semua bangsa sepanjang masa untuk mencapai kebahagiaan dunia dan akhirat. (Lihat surat (10) Yunus ayat 57 dan surat (17) Al Isra' ayat  82). Surat ini dinamakan pula \"An Ni'am\" artinya nikmat-nikmat, karena di dalamnya Allah menyebutkan pelbagai macam nikmat untuk hamba-hamba-Nya.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/016.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/016.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/016.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/016.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/016.mp3"
      }
    },
    {
      "nomor": 17,
      "nama": "الاسراۤء",
      "namaLatin": "Al-Isra'",
      "jumlahAyat": 111,
      "tempatTurun": "Mekah",
      "arti": "Memperjalankan Malam Hari",
      "deskripsi": "Surat ini terdiri atas 111 ayat, termasuk golongan surat-surat Makkiyyah. Dinamakan dengan <i>Al Israa'</i> yang berarti <i>memperjalankan di malam hari</i>, berhubung peristiwa Israa' Nabi Muhammad s.a.w. di Masjidil Haram di Mekah ke Masjidil Aqsha di Baitul Maqdis dicantumkan pada ayat pertama dalam surat ini. Penuturan cerita Israa' pada permulaan surat ini, mengandung isyarat bahwa Nabi Muhammad s.a.w. beserta umatnya kemudian hari akan mencapai martabat yang tinggi dan akan menjadi umat yang besar.<br> Surat ini dinamakan pula dengan <i>Bani Israil</i> artinya <i>keturunan Israil</i> berhubung dengan permulaan surat ini, yakni pada ayat kedua sampai dengan ayat kedelapan dan kemudian dekat akhir surat yakni pada ayat 101 sampai dengan ayat 104, Allah menyebutkan tentang Bani Israil yang setelah menjadi bangsa yang kuat lagi besar lalu menjadi bangsa yang terhina karena menyimpang dari ajaran Allah s.w.t. Dihubungkannya kisah Israa' dengan riwayat <i>Bani Israil</i> pada surat ini, memberikan peringatan bahwa umat Islam akan mengalami keruntuhan, sebagaimana halnya Bani Israil, apabila mereka juga meninggalkan ajaran-ajaran agamanya.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/017.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/017.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/017.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/017.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/017.mp3"
      }
    },
    {
      "nomor": 18,
      "nama": "الكهف",
      "namaLatin": "Al-Kahf",
      "jumlahAyat": 110,
      "tempatTurun": "Mekah",
      "arti": "Goa",
      "deskripsi": "Surat  ini terdiri atas 110 ayat, termasuk  golongan  surat-surat Makkiyyah. Dinamai <i>Al-Kahfi</i> artinya <i>Gua</i> dan <i>Ashhabul Kahfi</i> yang artinya <i>Penghuni-Penghuni Gua</i>. Kedua nama ini diambil dari cerita yang terdapat dalam surat ini pada ayat 9 sampai dengan 26, tentang beberapa orang pemuda yang tidur dalam gua bertahun-tahun lamanya. Selain cerita tersebut, terdapat pula beberapa buah cerita dalam surat ini, yang kesemuanya mengandung i'tibar dan pelajaran-pelajaran yang amat berguna bagi kehidupan manusia. Banyak hadist-hadist Rasulullah s.a.w. yang menyatakan keutamaan membaca surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/018.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/018.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/018.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/018.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/018.mp3"
      }
    },
    {
      "nomor": 19,
      "nama": "مريم",
      "namaLatin": "Maryam",
      "jumlahAyat": 98,
      "tempatTurun": "Mekah",
      "arti": "Maryam",
      "deskripsi": "Surat Maryam terdiri atas 98 ayat, termasuk golongan surat-surat Makkiyyah, karena hampir seluruh ayatnya diturunkan sebelum Nabi Muhammad s.a.w. hijrah ke Madinah, bahkan sebelum sahabat-sahabat beliau hijrah ke negeri Habsyi. Menurut riwayat Ibnu Mas'ud, Ja'far bin Abi Thalib membacakan permulaan surat Maryam ini kepada raja Najasyi dan pengikut-pengikutnya di waktu ia ikut hijrah bersama-sama sahabat-sahabat yang lain ke negeri Habsyi.<br>Surat ini dinamai <i>Maryam</i>, karena surat ini mengandung kisah Maryam, ibu Nabi Isa a.s. yang serba ajaib, yaitu melahirkan puteranya lsa a.s., sedang ia sebelumnya belum pernah dikawini atau dicampuri oleh seorang laki-laki pun. Kelahiran Isa a.s. tanpa bapa, merupakan suatu bukti kekuasaan Allah s.w.t.  Pengutaraan kisah Maryam sebagai kejadian yang luar biasa dan ajaib dalam surat ini, diawali dengan kisah kejadian yang luar biasa dan ajaib pula, yaitu dikabulkannya doa Zakaria a.s. oleh Allah s.w.t., agar beliau dianugerahi seorang putera sebagai pewaris dan pelanjut cita-cita dan kepercayaan beliau, sedang usia beliau sudah sangat tua dan isteri beliau seorang yang mandul yang menurut ukuran ilmu biologi tidak mungkin akan terjadi.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/019.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/019.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/019.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/019.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/019.mp3"
      }
    },
    {
      "nomor": 20,
      "nama": "طٰهٰ",
      "namaLatin": "Taha",
      "jumlahAyat": 135,
      "tempatTurun": "Mekah",
      "arti": "Taha",
      "deskripsi": "Surat Thaahaa terdiri atas 135 ayat, diturunkan sesudah diturunkannya surat Maryam, termasuk golongan surat-surat Makkiyyah. Surat ini dinamai <i>Thaahaa</i>, diambil dari perkataan yang berasal dan ayat pertama surat ini. Sebagaimana yang lazim terdapat pada surat-surat yang memakai huruf-huruf abjad pada permulaannya, di mana huruf tersebut seakan-akan merupakan pemberitahuan Allah kepada orang-orang yang membacanya, bahwa sesudah huruf itu akan dikemukakan hal-hal yang  sangat penting diketahui, maka demikian pula halnya dengan ayat-ayat yang terdapat sesudah huruf <i>thaahaa</i> dalam surat ini. Allah menerangkan bahwa Al Quran merupakan peringatan bagi manusia, wahyu dari Allah, Pencipta semesta alam. Kemudian Allah menerangkan kisah beberapa orang nabi; akibat-akibat yang telah ada akan dialami oleh orang-orang yang percaya kepada Allah dan orang-orang yang mengingkari-Nya, baik di dunia maupun di akhirat. Selain hal-hal tersebut di atas, maka surat ini mengandung pokok-pokok isi sebagai berikut:",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/020.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/020.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/020.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/020.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/020.mp3"
      }
    },
    {
      "nomor": 21,
      "nama": "الانبياۤء",
      "namaLatin": "Al-Anbiya'",
      "jumlahAyat": 112,
      "tempatTurun": "Mekah",
      "arti": "Para Nabi",
      "deskripsi": "Surat Al Anbiyaa' yang terdiri atas 112 ayat, termasuk golongan surat Makkiyyah. Dinamai surat ini dengan <i>al anbiyaa'</i>(nabi-nabi), karena surat ini mengutarakan kisah beberapa orang nabi. Permulaan surat Al Anbiyaa' menegaskan bahwa manusia lalai dalam menghadapi hari berhisab, kemudian berhubung adanya pengingkaran kaum musyrik Mekah terhadap wahyu yang dibawa Nabi Muhammad s.a.w. maka ditegaskan Allah, kendatipun nabi-nabi itu manusia biasa, akan tetapi masing-masing mereka adalah manusia yang membawa wahyu yang pokok ajarannya adalah tauhid, dan keharusan manusia menyembah Allah Tuhan Penciptanya. Orang yang tidak mau mengakui kekuasaan Allah dan mengingkari ajaran yang dibawa oleh nabi-nabi itu, akan diazab Allah didunia dan di akhirat nanti. Kemudian dikemukakan kisah beberapa orang nabi dengan umatnya. Akhirnya surat itu ditutup dengan seruan agar kaum musyrik Mekah percaya kepada ajaran yang dibawa Muhammad s.a.w supaya tidak mengalami apa yang telah dialami oleh umat-umat yang dahulu.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/021.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/021.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/021.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/021.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/021.mp3"
      }
    },
    {
      "nomor": 22,
      "nama": "الحج",
      "namaLatin": "Al-Hajj",
      "jumlahAyat": 78,
      "tempatTurun": "Madinah",
      "arti": "Haji",
      "deskripsi": "Surat Al Hajj, termasuk golongan surat-surat Madaniyyah, terdiri atas 78 ayat, sedang menurut pendapat sebahagian ahli tafsir termasuk golongan surat-surat Makkiyah. Sebab perbedaan ini ialah karena sebahagian ayat-ayat surat ini ada yang diturunkan di Mekah dan sebahagian lagi diturunkan di Madinah. <br>Dinamai surat ini <i>Al Hajj</i>, karena surat ini mengemukakan hal-hal yang berhubungan dengan ibadat haji, seperti ihram, thawaf, sa'i, wuquf di Arafah, mencukur rambut, syi'ar-syi'ar Allah, faedah-faedah dan hikmah-hikmah disyari'atkannya haji. Ditegaskan pula bahwa ibadat haji itu telah disyari'atkan di masa Nabi Ibrahim a.s., dan Ka'bah didirikan oleh Nabi Ibrahim a.s. bersama puteranya Ismail a.s.<br>Menurut Al Ghaznawi, surat Al Hajj termasuk di antara surat- surat yang ajaib, diturunkan di malam dan di siang hari, dalam musafir dan dalam keadaan tidak musafir, ada ayat-ayat yang diturunkan di Mekah dan ada pula yang diturunkan di Madinah, isinya ada yang berhubungan dengan peperangan dan ada pula yang berhubungan dengan perdamaian, ada ayat-ayatnya yang muhkam dan ada pula yang mutasyabihaat.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/022.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/022.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/022.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/022.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/022.mp3"
      }
    },
    {
      "nomor": 23,
      "nama": "المؤمنون",
      "namaLatin": "Al-Mu'minun",
      "jumlahAyat": 118,
      "tempatTurun": "Mekah",
      "arti": "Orang-Orang Mukmin",
      "deskripsi": "Surat Al Mu'minuun terdiri atas 118 ayat, termasuk golongan surat-surat Makkiyyah. Dinamai <i>Al Mu'minuun</i>, karena permulaan ayat ini manerangkan bagaimana seharusnya sifat-sifat orang mukmin yang menyebabkan keberuntungan mereka di akhirat dan ketenteraman jiwa mereka di dunia. Demikian tingginya sifat-sifat itu, hingga ia telah menjadi akhlak bagi Nabi Muhammad s.a.w.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/023.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/023.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/023.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/023.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/023.mp3"
      }
    },
    {
      "nomor": 24,
      "nama": "النّور",
      "namaLatin": "An-Nur",
      "jumlahAyat": 64,
      "tempatTurun": "Madinah",
      "arti": "Cahaya",
      "deskripsi": "Surat An Nuur terdiri atas 64 ayat, dan termasuk golongan surat-surat Madaniyah. Dinamai <i>An Nuur</i> yang berarti <i>Cahaya</i>, diambil dari kata An Nuur yang terdapat pada ayat ke 35. Dalam ayat ini, Allah s.w.t. menjelaskan tentang Nuur Ilahi, yakni Al Quran yang mengandung petunjuk-petunjuk. Petunjuk-petunjuk Allah itu, merupakan cahaya yang terang benderang menerangi alam semesta. Surat ini sebagian besar isinya memuat petunjuk- petunjuk Allah yang berhubungan dengan soal kemasyarakatan dan rumah tangga.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/024.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/024.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/024.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/024.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/024.mp3"
      }
    },
    {
      "nomor": 25,
      "nama": "الفرقان",
      "namaLatin": "Al-Furqan",
      "jumlahAyat": 77,
      "tempatTurun": "Mekah",
      "arti": "Pembeda",
      "deskripsi": "Surat ini terdiri atas 77 ayat, termasuk golongan surat-surat Makkiyah. Dinamai <i>Al Furqaan</i> yang artinya <i>pembeda</i>, diambil dari kata <i>Al Furqaan</i> yang terdapat pada ayat pertama surat ini. Yang dimaksud dengan Al Furqaan dalam ayat ini ialah Al Quran.<br> Al Quran dinamakan Al Furqaan karena dia membedakan antara yang haq dengan yang batil. MAka pada surat ini pun terdapat ayat-ayat yang membedakan antara kebenaran ke-esaan Allah s.w.t. dengan kebatilan kepercayaan syirik.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/025.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/025.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/025.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/025.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/025.mp3"
      }
    },
    {
      "nomor": 26,
      "nama": "الشعراۤء",
      "namaLatin": "Asy-Syu'ara'",
      "jumlahAyat": 227,
      "tempatTurun": "Mekah",
      "arti": "Para Penyair",
      "deskripsi": "Surat ini terdiri dari 227 ayat termasuk golongan surat-surat Makkiyyah. Dinamakan <i>Asy Syu'araa'</i> (kata jamak dari <i>Asy Syaa'ir</i> yang berarti penyair) diambil dari kata <i>Asy Syuaraa'</i> yang terdapat pada ayat 224, yaitu pada bagian terakhir surat ini, di kala Allah s.w.t. secara khusus menyebutkan kedudukan penyair- penyair. Para penyair-penyair itu mempunyai sifat-sifat yang jauh berbeda dengan para rasul-rasul; mereka diikuti oleh orang-orang yang sesat dan mereka suka memutar balikkan lidah dan mereka tidak mempunyai pendirian, perbuatan mereka tidak sesuai dengan tidak mempunyai pendirian, perbuatan mereka tidak sesuai dengan apa yang mereka ucapkan. Sifat-sifat yang demikian tidaklah sekali-kali terdapat pada rasul-rasul. Oleh karena demikian tidak patut bila Nabi Muhammad s.a.w. dituduh sebagai penyair, dan Al Quran dituduh sebagai syair, Al Quran adalah wahyu Allah, bukan buatan manusia.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/026.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/026.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/026.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/026.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/026.mp3"
      }
    },
    {
      "nomor": 27,
      "nama": "النمل",
      "namaLatin": "An-Naml",
      "jumlahAyat": 93,
      "tempatTurun": "Mekah",
      "arti": "Semut-semut",
      "deskripsi": "Surat An Naml terdiri atas 98 ayat, termasuk golongan surat- surat Makkiyyah dan diturunkan sesudah surat Asy Syu'araa'. Dinamai dengan <i>An Naml</i>, karena pada ayat 18 dan 19 terdapat perkataan <i>An Naml</i> (semut), di mana raja semut mengatakan kepada anak buahnya agar masuk sarangnya masing-masing, supaya jangan terpijak oleh Nabi Sulaiman a.s. dan tentaranya yang akan lalu di tempat itu. Mendengar perintah raja semut kepada anak buahnya itu, Nabi Sulaiman tersenyum dan ta'jub atas keteraturan kerajaan semut itu dan beliau mengucapkan syukur kepada Tuhan Yang Maba Kuasa yang telah melimpahkan nikmat kepadanya, berupa kerajaan, kekayaan, memahami ucapan-ucapan binatang, mempunyai tentara yang terdiri atas jin, manusia, burung dan sebagainya. Nabi Sulaiman a.s. yang telah diberi Allah nikmat yang besar itu tidak merasa takabur dan sombong dan sebagai seorang hamba Allah mohon agar Allah memasukkannya ke dalam golongan orang-orang yang saleh. Allah s.w.t. menyebut binatang semut dalam surat ini agar manusia mengambil pelajaran dari kehidupan semut itu. Semut adalah binatang yang hidup berkelompok di dalam tanah, membuat liang dan ruang yang bertingkat-tingkat sebagai rumah dan gudang tempat menyimpan makanan musim dingin. Kerapian dan kedisiplinan yang terdapat dalam kerajaan semut ini, dinyatakan Allah dalam ayat ini dengan bagaimana rakyat semut mencari perlindungan segera agar jangan terpijak oleh Nabi Sulaiman a.s dan tentaranya, setelah menerima peringatan dari rajanya. Secara tidak langsung Allah mengingatkan juga kepada manusia agar dalam berusaha untuk mencukupkan kebutuhan sehari-hari, mementingkan pula kemaslahatan bersama dan sebagainya, rakyat semut mempunyai organisasi dan kerja sama yang baik pula. Dengan mengisahkan kisah Nabi Sulaiman a.s. dalam surat ini Allah mengisyaratkan hari depan dan kebesaran Nabi Muhammad s.a.w. Nabi Sulaiman a.s. sebagai seorang nabi, rasul dan raja yang dianugerahi kekayaan yang melimpah ruah, begitu pula Nabi Muhammad s.a.w. sebagai seorang nabi, rasul dan seoramg kepala negara yang ummi' dan miskin akan berhasil membawa dan memimpin umatnya ke jalan Allah.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/027.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/027.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/027.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/027.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/027.mp3"
      }
    },
    {
      "nomor": 28,
      "nama": "القصص",
      "namaLatin": "Al-Qasas",
      "jumlahAyat": 88,
      "tempatTurun": "Mekah",
      "arti": "Kisah-Kisah",
      "deskripsi": "Surat Al Qashash terdiri atas 88 ayat termasuk golongan surat-surat Makkiyyah. Dinamai dengan <i>Al Qashash</i>, karena pada ayat 25 surat ini terdapat kata <i>Al Qashash</i> yang berarti <i>cerita</i>. Ayat ini menerangkan bahwa setelah Nabi Musa a.s. bertemu dengan Nabi Syua'ib a.s. ia menceritakan cerita yang berhubungan  dengan dirinya sendiri, yakni pengalamannya dengan Fir'aun, sampai waktu ia diburu oleh Fir'aun karena membunuh seseorang dari bangsa Qibthi tanpa disengaja, Syua'ib a.s. menjawab bahwa Musa a.s. telah selamat dari pengejaran  orang-orang zalim. Turunnya ayat 25 surat ini amat besar artinya bagi Nabi Muhammad s.a.w. dan bagi sahabat-sahabat yang melakukan hijrah ke Madinah, yang menambah keyakinan mereka, bahwa akhirnya orang-orang Islamlah yang menang, sebab ayat ini menunjukkan bahwa barangsiapa yang berhijrah dari tempat musuh untuk mempertahankan keimanan, pasti akan berhasil dalam perjuangannya menghadapi musuh-musuh agama. Kepastian kemenangan bagi kaum muslimin itu, ditegaskan pada bagian akhir surat ini yang mengandung bahwa setelah hijrah ke Madinah kaum muslimin akan kembali ke Mekah sebagai pemenang dan penegak agama Allah. Surat Al Qashash ini adalah surat yang paling lengkap memuat cerita Nabi Musa a.s. sehingga menurut suatu riwayat, surat ini dinamai juga dengan surat Musa.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/028.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/028.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/028.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/028.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/028.mp3"
      }
    },
    {
      "nomor": 29,
      "nama": "العنكبوت",
      "namaLatin": "Al-'Ankabut",
      "jumlahAyat": 69,
      "tempatTurun": "Mekah",
      "arti": "Laba-Laba",
      "deskripsi": "Surat Al 'Ankabuut terdiri atas 69 ayat, termasuk golongan surat-surrat Makkiyah. Dinamai <i>Al 'Ankabuut</i> berhubung terdapatnya perkataan <i>Al 'Ankabuut</i> yang berarti <i>laba-laba</i> pada ayat 41 surat ini, dimana Allah mengumpamakan penyembah-penyembah berhala-berhala itu, dengan laba-laba yang percaya kepada kekuatan rumahnya sebagai tempat ia berlindung dan tempat ia menjerat mangsanya, padahal kalau dihembus angin atau ditimpa oleh suatu barang yang kecil saja, rumah itu akan hancur. Begitu pula halnya dengan kaum musyrikin yang percaya kepada kekuatan sembahan-sembahan mereka sebagai tempat berlindung dan tempat meminta sesuatu yang mereka ingini, padahal sembahan-sembahan mereka itu tidak mampu sedikit juga menolong mereka dari azab Allah waktu di dunia, seperti yang terjadi pada kaum Nuh, kaum Ibrahim, kaum Luth, kaum Syu'aib, kaum Saleh, dan lain-lain. Apalagi menghadapi azab Allah di akhirat nanti, sembahan-sembahan mereka itu lebih tidak mampu menghindarkan dan melindungi mereka.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/029.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/029.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/029.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/029.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/029.mp3"
      }
    },
    {
      "nomor": 30,
      "nama": "الرّوم",
      "namaLatin": "Ar-Rum",
      "jumlahAyat": 60,
      "tempatTurun": "Mekah",
      "arti": "Romawi",
      "deskripsi": "Surat Ar Ruum terdiri atas 60 ayat, termasuk golongan surat-surat Makkiyah diturunkan sesudah ayat Al Insyiqaq. Dinamakan <i>Ar Ruum</i> karena pada permulaan surat ini, yaitu ayat 2, 3 dan 4 terdapat pemberitaan bangsa Rumawi yang pada mulanya dikalahkan oleh bangsa Persia, tetapi setelah beberapa tahun kemudian kerajaan Ruum dapat menuntut balas dan mengalahkan kerajaan Persia kembali. Ini adalah suatu mukjizat Al Quran, yaitu memberitakan hal-hal yang akan terjadi di masa yang akan datang. Dan juga suatu isyarat bahwa kaum muslimin yang demikian lemahnya di waktu itu akan menang dan dapat menghancurkan kaum musyrikin. Isyarat ini terbukti pertama kali pada perang Badar.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/030.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/030.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/030.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/030.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/030.mp3"
      }
    },
    {
      "nomor": 31,
      "nama": "لقمٰن",
      "namaLatin": "Luqman",
      "jumlahAyat": 34,
      "tempatTurun": "Mekah",
      "arti": "Luqman",
      "deskripsi": "Surat  Luqman  terdiri   dari   34   ayat,   termasuk   golongan   surat-surat Makkiyyah, diturunkan sesudah surat Ash Shaffaat. <br>Dinamai <i>Luqman</i> karena pada  ayat  12   disebutkan   bahwa   <i>Luqman</i>   telah diberi   oleh   Allah   nikmat   dan   ilmu   pengetahuan,  oleh sebab itu dia bersyukur kepadaNya atas nikmat yang  diberikan  itu.   Dan   pada   ayat   13 sampai 19 terdapat nasihat-nasihat Luqman kepada anaknya.<br>Ini adalah sebagai  isyarat   daripada   Allah   supaya   setiap   ibu   bapak melaksanakan  pula terhadap anak-anak mereka sebagai yang telah dilakukan oleh Luqman.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/031.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/031.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/031.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/031.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/031.mp3"
      }
    },
    {
      "nomor": 32,
      "nama": "السّجدة",
      "namaLatin": "As-Sajdah",
      "jumlahAyat": 30,
      "tempatTurun": "Mekah",
      "arti": "Sajdah",
      "deskripsi": "Surat As Sajdah terdiri atas 30 ayat termasuk golongan surat Makkiyah diturunkan sesudah surat Al Mu'minuun. Dinamakan <i>As Sajdah</i> berhubung pada surat ini terdapat ayat sajdah, yaitu ayat yang kelima belas.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/032.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/032.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/032.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/032.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/032.mp3"
      }
    },
    {
      "nomor": 33,
      "nama": "الاحزاب",
      "namaLatin": "Al-Ahzab",
      "jumlahAyat": 73,
      "tempatTurun": "Madinah",
      "arti": "Golongan Yang Bersekutu",
      "deskripsi": "Surat Al Ahzab terdiri atas 73 ayat, termasuk golongan surat-surat Madaniyah, diturunkan sesudah surat Ali'Imran. Dinamai <i>Al Ahzab</i> yang berarti <i>golongan-golongan yang bersekutu</i> karena dalam surat ini terdapat beberapa ayat, yaitu ayat 9 sampai dengan ayat 27 yang berhubungan dengan peperangan Al Ahzab, yaitu peperangan yang dilancarkan oleh orang-orang Yahudi, kaum munafik dan orang-orang musyrik terhadap orang-orang mukmin di Medinah. Mereka telah mengepung rapat orang- orang mukmin sehingga sebahagian dari mereka telah berputus asa dan menyangka bahwa mereka akan dihancurkan oleh musuh-musuh mereka itu. Ini adalah suatu ujian yang berat dari Allah untuk menguji sampai dimana teguhnya keimanan mereka. Akhirnya Allah mengirimkan bantuan berupa tentara yang tidak kelihatan dan angin topan, sehingga musuh-musuh itu menjadi kacau balau dan melarikan diri.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/033.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/033.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/033.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/033.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/033.mp3"
      }
    },
    {
      "nomor": 34,
      "nama": "سبأ",
      "namaLatin": "Saba'",
      "jumlahAyat": 54,
      "tempatTurun": "Mekah",
      "arti": "Saba'",
      "deskripsi": "Surat Saba' terdiri atas 54 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Luqman. Dinamakan <i>Saba'</i> karena didalamnya terdapat kisah kaum Saba'. Saba' adalah nama suatu kabilah dari kabilah-kabilah Arab yang tinggal di daerah Yaman sekarang ini. Mereka mendirikan kerajaan yang terkenal dengan nama kerajaan Sabaiyyah, ibukotanya Ma'rib; telah dapat membangun suatu bendungan raksasa, yang bernama <i>Bendungan Ma'rib</i>, sehingga negeri meka subur dan makmur. Kemewahan dan kemakmuran ini menyebabkan kaum Saba' lupa dan ingkar kepada Allah yang telah melimpahkan nikmatnya kepada mereka, serta mereka mengingkari pula seruan para rasul. Karena keingkaran mereka ini, Allah menimpahkan kepada mereka azab berupa <i>sailul 'arim</i> (banjir yang besar) yang ditimbulkan oleh bobolnya bendungan Ma'rib. Setelah bendungan ma'rib bobol negeri Saba' menjadi kering dan kerajaan mereka hancur.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/034.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/034.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/034.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/034.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/034.mp3"
      }
    },
    {
      "nomor": 35,
      "nama": "فاطر",
      "namaLatin": "Fatir",
      "jumlahAyat": 45,
      "tempatTurun": "Mekah",
      "arti": "Maha Pencipta",
      "deskripsi": "Surat Faathir terdiri atas 45 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Furqaan dan merupakan surat akhir dari urutan surat-surat dalam Al Quran yang dimulai dengan <i>Alhamdulillah</i>. Dinamakan <i>Faathir</i> (pencipta) ada hubungannya dengan perkataan <i>Faathir</i> yang terdapat pada ayat pertama pada surat ini. Pada ayat tersebut diterangkan bahwa Allah adalah Pencipta langit dan bumi, Pencipta malaikat-malaikat, Pencipta semesta alam yang semuanya itu adalah sebagai bukti atas kekuasaan dan kebesaran-Nya. Surat ini dinamai juga dengan <i>surat Malaikat</i> karena pada ayat pertama disebutkan bahwa Allah telah menjadikan malaikat-malaikat sebagai utusan-Nya  yang mempunyai beberapa sayap.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/035.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/035.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/035.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/035.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/035.mp3"
      }
    },
    {
      "nomor": 36,
      "nama": "يٰسۤ",
      "namaLatin": "Yasin",
      "jumlahAyat": 83,
      "tempatTurun": "Mekah",
      "arti": "Yasin",
      "deskripsi": "Surat <i>Yaasiin</i> terdiri atas 83 ayat, termasuk golongan surat-surat Makkiyyah,  diturunkan sesudah surat Jin. Dinamai <i>Yaasiin</i> karena dimulai dengan huruf <i>Yaasiin</i>. Sebagaimana halnya arti huruf-huruf abjad yang terletak pada permulaan beberapa surat Al Quran, maka demikian pula arti <i>Yaasiin</i> yang terdapat pada ayat permulaan surat ini, yaitu Allah mengisyaratkan bahwa sesudah huruf tersebut akan dikemukakan hal-hal yang penting antara lain: Allah bersumpah dengan Al Quran bahwa Muhammad s.a.w. benar-benar seorang rasul yang diutus-Nya kepada kaum yang belum pernah diutus kepada mereka rasul-rasul.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/036.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/036.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/036.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/036.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/036.mp3"
      }
    },
    {
      "nomor": 37,
      "nama": "الصّٰۤفّٰت",
      "namaLatin": "As-Saffat",
      "jumlahAyat": 182,
      "tempatTurun": "Mekah",
      "arti": "Barisan-Barisan",
      "deskripsi": "Surat Ash Shaaffaat terdiri atas 182 ayat termasuk golongan surat Makkiyyah diturunkan sesudah surat Al An'aam. Dinamai dengan <i>Ash Shaaffaat</i> (yang bershaf-shaf) ada hubungannya dengan perkataan <i>Ash Shaaffaat</i> yang terletak pada ayat permulaan surat ini yang mengemukakan bagaimana para malaikat yang berbaris di hadapan Tuhannya yang bersih jiwanya, tidak dapat digoda oleh syaitan. Hal ini hendaklah menjadi i'tibar bagi manusia dalam menghambakan dirinya kepada Allah.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/037.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/037.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/037.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/037.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/037.mp3"
      }
    },
    {
      "nomor": 38,
      "nama": "ص",
      "namaLatin": "Sad",
      "jumlahAyat": 88,
      "tempatTurun": "Mekah",
      "arti": "Sad",
      "deskripsi": "Surat Shaad  terdiri atas  88 ayat  termasuk golongan  surat Makkiyyah, diturunkan sesudah surat Al Qamar. Dinamai  dengan  <i>Shaad</i>  karena surat  ini  dimulai  dengan <i>Shaad</i> (selanjutnya lihat no. <a href=\"s002a001.htm\">[10)</a>). Dalam surat  ini Allah  bersumpah dengan  Al Quran,   untuk menunjukkan bahwa Al Quran itu suatu  kitab yang  agung dan bahwa siapa saja yang  mengikutinya  akan mendapat  kebahagiaan  dunia  dan akhirat dan untuk menunjukkan bahwa Al Quran ini adalah mukjizat Nabi Muhammad s.a.w. yang  menyatakan kebenarannya dan ketinggian akhlaknya.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/038.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/038.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/038.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/038.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/038.mp3"
      }
    },
    {
      "nomor": 39,
      "nama": "الزمر",
      "namaLatin": "Az-Zumar",
      "jumlahAyat": 75,
      "tempatTurun": "Mekah",
      "arti": "Rombongan",
      "deskripsi": "Surat Az Zumar terdiri ataz 75 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Saba'. Dinamakan <i>Az Zumar</i> (Rombongan-rombongan) karena perkataan <i>Az Zumar</i> yang terdapat pada ayat 71 dan 73 ini. Dalam ayat-ayat tersebut diterangkan keadaan manusia di hari kiamat setelah mereka dihisab, di waktu itu mereka terbagi atas dua rombongan; satu rombongan dibawa ke neraka dan satu rombongan lagi dibawa ke syurga. Masing- masing rombongan memperoleh balasan dari apa yang mereka kerjakan di dunia dahulu. Surat ini dinamakan juga <i>Al Ghuraf</i> (kamar-kamar) berhubung perkataan <i>ghuraf</i> yang terdapat pada ayat 20, dimana diterangkan keadaan kamar-kamar dalam syurga yang diperoleh orang-orang yang bertakwa.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/039.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/039.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/039.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/039.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/039.mp3"
      }
    },
    {
      "nomor": 40,
      "nama": "غافر",
      "namaLatin": "Gafir",
      "jumlahAyat": 85,
      "tempatTurun": "Mekah",
      "arti": "Maha Pengampun",
      "deskripsi": "Surat Al Mu'min terdiri atas 85 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Az Zumar. Dinamai <i>Al Mu'min</i> (Orang yang beriman), berhubung dengan perkataan <i>mukmin</i> yang terdapat pada ayat 28 surat ini. Pada ayat 28 diterangkan bahwa salah seorang dari kaum Fir'aun telah beriman kepada Nabi Musa a.s. dengan menyembunyikan imannya kepada kaumnya, setelah mendengar keterangan dan melihat mukjizat yang dikemukakan oleh Nabi Musa a.s. Hati kecil orang ini mencela Fir'aun dan kaumnya yang tidak mau beriman kepada Nabi Musa a.s., sekalipun telah dikemukakan keterangan dan mukjizat yang diminta mereka.<br>Dinamakan pula <i>Ghafir</i> (yang mengampuni), karena ada hubungannya dengan kalimat <i>Ghafir</i> yang terdapat pada ayat 3 surat ini. Ayat ini mengingatkan bahwa <i>Maha Pengampun</i> dan <i>Maha Penerima Taubat</i> adalah sebagian dari sifat-sifat Allah, karena itu hamba-hamba Allah tidak usah khawatir terhadap  perbuatan-perbuatan dosa yang telah terlanjur mereka lakukan, semuanya itu akan diampuni Allah asal benar-benar memohon ampun dan bertaubat kepada-Nya dan berjanji tidak akan mengerjakan  perbuatan-perbuatan dosa itu lagi. Dan surat ini dinamai <i>Dzit Thaul</i> (Yang Mempunyai Kurnia) karena perkataan tersebut terdapat pada ayat 3.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/040.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/040.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/040.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/040.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/040.mp3"
      }
    },
    {
      "nomor": 41,
      "nama": "فصّلت",
      "namaLatin": "Fussilat",
      "jumlahAyat": 54,
      "tempatTurun": "Mekah",
      "arti": "Yang Dijelaskan",
      "deskripsi": "Surat Fushshilat terdiri atas 54 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Mu'min. Dinamai <i>Fushshilat</i> (yang dijelaskan) karena ada hubungannya dengan perkataan <i>Fushshilat</i> yang terdapat pada permulaan surat ini yang berarti <i>yang dijelaskan</i>. Maksudnya ayat-ayatnya diperinci dengan jelas tentang hukum-hukum, keimanan, janji dan ancaman, budi pekerti, kisah, dan sebagainya. Dinamai juga dengan <i>Haa Miim dan As Sajdah</i> karena surat ini dimulai dengan <i>Haa Miim</i> dan dalam surat ini terdapat ayat Sajdah.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/041.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/041.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/041.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/041.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/041.mp3"
      }
    },
    {
      "nomor": 42,
      "nama": "الشورى",
      "namaLatin": "Asy-Syura",
      "jumlahAyat": 53,
      "tempatTurun": "Mekah",
      "arti": "Musyawarah",
      "deskripsi": "Surat Asy Syuura terdiri atas 53 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Fushshilat. Dinamai dengan <i>Asy Syuura</i> (musyawarat) diambil dari perkataan <i>Syuura</i> yang terdapat pada ayat 38 surat ini. Dalam ayat tersebut diletakkan salah satu dari dasar-dasar pemerintahan Islam ialah musyawarat. Dinamai juga <i>Haa Miim 'Ain Siin Qaaf</i> karena surat ini dimulai dengan huruf-huruf hijaiyah itu.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/042.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/042.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/042.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/042.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/042.mp3"
      }
    },
    {
      "nomor": 43,
      "nama": "الزخرف",
      "namaLatin": "Az-Zukhruf",
      "jumlahAyat": 89,
      "tempatTurun": "Mekah",
      "arti": "Perhiasan",
      "deskripsi": "Surat Az Zukhruf terdiri atas 89 ayat, termasuk golongan  surat-surat Makkiyyah, diturunkan sesudah surat Asy Syuura. <br>Dinamai <i>Az Zukhruf</i> (Perhiasan) diambil dari perkataan <i>Az Zukhruf</i> yang terdapat pada ayat 35 surat ini.  Orang-orang musyrik mengukur tinggi rendahnya derajat seseorang tergantung kepada perhiasan dan harta benda yang ia punyai, karena Muhammad s.a.w. adalah seorang anak yatim lagi miskin, ia tidak pantas diangkat Allah sebagai seorang rasul dan nabi.  Pangkat rasul dan nabi harus diberikan kepada orang yang kaya.  Ayat ini menegaskan bahwa harta tidak dapat dijadikan dasar untuk mengukur tinggi rendahnya derajat seseorang, karena harta itu merupakan hiasan kehidupan duniawi, bukan berarti kesenangan akhirat.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/043.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/043.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/043.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/043.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/043.mp3"
      }
    },
    {
      "nomor": 44,
      "nama": "الدخان",
      "namaLatin": "Ad-Dukhan",
      "jumlahAyat": 59,
      "tempatTurun": "Mekah",
      "arti": "Kabut",
      "deskripsi": "Surat Ad Dukhaan terdiri atas 59 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah Az Zukhruf. <br>Dinamai <i>Ad Dukhaan</i> (kabut), diambil dari perkataan <i>Dukhaan</i> yang terdapat pada ayat 10 surat ini.<br>Menurut riwayat Bukhari secara ringkas dapat diterangkan sebagai berikut: Orang-orang kafir Mekah dalam menghalang-halangi agama Islam dan menyakiti serta mendurhakai Nabi Muhammad s.a.w. sudah melewati batas, karena itu Nabi mendoa kepada Allah agar diturunkan azab sebagaimana yang telah diturunkan kepada orang-orang yang durhaka kepada Nabi Yusuf yaitu musim kemarau yang panjang.  Do'a Nabi itu dikabulkan Allah sampai orang-orang kafir memakan tulang dan bangkai, karena kelaparan.  Mereka selalu menengadah ke langit mengharap pertolongan Allah.  Tetapi tidak satupun yang mereka lihat kecuali kabut yang menutupi pandangan mereka.<br>Akhirnya mereka datang kepada Nabi agar Nabi memohon kepada Allah supaya hujan diturunkan.  Setelah Allah mengabulkan doa Nabi, dan hujan di turunkan, mereka kembali kafir seperti semula; karena itu Allah menyatakan bahwa nanti mereka akan diazab dengan azab yang pedih.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/044.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/044.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/044.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/044.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/044.mp3"
      }
    },
    {
      "nomor": 45,
      "nama": "الجاثية",
      "namaLatin": "Al-Jasiyah",
      "jumlahAyat": 37,
      "tempatTurun": "Mekah",
      "arti": "Berlutut",
      "deskripsi": "Surat Al Jaatsiyah terdiri atas 37 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Ad Dukhaan. Dinamai dengan <i>Al Jaatsiyah</i> (yang berlutut) diambil dari perkataan <i>Jaatsiyah</i> yang terdapat pada ayat 28 surat ini. Ayat tersebut menerangkan tentang keadaan manusia pada hari kiamat, yaitu semua manusia dikumpulkan ke hadapan mahkamah Allah Yang Maha Tinggi yang memberikan keputusan terhadap perbuatan yang telah mereka lakukan di dunia. Pada hari itu semua manusia berlutut di hadapan Allah. Dinamai juga dengan <i>Asy Syari'ah</i> diambil dari perkataan <i>Syari'ah</i> (Syari'at) yang terdapat pada ayat 18 surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/045.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/045.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/045.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/045.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/045.mp3"
      }
    },
    {
      "nomor": 46,
      "nama": "الاحقاف",
      "namaLatin": "Al-Ahqaf",
      "jumlahAyat": 35,
      "tempatTurun": "Mekah",
      "arti": "Bukit Pasir",
      "deskripsi": "Surat Al Ahqaaf terdiri dari 35 ayat termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Jaatsiyah. Dinamai <i>Al Ahqaaf</i>  (bukit-bukit pasir) dari perkataan <i>Al Ahqaaf</i> yang terdapat pada ayat 21 surat ini.<br>Dalam ayat tersebut dan ayat-ayat sesudahnya diterangkan bahwa Nabi Hud a.s. telah menyampaikan risalahnya kepada kaumnya di <i>Al Ahqaaf</i> yang sekarang dikenal dengan Ar Rab'ul Khaali, tetapi kaumnya tetap ingkar sekalipun mereka telah diberi peringatan pula oleh rasul-rasul yang sebelumnya.  Akhirnya Allah menghancurkan mereka dengan tiupan angin kencang.  Hal ini adalah sebagai isyarat dari Allah kepada kaum musyrikin Quraisy bahwa mereka akan dihancurkan bila mereka tidak mengindahkan seruan Rasul.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/046.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/046.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/046.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/046.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/046.mp3"
      }
    },
    {
      "nomor": 47,
      "nama": "محمّد",
      "namaLatin": "Muhammad",
      "jumlahAyat": 38,
      "tempatTurun": "Madinah",
      "arti": "Muhammad",
      "deskripsi": "Surat Muhammad terdiri atas 38 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Hadiid. Nama <i>Muhammad</i> sebagai nama surat ini diambil dari perkataan Muhammad yang terdapat pada ayat 2 surat ini. Pada ayat 1, 2, dan 3 surat ini, Allah membandingkan antara hasil yang diperoleh oleh orang-orang yang tidak percaya kepada apa yang diturunkan kepada Nabi Muhammad s.a.w dan hasil yang diperoleh oleh orang-orang yang tidak percaya kepadanya. Orang-orang yang percaya kepada apa yang dibawa oleh Muhammad s.a.w merekalah orang-orang yang beriman dan mengikuti yang hak, diterima Allah semua amalnya, diampuni segala kesalahannya. Adapun orang-orang yang tidak percaya kepada Muhammad s.a.w adalah orang-orang yang mengikuti kebatilan, amalnya tidak diterima, dosa mereka tidak diampuni, kepada mereka dijanjikan azab di dunia dan di akhirat.<br>Dinamai juga dengan <i>Al Qital</i> (peperangan), karena sebahagian besar surat ini mengutarakan tentang peperangan dan pokok-pokok hukumnya, serta bagaimana seharusnya sikap orang-orang mukmin terhadap orang-orang kafir.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/047.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/047.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/047.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/047.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/047.mp3"
      }
    },
    {
      "nomor": 48,
      "nama": "الفتح",
      "namaLatin": "Al-Fath",
      "jumlahAyat": 29,
      "tempatTurun": "Madinah",
      "arti": "Kemenangan",
      "deskripsi": "Surat Al Fath terdiri atas 29 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Jum'ah. Dinamakan <i>Al Fath (kemenangan)</i> diambil dari perkataan <i>Fat-han</i> yang terdapat pada ayat pertama surat ini. Sebagian besar dari ayat-ayat surat ini menerangkan hal-hal yang berhubungan dengan kemenangan yang dicapai Nabi Muhammad s.a.w. dalam peperangan-peperangannya. <br>Nabi Muhammad s.a.w. sangat gembira dengan turunnya ayat pertama surat ini. Kegembiraan ini dinyatakan dalam sabda beliau yang diriwayatkan Bukhari; <i>Sesungguhnya telah diturunkan kepadaku satu surat, yang surat itu benar-benar lebih aku cintai dari seluruh apa yang disinari matahari</i>. Kegembiraan Nabi Muhammad s.a.w. itu ialah karena ayat-ayatnya menerangkan tentang kemenangan yang akan diperoleh Muhammad s.a.w. dalam perjuangannya dan tentang kesempurnaan nikmat Allah kepadanya.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/048.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/048.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/048.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/048.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/048.mp3"
      }
    },
    {
      "nomor": 49,
      "nama": "الحجرٰت",
      "namaLatin": "Al-Hujurat",
      "jumlahAyat": 18,
      "tempatTurun": "Madinah",
      "arti": "Kamar-Kamar",
      "deskripsi": "Surat Al Hujuraat terdiri atas 18 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Mujaadalah. Dinamai <i>Al Hujuraat</i> diambil dari perkataan <i>Al Hujuraat</i> yang terdapat pada ayat 4 surat ini. Ayat tersebut mencela para sahabat yang memanggil Nabi Muhammad SAW yang sedang berada di dalam kamar rumahnya bersama isterinya. Memanggil Nabi Muhammad SAW dengan cara dan dalam keadaan yang demikian menunjukkan sifat kurang hormat kepada beliau dan mengganggu ketenteraman beliau.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/049.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/049.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/049.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/049.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/049.mp3"
      }
    },
    {
      "nomor": 50,
      "nama": "ق",
      "namaLatin": "Qaf",
      "jumlahAyat": 45,
      "tempatTurun": "Mekah",
      "arti": "Qaf",
      "deskripsi": "Surat Qaaf terdiri atas 45 ayat, termasuk golongan surat-surat Makkiyah diturunkan sesudah surat Al Murssalaat. Dinamai <i>Qaaf</i> karena surat ini dimulai dengan huruf <i>Qaaf</i>. Menurut hadits yang diriwayatkan Imam Muslim, bahwa Rasulullah SAW senang membaca surat ini pada rakaat pertama sembahyang subuh dan pada shalat hari raya. Sedang menurut riwayat Abu Daud, Al Baihaqy dan Ibnu Majah bahwa Rasulullah SAW membaca surat ini pada tiap-tiap membaca Khutbah pada hari Jum'at. Kedua riwayat ini menunjukkan bahwa surat QAAF sering dibaca Nabi Muhammad SAW di tempat-tempat umum, untuk memperingatkan manusia tentang kejadian mereka dan nikmat-nikmat yang diberikan kepadanya, begitu pula tentang hari berbangkit, hari berhisab, syurga, neraka, pahala, dosa, dsb. Surat ini dinamai juga <i>Al Baasiqaat</i>, diambil dari perkataan <i>Al- Baasiqaat</i> yang terdapat pada ayat 10 surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/050.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/050.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/050.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/050.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/050.mp3"
      }
    },
    {
      "nomor": 51,
      "nama": "الذّٰريٰت",
      "namaLatin": "Az-Zariyat",
      "jumlahAyat": 60,
      "tempatTurun": "Mekah",
      "arti": "Angin yang Menerbangkan",
      "deskripsi": "Surat Adz Dzaariyaat terdiri atas 60 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Ahqaaf. Dinamai <i>Adz Dzaariyaat</i> (angin yang menerbangkan), diambil dari perkataan <i>Adz Dzaariyaat</i> yang terdapat pada ayat pertama surat ini. Allah bersumpah dengan angin, mega, bahtera, dan malaikat yang menjadi sumber kesejahteraan dan pembawa kemakmuran. Hal ini meng- isyaratkan inayat Allah kepada hamba-hamba-Nya.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/051.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/051.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/051.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/051.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/051.mp3"
      }
    },
    {
      "nomor": 52,
      "nama": "الطور",
      "namaLatin": "At-Tur",
      "jumlahAyat": 49,
      "tempatTurun": "Mekah",
      "arti": "Bukit Tursina",
      "deskripsi": "Surat Ath Thuur terdiri atas 49 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat As Sajdah. Dinamai <i>Ath Thuur</i> (Bukit) diambil dari perkataan <i>Ath Thuur</i> yang terdapat pada ayat pertama surat ini. Yang dimaksud dengan <i>bukit</i> di sini ialah bukit Thursina yang terletak di semenanjung Sinai, tempat Nabi Musa menerima wahyu dari Tuhannya.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/052.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/052.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/052.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/052.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/052.mp3"
      }
    },
    {
      "nomor": 53,
      "nama": "النجم",
      "namaLatin": "An-Najm",
      "jumlahAyat": 62,
      "tempatTurun": "Mekah",
      "arti": "Bintang",
      "deskripsi": "Surat An Najm terdiri atas 62 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Ikhlash. Nama <i>An Najm</i> (bintang), diambil dari perkataan  <i>An Najm</i> yang terdapat pada ayat pertama surat ini. Allah bersumpah dengan <i>An Najm</i> (bintang) adalah karena bintang-bintang yang timbul dan tenggelam, amat besar manfaatnya bagi manusia, sebagai pedoman bagi manusia dalam melakukan pelayaran di lautan, dalam perjalanan di padang pasir, untuk menentukan peredaran musim dan sebagainya.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/053.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/053.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/053.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/053.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/053.mp3"
      }
    },
    {
      "nomor": 54,
      "nama": "القمر",
      "namaLatin": "Al-Qamar",
      "jumlahAyat": 55,
      "tempatTurun": "Mekah",
      "arti": "Bulan",
      "deskripsi": "Surat Al Qamar terdiri atas 55 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesedah surat Ath Thaariq. Nama <i>Al Qamar</i> (bulan) diambil dari perkataan <i>Al Qamar</i> yang terdapat pada ayat pertama surat ini. Pada ayat ini diterangkan tentang terbelahnya bulan sebagai mukjizat Nabi Muhammad s.a.w.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/054.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/054.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/054.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/054.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/054.mp3"
      }
    },
    {
      "nomor": 55,
      "nama": "الرحمن",
      "namaLatin": "Ar-Rahman",
      "jumlahAyat": 78,
      "tempatTurun": "Madinah",
      "arti": "Maha Pengasih",
      "deskripsi": "Surat Ar Rahmaan terdiri atas 78 ayat, termasuk golongan surat- surat Makkiyyah, diturunkan sesudah surat Ar Ra'du. Dinamai <i>Ar Rahmaan</i> (Yang Maha Pemurah), diambil dari perkataan <i>Ar Rahmaan</i> yang terdapat pada ayat pertama surat ini. Ar Rahmaan adalah salah satu dari nama-nama Allah. Sebagian besar dari surat ini menerangkan kepemurahan Allah s.w.t. kepada hamba-hamba-Nya, yaitu dengan memberikan nikmat-nikmat yang tidak terhingga baik di dunia maupun di akhirat nanti.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/055.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/055.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/055.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/055.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/055.mp3"
      }
    },
    {
      "nomor": 56,
      "nama": "الواقعة",
      "namaLatin": "Al-Waqi'ah",
      "jumlahAyat": 96,
      "tempatTurun": "Mekah",
      "arti": "Hari Kiamat",
      "deskripsi": "Surat Al Waaqi'ah terdiri atas 96 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Thaa Haa. \tDinamai dengan <i>Al Waaqi'ah</i> (Hari Kiamat), diambil dari perkataan <i>Al Waaqi'ah</i> yang terdapat pada ayat pertama surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/056.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/056.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/056.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/056.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/056.mp3"
      }
    },
    {
      "nomor": 57,
      "nama": "الحديد",
      "namaLatin": "Al-Hadid",
      "jumlahAyat": 29,
      "tempatTurun": "Madinah",
      "arti": "Besi",
      "deskripsi": "Surat Al Hadiid terdiri atas 29 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Az Zalzalah. Dinamai <i>Al Hadiid</i> (Besi), diambil dari perkataan <i>Al Hadiid</i> yang terdapat pada ayat 25 surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/057.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/057.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/057.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/057.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/057.mp3"
      }
    },
    {
      "nomor": 58,
      "nama": "المجادلة",
      "namaLatin": "Al-Mujadalah",
      "jumlahAyat": 22,
      "tempatTurun": "Madinah",
      "arti": "Gugatan",
      "deskripsi": "Surat Al Mujaadilah terdiri atas 22 ayat, termasuk golongan surat Madaniyyah, diturunkan sesudah surat Al Munaafiquun. Surat ini dinamai dengan <i>Al Mujaadilah</i> (wanita yang mengajukan gugatan) karena pada awal surat ini disebutkan bantahan seorang perempuan, menurut riwayat bernama Khaulah binti Tsa'labah terhadap sikap suaminya yang telah menzhiharnya. Hal ini diadukan kepada Rasulullah s.a.w. dan ia menuntut supaya beliau memberikan putusan yang adil dalam persoalan itu. Dinamai juga <i>Al Mujaadalah</i> yang berarti <i>perbantahan</i>.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/058.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/058.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/058.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/058.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/058.mp3"
      }
    },
    {
      "nomor": 59,
      "nama": "الحشر",
      "namaLatin": "Al-Hasyr",
      "jumlahAyat": 24,
      "tempatTurun": "Madinah",
      "arti": "Pengusiran",
      "deskripsi": "Surat Al Hasyr terdiri atas 24 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Bayyinah.<br> \tDinamai surat <i>Al Hasyr</i> (pengusiran) diambil dari perkataan <i>Al-Hasyr</i> yang terdapat pada ayat 2 surat ini. Di dalam surat ini disebutkan  kisah pengusiran suatu suku Yahudi yang bernama Bani Nadhir yang berdiam  di sekitar kota Madinah.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/059.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/059.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/059.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/059.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/059.mp3"
      }
    },
    {
      "nomor": 60,
      "nama": "الممتحنة",
      "namaLatin": "Al-Mumtahanah",
      "jumlahAyat": 13,
      "tempatTurun": "Madinah",
      "arti": "Wanita Yang Diuji",
      "deskripsi": "Surat Al Mumtahanah terdiri atas 13 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Ahzab. Dinamai <i>Al Mumtahanah</i> (wanita yang diuji), diambil dari kata \"Famtahinuuhunna\" yang berarti <i>maka ujilah mereka</i>, yang terdapat pada ayat 10 surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/060.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/060.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/060.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/060.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/060.mp3"
      }
    },
    {
      "nomor": 61,
      "nama": "الصّفّ",
      "namaLatin": "As-Saff",
      "jumlahAyat": 14,
      "tempatTurun": "Madinah",
      "arti": "Barisan",
      "deskripsi": "Surat Ash Shaff terdiri atas 14 ayat termasuk golongan surat-surat Madaniyyah. Dinamai dengan <i>Ash Shaff</i>, karena pada ayat 4 surat ini terdapat kata <i>Shaffan</i> yang berarti <i>satu barisan</i>. Ayat ini menerangkan apa yang diridhai Allah sesudah menerangkan apa yang dimurkai-Nya. Pada ayat 3 diterangkan bahwa Allah murka kepada orang yang hanya pandai berkata saja tetapi tidak melaksanakan apa yang diucapkannya. Dan pada ayat 4 diterangkan bahwa Allah menyukai orang yang mempraktekkan apa yang diucapkannya yaitu orang-orang yang berperang pada jalan Allah dalam satu barisan.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/061.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/061.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/061.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/061.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/061.mp3"
      }
    },
    {
      "nomor": 62,
      "nama": "الجمعة",
      "namaLatin": "Al-Jumu'ah",
      "jumlahAyat": 11,
      "tempatTurun": "Madinah",
      "arti": "Jumat",
      "deskripsi": "Surat Al Jumu'ah ini terdiri atas 11 ayat, termasuk golongan-golongan surat-surat Madaniyyah dan diturunkan sesudah surat Ash Shaf. Nama surat Al Jumu'ah diambil dari kata <i>Al Jumu'ah</i> yang terdapat pada ayat 9 surat ini yang artinya: <i>hari Jum'at</i>.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/062.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/062.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/062.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/062.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/062.mp3"
      }
    },
    {
      "nomor": 63,
      "nama": "المنٰفقون",
      "namaLatin": "Al-Munafiqun",
      "jumlahAyat": 11,
      "tempatTurun": "Madinah",
      "arti": "Orang-Orang Munafik",
      "deskripsi": "Surat ini terdiri atas 11 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Hajj. Surat ini dinamai <i>Al-Munaafiquun</i>  yang artinya orang-orang munafik, karena surat ini mengungkapkan  sifat-sifat orang-orang munafik.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/063.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/063.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/063.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/063.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/063.mp3"
      }
    },
    {
      "nomor": 64,
      "nama": "التغابن",
      "namaLatin": "At-Tagabun",
      "jumlahAyat": 18,
      "tempatTurun": "Madinah",
      "arti": "Pengungkapan Kesalahan",
      "deskripsi": "Surat ini terdiri atas 18 ayat, termasuk golongan surat-surat Madaniyyah dan diturunkan sesudah surat At Tahrim. Nama <i>At Taghaabun</i> diambil dari kata <i>At Taghaabun</i> yang terdapat pada ayat ke 9 yang artinya <i>hari dinampakkan kesalahan-kesalahan</i>.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/064.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/064.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/064.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/064.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/064.mp3"
      }
    },
    {
      "nomor": 65,
      "nama": "الطلاق",
      "namaLatin": "At-Talaq",
      "jumlahAyat": 12,
      "tempatTurun": "Madinah",
      "arti": "Talak",
      "deskripsi": "Surat ini terdiri atas 12 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Insaan. Dinamai surat <i>Ath Thalaaq</i> karena kebanyakan ayat-ayatnya mengenai masalah talak dan yang berhubungan dengan masalah itu.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/065.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/065.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/065.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/065.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/065.mp3"
      }
    },
    {
      "nomor": 66,
      "nama": "التحريم",
      "namaLatin": "At-Tahrim",
      "jumlahAyat": 12,
      "tempatTurun": "Madinah",
      "arti": "Pengharaman",
      "deskripsi": "Surat ini terdiri atas 12 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Hujuraat. Dinamai surat <i>At Tahrim</i> karena pada awal surat ini terdapat kata <i>tuharrim</i> yang kata asalnya adalah Attahrim yang berarti <i>mengharamkan</i>.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/066.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/066.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/066.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/066.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/066.mp3"
      }
    },
    {
      "nomor": 67,
      "nama": "الملك",
      "namaLatin": "Al-Mulk",
      "jumlahAyat": 30,
      "tempatTurun": "Mekah",
      "arti": "Kerajaan",
      "deskripsi": "Surat ini terdiri atas 30 ayat, termasuk golongan surat-surat  Makkiyah, diturunkan sesudah Ath Thuur.<br> Nama <i>Al Mulk</i> diambil dari kata <i>Al Mulk</i> yang terdapat pada ayat pertama surat ini yang artinya kerajaan atau kekuasaan. Dinamai pula surat ini dengan <i>At Tabaarak</i> (Maha Suci).",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/067.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/067.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/067.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/067.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/067.mp3"
      }
    },
    {
      "nomor": 68,
      "nama": "القلم",
      "namaLatin": "Al-Qalam",
      "jumlahAyat": 52,
      "tempatTurun": "Mekah",
      "arti": "Pena",
      "deskripsi": "Surat ini terdiri atas 52 ayat,termasuk golongan surat-surat Makkiyah,diturunkan sesudah surat Al Alaq. <br>Nama <i>Al Qalam</i> diambil dari kata Al Qalam yang terdapat pada ayat pertama surat iniyang artinya <i>pena</i>. Surat ini dinamai pula dengan surat <i>Nun</i> (huruf <i>nun</i>).",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/068.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/068.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/068.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/068.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/068.mp3"
      }
    },
    {
      "nomor": 69,
      "nama": "الحاۤقّة",
      "namaLatin": "Al-Haqqah",
      "jumlahAyat": 52,
      "tempatTurun": "Mekah",
      "arti": "Hari Kiamat",
      "deskripsi": "Surat ini terdiri atas 52 ayat,termasuk golongan surat-surat Makkiyah,diturunkan sesudah surat Al Mulk. <br> Nama <i>Al Haaqqah</i> diambil dari kata <i>Al Haaqqah</i> yang terdapat pada ayat pertama surat ini yang artinya <i>hari kiamat</i>",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/069.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/069.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/069.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/069.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/069.mp3"
      }
    },
    {
      "nomor": 70,
      "nama": "المعارج",
      "namaLatin": "Al-Ma'arij",
      "jumlahAyat": 44,
      "tempatTurun": "Mekah",
      "arti": "Tempat Naik",
      "deskripsi": "Surat ini terdiri atas 44 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Haaqqah.<br>Perkataan <i>Al Ma'arij</i> yang menjadi nama bagi surat ini adalah kata jamak dari <i>Mi'raj</i>, diambil dari perkataan Al Ma'arij yang terdapat pada ayat 3, yang artinya menurut bahasa <i>tempat naik</i>. Sedang para ahli  tafsir memberi arti bermacam-macam, di antaranya <i>langit</i>, nikmat karunia dan derajat atau tingkatan yang diberikan Allah s.w.t kepada ahli surga.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/070.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/070.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/070.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/070.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/070.mp3"
      }
    },
    {
      "nomor": 71,
      "nama": "نوح",
      "namaLatin": "Nuh",
      "jumlahAyat": 28,
      "tempatTurun": "Mekah",
      "arti": "Nuh",
      "deskripsi": "Surat ini terdiri atas 28 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat An Nahl. <br>Dinamakan dengan surat <i>Nuh</i> karena surat ini seluruhnya menjelaskan da'wah dan doa Nabi Nuh a.s.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/071.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/071.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/071.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/071.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/071.mp3"
      }
    },
    {
      "nomor": 72,
      "nama": "الجن",
      "namaLatin": "Al-Jinn",
      "jumlahAyat": 28,
      "tempatTurun": "Mekah",
      "arti": "Jin",
      "deskripsi": "Surat Al Jin terdiri atas 28 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al A'raaf. Dinamai <i>Al Jin</i> diambil dari perkataan <i>Al Jin</i> yang terdapat  pada ayat pertama surat ini. Pada ayat tersebut dan ayat-ayat berikutnya  diterangkan bahwa Jin sebagai makhluk halus telah mendengar pembacaan  Al Quran dan mereka mengikuti ajaran Al Quran tersebut.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/072.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/072.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/072.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/072.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/072.mp3"
      }
    },
    {
      "nomor": 73,
      "nama": "المزّمّل",
      "namaLatin": "Al-Muzzammil",
      "jumlahAyat": 20,
      "tempatTurun": "Mekah",
      "arti": "Orang Yang Berselimut",
      "deskripsi": "Surat Al Muzzammil terdiri atas 20 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Qalam.<br>Dinamai <i>Al Muzzammil</i> (orang yang berselimut) diambil dari perkataan <i>Al Muzzammil</i> yang terdapat pada ayat pertama surat ini. Yang dimaksud dengan <i>orang yang berkemul</i> ialah Nabi Muhammad s.a.w.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/073.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/073.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/073.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/073.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/073.mp3"
      }
    },
    {
      "nomor": 74,
      "nama": "المدّثّر",
      "namaLatin": "Al-Muddassir",
      "jumlahAyat": 56,
      "tempatTurun": "Mekah",
      "arti": "Orang Yang Berkemul",
      "deskripsi": "Surat Al Muddatstsir terdiri atas 56 ayat, termasuk golongan  surat-surat Makkiyah, diturunkan sesudah surat Al Muzzammil. \tDinamai <i>Al Muddatstsir</i> (orang yang berkemul) diambil dari perkataan <i>Al Muddatstsir</i> yang terdapat pada ayat pertama surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/074.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/074.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/074.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/074.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/074.mp3"
      }
    },
    {
      "nomor": 75,
      "nama": "القيٰمة",
      "namaLatin": "Al-Qiyamah",
      "jumlahAyat": 40,
      "tempatTurun": "Mekah",
      "arti": "Hari Kiamat",
      "deskripsi": "Surat Al Qiyaamah terdiri atas 40 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Qaari'ah. Dinamai <i>Al Qiyaamah</i> (hari kiamat) diambil dari perkataan <i>Al Qiyaamah</i> yang terdapat pada ayat pertama surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/075.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/075.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/075.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/075.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/075.mp3"
      }
    },
    {
      "nomor": 76,
      "nama": "الانسان",
      "namaLatin": "Al-Insan",
      "jumlahAyat": 31,
      "tempatTurun": "Madinah",
      "arti": "Manusia",
      "deskripsi": "Surat Al Insaan terdiri atas 31 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Ar Rahmaan. Dinamai <i>al Insaan</i> (manusia) diambil dari perkataan <i>Al Insaan</i> yang terdapat pada ayat pertama surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/076.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/076.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/076.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/076.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/076.mp3"
      }
    },
    {
      "nomor": 77,
      "nama": "المرسلٰت",
      "namaLatin": "Al-Mursalat",
      "jumlahAyat": 50,
      "tempatTurun": "Mekah",
      "arti": "Malaikat Yang Diutus",
      "deskripsi": "Surat Al Mursalaat terdiri atas 50 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Humazah. Dinamai <i>Al Mursalaat</i> (Malaikat-Malaikat yang diutus), diambil dari perkataan <i>Al Mursalaat</i> yang terdapat pada ayat pertama surat ini. Dinamai juga <i>Amma yatasaa aluun</i> diambil dari perkataan <i>Amma yatasaa aluun</i> yang terdapat pada ayat 1 surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/077.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/077.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/077.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/077.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/077.mp3"
      }
    },
    {
      "nomor": 78,
      "nama": "النبأ",
      "namaLatin": "An-Naba'",
      "jumlahAyat": 40,
      "tempatTurun": "Mekah",
      "arti": "Berita Besar",
      "deskripsi": "Surat An NabaÂ´ terdiri atas 40 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al MaÂ´aarij. <br>Dinamai <i>An NabaÂ´</i> (berita besar) diambil dari perkataan <i>An NabaÂ´</i> yang terdapat pada ayat 2 surat ini. Dinamai juga <i>Amma yatasaa aluun</i> diambil dari perkataan <i>Amma yatasaa aluun</i> yang terdapat pada ayat 1 surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/078.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/078.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/078.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/078.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/078.mp3"
      }
    },
    {
      "nomor": 79,
      "nama": "النّٰزعٰت",
      "namaLatin": "An-Nazi'at",
      "jumlahAyat": 46,
      "tempatTurun": "Mekah",
      "arti": "Malaikat Yang Mencabut",
      "deskripsi": "Surat An NaaziÂ´aat terdiri atas 46 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat An NabaÂ´. Dinamai <i>An NaaziÂ´aat</i> diambil dari perkataan <i>An NaaziÂ´aat</i> yang terdapat pada ayat pertama surat ini. Dinamai pula <i>as Saahirah</i> yang diambil dari ayat 14, dinamai juga <i>Ath Thaammah</i> diambil dari ayat 34.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/079.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/079.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/079.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/079.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/079.mp3"
      }
    },
    {
      "nomor": 80,
      "nama": "عبس",
      "namaLatin": "'Abasa",
      "jumlahAyat": 42,
      "tempatTurun": "Mekah",
      "arti": "Bermuka Masam",
      "deskripsi": "Surat 'Abasa terdiri atas 42 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat An Najm. Dinamai <i>'Abasa</i>  diambil dari perkataan <i>'Abasa</i> yang terdapat pada ayat pertama surat ini.<br> Menurut riwayat, pada suatu ketika Rasulullah s.a.w. menerima dan berbicara dengan pemuka-pemuka Quraisy yang beliau harapkan agar mereka masuk Islam. Dalam pada itu datanglah Ibnu Ummi Maktum, seorang sahabat yang buta yang mengharap agar Rasulullah s.a.w. membacakan kepadanya ayat- ayat Al Quran yang telah diturunkan Allah. tetapi Rasulullah s.a.w. bermuka masam dan memalingkan muka dari Ibnu Ummi Maktum yang buta itu, lalu Allah menurunkan surat ini sebagai teguran atas sikap Rasulullah terhadap ibnu Ummi Maktum itu.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/080.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/080.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/080.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/080.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/080.mp3"
      }
    },
    {
      "nomor": 81,
      "nama": "التكوير",
      "namaLatin": "At-Takwir",
      "jumlahAyat": 29,
      "tempatTurun": "Mekah",
      "arti": "Penggulungan",
      "deskripsi": "Surat At Takwir terdiri atas 29 ayat dan termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Masadd. Kata <i>At Takwir</i> (terbelah) yang menjadi nama bagi surat ini adalah dari kata asal (mashdar) dari kata kerja <i>kuwwirat</i> (digulung) yang terdapat pada ayat pertama surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/081.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/081.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/081.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/081.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/081.mp3"
      }
    },
    {
      "nomor": 82,
      "nama": "الانفطار",
      "namaLatin": "Al-Infitar",
      "jumlahAyat": 19,
      "tempatTurun": "Mekah",
      "arti": "Terbelah",
      "deskripsi": "Surat ini terdiri atas 19 ayat, termasuk golongan surat-surat Makkiyah dan diturunkan sesudah surat An Naazi'aat. Al Infithaar yang dijadikan  nama untuk surat ini adalah kata asal dari kata <i>Infatharat</i> (terbelah)  yang terdapat pada ayat pertama.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/082.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/082.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/082.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/082.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/082.mp3"
      }
    },
    {
      "nomor": 83,
      "nama": "المطفّفين",
      "namaLatin": "Al-Mutaffifin",
      "jumlahAyat": 36,
      "tempatTurun": "Mekah",
      "arti": "Orang-Orang Curang",
      "deskripsi": "Surat ini terdiri atas 36 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al 'Ankabuut dan merupakan  surat yang terakhir di Mekkah sebelum hijrah. <i>Al Muthaffifiin</i>  yang dijadikan nama bagi surat ini diambil dari kata  <i>Al Muthaffifiin</i> yang terdapat pada ayat pertama.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/083.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/083.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/083.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/083.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/083.mp3"
      }
    },
    {
      "nomor": 84,
      "nama": "الانشقاق",
      "namaLatin": "Al-Insyiqaq",
      "jumlahAyat": 25,
      "tempatTurun": "Mekah",
      "arti": "Terbelah",
      "deskripsi": "Surat Al Insyiqaaq, terdiri atas 25 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Infithaarr. Dinamai <i>Al Insyiqaaq</i> (terbelah), diambil dari perkataan <i>Insyaqqat</i> yang terdapat pada permulaan surat ini, yang pokok katanya ialah <i>insyiqaaq</i>.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/084.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/084.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/084.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/084.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/084.mp3"
      }
    },
    {
      "nomor": 85,
      "nama": "البروج",
      "namaLatin": "Al-Buruj",
      "jumlahAyat": 22,
      "tempatTurun": "Mekah",
      "arti": "Gugusan Bintang",
      "deskripsi": "Surat Al Buruuj terdiri atas 22 ayat, termasuk golongan surat-surat Makkiyyah diturunkan sesudah surat Asy-Syams.<br>Dinamai <i>Al Buruuj</i> (gugusan bintang) diambil dari perkataan <i>Al Buruuj</i> yang terdapat pada ayat 1 surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/085.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/085.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/085.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/085.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/085.mp3"
      }
    },
    {
      "nomor": 86,
      "nama": "الطارق",
      "namaLatin": "At-Tariq",
      "jumlahAyat": 17,
      "tempatTurun": "Mekah",
      "arti": "Yang Datang Di Malam Hari",
      "deskripsi": "Surat Ath Thaariq terdiri atas 17 ayat, termasuk golongan surat-surat Makkiyah,  diturunkan sesudah surat Al Balad.  Dinamai <i>Ath Thaariq</i> (yang datang di malam hari) diambil dari  perkataan <i>Ath Thaariq</i> yang terdapat pada ayat 1 surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/086.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/086.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/086.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/086.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/086.mp3"
      }
    },
    {
      "nomor": 87,
      "nama": "الاعلى",
      "namaLatin": "Al-A'la",
      "jumlahAyat": 19,
      "tempatTurun": "Mekah",
      "arti": "Maha Tinggi",
      "deskripsi": "Surat ini terdiri atas 19 ayat, termasuk golongan surat-surat Makkiyyah, dan diturunkan sesudah surat At Takwiir. Nama <i>Al AÂ´laa</i> diambil dari kata <i>Al AÂ´laa</i> yang terdapat pada ayat pertama, berarti <i>Yang Paling Tinggi</i>. Muslim meriwayatkan dalam kitab Al Jumu'ah, dan diriwayatkan pula oleh Ashhaabus Sunan, dari Nu'man ibnu Basyir bahwa Rasulullah s.a.w. pada shalat dua hari Raya (Fitri dan Adha) dan shalat Jum'at membaca surat Al AÂ´laa pada rakaat pertama, dan surat Al Ghaasyiyah pada rakaat kedua.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/087.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/087.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/087.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/087.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/087.mp3"
      }
    },
    {
      "nomor": 88,
      "nama": "الغاشية",
      "namaLatin": "Al-Gasyiyah",
      "jumlahAyat": 26,
      "tempatTurun": "Mekah",
      "arti": "Hari Kiamat",
      "deskripsi": "Surat ini terdiri atas 26 ayat, termasuk surat-surat Makkiyah, diturunkan sesudah surat Adz Dzaariat. Nama <i>Ghaasyiyah</i> diambil dari kata <i>Al Ghaasyiyah</i> yang terdapat pada ayat pertama surat ini yang  artinya peristiwa yang dahsyat, tapi yang dimaksud adalah hari kiamat. Surat ini adalah surat yang kerap kali dibaca Nabi pada rakaat kedua  pada shalat hari-hari Raya dan shalat Jum'at",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/088.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/088.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/088.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/088.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/088.mp3"
      }
    },
    {
      "nomor": 89,
      "nama": "الفجر",
      "namaLatin": "Al-Fajr",
      "jumlahAyat": 30,
      "tempatTurun": "Mekah",
      "arti": "Fajar",
      "deskripsi": "Surat ini terdiri atas 30 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Lail. Nama <i>Al Fajr</i> diambil dari kata <i>Al Fajr</i> yang terdapat pada ayat pertama surat ini yang artinya <i>fajar</i>.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/089.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/089.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/089.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/089.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/089.mp3"
      }
    },
    {
      "nomor": 90,
      "nama": "البلد",
      "namaLatin": "Al-Balad",
      "jumlahAyat": 20,
      "tempatTurun": "Mekah",
      "arti": "Negeri",
      "deskripsi": "Surat Al Balad terdiri atas 20 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Qaaf. Dinamai <i>Al Balad</i>, diambil dari perkataan <i>Al Balad</i> yang terdapat  pada ayat pertama surat ini. Yang dimaksud dengan kota di sini ialah kota Mekah.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/090.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/090.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/090.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/090.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/090.mp3"
      }
    },
    {
      "nomor": 91,
      "nama": "الشمس",
      "namaLatin": "Asy-Syams",
      "jumlahAyat": 15,
      "tempatTurun": "Mekah",
      "arti": "Matahari",
      "deskripsi": "Surat Asy Syams terdiri atas 15 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Qadar.  Dinamai <i>Asy Syams</i> (matahari) diambil dari perkataan <i>Asy Syams</i> yang terdapat pada ayat permulaan surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/091.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/091.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/091.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/091.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/091.mp3"
      }
    },
    {
      "nomor": 92,
      "nama": "الّيل",
      "namaLatin": "Al-Lail",
      "jumlahAyat": 21,
      "tempatTurun": "Mekah",
      "arti": "Malam",
      "deskripsi": "Surat ini terdiri atas 21 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al A'laa. Surat ini dinamai <i>Al Lail</i> (malam), diambil dari perkataan <i>Al Lail</i> yang terdapat pada ayat pertama surat ini",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/092.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/092.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/092.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/092.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/092.mp3"
      }
    },
    {
      "nomor": 93,
      "nama": "الضحى",
      "namaLatin": "Ad-Duha",
      "jumlahAyat": 11,
      "tempatTurun": "Mekah",
      "arti": "Duha",
      "deskripsi": "Surat ini terdiri atas 11 ayat, termasuk golongan surat Makiyyah dan diturunkan sesudah surat Al Fajr. Nama <i>Adh Dhuhaa</i> diambil dari kata yang terdapat pada ayat pertama, artinya : waktu matahari sepenggalahan naik.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/093.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/093.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/093.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/093.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/093.mp3"
      }
    },
    {
      "nomor": 94,
      "nama": "الشرح",
      "namaLatin": "Asy-Syarh",
      "jumlahAyat": 8,
      "tempatTurun": "Mekah",
      "arti": "Lapang",
      "deskripsi": "Surat ini terdiri atas 8 ayat, termasuk golongan surat-surat Makkiyah dan diturunkan sesudah surat Adh Dhuhaa. Nama <i>Alam Nasyrah</i> diambil dari kata <i>Alam Nasyrah</i> yang terdapat pada ayat pertama, yang berarti: bukankah Kami telah melapangkan.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/094.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/094.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/094.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/094.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/094.mp3"
      }
    },
    {
      "nomor": 95,
      "nama": "التين",
      "namaLatin": "At-Tin",
      "jumlahAyat": 8,
      "tempatTurun": "Mekah",
      "arti": "Buah Tin",
      "deskripsi": "Surat ini terdiri atas 8 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Buruuj. Nama At Tiin diambil dari kata <i>At Tiin</i> yang terdapat pada ayat pertama surat ini yang artinya buah Tin.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/095.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/095.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/095.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/095.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/095.mp3"
      }
    },
    {
      "nomor": 96,
      "nama": "العلق",
      "namaLatin": "Al-'Alaq",
      "jumlahAyat": 19,
      "tempatTurun": "Mekah",
      "arti": "Segumpal Darah",
      "deskripsi": "Surat Al 'Alaq terdiri atas 19 ayat, termasuk golongan surat-surat Makkiyah. Ayat 1 sampai dengan 5 dari surat ini adalah ayat-ayat Al Quran yang pertama sekali diturunkan, yaitu di waktu Nabi Muhammad s.a.w. berkhalwat di gua Hira'. Surat ini dinamai <i>Al 'Alaq</i> (segumpal darah), diambil dari perkataan <i>Alaq</i> yang terdapat pada ayat 2 surat ini. Surat ini dinamai juga dengan <i>Iqra</i> atau <i>Al Qalam</i>.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/096.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/096.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/096.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/096.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/096.mp3"
      }
    },
    {
      "nomor": 97,
      "nama": "القدر",
      "namaLatin": "Al-Qadr",
      "jumlahAyat": 5,
      "tempatTurun": "Mekah",
      "arti": "Kemuliaan",
      "deskripsi": "Surat Al Qadr terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat 'Abasa. Surat ini dinamai <i>Al Qadr</i> (kemuliaan), diambil dari perkataan <i>Al Qadr</i> yang terdapat pada ayat pertama surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/097.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/097.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/097.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/097.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/097.mp3"
      }
    },
    {
      "nomor": 98,
      "nama": "البيّنة",
      "namaLatin": "Al-Bayyinah",
      "jumlahAyat": 8,
      "tempatTurun": "Madinah",
      "arti": "Bukti Nyata",
      "deskripsi": "Surat Al Bayyinah terdiri atas 8 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Ath Thalaq. Dinamai <i>Al Bayyinah</i> (bukti yang nyata) diambil dari perkataan <i>Al Bayyinah</i> yang terdapat pada ayat pertama surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/098.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/098.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/098.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/098.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/098.mp3"
      }
    },
    {
      "nomor": 99,
      "nama": "الزلزلة",
      "namaLatin": "Az-Zalzalah",
      "jumlahAyat": 8,
      "tempatTurun": "Madinah",
      "arti": "Guncangan",
      "deskripsi": "Surat ini terdiri atas 8 ayat, termasuk golongan surat-surat Madaniyyah diturunkan sesudah surat An Nisaa'. Nama <i>Al Zalzalah</i> diambil dari kata: <i>Zilzaal</i> yang terdapat pada ayat pertama surat ini yang berarti goncangan.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/099.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/099.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/099.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/099.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/099.mp3"
      }
    },
    {
      "nomor": 100,
      "nama": "العٰديٰت",
      "namaLatin": "Al-'Adiyat",
      "jumlahAyat": 11,
      "tempatTurun": "Mekah",
      "arti": "Kuda Yang Berlari Kencang",
      "deskripsi": "Surat ini terdiri atas 11 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al'Ashr. Nama <i>Al 'Aadiyaat</i> diambil dari kata <i>Al 'Aadiyaat</i> yang terdapat pada ayat pertama surat ini, artinya yang berlari kencang.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/100.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/100.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/100.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/100.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/100.mp3"
      }
    },
    {
      "nomor": 101,
      "nama": "القارعة",
      "namaLatin": "Al-Qari'ah",
      "jumlahAyat": 11,
      "tempatTurun": "Mekah",
      "arti": "Hari Kiamat",
      "deskripsi": "Surat ini terdiri atas 11 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Quraisy. Nama <i>Al Qaari'ah</i> diambil dari kata <i>Al Qaari'ah</i> yang terdapat pada ayat pertama, artinya mengetok dengan keras, kemudian kata ini dipakai untuk nama hari kiamat.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/101.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/101.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/101.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/101.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/101.mp3"
      }
    },
    {
      "nomor": 102,
      "nama": "التكاثر",
      "namaLatin": "At-Takasur",
      "jumlahAyat": 8,
      "tempatTurun": "Mekah",
      "arti": "Bermegah-Megahan",
      "deskripsi": "Surat At Takaatsur terdiri atas 8 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Kautsar. Dinamai <i>At Takaatsur</i> (bermegah-megahan) diambil dari perkataan <i>At Takaatsur</i> yang terdapat pada ayat pertama surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/102.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/102.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/102.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/102.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/102.mp3"
      }
    },
    {
      "nomor": 103,
      "nama": "العصر",
      "namaLatin": "Al-'Asr",
      "jumlahAyat": 3,
      "tempatTurun": "Mekah",
      "arti": "Masa",
      "deskripsi": "Surat Al 'Ashr terdiri atas 3 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Alam Nasyrah. Dinamai <i>Al 'Ashr</i> (masa) diambil dari perkataan <i>Al 'Ashr</i> yang terdapat pada ayat pertama surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/103.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/103.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/103.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/103.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/103.mp3"
      }
    },
    {
      "nomor": 104,
      "nama": "الهمزة",
      "namaLatin": "Al-Humazah",
      "jumlahAyat": 9,
      "tempatTurun": "Mekah",
      "arti": "Pengumpat",
      "deskripsi": "Surat Al Humazah terdiri atas 9 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Qiyaamah. Dinamai <i>Al Humazah</i> (pengumpat) diambil dari perkataan <i>Humazah</i> yang terdapat pada ayat pertama surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/104.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/104.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/104.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/104.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/104.mp3"
      }
    },
    {
      "nomor": 105,
      "nama": "الفيل",
      "namaLatin": "Al-Fil",
      "jumlahAyat": 5,
      "tempatTurun": "Mekah",
      "arti": "Gajah",
      "deskripsi": "Surat ini terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Kaafirun. Nama <i>Al Fiil</i> diambil dari kata <i>Al Fiil</i> yang terdapat pada ayat pertama surat ini, artinya <i>gajah</i>. Surat Al Fiil mengemukakan cerita pasukan bergajah dari Yaman yang dipimpin oleh Abrahah yang ingin meruntuhkan Ka'bah di Mekah. Peristiwa ini terjadi pada tahun Nabi Muhammad s.a.w. dilahirkan.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/105.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/105.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/105.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/105.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/105.mp3"
      }
    },
    {
      "nomor": 106,
      "nama": "قريش",
      "namaLatin": "Quraisy",
      "jumlahAyat": 4,
      "tempatTurun": "Mekah",
      "arti": "Quraisy",
      "deskripsi": "Surat ini terdiri atas 4 ayat, termasuk golongan surat-surat Makkiyyah dan diturunkan sesudah surat At Tiin. Nama <i>Quraisy</i> diambil dari kata <i>Quraisy</i> yang terdapat pada ayat pertama, artinya suku Quraisy. Suku Quraisy adalah suku yang mendapat  kehormatan untuk memelihara Ka'bah.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/106.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/106.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/106.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/106.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/106.mp3"
      }
    },
    {
      "nomor": 107,
      "nama": "الماعون",
      "namaLatin": "Al-Ma'un",
      "jumlahAyat": 7,
      "tempatTurun": "Mekah",
      "arti": "Barang Yang Berguna",
      "deskripsi": "Surat ini terdiri atas 7 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat At Taakatsur. Nama <i>Al Maa'uun</i> diambil dari kata <i>Al Maa'uun</i> yang terdapat pada ayat 7, artinya barang-barang yang berguna.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/107.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/107.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/107.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/107.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/107.mp3"
      }
    },
    {
      "nomor": 108,
      "nama": "الكوثر",
      "namaLatin": "Al-Kausar",
      "jumlahAyat": 3,
      "tempatTurun": "Mekah",
      "arti": "Pemberian Yang Banyak",
      "deskripsi": "Surat Al Kautsar terdiri atas 3 ayat, termasuk golongan surat-surat  Makkiyyah diturunkan sesudah surat Al 'Aadiyaat. Dinamai <i>Al Kautsar</i> (nikmat yang banyak) diambil dari perkataan <i>Al Kautsar</i> yang terdapat pada ayat pertama surat ini.<br>Surat ini sebagai penghibur hati Nabi Muhammad s.a.w.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/108.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/108.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/108.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/108.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/108.mp3"
      }
    },
    {
      "nomor": 109,
      "nama": "الكٰفرون",
      "namaLatin": "Al-Kafirun",
      "jumlahAyat": 6,
      "tempatTurun": "Mekah",
      "arti": "Orang-Orang kafir",
      "deskripsi": "Surat Al Kaafiruun terdiri atas 6 ayat, termasuk golongan surat-surat  Makkiyyah, diturunkan sesudah surat Al Maa'uun. Dinamai <i>Al Kaafiruun</i> (orang-orang kafir), diambil dari perkataan  <i>Al Kaafiruun</i> yang terdapat pada ayat pertama surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/109.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/109.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/109.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/109.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/109.mp3"
      }
    },
    {
      "nomor": 110,
      "nama": "النصر",
      "namaLatin": "An-Nasr",
      "jumlahAyat": 3,
      "tempatTurun": "Madinah",
      "arti": "Pertolongan",
      "deskripsi": "Surat An Nashr terdiri atas 3 ayat, termasuk golongan surat-surat  Madaniyyah yang diturunkan di Mekah sesudah surat At Taubah.  Dinamai <i>An Nashr</i> (pertolongan) diambil dari perkataan <i>Nashr</i> yang  terdapat pada ayat pertama surat ini.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/110.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/110.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/110.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/110.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/110.mp3"
      }
    },
    {
      "nomor": 111,
      "nama": "اللهب",
      "namaLatin": "Al-Lahab",
      "jumlahAyat": 5,
      "tempatTurun": "Mekah",
      "arti": "Api Yang Bergejolak",
      "deskripsi": "Surat ini terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyyah,  diturunkan sesudah surat Al Fath. Nama <i>Al Lahab</i> diambil dari kata  <i>Al Lahab</i> yang terdapat pada ayat ketiga surat ini yang artinya gejolak  api. Surat ini juga dinamakan surat <i>Al Masad</i>.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/111.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/111.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/111.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/111.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/111.mp3"
      }
    },
    {
      "nomor": 112,
      "nama": "الاخلاص",
      "namaLatin": "Al-Ikhlas",
      "jumlahAyat": 4,
      "tempatTurun": "Mekah",
      "arti": "Ikhlas",
      "deskripsi": "Surat ini terdiri atas 4 ayat, termasuk golongan surat-surat  Makkiyyah, diturunkan sesudah sesudah surat An Naas. Dinamakan <i>Al Ikhlas</i> karena surat ini sepenuhnya menegaskan kemurnian keesaan Allah s.w.t.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/112.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/112.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/112.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/112.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/112.mp3"
      }
    },
    {
      "nomor": 113,
      "nama": "الفلق",
      "namaLatin": "Al-Falaq",
      "jumlahAyat": 5,
      "tempatTurun": "Madinah",
      "arti": "Subuh",
      "deskripsi": "Surat ini terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Fiil. Nama <i>Al Falaq</i> diambil dari kata <i>Al Falaq</i> yang terdapat pada ayat pertama surat ini yang artinya waktu subuh. Diriwayatkan oleh Abu Daud, At Tirmizi dan An Nasa-i dari 'Uqbah bin 'Aamir bahwa Rasulullah s.a.w. bersembahyang dengan membaca surat Al Falaq  dan surat An Naas dalam perjalanan.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/113.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/113.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/113.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/113.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/113.mp3"
      }
    },
    {
      "nomor": 114,
      "nama": "الناس",
      "namaLatin": "An-Nas",
      "jumlahAyat": 6,
      "tempatTurun": "Madinah",
      "arti": "Manusia",
      "deskripsi": "Surat ini terdiri atas 6 ayat, termasuk golongan surat-surat Makkiyah,  diturunkan sesudah surat Al Falaq. Nama <i>An Naas</i> diambil dari <i>An Naas</i> yang berulang kali disebut dalam surat ini yang artinya manusia.",
      "audioFull": {
        "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/114.mp3",
        "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/114.mp3",
        "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/114.mp3",
        "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/114.mp3",
        "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/114.mp3"
      }
    }
  ]
}



GET
/surat/{id}

https://equran.id/api/v2/surat/1

{
  "code": 200,
  "message": "Data retrieved successfully",
  "data": {
    "nomor": 1,
    "nama": "الفاتحة",
    "namaLatin": "Al-Fatihah",
    "jumlahAyat": 7,
    "tempatTurun": "Mekah",
    "arti": "Pembukaan",
    "deskripsi": "Surat <i>Al Faatihah</i> (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap  diantara surat-surat yang ada dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat ini disebut <i>Al Faatihah</i> (Pembukaan), karena dengan surat inilah dibuka dan dimulainya Al Quran. Dinamakan <i>Ummul Quran</i> (induk Al Quran) atau <i>Ummul Kitaab</i> (induk Al Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang.<br> Dinamakan pula <i>As Sab'ul matsaany</i> (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/001.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/001.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/001.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/001.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/001.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
        "teksLatin": "Bismillāhir-raḥmānir-raḥīm(i). ",
        "teksIndonesia": "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ",
        "teksLatin": "Al-ḥamdu lillāhi rabbil-‘ālamīn(a). ",
        "teksIndonesia": "Segala puji bagi Allah, Tuhan semesta alam",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "الرَّحْمٰنِ الرَّحِيْمِۙ",
        "teksLatin": "Ar-raḥmānir-raḥīm(i). ",
        "teksIndonesia": "Yang Maha Pengasih lagi Maha Penyayang,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "مٰلِكِ يَوْمِ الدِّيْنِۗ",
        "teksLatin": "Māliki yaumid-dīn(i). ",
        "teksIndonesia": "Pemilik hari Pembalasan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ",
        "teksLatin": "Iyyāka na‘budu wa iyyāka nasta‘īn(u), ",
        "teksIndonesia": "Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَۙ",
        "teksLatin": "Ihdinaṣ-ṣirāṭal-mustaqīm(a). ",
        "teksIndonesia": "Bimbinglah kami ke jalan yang lurus,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ ࣖ",
        "teksLatin": "Ṣirāṭal-lażīna an‘amta ‘alaihim, gairil-magḍūbi ‘alaihim wa laḍ-ḍāllīn(a). ",
        "teksIndonesia": "(yaitu) jalan orang-orang yang telah Engkau beri nikmat, bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) orang-orang yang sesat.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001007.mp3"
        }
      }
    ],
    "suratSelanjutnya": {
      "nomor": 2,
      "nama": "البقرة",
      "namaLatin": "Al-Baqarah",
      "jumlahAyat": 286
    },
    "suratSebelumnya": false
  }
}


GET
/tafsir/{id}

https://equran.id/api/v2/tafsir/{id}

{
  "code": 200,
  "message": "Data retrieved successfully",
  "data": {
    "nomor": 1,
    "nama": "الفاتحة",
    "namaLatin": "Al-Fatihah",
    "jumlahAyat": 7,
    "tempatTurun": "Mekah",
    "arti": "Pembukaan",
    "deskripsi": "Surat <i>Al Faatihah</i> (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap  diantara surat-surat yang ada dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat ini disebut <i>Al Faatihah</i> (Pembukaan), karena dengan surat inilah dibuka dan dimulainya Al Quran. Dinamakan <i>Ummul Quran</i> (induk Al Quran) atau <i>Ummul Kitaab</i> (induk Al Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang.<br> Dinamakan pula <i>As Sab'ul matsaany</i> (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/001.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/001.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/001.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/001.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/001.mp3"
    },
    "tafsir": [
      {
        "ayat": 1,
        "teks": "Surah al-Fatihah dimulai dengan Basmalah\n\nAda beberapa pendapat ulama berkenaan dengan Basmalah yang terdapat pada permulaan surah Al-Fatihah. Di antara pendapat-pendapat itu, yang termasyhur ialah:\n\n1.Basmalah adalah ayat tersendiri, diturunkan Allah untuk jadi kepala masing-masing surah, dan pembatas antara satu surah dengan surah yang lain. Jadi dia bukanlah satu ayat dari al-Fatihah atau dari surah yang lain, yang dimulai dengan Basmalah itu. Ini pendapat Imam Malik beserta ahli qiraah dan fuqaha (ahli fikih) Medinah, Basrah dan Syam, dan juga pendapat Imam Abu Hanifah dan pengikut-pengikutnya. Sebab itu menurut Imam Abu Hanifah, Basmalah itu tidak dikeraskan membacanya dalam salat, bahkan Imam Malik tidak membaca Basmalah sama sekali.\n\nHadis Nabi saw:\n\nDari Anas bin Malik, dia berkata, \"Saya salat di belakang Nabi saw, Abu Bakar, Umar dan Usman. Mereka memulai dengan al-hamdulillahi rabbil 'alamin, tidak menyebut Bismillahirrahmanirrahim di awal bacaan, dan tidak pula di akhirnya.\"(Riwayat al-Bukhari dan Muslim).\n\n2.Basmalah adalah salah satu ayat dari al-Fatihah, dan pada surah an-Naml/27:30, /27:30) yang dimulai dengan Basmalah. Ini adalah pendapat Imam Syafi'i beserta ahli qiraah Mekah dan Kufah. Sebab itu menurut mereka Basmalah itu dibaca dengan suara keras dalam salat (jahar). Dalil-dalil yang menunjukkan hal itu antara lain Hadis Nabi saw: \n\nDari Ibnu 'Abbas, ia berkata, Rasulullah saw mengeraskan bacaan Bismillahirrahmanirrahim. (Riwayat al-hakim dalam al-Mustadrak dan menurutnya, hadis ini sahih)\n\nDari Ummu Salamah, katanya, Rasulullah saw berhenti berkali-kali dalam bacaanya Bismillahirrahmanirrahim, al-hamdulillahi Rabbil- 'alamin, ar-Rahmanir-rahim, Maliki Yaumid-din. (Riwayat Ahmad, Abu Daud, Ibnu Khuzaimah dan al-hakim. Menurut ad-Daruqutni, sanad hadis ini sahih).\n\nAbu Hurairah juga salat dan mengeraskan bacaan basmalah. Setelah selesai salat, dia berkata, \"Saya ini adalah orang yang salatnya paling mirip dengan Rasulullah.\" Muawiyah juga pernah salat di Medinah tanpa mengeraskan suara basmalah. Ia diprotes oleh para sahabat lain yang hadir disitu. Akhirnya pada salat berikutnya Muawiyah mengeraskan bacaan basmalah. \n\nKalau kita perhatikan bahwa sahabat-sahabat Rasulullah saw telah sependapat menuliskan Basmalah pada permulaan surah dari surah Al-Qur'an, kecuali surah at-Taubah (karena memang dari semula turunnya tidak dimulai dengan Basmalah) dan bahwa Rasulullah saw melarang menuliskan sesuatu yang bukan Al-Qur'an agar tidak bercampur aduk dengan Al-Qur'an, sehingga mereka tidak menuliskan 'amin pada akhir surah al-Fatihah, maka Basmalah itu adalah salah satu ayat dari Al-Qur'an. Dengan kata lain, bahwa \"basmalah-basmalah\" yang terdapat di dalam Al-Qur'an adalah ayat-ayat Al-Qur'an, lepas dari pendapat apakah satu ayat dari al-Fatihah atau dari surah lain, yang dimulai dengan Basmalah atau tidak.\n\nSebagaimana disebutkan di atas bahwa surah al-Fatihah itu terdiri dari tujuh ayat. Mereka yang berpendapat bahwa Basmalah itu tidak termasuk satu ayat dari al-Fatihah, memandang:\n\nadalah salah satu ayat, dengan demikian ayat-ayat al-Fatihah itu tetap tujuh.\n\n\"Dengan nama Allah\" maksudnya \"Dengan nama Allah saya baca atau saya mulai\". Seakan-akan Nabi berkata, \"Saya baca surah ini dengan menyebut nama Allah, bukan dengan menyebut nama saya sendiri, sebab ia wahyu dari Tuhan, bukan dari saya sendiri.\" Maka Basmalah di sini mengandung arti bahwa Al-Qur'an itu wahyu dari Allah, bukan karangan Muhammad saw dan Muhammad itu hanyalah seorang Pesuruh Allah yang dapat perintah menyampaikan Al-Qur'an kepada manusia.\n\nMakna kata Allah \n\nAllah adalah nama bagi Zat yang ada dengan sendirinya (wajibul-wujud). Kata \"Allah\" hanya dipakai oleh bangsa Arab kepada Tuhan yang sebenarnya, yang berhak disembah, yang mempunyai sifat-sifat kesempurnaan. Mereka tidak memakai kata itu untuk tuhan-tuhan atau dewa-dewa mereka yang lain. \n\nHikmah Membaca Basmalah\n\nSeorang yang selalu membaca Basmalah sebelum melakukan pekerjaan yang penting, berarti ia selalu mengingat Allah pada setiap pekerjaannya. Dengan demikian ia akan melakukan pekerjaan tersebut dengan selalu memperhatikan norma-norma Allah dan tidak merugikan orang lain. Dampaknya, pekerjaan yang dilakukannya akan berbuah sebagai amalan ukhrawi. \n\nSeorang Muslim diperintahkan membaca Basmalah pada waktu mengerjakan sesuatu yang baik. Yang demikian itu untuk mengingatkan bahwa sesuatu yang dikerjakan adalah karena perintah Allah, atau karena telah diizinkan-Nya. Maka karena Allah dia mengerjakan pekerjaan itu dan kepada-Nya dia meminta pertolongan agar pekerjaan terlaksana dengan baik dan berhasil.\n\nNabi saw bersabda:\n\n\"Setiap pekerjaan penting yang tidak dimulai dengan menyebut Basmalah adalah buntung (kurang berkahnya).\" (Riwayat Abdul-Qadir ar-Rahawi).\n\nOrang Arab sebelum datang Islam mengerjakan sesuatu dengan menyebut al-Lata dan al-'Uzza, nama-nama berhala mereka. Sebab itu, Allah mengajarkan kepada penganut-penganut agama Islam yang telah mengesakan-Nya, agar mereka mengerjakan sesuatu dengan menyebut nama Allah."
      },
      {
        "ayat": 2,
        "teks": "Pada ayat di atas, Allah memulai firman-Nya dengan menyebut \"Basmalah\" untuk mengajarkan kepada hamba-Nya agar memulai suatu perbuatan yang baik dengan menyebut basmalah, sebagai pernyataan bahwa dia mengerjakan perbuatan itu karena Allah dan kepada-Nyalah dia memohonkan pertolongan dan berkah. Maka, pada ayat ini Allah mengajarkan kepada hamba-Nya agar selalu memuji-Nya.\n\nAl-hamdu artinya pujian, karena kebaikan yang diberikan oleh yang dipuji, atau karena suatu sifat keutamaan yang dimilikinya. Semua nikmat yang telah dirasakan dan didapat di alam ini dari Allah, sebab Dialah yang menjadi sumber bagi semua nikmat. Hanya Allah yang mempunyai sifat-sifat kesempurnaan. Karena itu Allah sajalah yang berhak dipuji. Orang yang menyebut al-hamdu lillah bukan hanya mengakui bahwa puji itu untuk Allah semata, melainkan dengan ucapannya itu dia memuji Allah.\n\nRabb artinya pemilik, pengelola dan pemelihara. Di dalamnya terkandung arti mendidik, yaitu menyampaikan sesuatu kepada keadaan yang sempurna dengan berangsur-angsur.\n\n'alamin artinya seluruh alam, yakni semua jenis makhluk. Alam itu berjenis-jenis, yaitu alam tumbuh-tumbuhan, alam binatang, alam manusia, alam benda, alam makhluk halus, umpamanya malaikat, jin, dan alam yang lain. Ada mufasir mengkhususkan 'alamin pada ayat ini kepada makhluk-makhluk Allah yang berakal yaitu manusia, malaikat dan jin. Tetapi ini mempersempit arti kata yang sebenarnya amat luas.\n\nDengan demikian, Allah itu Pendidik seluruh alam, tak ada sesuatu pun dari makhluk Allah yang terlepas dari didikan-Nya. Tuhan mendidik makhluk-Nya dengan seluas arti kata itu. Sebagai pendidik, Dia menumbuhkan, menjaga, memberikan daya (tenaga) dan senjata kepada makhluk itu, guna kesempurnaan hidupnya masing-masing.\n\nSiapa yang memperhatikan perjalanan bintang-bintang, menyelidiki kehidupan tumbuh-tumbuhan dan binatang di laut dan di darat, mempelajari pertumbuhan manusia sejak dari rahim ibunya sampai ke masa kanak-kanak, lalu menjadi manusia yang sempurna, tahulah dia bahwa tidak ada sesuatu juga dari makhluk Allah yang terlepas dari penjagaan, pemeliharaan, asuhan dan inayah-Nya."
      },
      {
        "ayat": 3,
        "teks": "Pada ayat dua di atas Allah swt menerangkan bahwa Dia adalah Tuhan seluruh alam. Maka untuk mengingatkan hamba kepada nikmat dan karunia yang berlipat-ganda, yang telah dilimpahkan-Nya, serta sifat dan cinta kasih sayang yang abadi pada diri-Nya, diulang-Nya sekali lagi menyebut ar-Rahman ar-Rahim. Yang demikian dimaksudkan agar gambaran keganasan dan kezaliman seperti raja-raja yang dipertuan dan bersifat sewenang-wenang lenyap dari pikiran hamba.\n\nAllah mengingatkan dalam ayat ini bahwa sifat ketuhanan Allah terhadap hamba-Nya bukanlah sifat keganasan dan kezaliman, tetapi berdasarkan cinta dan kasih sayang. Dengan demikian manusia akan mencintai Tuhannya, dan menyembah Allah dengan hati yang aman dan tenteram, bebas dari rasa takut dan gelisah. Malah dia akan mengambil pelajaran dari sifat-sifat Allah. Dia akan mendasarkan pergaulan dan tingkah lakunya terhadap manusia sesamanya, atau terhadap orang yang di bawah pimpinannya, malah terhadap binatang yang tak pandai berbicara sekalipun, atas sifat cinta dan kasih sayang itu. Karena dengan jalan demikianlah manusia akan mendapat rahmat dan karunia dari Tuhannya.\n\nRasulullah bersabda:\n\nAllah hanya sayang kepada hamba-hamba-Nya yang pengasih. (Riwayat at-tabrani)\n\nOrang-orang yang penyayang, akan disayangi oleh Allah yang Rahman Tabaraka wa Ta'ala.(Oleh karena itu) sayangilah semua makhluk yang di bumi, niscaya semua makhluk yang di langit akan menyayangi kamu semua. (Riwayat Ahmad, Abu Dawud at-Tirmidzi dan al-hakim).\n\nRasulullah bersabda: \n\n\"Siapa yang kasih sayang meskipun kepada seekor burung (pipit) yang disembelih, akan disayangi Allah pada hari Kiamat. (Riwayat al-Bukhari)\n\nMaksud hadis yang ketiga ialah menggunakan aturan dan tata cara pada waktu menyembelih burung, misalnya memakai pisau yang tajam. Dapat pula dipahami dari urutan kata ar-Rahman, ar-Rahim, bahwa penjagaan, pemeliharaan dan asuhan Allah terhadap seluruh alam, bukanlah karena mengharapkan sesuatu dari alam itu, tetapi semata-mata karena rahmat dan kasih sayang-Nya.\n\nBoleh jadi ada yang terlintas dalam pikiran orang, mengapa Allah membuat peraturan dan hukum, dan menghukum orang-orang yang melanggar peraturan itu? Pikiran ini akan hilang bila diketahui bahwa peraturan dan hukum, begitu juga azab di akhirat atau di dunia yang dibuat Allah untuk hamba-Nya yang melanggar tidaklah berlawanan dengan sifat Allah Yang Maha Pengasih dan Maha Penyayang, karena peraturan dan hukum itu rahmat dari Allah demi untuk kebaikan manusia itu sendiri. Begitu pula azab dari Allah terhadap hamba-Nya yang melanggar peraturan dan hukum itu sesuai dengan keadilan-Nya."
      },
      {
        "ayat": 4,
        "teks": "Sesudah Allah menyebutkan beberapa sifat-Nya, yaitu: Tuhan seluruh alam, Yang Maha Pengasih, Maha Penyayang, maka diiringi-Nya dengan menyebutkan satu sifat-Nya lagi, yaitu \"menguasai hari pembalasan\". Penyebutan ayat ini dimaksudkan agar kekuasaan Allah atas alam ini tak terhenti sampai di dunia ini saja, tetapi terus berkelanjutan sampai hari akhir.\n\nAda dua macam bacaan berkenaan dengan Malik. Pertama, dengan memanjangkan ma, dan kedua dengan memendekkannya. Menurut bacaan yang pertama, Malik artinya \"Yang memiliki\" (Yang empunya). Sedang menurut bacaan yang kedua, artinya \"Raja\". Kedua bacaan itu benar.\n\nBaik menurut bacaan yang pertama ataupun bacaan yang kedua, dapat dipahami dari kata itu arti \"berkuasa\" dan bertindak dengan sepenuhnya. Sebab itulah diterjemahkan dengan \"Yang menguasai\". \"Yaum\" artinya hari, tetapi yang dimaksud di sini ialah waktu secara mutlak.\n\nAd-din banyak artinya, di antaranya: (1) perhitungan, (2) ganjaran, pembalasan, (3) patuh, (4) menundukkan, dan (5) syariat, agama. Yang selaras di sini ialah dengan arti \"pembalasan\". Jadi, Maliki yaumiddin maksudnya \"Allah itulah yang berkuasa dan yang dapat bertindak dengan sepenuhnya terhadap semua makhluk-Nya pada hari pembalasan.\"\n\nSebetulnya pada hari kemudian itu banyak hal yang terjadi, yaitu Kiamat, kebangkitan, berkumpul, perhitungan, pembalasan, tetapi pembalasan sajalah yang disebut oleh Allah di sini, karena itulah yang terpenting. Yang lain dari itu, umpamanya kiamat, kebangkitan dan seterusnya, merupakan pendahuluan dari pembalasan, apalagi untuk targib dan tarhib (menggalakkan dan menakut-nakuti), penyebutan \"hari pembalasan\" itu lebih tepat.\n\nHari Akhirat Menurut Pendapat Akal (Filsafat)\n\nKepercayaan tentang adanya hari akhirat, yang di hari itu akan diadakan perhitungan terhadap perbuatan manusia pada masa hidupnya dan diadakan pembalasan yang setimpal, adalah suatu kepercayaan yang sesuai dengan akal. Sebab itu adanya hidup yang lain, sesudah hidup di dunia ini, bukan saja ditetapkan oleh agama, tetapi juga ditunjukkan oleh akal.\n\nSeseorang yang mau berpikir tentu akan merasa bahwa hidup di dunia ini belumlah sempurna, perlu disambung dengan hidup yang lain. Alangkah banyaknya orang yang teraniaya hidup di dunia ini telah pulang ke rahmatullah sebelum mendapat keadilan. Alangkah banyaknya orang yang berjasa kecil atau besar, belum mendapat penghargaan atas jasanya. Alangkah banyaknya orang yang telah berusaha, memeras keringat, membanting tulang, tetapi belum sempat lagi merasakan buah usahanya itu. Sebaliknya, alangkah banyaknya penjahat, penganiaya, pembuat onar, yang tak dapat dijangkau oleh pengadilan di dunia ini. Lebih-lebih kalau yang melakukan kejahatan atau aniaya itu orang yang berkuasa sebagai raja, pembesar dan lain-lain. Maka biarpun kejahatan dan aniaya itu telah merantai bangsa seluruhnya, tidaklah akan digugat orang, malah dia tetap dipuja dan dihormati. Maka, dimanakah akan didapat keadilan itu, seandainya nanti tidak ada mahkamah yang lebih tinggi, Mahkamah Allah di hari kemudian?\n\nSebab itu, para pemikir dari zaman dahulu telah ada yang sampai kepada kepercayaan tentang adanya hari akhirat itu, semata-mata dengan jalan berpikir, antara lain Pitagoras. Filsuf ini berpendapat bahwa hidup di dunia ini merupakan bekal hidup yang abadi di akhirat kelak. Sebab itu sejak dari dunia hendaklah orang bersedia untuk hidup yang abadi. Sokrates, Plato dan Aristoteles berpendapat, \"Jiwa yang baik akan merasakan kenikmatan dan kelezatan di akhirat, tetapi bukan kelezatan kebendaan, karena kelezatan kebendaan itu terbatas dan mendatangkan bosan dan jemu. Hanya kelezatan rohani, yang betapa pun banyak dan lamanya, tidak menyebabkan bosan dan jemu.\" \n\nKepercayaan Masyarakat Arab Sebelum Islam tentang Hari Akhirat\n\nDi antara masyarakat Arab sebelum Islam terdapat beberapa pemikir dan pujangga yang telah mempercayai adanya hari kemudian, seperti Zuhair bin Abi Sulma yang meninggal dunia setahun sebelum Nabi Muhammad saw diutus Allah sebagai rasul. \n\nAda pula di antara mereka yang tidak mempercayai adanya hari kemudian. Dengarlah apa yang dikatakan oleh salah seorang penyair mereka: \"Hidup, sesudah itu mati, sesudah itu dibangkitkan lagi, itulah cerita dongeng, hai fulan.\" Karena itu, datanglah agama Islam, membawa kepastian tentang adanya hari kemudian. Pada hari itu akan dihisab semua perbuatan yang telah dikerjakan manusia selama hidupnya, besar atau kecil. Allah berfirman:\n\n(7) Maka barang siapa mengerjakan kebaikan seberat zarrah, niscaya dia akan melihat (balasan)nya, (8) dan barang siapa mengerjakan kejahatan seberat zarrah, niscaya dia akan melihat (balasan)nya. (az-Zalzalah/99: 7-8)\n\nTidak sedikit ayat di dalam Al-Qur'an yang menjelaskan bahwa di antara mereka memang banyak yang tidak percaya adanya hari akhirat; hidup hanya di dunia, setelah itu selesai (al-An'am/6: 29 ; al-Mu'minun/23: 37). Mereka berkata, bila seorang bapak mati, maka lahir anak, bila suatu bangsa punah, maka datang bangsa lain. Mereka tidak percaya, bahwa sesudah mati manusia masih akan hidup kembali (Hud/11: 7; al-Isra'/17: 49) dan banyak lagi ayat senada yang menggambarkan pendirian demikian. Di dalam sejarah pemikiran tercatat bahwa sejak dahulu kala banyak anggapan yang demikian itu."
      },
      {
        "ayat": 5,
        "teks": "Di dalam ayat-ayat sebelumnya disebutkan empat macam dari sifat-sifat Allah, yaitu: Pendidik seluruh alam, Maha Pengasih, Maha Penyayang, dan Yang menguasai hari pembalasan. Sifat-sifat yang disebutkan itu adalah sifat-sifat kesempurnaan yang hanya Allah saja yang mempunyainya. Sebab itu pada ayat ini Allah mengajarkan kepada hamba-Nya bahwa Allah sajalah yang patut disembah, dan kepada-Nya sajalah seharusnya manusia memohon pertolongan, dan bahwa hamba-Nya haruslah mengikrarkan yang demikian itu.\n\nIyyaka (hanya kepada Engkau). Iyyaka adalah dhamir untuk orang kedua dalam kedudukan mansub karena menjadi maf'ul bih (obyek). Dalam tata bahasa Arab maf'ul bih harus sesudah fi'il dan fa'il. Jika mendahulukan yang seharusnya diucapkan kemudian dalam Balagah menunjukkan qasr, yaitu pembatasan yang bisa diartikan \"hanya\". Jadi arti ayat ini \"Hanya kepada Engkau saja kami menyembah, dan hanya kepada Engkau saja kami mohon pertolongan\".\n\nIyyaka dalam ayat ini diulang dua kali, gunanya untuk menegaskan bahwa ibadah dan isti'anah (meminta pertolongan) itu masing-masing khusus dihadapkan kepada Allah serta untuk dapat mencapai kelezatan munajat (berbicara) dengan Allah. Karena bagi seorang hamba Allah yang menyembah dengan segenap jiwa dan raganya tak ada yang lebih nikmat dan lezat perasaannya daripada bermunajat dengan Allah.\n\nBaik juga diketahui bahwa dengan memakai iyyaka itu berarti menghadapkan pembicaraan kepada Allah, dengan maksud mengingat Allah swt, seakan-akan kita berada di hadapan-Nya, dan kepada-Nya diarahkan pembicaraan dengan khusyuk dan tawaduk. Seakan-akan kita berkata: \n\n\"Ya Allah, dzat yang wajibul wujud, Yang bersifat dengan segala sifat kesempurnaan, Yang menjaga dan memelihara seluruh alam, Yang melimpahkan rahmat dan karunia-Nya dengan berlipat ganda, Yang berkuasa di hari pembalasan, Engkau sajalah yang kami sembah, dan kepada Engkau sajalah kami minta pertolongan, karena hanya Engkau yang berhak disembah, dan hanya Engkau yang dapat menolong kami\".\n\nDengan cara seperti itu orang akan lebih khusyuk dalam menyembah Allah dan lebih tergambar kepadanya kebesaran yang disembahnya itu. Inilah yang dimaksud oleh Rasulullah dengan sabdanya:\n\n\"Engkau menyembah Allah seakan-akan engkau melihat-Nya (Riwayat al-Bukhari dan Muslim dari 'Umar bin al-Khatthab).\n\nKarena surah al-Fatihah mengandung ayat munajat (berbicara) dengan Allah menurut cara yang telah diterangkan maka hal itu merupakan rahasia diwajibkan membacanya pada tiap-tiap rakaat dalam salat, karena jiwanya ialah munajat, dengan menghadapkan diri dan memusatkan ingatan kepada Allah.\n\nNa'budu pada ayat ini didahulukan menyebutkannya daripada nasta'inu, karena menyembah Allah adalah suatu kewajiban manusia terhadap Tuhan-nya. Tetapi pertolongan dari Allah kepada hamba-Nya adalah hak hamba itu. Maka Allah mengajar hamba-Nya agar menunaikan kewajibannya lebih dahulu, sebelum ia menuntut haknya.\n\nMelihat kata-kata na'budu dan nasta'inu (kami menyembah, kami minta tolong), bukan a'budu dan asta'inu (saya menyembah dan saya minta tolong) adalah untuk memperlihatkan kelemahan manusia, tidak selayaknya manusia mengemukakan dirinya seorang saja dalam menyembah dan memohon pertolongan kepada Allah. Seakan-akan penunaian kewajiban beribadah dan permohonan pertolongan kepada Allah itu belum lagi sempurna, kecuali kalau dikerjakan bersama-sama.\n\nKedudukan Tauhid di dalam Ibadah dan Sebaliknya \n\nIbadah secara istilah ialah semua perkataan, perbuatan dan pikiran yang bertujuan untuk mencari rida Allah. Arti \"ibadah\" sebagai disebutkan di atas ialah tunduk dan berserah diri kepada Allah, yang disebabkan oleh kesadaran bahwa Allah yang menciptakan alam ini, Yang menumbuhkan, Yang mengembangkan, Yang menjaga dan memelihara serta Yang membawanya dari suatu keadaan kepada keadaan yang lain, hingga tercapai kesempurnaannya.\n\nTegasnya, ibadah itu timbulnya dari perasaan tauhid. Oleh karenanya, orang yang suka memikirkan keadaan alam ini, yang memperhatikan perjalanan bintang-bintang, kehidupan tumbuh-tumbuhan, binatang dan manusia, bahkan yang mau memperhatikan dirinya sendiri, yakinlah dia bahwa di balik alam yang zahir ada Zat yang gaib yang mengendalikan alam ini, yang bersifat dengan segala sifat kesempurnaan, yakni Dialah Yang Mahakuasa, Maha Pengasih, Maha Mengetahui dan sebagainya. Maka tumbuhlah dalam sanubarinya perasaan bersyukur dan berutang budi kepada Zat Yang Mahakuasa, Maha Pengasih dan Maha Mengetahui itu.\n\nPerasaan inilah yang menggerakkan bibirnya untuk menuturkan puji-pujian, dan yang mendorong jiwa dan raganya untuk menyembah dan merendahkan diri kepada Allah Yang Mahakuasa itu sebagai pernyataan bersyukur dan membalas budi kepada-Nya. Tetapi ada juga manusia yang tidak mau berpikir, dan selanjutnya tidak sadar akan kebesaran dan kekuasaan Allah, sering melupakan-Nya. Sebab itulah, setiap agama mensyariatkan bermacam-macam ibadah, gunanya untuk mengingatkan manusia kepada kebesaran dan kekuasaan Allah. Dengan keterangan ini terlihat bahwa tauhid dan ibadah itu saling mempengaruhi, dengan arti bahwa tauhid menumbuhkan ibadah, dan ibadah memupuk tauhid.\n\nPengaruh Ibadah terhadap Jiwa Manusia \n\nTiap-tiap ibadah yang dikerjakan karena didorong oleh perasaan yang disebutkan itu, niscaya berpengaruh kepada tabiat dan budi pekerti orang yang melakukannya. Umpamanya, orang yang melaksanakan salat karena sadar akan kebesaran dan kekuasaan Allah, dan didorong oleh perasaan bersyukur dan berutang budi kepada-Nya, akan terjauhlah dia dari perbuatan-perbuatan yang tidak baik. Dengan demikian salatnya itu akan mencegahnya dari mengerjakan perbuatan-perbuatan yang tidak baik itu, sesuai dengan firman Allah swt:\n\n\"Sesungguhnya salat itu mencegah dari (perbuatan) keji dan mungkar.\" (al-'Ankabut/29: 45)\n\nBegitu juga ibadah puasa. Ibadah ini akan menimbulkan perasaan cinta dan kasih sayang terhadap orang-orang miskin. Demikian pula seterusnya dengan ibadah-ibadah yang lain. Ibadah yang sebenarnya adalah ibadah yang ditimbulkan oleh keyakinan kepada kebesaran dan kekuasaan Allah, serta didorong oleh perasaan bersyukur kepada Allah. Ibadah yang hanya karena ikut-ikutan, atau karena memelihara tradisi yang sudah turun-temurun, bukanlah ibadah yang sebenarnya. Kendatipun seakan-akan berupa ibadah, tetapi tidak mempunyai jiwa ibadah. Tidak ubahnya seperti patung, bagaimanapun miripnya dengan manusia, tidaklah dinamai manusia. Ibadah yang semacam itu tidak ada pengaruhnya kepada tabiat dan akhlak.\n\nBerusaha, Berdoa dan Bertawakal\n\nIsti'anah (memohon pertolongan) seperti disebutkan di atas khusus dihadapkan kepada Allah, dengan arti bahwa tidak ada yang berhak dimohonkan pertolongan kecuali Allah. Pada ayat yang lain Allah menyuruh manusia untuk tolong-menolong dalam mengerjakan kebaikan.\n\nAllah berfirman:\n\n\"Dan tolong menolonglah kamu dalam (mengerjakan) kebaikan dan takwa\". (al-Ma'idah/5: 2)\n\nAdakah Pertentangan antara Dua Ayat itu? \n\nTercapainya suatu maksud, atau terlaksananya suatu pekerjaan dengan baik, tergantung kepada terpenuhinya syarat-syarat yang dibutuhkan dalam melaksanakan pekerjaan itu, dan tidak adanya rintangan-rintangan yang menghalanginya. Manusia telah diberi potensi oleh Allah, baik berupa pikiran maupun kekuatan tubuh, agar bisa mencukupkan syarat-syarat atau menolak rintangan-rintangan dalam menuju suatu maksud, atau mengerjakan suatu pekerjaan. Tetapi, ada di antara syarat-syarat itu yang manusia tidak kuasa mencukupkannya. Di samping itu, ada juga rintangan yang tidak mampu ditolaknya. Begitu pula ada di antara syarat-syarat itu atau di antara halangan-halangan itu yang tidak dapat diketahui. \n\nKendatipun menurut pikiran semua syarat yang diperlukan telah cukup, dan semua rintangan yang menghalangi telah berhasil diatasi, tetapi kadang-kadang hasil pekerjaan tidak seperti yang diharapkan. Ada hal-hal yang berada di luar batas kekuasaan dan kemampuan manusia. Itulah yang dimintakan pertolongan khusus kepada Allah. Sebaiknya, sesuatu yang masih dalam batas kekuasaan dan kemampuan, manusia disuruh tolong menolong, agar timbul pada masing-masing individu sifat saling mencintai, menghargai, dan gotong-royong.\n\nDengan perkataan lain, manusia disuruh Allah berusaha dengan sekuat tenaga, dan disuruh saling menolong, dan membantu. Di samping menjalankan ikhtiar dan usaha, dia harus pula berdoa, memohon taufik, hidayah dan ma'unah. Ini hendaknya dimohonkan khusus kepada Allah, karena hanya Dia yang kuasa memberinya. Sesudah itu semua, barulah dia bertawakal kepada-Nya.\n\nIbadah itu sendiri pun suatu pekerjaan yang berat, sebab itu haruslah dimintakan ma'unah dari Allah agar semua ibadah terlaksana sesuai dengan yang dimaksud oleh agama. Oleh karena itu, seseorang hendaknya menuturkan bahwa hanya kepada Allah sajalah kita beribadah, diikuti lagi dengan pernyataan bahwa kepada-Nya saja minta pertolongan, terutama pertolongan agar amal ibadah terlaksana sebagaimana mestinya. Ayat di atas, sebagaimana telah disebutkan, mengandung tauhid, karena beribadah semata-mata kepada Allah dan meminta ma'unah khusus kepada-Nya, adalah intisari agama, dan kesempurnaan tauhid."
      },
      {
        "ayat": 6,
        "teks": "Ihdi: pimpinlah, tunjukilah, berilah hidayah. Arti \"hidayah\" ialah menunjukkan suatu jalan atau cara menyampaikan orang kepada orang yang ditujunya, dengan baik.\n\nMacam-macam Hidayah (Petunjuk)\n\nAllah telah memberi manusia bermacam-macam hidayah, seperti yang juga dibahas dalam Tafsir Al-Fatihah oleh Muhammad Abduh.\n\n1. Hidayah Naluri (Garizah)\n\nManusia begitu juga binatang-binatang, dilengkapi oleh Allah dengan bermacam-macam sifat, yang timbulnya bukan dari pelajaran, bukan pula dari pengalaman, melainkan telah dibawanya dari kandungan ibunya. Sifat-sifat ini namanya \"naluri\", dalam bahasa Arab disebut garizah. Umpamanya, naluri \"ingin memelihara diri\" (mempertahankan hidup). Seorang bayi bila merasa lapar dia menangis. Sesudah terasa di bibirnya puting susu ibunya, dihisapnya sampai hilang laparnya. Perbuatan ini dikerjakannya tanpa seorang pun yang mengajarkan kepadanya, bukan pula timbul dari pengalamannya, hanya semata-mata ilham dan petunjuk dari Allah kepadanya, untuk mempertahankan hidupnya.\n\nContoh lain adalah lebah membuat sarangnya, laba-laba membuat jaringnya, semut membuat lubangnya dan menimbun makanan dalam lubang itu. Semua itu dikerjakan oleh binatang-binatang itu untuk mempertahankan hidupnya dan memelihara dirinya, dengan dorongan nalurinya semata-mata. Banyak lagi naluri yang lain, umpamanya rasa \"ingin tahu\", \"ingin mempunyai\", \"ingin berlomba-lomba\", \"ingin bermain\", \"ingin meniru\", \"takut\", dan lain-lain.\n\nSifat-sifat Naluri\n\nNaluri (garizah), sebagaimana disebutkan, terdapat pada manusia dan binatang. Perbedaannya ialah naluri manusia bisa menerima pendidikan dan perbaikan, tetapi naluri binatang tidak. Sebab itulah manusia bisa maju, sedangkan binatang tidak, ia tetap seperti sediakala. \n\nNaluri-naluri itu adalah dasar bagi kebaikan, dan juga dasar bagi kejahatan. Umpamanya, naluri \"ingin memelihara diri\", orang berusaha, berniaga, bertani, artinya mencari nafkah secara halal. Sebaliknya karena naluri \"ingin memelihara diri\" itu pula orang mencuri, menipu, merampok dan lain-lain. Karena naluri \"ingin tahu\" orang belajar, sehingga memiliki pengetahuan yang banyak dan pendidikan yang tinggi. Sebaliknya karena naluri \"ingin tahu\" itu pula orang suka mencari-cari 'aib dan rahasia sesamanya, yang mengakibatkan permusuhan dan persengketaan. Demikianlah seterusnya dengan naluri-naluri yang lain.\n\nNaluri-naluri itu tidak dapat dihilangkan dan tidak ada faedahnya membunuhnya. Ada pemikir dan pendidik yang hendak memadamkan naluri, karena melihat segi yang tidak baik (jahat) itu. Sebab itu mereka membuat bermacam peraturan untuk mengikat kemerdekaan anak-anak agar naluri itu jangan tumbuh, atau mana yang telah tumbuh menjadi mati. Tetapi perbuatan mereka itu besar bahayanya terhadap pertumbuhan akal, tubuh dan akhlak anak-anak. Bagaimanapun orang berusaha hendak membunuh naluri itu, namun ia tidak akan mati.\n\nBoleh jadi karena kerasnya tekanan dan kuatnya rintangan terhadap suatu naluri, maka kelihatan ia telah padam, tetapi manakala ada yang membangkitkannya, ia timbul kembali. Oleh karena itu, sekalipun naluri itu dasar bagi kebaikan, sebagaimana ia juga dasar bagi kejahatan, kewajiban manusia bukanlah menghilangkannya, tetapi mendidik dan melatihnya, agar dapat dimanfaatkan dan disalurkan ke arah yang baik.\n\nAllah telah menganugerahkan kepada manusia bermacam-macam naluri untuk jadi hidayah (petunjuk) yang akan dipakainya secara bijaksana.\n\n2. Hidayah Pancaindra\n\nKarena naluri itu sifatnya belum pasti sebagaimana disebutkan di atas, maka ia belum cukup untuk jadi hidayah bagi kebahagiaan hidup manusia di dunia dan di akhirat. Sebab itu, manusia dilengkapi lagi oleh Allah swt dengan pancaindra. Pancaindra itu sangat besar perannya terhadap pertumbuhan akal dan pikiran manusia. Sehubungan dengan itu ahli-ahli pendidikan berkata:\n\n(Pancaindra adalah pintu-pintu pengetahuan).\n\nMaksudnya ialah: dengan perantaraan pancaindra itulah manusia dapat berhubungan dengan alam sekitar, dengan arti bahwa sampainya sesuatu dari alam sekitar ini ke dalam otak manusia adalah melalui pintu-pintu pancaindra. Tetapi naluri ditambah dengan pancaindra, juga belum cukup untuk jadi pokok-pokok kebahagiaan manusia. Banyak lagi benda-benda dalam alam ini yang tidak dapat dilihat oleh mata. Banyak macam suara yang tidak dapat didengar oleh telinga. Malah selain dari alam mahsusat (yang dapat ditangkap oleh pancaindra), ada lagi alam ma'qulat (yang hanya dapat ditangkap oleh akal).\n\nIndra penglihatan (mata) hanya dapat menangkap alam mahsusat, tangkapannya tentang yang mahhsusat itu pun tidak selamanya betul, kadang-kadang salah. Inilah yang dinamakan dalam ilmu jiwa \"ilusi optik\" (tipuan pandangan), dalam bahasa Arab disebut khida' an-nadhar. Sebab itu manusia masih membutuhkan hidayah yang lain. Maka Allah menganugerahkan hidayah yang ketiga, yaitu \"hidayah akal\".\n\n3. Hidayah Akal (pikiran)\n\na.Akal dan kadar kesanggupannya\n\nDengan adanya akal manusia dapat menyalurkan naluri ke arah yang baik, agar naluri itu menjadi sumber bagi kebaikan, dan manusia dapat membetulkan kesalahan-kesalahan pancaindranya, membedakan yang buruk dengan yang baik. Akal bahkan sanggup menyusun mukadimah untuk menyampaikannya kepada natijah, mempertalikan akibat dengan sebab, memakai yang mahsusat sebagai tangga kepada yang ma'qulat, mempergunakan yang dapat dilihat, diraba dan dirasakan untuk sampai kepada yang abstrak, maknawi, dan gaib, mengambil dalil dari adanya makhluk untuk menetapkan adanya khalik, dan begitulah seterusnya.\n\nTetapi akal manusia juga belum memadai untuk membawanya kepada kebahagiaan hidup di dunia dan di akhirat di samping berbagai macam naluri dan pancaindra itu. Apalagi pendapat akal itu bermacam-macam, yang baik menurut pikiran si A belum tentu baik menurut pandangan si B, malah banyak manusia yang mempergunakan akalnya, tetapi akalnya dikalahkan oleh hawa nafsu dan sentimennya, hingga yang buruk itu menjadi baik dalam pandangannya, dan yang baik itu menjadi buruk.\n\nDengan demikian nyatalah bahwa naluri ditambah dengan pancaindra, dan ditambah pula dengan akal belum cukup untuk menjadi hidayah yang akan menyampaikan manusia kepada kebahagiaan hidup jasmani dan rohani, di dunia dan akhirat. Oleh karena itu, manusia membutuhkan hidayah lain, di samping pancaindra dan akalnya, yaitu hidayah agama yang dibawa oleh para rasul 'alaihimus-salatu was-salam.\n\nb. Benih agama dan akidah tauhid pada jiwa manusia\n\nJika menilik kepada agama-agama dan kepercayaan-kepercayaan yang diciptakan oleh manusia (al-adyan al-wadh'iyyah) terlihat bahwa pada jiwa manusia telah ada bibit-bibit kecenderungan beragama. Hal itu karena manusia mempunyai sifat merasa berutang budi, suka berterima kasih dan membalas budi kepada orang yang berbuat baik kepadanya. Maka, ketika ia memperhatikan dirinya dan alam di sekililingnya, umpamanya roti yang dimakannya, tumbuh-tumbuhan yang ditanamnya, binatang ternak yang digembalakannya, matahari yang memancarkan sinarnya, hujan yang turun dari langit yang menumbuhkan tanam-tanaman, dia akan merasa berutang budi kepada \"suatu Zat\" yang gaib yang telah berbuat baik dan melimpahkan nikmat yang besar itu kepadanya.\n\nManusia memahami dengan akalnya bahwa Zat yang gaib itulah yang menciptakannya, yang menganugerahkan kepadanya dan kepada jenis manusia seluruhnya, segala sesuatu yang dibutuhkannya yang ada di alam ini, untuk memelihara diri dan mempertahankan hidupnya. Karena merasa berutang budi kepada suatu Zat Yang Gaib itu, maka dia berpikir bagaimana cara berterima kasih dan membalas budi itu, atau dengan perkataan lain bagaimana cara \"menyembah Zat Yang Gaib itu\".\n\nPerihal bagaimana cara menyembah Zat Yang Gaib, adalah suatu masalah yang sukar, yang tidak dapat dicapai oleh akal manusia. Sebab itu, di dalam sejarah terlihat tidak pernah ada keseragaman dalam hal ini. Bahkan akal pikiran manusia akan membawanya kepada kepercayaan mengagungkan alam di samping mengagungkan Zat Yang Gaib itu.\n\nKarena pikirannya masih bersahaja dan belum tergambarkan di otaknya bagaimana menyembah \"Zat Yang Gaib\", maka dipilihlah di antara alam ini sesuatu yang besar, yang indah, yang banyak manfaatnya, atau sesuatu yang ditakutinya untuk jadi lambang bagi Zat Yang Gaib itu. Ketika dia mengagumi matahari, bulan dan bintang-bintang, sungai-sungai, binatang dan lain-lain, maka disembahnya benda-benda itu, sebagai lambang menyembah Tuhan atau Zat Yang Gaib itu, dan diciptakannya cara-cara beribadah (menyembah) benda-benda itu.\n\nDengan cara itu timbul suatu macam kepercayaan, yang dinamakan dengan \"kepercayaan menyembah kekuatan alam\", seperti yang terdapat di Mesir, Kaldea, Babilonia, Asiria dan di tempat-tempat lain di zaman purbakala. Dengan keterangan ini: tampak bahwa manusia menurut fitrahnya cenderung beragama, acap memikirkan dari mana datangnya alam ini, dan ke manakah kembalinya.\n\nBila manusia mau memikirkan: \"Dari mana datangnya alam ini\", akan sampai pada keyakinan tentang adanya Tuhan, bahkan akan sampai kepada keyakinan tentang keesaan Tuhan (tauhid), karena akidah (keyakinan) tentang keesaan Tuhan ini lebih mudah, dan lebih cepat dipahami oleh akal manusia. Karena itu dapat kita tegaskan bahwa manusia itu menurut nalurinya adalah beragama tauhid.\n\nSejarah telah menerangkan bahwa bangsa Kaldea pada mulanya adalah beragama tauhid, kemudian mereka menyembah matahari, planet-planet dan bintang-bintang yang mereka simbolkan dengan patung-patung. Sesudah raja Namrudz meninggal, mereka pun mendewakan dan menyembah Namrudz itu. Bangsa Asiria pun pada mulanya beragama tauhid, kemudian mereka lupa kepada akidah tauhid itu dan mereka sekutukan Tuhan dengan binatang-binatang, dan inilah yang dipusakai oleh orang-orang Babilonia.\n\nAdapun bangsa Mesir, bila diperhatikan nyanyian-nyanyian yang mereka nyanyikan dalam upacara-upacara peribadatan, jelas bahwa tidak semua orang Mesir purbakala itu orang-orang musyrik dan watsani (penyembah berhala), melainkan di antara mereka ada juga muwahhidin, penganut akidah tauhid. Di dalam nyanyian-nyanyian itu terdapat ungkapan sebagai berikut:\n\n\"Dialah Tuhan Yang Maha Esa, yang tiada sekutu bagi-Nya\"\n\n\"Dia mencintai seluruh makhluk, sedang Dia sendiri tak ada yang menciptakan-Nya\"\n\n\"Dialah Tuhan Yang Mahaagung, Pemilik langit dan bumi, Pencipta seluruh makhluk\"\n\nDapat ditegaskan bahwa akidah tauhid ini tidak pernah lenyap sama sekali, dan tetap ada. Tuhan Yang Maha Esa adalah pencipta seluruh yang ada di alam ini. Tuhan-tuhan atau dewa-dewa yang lain itu mereka anggap hanyalah sebagai pembantu dan pelayan atau simbol bagi Yang Maha Esa.\n\nc. Pendapat Orang-orang Arab sebelum Islam tentang Khalik (Pencipta)\n\nOrang-orang Arab sebelum datang agama Islam, kalau ditanyakan kepada mereka, \"Siapakah yang menjadikan langit dan bumi ini?\" Mereka menjawab, \"Allah.\" Kalau ditanyakan, \"Adakah al-Lata dan al-Uzza itu menjadikan sesuatu yang ada pada alam ini?\" Mereka menjawab, \"Tidak!\" Mereka sembah dewa-dewa itu hanya untuk mengharapkan perantaraan dan syafaat dari mereka terhadap Tuhan yang sebenarnya. Allah berfirman tentang perkataan musyrikin Arab itu:\n\n\"Kami tidak menyembah mereka, melainkan (berharap) agar mereka mendekatkan kami kepada Allah, dengan sedekat-dekatnya.\" (az-Zumar/39: 3)\n\nd. Kepercayaan tentang akhirat bisa dicapai oleh akal\n\nManakala manusia memikirkan \"kemanakah kembalinya alam ini?\" akan sampailah dia pada keyakinan bahwa di balik hidup di dunia yang fana ini akan ada lagi hidup di hari kemudian yang kekal dan abadi. Tetapi dapatkah manusia dengan akal dan pikirannya semata-mata mengetahui apakah yang perlu dikerjakan atau dijauhinya sebagai persiapan untuk kebahagiaan di hari kemudian (hari akhirat) itu? Jawabnya, \"Tentu saja tidak, sejarah pun telah membuktikan hal ini.\"\n\nDengan demikian dapatlah disimpulkan bahwa manusia telah diberi akal oleh Allah untuk jadi hidayah baginya, di samping naluri dan pancaindra. Tetapi hidayah akal itu belumlah mencukupi untuk kebahagiaan hidupnya di dunia dan akhirat.\n\nBegitu juga manusia mempunyai tabiat suka beragama, dengan akalnya dia kadang-kadang telah sampai kepada tauhid. Tetapi tauhid yang telah dicapainya dengan akalnya itu sering pula menjadi kabur dan tidak murni lagi.\n\nDengan mempergunakan akalnya, manusia juga dapat sampai kepada kesimpulan tentang adanya akhirat, tetapi hidayah akal itu belum mencukupi untuk kebahagiaan hidupnya di dunia dan akhirat. Maka untuk menyampai-kan manusia kepada akidah tauhid yang murni, yang tidak dicampuri sedikit pun oleh kepercayaan-kepercayaan menyembah dan membesarkan selain Allah, untuk membentangkan jalan yang benar yang akan ditempuhnya dalam perjalanan mencari kebahagiaan hidup di dunia dan akhirat, dan untuk jadi pedoman dalam hidupnya di dunia ini, dia membutuhkan hidayah yang lain di samping hidayah-hidayah yang telah disebutkan itu. Maka Allah mendatangkan hidayah yang keempat yaitu \"agama\" yang dibawa oleh para rasul 'alaihimus-salatu was-salam.\n\n4.Hidayah Agama\n\na.Pokok-pokok agama ketuhanan\n\nAllah mengutus rasul-rasul untuk membawa agama yang akan menunjukkan kepada manusia jalan yang harus mereka tempuh untuk kebahagiaan mereka di dunia dan akhirat. Mula-mula yang ditanamkan oleh rasul-rasul itu adalah kepercayaan tentang adanya Tuhan Yang Maha Esa dengan segala sifat-sifat kesempurnaan-Nya, guna membersihkan itikad manusia dari syirik (mempersekutukan Allah).\n\nRasul membawa manusia kepada kepercayaan tauhid dengan melalui akal dan logika, yaitu dengan mempergunakan dalil-dalil yang tepat dan logis. Dialog antara Nabi Ibrahim dengan Namrudz, Nabi Musa dengan Fir'aun, dan seruan-seruan Al-Qur'an kepada kaum musyrikin Quraisy semuanya mengajak agar mereka mempergunakan akal.\n\nDi samping kepercayaan kepada adanya Tuhan Yang Maha Esa, rasul-rasul juga menyeru untuk percaya pada akhirat, dan para malaikat.\n\nPercaya kepada adanya Tuhan Yang Maha Esa dengan segala sifat-sifat kesempurnaan-Nya, serta adanya malaikat dan hari kemudian dinamakan al-iman bi al-gaib (percaya kepada yang gaib). Itulah yang menjadi pokok bagi semua agama samawi, dengan arti bahwa semua agama yang datangnya dari Tuhan adalah mempercayai keesaan Tuhan, para malaikat dan hari akhirat.\n\nDi samping Akidah (kepercayaan) yang disebutkan itu, para rasul juga membawa hukum-hukum, peraturan-peraturan, akhlak dan pelajaran-pelajaran. Hukum-hukum dan peraturan-peraturan ini tidak seluruhnya sama, artinya apa yang diturunkan kepada Nabi Ibrahim tidak sama dengan yang diturunkan kepada Nabi Musa, dan apa yang dibawa oleh Nabi Isa, tidak serupa dengan yang dibawa oleh Nabi Muhammad saw. Hal ini dikarenakan hukum-hukum dan peraturan-peraturan itu haruslah sesuai dengan keadaan tempat dan masa. Maka syariat yang dibawa oleh nabi-nabi itu adalah sesuai dengan masanya masing-masing. Jadi yang berlainan itu ialah hukum-hukum furu' (cabang-cabang), sedangkan pokok-pokok hukum agama seperti akidah adalah sama. Karena Muhammad saw adalah Nabi penutup maka syariat yang dibawanya, diberi oleh Allah sifat-sifat tertentu agar sesuai dengan segala masa dan keadaan.\n\nb. Hidayah yang dimohonkan kepada Tuhan\n\nAllah telah menganugerahkan agama Islam sebagai hidayah dan senjata hidup yang penghabisan, atau jalan kepada kebahagiaan yang terakhir, tetapi adakah semua orang, pandai mempergunakan senjata itu, dan adakah semua hamba Allah sukses dalam menempuh jalan yang telah dibentangkan oleh Tuhan?\n\nBanyak manusia salah menerapkan agama, tidak beribadah (menyembah Allah) sesuai dengan yang diridai oleh yang disembah, tidak melaksanakan syariat sesuai dengan yang dimaksud oleh pembuat syariat itu. Karena itu Allah mengajarkan kepada manusia cara memohon kepada-Nya agar diberi-Nya ma'unah, dibimbing dan dijaga selama-lamanya, serta diberi-Nya taufik agar dapat memanfaatkan semua macam hidayah yang telah dianugerahkan itu menurut semestinya. Naluri-naluri agar dapat disalurkan ke arah yang baik, pancaindra agar betul, akal agar sesuai dengan yang benar, tuntunan-tuntunan agama agar dapat dilaksanakan menurut yang dimaksudkan oleh yang menurunkan agama itu, tanpa ada cacat, janggal dan salah.\n\nTegasnya, manusia yang telah diberi Allah bermacam-macam hidayah yang disebutkan di atas (naluri, pancaindra, akal dan agama) belumlah cukup, tetapi dia masih membutuhkan ma'unah dan bimbingan dari Allah (yaitu taufik-Nya). ) Maka ma'unah dan bimbingan itulah yang kita mohonkan, dan kepada Allah sajalah kita hadapkan permohonan itu. Dengan perkataan lain, Allah telah memberi manusia hidayah-hidayah tersebut, seakan-akan Dia telah membentangkan jalan raya yang akan menyampaikan manusia kepada kebahagiaan hidup duniawi dan ukhrawi. Kemudian yang dimohonkan kepada-Nya lagi, ialah \"agar membimbing kita dalam melalui jalan yang telah terbentang itu.\"\n\nDengan ringkas hidayah dalam ayat ihdinas-siratal-mustaqim ini berarti \"taufik\" (bimbingan), dan taufik itulah yang dimohonkan di sini kepada Allah. Taufik ini dimohonkan kepada Allah sesudah kita berusaha dengan sepenuh tenaga, pikiran dan ikhtiar, karena berusaha dengan sepenuh tenaga adalah kewajiban kita, tetapi keberhasilan suatu usaha adalah termasuk kekuasaan Allah. Dengan ini terlihat pertalian ayat ini dengan ayat yang sebelumnya. Pada ayat yang sebelumnya Allah mengajari hamba-Nya agar menyembah dan memohon pertolongan kepada-Nya, sedangkan pada ayat ini Allah menerangkan apa yang akan dimohonkan, dan bagaimana memohonkannya. Maka tidak ada pertentangan antara kedua firman Allah tersebut dan firman Allah yang ditujukan kepada Nabi:\n\n¦ Dan sungguh, engkau benar-benar membimbing (manusia) kepada jalan yang lurus. (asy-Syura/42: 52).\n\nSungguh, engkau (Muhammad) tidak dapat memberi petunjuk kepada orang yang engkau kasihi, tetapi Allah memberi petunjuk kepada orang yang Dia kehendaki, dan Dia lebih mengetahui orang-orang yang mau menerima petunjuk. (al-Qasas/28: 56).\n\nSebab yang dimaksud dengan hidayah pada ayat pertama ialah menunjukkan jalan yang harus ditempuh, dan ini memang tugas nabi. Yang dimaksud dengan hidayah pada ayat kedua ialah membimbing manusia dalam menempuh jalan itu dan memberikan taufik agar sukses dan berbahagia dalam perjalanannya, dan ini tidaklah masuk dalam kekuasaan nabi, tetapi hak Allah semata-mata.\n\nJalan yang lurus (yang menyampaikan kepada yang dituju).\n\nApakah yang dimaksud dengan jalan lurus itu? Di atas telah diterangkan bahwa rasul-rasul telah membawa aqa'id (kepercayaan-kepercayaan), hukum-hukum, peraturan-peraturan, akhlak, dan pelajaran-pelajaran. Pendeknya, para rasul telah membawa segala sesuatu yang perlu untuk kebahagiaan hidup manusia di dunia dan akhirat.\n\nMaka aqa'id, hukum-hukum, peraturan-peraturan, akhlak dan pelajaran-pelajaran itulah yang dimaksud dengan jalan lurus itu, karena dialah yang menyampaikan manusia kepada kebahagiaan hidup di dunia dan akhirat sebagaimana disebutkan. Jadi dengan menyebut ayat ini seakan-akan kita memohon kepada Allah, \"Bimbing dan berilah kami taufik, ya Allah dalam melaksanakan ajaran-ajaran agama kami. Betulkanlah kepercayaan kami. Bimbing dan berilah kami taufik dalam melaksanakan kepercayaan kami. Bimbing dan berilah kami taufik dalam melaksanakan hukum, peraturan-peraturan, serta pelajaran-pelajaran agama kami. Jadikanlah kami mempunyai akhlak yang mulia, agar berbahagia hidup kami di dunia dan akhirat.\""
      },
      {
        "ayat": 7,
        "teks": "Setelah Allah swt mengajarkan kepada hamba-Nya untuk memohon agar selalu dibimbing-Nya menuju jalan yang lurus dan benar, pada ayat ini Allah menerangkan apa jalan yang lurus itu. Sebelum Al-Qur'an diturunkan, Allah telah menurunkan kitab-kitab suci-Nya yang lain, dan sebelum Nabi Muhammad diutus, Allah telah mengutus rasul-rasul, karena sebelum umat yang sekarang ini telah banyak umat terdahulu.\n\nDi antara umat-umat yang terdahulu itu terdapat nabi-nabi, siddiqin yang membenarkan rasul-rasul dengan jujur dan patuh, syuhada' yang telah mengorbankan jiwa dan harta untuk kemuliaan agama Allah, dan orang-orang saleh yang telah membuat kebajikan dan menjauhi larangan Allah.\n\nMereka itulah orang-orang yang telah diberi nikmat oleh Allah, dan kita diajari agar memohon kepada-Nya, agar diberi-Nya taufik dan bimbingan sebagaimana Dia telah memberi taufik dan membimbing mereka. Artinya sebagaimana mereka telah berbahagia dalam aqa'id, dalam menjalankan hukum-hukum dan peraturan-peraturan agama, serta telah mempunyai akhlak dan budi pekerti yang mulia, maka demikian pula kita hendaknya. Dengan perkataan lain, Allah menyuruh kita agar mengambil contoh dan teladan kepada mereka yang terdahulu.\n\nTimbul pertanyaan: mengapa Allah menyuruh kita mengikuti jalan mereka yang terdahulu itu, padahal dalam agama kita ada pelajaran-pelajaran, hukum dan petunjuk-petunjuk yang tak ada pada mereka. Jawabnya: sebetulnya agama Allah itu adalah satu. Kendatipun ada perbedaannya, tetapi perbedaan itu pada bagian-bagiannya, sedang pokok-pokoknya serupa, sebagaimana telah disebutkan.\n\nSebagaimana halnya dalam umat-umat yang terdahulu itu terdapat orang-orang yang diberi nikmat oleh Allah, juga terdapat di antara mereka orang yang dimurkai Allah dan orang yang sesat. Orang yang dimurkai Allah itu mereka yang tak mau menerima seruan Allah yang disampaikan oleh rasul-rasul, karena berlainan dengan kebiasaan mereka, atau karena tidak sesuai dengan hawa nafsu mereka, kendatipun telah jelas bahwa yang dibawa oleh rasul-rasul itu adalah benar. Termasuk juga ke dalam golongan ini, mereka yang mulanya telah menerima apa yang disampaikan oleh rasul-rasul, tetapi kemudian karena suatu sebab mereka membelok, dan membelakangi pelajaran yang dibawa oleh rasul-rasul itu.\n\nDi dalam sejarah banyak ditemukan orang yang dimurkai Allah, sejak di dunia mereka telah diazab Allah, sebagai balasan yang setimpal bagi keingkaran dan sifat angkara murka mereka. Umpamanya kaum 'ad dan samud yang telah dibinasakan oleh Allah. Sampai sekarang masih ada bekas-bekas peninggalan mereka di Jazirah (semenanjung) Arab. Begitu juga Fir'aun dan kaumnya yang telah dibinasakan Allah di Laut Merah. Mumi Fir'aun sampai sekarang masih tersimpan di museum di Mesir.\n\nOrang-orang yang sesat ialah mereka yang tidak betul kepercayaannya, atau tidak betul pekerjaan dan amal ibadahnya serta rusak budi pekertinya. Bila akidah seseorang tidak betul, atau pekerjaan dan amal ibadahnya salah, dan akhlaknya telah rusak, akan celakalah dia, dan kalau suatu bangsa berada pada situasi seperti itu akan jatuhlah bangsa itu.\n\nMaka dengan ayat ini Allah mengajari hamba-Nya untuk memohon kepada-Nya agar terjauh dari kemurkaan-Nya, dan terhindar dari kesesatan. Di dalamnya juga tersimpul perintah Allah agar manusia mengambil pelajaran dari sejarah bangsa-bangsa yang terdahulu. Alangkah banyaknya dalam sejarah kejadian-kejadian yang dapat dijadikan iktibar dan pelajaran. Di dalam Al-Qur'an banyak ayat yang berkenaan dengan kisah umat dan bangsa-bangsa yang dahulu. Memang tak ada sesuatu yang lebih besar pengaruhnya kepada jiwa manusia daripada contoh-contoh orang dan perbandingan-perbandingan yang terdapat dalam kisah-kisah dan sejarah."
      }
    ],
    "suratSelanjutnya": {
      "nomor": 2,
      "nama": "البقرة",
      "namaLatin": "Al-Baqarah",
      "jumlahAyat": 286
    },
    "suratSebelumnya": false
  }
}

fokus pada alquran saja dulu, dan jangan lupa untuk menu doa juga jangan di disable , karena setelah ini saya akan masuk ke doa.


tolong ikuti rules yang paling penting ada di wajib-dilakukan.mdc

intinya buat tampilan sebaik mungkin dengan ui friendly dan ux yang sangat baik, kemudian pastikan kamu membuat tampilan yang tetap menggunakan tailwind css dan juga iconnya menggunakan lucide-react , pastikan kamu fokus ke mobile view karena mobile first dan juga user akan menggunakan hampir 90an persen via mobile jadi jangan sampai rusak di tampilan mobile karena ini akan digunakan di mobile kebanyakan.

INGAT, BRAND COLORNYA WARNA HIJAU seperti yang ada di gambar halaman-utama-dengan-berbagai-menu.png

pastikan stylenya modern dan kekinian tapi tetap mudah di gunakan oleh semua kalangan 