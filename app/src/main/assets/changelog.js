const CHANGELOG = [
  { v: '1.6.0', b: 25, tarikh: '2026-11-11', nota: {
    ms: ['Bayang tulisan dan nombor ditukar kepada hitam supaya lebih mudah dibaca', 'Warna tulisan dipekatkan'],
    en: ['Text and number shadows changed to black for easier reading', 'Text colours made deeper'] }},
  { v: '1.6.0', b: 24, tarikh: '2026-11-11', nota: {
    ms: ['Nama unit dalam penukar tidak lagi terpotong', 'Anak panah kecil pada kotak nombor dibuang'],
    en: ['Unit names in the converter are no longer cut off', 'Small spinner arrows on the number boxes removed'] }},
  { v: '1.6.0', b: 23, tarikh: '2026-11-11', nota: {
    ms: ['Bayang pada semua tulisan dan nombor supaya lebih jelas', 'Warna tulisan kecil dipekatkan sedikit'],
    en: ['Shadows added to all text and numbers for better clarity', 'Small text colours made slightly deeper'] }},
  { v: '1.6.0', b: 22, tarikh: '2026-11-11', nota: {
    ms: ['Tulisan baharu yang comel (Fredoka) termasuk nombor', 'Warna lebih ceria: latar berkecerunan, butang timbul bergaya gula-gula', 'Nombor paparan berwarna kecerunan ungu ke merah jambu'],
    en: ['New cute font (Fredoka), including the numbers', 'Brighter colours: gradient background and candy-style raised buttons', 'Display number in a purple-to-pink gradient'] }},
  { v: '1.5.0', b: 21, tarikh: '2026-11-11', nota: {
    ms: ['Nota perubahan kini dipaparkan di GitHub (Releases dan mesej commit)'],
    en: ['Change notes are now shown on GitHub (Releases and commit messages)'] }},
  { v: '1.5.0', b: 20, tarikh: '2026-11-11', nota: {
    ms: ['Butang tukar unit dikecilkan', 'Nombor unit bawah kini boleh ditaip dengan papan kekunci dan unit atas dikira semula'],
    en: ['Swap button made smaller', 'The bottom value can now be typed with the keyboard and the top value is recalculated'] }},
  { v: '1.5.0', b: 19, tarikh: '2026-11-11', nota: {
    ms: ['Butang tukar unit baharu: unit atas dan bawah bertukar tempat dengan sekali tekan'],
    en: ['New swap button: the top and bottom units trade places with one tap'] }},
  { v: '1.5.0', b: 18, tarikh: '2026-11-11', nota: {
    ms: ['Semua ikon ditukar kepada ikon comel bertema kalkulator (jenis pertukaran, bintang, bahasa dan info)'],
    en: ['All icons are now cute calculator-themed icons (conversion types, star, language and info)'] }},
  { v: '1.5.0', b: 17, tarikh: '2026-11-11', nota: {
    ms: ['Betulkan lambaian maskot: lengan kini kekal bersambung dengan badan'],
    en: ['Fixed the mascot wave: the arm now stays connected to the body'] }},
  { v: '1.5.0', b: 16, tarikh: '2026-11-11', nota: {
    ms: ['Maskot kini melambai-lambai: lengan bergerak sendiri', 'Animasi maskot dipaparkan di skrin utama dan Tetapan'],
    en: ['The mascot now waves: its arm moves on its own', 'Mascot animation shown on the main screen and in Settings'] }},
  { v: '1.5.0', b: 15, tarikh: '2026-11-11', nota: {
    ms: ['Baris pengiraan dirapatkan tanpa jarak, contohnya 3-1=2'],
    en: ['Calculation line is now compact with no spaces, e.g. 3-1=2'] }},
  { v: '1.5.0', b: 14, tarikh: '2026-11-11', nota: {
    ms: ['Baris pengiraan lebih kemas dengan jarak yang tersusun, contohnya 3 − 1 = 2', 'Maskot tidak lagi menyentuh kotak paparan'],
    en: ['Neater calculation line with tidy spacing, e.g. 3 − 1 = 2', 'Mascot no longer touches the display box'] }},
  { v: '1.5.0', b: 13, tarikh: '2026-11-11', nota: {
    ms: ['Nombor besar di bawah kekal sebagai nombor yang ditaip; jawapan dipaparkan di baris atas (1+3=4)'],
    en: ['The big number below stays as the number being typed; the answer shows on the top line (1+3=4)'] }},
  { v: '1.5.0', b: 12, tarikh: '2026-11-11', nota: {
    ms: ['Jawapan terus dipaparkan semasa menaip, contohnya 1+3=4'],
    en: ['The answer now appears instantly while typing, e.g. 1+3=4'] }},
  { v: '1.5.0', b: 11, tarikh: '2026-11-11', nota: {
    ms: ['Maskot kini menyatu dengan latar (tanpa kotak) dan bukan lagi butang', 'Info perubahan terkini boleh dibuka dari Tetapan > Tentang'],
    en: ['Mascot now blends into the background (no box) and is no longer a button', 'Latest changes can be opened from Settings > About'] }},
  { v: '1.5.0', b: 10, tarikh: '2026-11-11', nota: {
    ms: ['Logo maskot diletakkan pada butang info perubahan di bahagian atas'],
    en: ['Mascot logo placed on the latest-changes button at the top'] }},
  { v: '1.5.0', b: 9, tarikh: '2026-11-11', nota: {
    ms: ['Tetapan bahasa baharu: Bahasa Melayu dan English', 'Semua tulisan dalam app mengikut bahasa yang dipilih'],
    en: ['New language setting: Bahasa Melayu and English', 'All text in the app follows the selected language'] }},
  { v: '1.4.0', b: 8, tarikh: '2026-11-11', nota: {
    ms: ['Ikon Tetapan dan bar tab bertema kalkulator comel', 'Maskot dipaparkan dalam bahagian Tentang'],
    en: ['Settings and tab icons in the cute calculator theme', 'Mascot shown in the About section'] }},
  { v: '1.4.0', b: 7, tarikh: '2026-11-11', nota: {
    ms: ['Tab Tetapan baharu dengan bahagian Tentang', 'Nombor versi dan build dipindah ke Tentang', 'Kredit: dibuat oleh Asraf Ismail'],
    en: ['New Settings tab with an About section', 'Version and build numbers moved to About', 'Credit: made by Asraf Ismail'] }},
  { v: '1.3.0', b: 6, tarikh: '2026-11-11', nota: {
    ms: ['Bar status dan bar navigasi kini mengikut warna tema app'],
    en: ['Status bar and navigation bar now follow the app theme colour'] }},
  { v: '1.3.0', b: 5, tarikh: '2026-11-11', nota: {
    ms: ['Nama app ditukar kepada Kalkulator', 'Senarai unit dikemaskan', 'Unit Metrik, Imperial, Maritim & Angkasa kekal'],
    en: ['App renamed to Kalkulator', 'Unit list tidied up', 'Metric, Imperial and Maritime & Space units kept'] }},
  { v: '1.2.0', b: 4, tarikh: '2026-11-11', nota: {
    ms: ['Jauh lebih banyak unit dalam setiap jenis pertukaran', 'Jenis baharu: Kelajuan, Data, Tekanan, Tenaga, Kuasa dan Sudut', 'Ikon app mengikut gambar maskot kalkulator'],
    en: ['Many more units in every conversion type', 'New types: Speed, Data, Pressure, Energy, Power and Angle', 'App icon now uses the calculator mascot image'] }},
  { v: '1.0.0', b: 1, tarikh: '2026-11-11', nota: {
    ms: ['Kalkulator pertama', 'Penukar unit 8 kategori', 'Info perubahan terkini dalam app'],
    en: ['First calculator', 'Unit converter with 8 categories', 'Latest changes info inside the app'] }}
];
