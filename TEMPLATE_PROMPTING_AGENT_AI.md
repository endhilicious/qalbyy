### "double check" prompt:
tolong double check lagi instruksiku, pastikan kamu sudah benar-benar mengerti dan memahami semua istilah yang ada di instruksiku, tolong kamu pastikan semua instruksiku ini sudah kamu cover dengan baik, pastikan tidak ada yang terlewatkan sedikitpun, tolong kamu baca ulang lagi dan pastikan semua poin/instruksi beserta file yang saya sebutkan sudah kamu pahami dan baca dan pastikan tidak sudah tercover semua. jangan berhenti memahami / reasoning kalau belum semua file md yang saya sebutkan kamu baca dengan detail. kalau mau memastikan semua informasi sudah kamu baca itu tolong bacanya secara random tidak selalu dari atas kebawah agar kamu bisa menemukan potensi masalah disitu

### "posisikan" prompt:
tolong pastikan kamu sudah paham semua instruksiku tanpa ada yang terlewat sedikitpun, tolong kerjakan se-profesional mungkin sebagai senior web engineer yang terbaik. pastikan kamu mengerjakan sesuai dengan scope instruksiku dan tidak ada perubahan yang kamu lakukan diluar dari scope instruksiku ini.

### "kalimat_akhir" prompt:
pastikan kamu baca referensi ini juga untuk konsistensi dan aturan yang ada di repo ini agar kamu tidak melakukan perubahan yang se-enaknya atau diluar dari aturan di repo ini, agar tetap konsisten tanpa metode baru yang membuat ambigu, tolong baca dengan baik rulesnya agar tidak terjadi kesalahan dalam flow kerja

### Update rekap template
-- untuk merangkum --
tolong analisa feedback masalah yang di berikan oleh client/user ini 

<file disini> 

tolong pastikan kamu menganalisa baik-baik dan mengecek dibagian mana saja kemungkinan issue ini terjadi, pastikan sebelum kamu menganalisa issue ini, kamu sudah memastikan semua informasi yang di berikan oleh client/user ini sudah kamu pahami dan baca dengan baik. setelah itu, pastikan kamu menganalisa issue ini dengan sangat baik dan cermat. kemudian cek semua code yang sudah kamu cari untuk memastikan letak masalahnya dari sisi teknis/code. dan kemudian hasil analisamu dan juga perncanaanmu untuk memperbaiki masalah tersebut secara teknis juga kamu rangkum disini (fokus di rekap notes saja, jangan dulu coding / perubahan di sisi lain selain di rekap notes tersebut. saya mau tau hasil analisa dan investigasi dan planningmu untuk case ini seperti apa, jadi jangan update di sisi code atau sejenisnya dulu)

<file disini> 

-- untuk implementasi --
setelah itu hasil investigasimu untuk rekap notes dibawah ini. (sudah saat implementasi semua hasil yang sudah kamu buat di rekap notes itu ke implementasi kode)

<file disini> 

tolong implementasi dari sisi code berdasarkan instruksi yang sudah kamu rancang dengan sangat baik di rekap notes tersebut. kamu baca dengan baik rekap notes template diatas tanpa ada yang terlewatkan sedikitpun. pastikan semuanya sudah kamu cover disetiap instruksi per bari dari rekap notes tersebut agar tidak ada masalah yang terjadi. jadi tolong pastikan kamu analisa seluruh folder yang terlibat dan di sebutkan di md file masing-masing tersebut, kemudian. setelah semuanya telah kamu implementasi tanpa ada masalah / error tersebut, pastikan kamu mengupdate test case agar nanti kalau sudah release itu bisa di test oleh QA. silahkan diupdate di masing-masing test casenya

<file disini> 

silahkan baca referensi ini untuk memperkuat knowledge mu dan meminimalisir kesalah yang terjadi dari sisi informasi yang ada direferensi-referensi tersebut

<referensinya ada disini>

jika ada endpoint yang harus dibuat (tidak boleh pakai async supabase atau this.supabase lagi) , baca referensi ini untuk buat endpoint rpc baru tersebut, usahakan penamaannya proper dan di letakkan disini docs/suppabase_docs/
TOLONG LAKUKAN DENGAN CEPAT TAPI JANGAN SAMPAI MENGURANGI AKURASI PEKERJAANMU TETAP PASTIKAN AKURAT. TOLONG DIPERCEPAT!

### note untuk endpoint yang akan berubah
nb: pastikan kamu membaca referensi tabel ini jika ada relasinya/perubahan didalam tabelnya, dan jika ada penambahan endpoint, pastikan untuk membuat dokumentasi endpointnya dalam bentuk md file disini 
docs/suppabase_docs/supabase_query_response
dan sesuaikan dengan template md file untuk dokumentasi endpoint 
create_md_file_template.md
, begitupun dengan update endpointnya, harus mengupdate juga md filenya dengan betul-betul mengikuti templatenya juga, jangan menghilangkan informasi yang sudah ada jika tidak diperlukan (INGAT, INI DILAKUKAN JIKA ADA YANG PERLU DIUBAH DI ENDPOINTNYA ATAU HARUS BUAT BARU DIBANDINGKAN PAKAI this.supabase bla bla bla itu, jangan dipaksakan, ini hanya informasi untuk referensimu)

### INTRO
ADA BEBERAPA FEEDBACK , TOLONG KAMU CATAT SETIAP POINTNNYA INI KEDALAM SINI
{folder yang dimasukkan rekapnotes dan test-case}

INGAT INI TIDAK ADA PERUBAHAN CODE, KAMU WAJIB MENGANALISA DAN MENGINVESTIGASI FEEDBACK DIBAWAH DENGAN SANGAT TELITI. TERUS KAMU SEOLAH-OLAH MENJADI CLIENT YANG MEMBERIKAN FEEDBACK INI DAN MENJELASKAN LEBIH AWAM DISETIAP FOLDER DI FILE poin_{number}.md ini. TOLONG DENGAN SANGAT, JANGAN MENGUBAH CODE, SETELAH ITU KAMU JELASKAN SETIAP FOLDER recapt-notes-template.md NYA, UNTUK KAMU TEMPUNG DENGAN SANGAT LENGKAP DAN JELAS DAN DETAIL SEPANJANG YANG KAMU BISA JELASKAN TERKAIT MASALAHNYA YANG KAMU ANALISA DAN TELITI BESERTA SOLUSI TERDETAIL SECARA TEKNIS MAUPUN NONTEKNISNYA. PASTIKAN FEEDBACKMU INI TIDAK ADA YANG TERLEWATKAN SEDIKITPUN. JADI TOLONG LAKUKAN ANALISA SE MENDETAIL MUNGKIN. TANPA ADA YANG TERLEWATKAN, PASTIKAN SEMUANYA SUDAH TERCOVER DENGAN BAIK AGAR BISA DIBERIKAN KE AI AGENT LEBIH AKURAT DALAM MENYELESAIKAN MASALAHNYA DARI SISI CODE NANTINYA. INGAT JANGAN CODING DULU. FOKUS DI REKAP NOTES SAJA, SELAIN ITU BELUM PERLU DI PROMPT SEKARANG. JANGAN MELAKUKAN SESUATU DILUAR DARI INSTRUKSIKU INI

### ERROR DARI SENTRY
berikut ini dokumentasi error yang berasal dari sentry. tolong baca dan jelaskan error tersebut dengan sangat baik dan cermat. pastikan kamu sudah memahami semua informasi yang ada di dalam dokumentasi error tersebut. kemudian jelaskan error tersebut dengan sangat baik dan cermat. pastikan kamu sudah memahami semua informasi yang ada di dalam dokumentasi error tersebut. kemudian jelaskan error tersebut dengan sangat baik dan cermat. pastikan kamu sudah memahami semua informasi yang ada di dalam dokumentasi error tersebut. kemudian jelaskan error tersebut dengan sangat baik dan cermat.