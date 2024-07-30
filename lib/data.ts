// export const questions:Question[] = [
//     { id:1,question: '1', surveys: [{id:0,value:"",points:0}]},
//     { id:2,question: '2', surveys: [{id:0,value:"",points:0}]},
//     { id:3,question: '3', surveys: [{id:0,value:"",points:0}]},
//     { id:4,question: '4', surveys: [{id:0,value:"",points:0}]},
//     { id:5,question: '5', surveys: [{id:0,value:"",points:0}]},
//     { id:6,question: '6', surveys: [{id:0,value:"",points:0}]},
//     { id:7,question: '7', surveys: [{id:0,value:"",points:0}]},
//     { id:8,question: '8', surveys: [{id:0,value:"",points:0}]},
//     { id:9,question: '9', surveys: [{id:0,value:"",points:0}]},
//     { id:10,question: '10', surveys: [{id:0,value:"",points:0}] },
//   ];

  export const questions:Question[] = [
    {
      id: 1,
      question: 'Sebutkan hal-hal yang berhubungan dengan laut',
      surveys: [
        { id: 1, value: 'air asin', points: 60 },
        { id: 2, value: 'ombak', points: 50 },
        { id: 3, value: 'kapal', points: 40 },
        { id: 4, value: 'nelayan', points: 30 },
        { id: 5, value: 'perahu', points: 20 },
        { id: 6, value: 'karang', points: 10 },
        { id: 7, value: 'biru', points: 5 }
      ]
    },
    {
      id: 2,
      question: 'Apa yang kamu lakukan jika lupa menggosok gigi',
      surveys: [
        { id: 1, value: 'Kumur Kumur', points: 30 },
        { id: 2, value: 'Makan Permen', points: 20 },
        { id: 3, value: 'Minum Air', points: 10 },
        { id: 4, value: 'Tutup Mulut', points: 5 }
      ]
    },
    {
      id: 3,
      question: 'Apa yang dibicarakan kedua keluarga saat acara lamaran?',
      surveys: [
        { id: 1, value: 'Tanggal', points: 30 },
        { id: 2, value: 'Hari Baik', points: 20 },
        { id: 3, value: 'Tempat', points: 10 },
        { id: 4, value: 'Uang Panai', points: 5 }
      ]
    },
    {
      id: 4,
      question: 'Mengapa seseorang dihindari temannya?',
      surveys: [
        { id: 1, value: 'Sombong', points: 50 },
        { id: 2, value: 'Bau', points: 40 },
        { id: 3, value: 'Jahat', points: 30 },
        { id: 4, value: 'Pelit', points: 20 },
        { id: 5, value: 'Nakal', points: 10 },
        { id: 6, value: 'Judes', points: 5 }
      ]
    },
    {
      id: 5,
      question: 'Bonus apa yang didapat saat membeli motor?',
      surveys: [
        { id: 1, value: 'Helm', points: 50 },
        { id: 2, value: 'Jaket', points: 40 },
        { id: 3, value: 'Uang', points: 30 },
        { id: 4, value: 'Service Gratis', points: 20 },
        { id: 5, value: 'Jas Hujan', points: 10 },
        { id: 6, value: 'Hp', points: 5 }
      ]
    },
    {
      id: 6,
      question: 'Apa yang dipakai agar kaki tidak lecet saat memakai sepatu baru?',
      surveys: [
        { id: 1, value: 'Kaos Kaki', points: 30 },
        { id: 2, value: 'Plester', points: 20 },
        { id: 3, value: 'Tisu', points: 10 },
        { id: 4, value: 'Minyak', points: 5 }
      ]
    },
    {
      id: 7,
      question: 'Sebutkan sesuatu yang orang rasakan ketika terserang flu?',
      surveys: [
        { id: 1, value: 'Pusing', points: 50 },
        { id: 2, value: 'Hidung Tersumbat', points: 40 },
        { id: 3, value: 'Susah Napas', points: 30 },
        { id: 4, value: 'Demam', points: 20 },
        { id: 5, value: 'Bersin', points: 10 },
        { id: 6, value: 'Sakit Kepala', points: 5 }
      ]
    },
    {
      id: 8,
      question: 'Sebutkan makanan yang sering disantap saat sarapan',
      surveys: [
        { id: 1, value: 'Nasi Goreng', points: 50 },
        { id: 2, value: 'Roti Bakar', points: 40 },
        { id: 3, value: 'Bubur Ayam', points: 30 },
        { id: 4, value: 'Sereal', points: 20 },
        { id: 5, value: 'Pisang', points: 10 },
        { id: 6, value: 'Telur Rebus', points: 5 }
      ]
    },
    {
      id: 9,
      question: 'Apa yang dilakukan orang untuk mengatasi stres?',
      surveys: [
        { id: 1, value: 'Meditasi', points: 40 },
        { id: 2, value: 'Berolahraga', points: 35 },
        { id: 3, value: 'Mendengarkan Musik', points: 25 },
        { id: 4, value: 'Tidur', points: 20 },
        { id: 5, value: 'Bicara dengan Teman', points: 10 },
        { id: 6, value: 'Menonton Film', points: 5 }
      ]
    },
    {
      id: 10,
      question: 'Sebutkan aktivitas yang dilakukan saat liburan',
      surveys: [
        { id: 1, value: 'Berkemah', points: 40 },
        { id: 2, value: 'Mengunjungi Pantai', points: 35 },
        { id: 3, value: 'Bersepeda', points: 30 },
        { id: 4, value: 'Mendaki Gunung', points: 20 },
        { id: 5, value: 'Menginap di Hotel', points: 15 },
        { id: 6, value: 'Mengunjungi Keluarga', points: 10 }
      ]
    },
    {
      id: 11,
      question: 'Apa yang biasanya orang bawa saat pergi ke pantai?',
      surveys: [
        { id: 1, value: 'Handuk', points: 40 },
        { id: 2, value: 'Sunblock', points: 35 },
        { id: 3, value: 'Kacamata Hitam', points: 30 },
        { id: 4, value: 'Pakaian Renang', points: 20 },
        { id: 5, value: 'Makanan Ringan', points: 15 },
        { id: 6, value: 'Pelampung', points: 10 }
      ]
    },
    {
      id: 12,
      question: 'Sebutkan sesuatu yang orang lakukan saat hujan deras',
      surveys: [
        { id: 1, value: 'Berteduh', points: 50 },
        { id: 2, value: 'Membawa Payung', points: 40 },
        { id: 3, value: 'Menutup Jendela', points: 30 },
        { id: 4, value: 'Membuat Minuman Hangat', points: 20 },
        { id: 5, value: 'Menonton TV', points: 10 },
        { id: 6, value: 'Bermain Hujan', points: 5 }
      ]
    },
    {
      id: 13,
      question: 'Apa yang biasanya orang lakukan saat kehilangan pekerjaan?',
      surveys: [
        { id: 1, value: 'Mencari Pekerjaan Baru', points: 40 },
        { id: 2, value: 'Membangun Usaha', points: 35 },
        { id: 3, value: 'Mengikuti Pelatihan', points: 25 },
        { id: 4, value: 'Menabung', points: 20 },
        { id: 5, value: 'Mengurangi Pengeluaran', points: 10 },
        { id: 6, value: 'Berkonsultasi dengan Keluarga', points: 5 }
      ]
    },
    {
      id: 14,
      question: 'Apa yang sering dilakukan orang saat tidak bisa tidur di malam hari?',
      surveys: [
        { id: 1, value: 'Membaca Buku', points: 40 },
        { id: 2, value: 'Mendengarkan Musik', points: 35 },
        { id: 3, value: 'Menonton TV', points: 30 },
        { id: 4, value: 'Menghitung Domba', points: 20 },
        { id: 5, value: 'Minum Susu Hangat', points: 10 },
        { id: 6, value: 'Merenung', points: 5 }
      ]
    },
    {
      id: 15,
      question: 'Sebutkan langkah-langkah untuk mengatasi kemacetan lalu lintas di kota besar',
      surveys: [
        { id: 1, value: 'Meningkatkan Transportasi Umum', points: 50 },
        { id: 2, value: 'Membangun Jalan Tambahan', points: 40 },
        { id: 3, value: 'Mengatur Jam Kerja', points: 30 },
        { id: 4, value: 'Menggunakan Teknologi Lalu Lintas', points: 20 },
        { id: 5, value: 'Promosi Carpooling', points: 10 },
        { id: 6, value: 'Membatasi Kendaraan Pribadi', points: 5 }
      ]
    }
  ];
