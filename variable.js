let nama = "Melati" //menyimpan data string
let umur = 17 //menyimpan data numerik
let status_menikah = false //menyimpan data boolean

const url = "http://smktelkom-mlg.sch.id"
const port = 8080

let nama_siswa1 = "Noa"
let nis_siswa1 = "101"
let jurusan_siswa1 = "RPL"

let nama_siswa2 = "Kazama"
let nis_siswa2 = "102"
let jurusan_siswa2 = "TKJ"

let siswa1 = {
    nis: "101",
    nama: "Noa",
    jurusan: "RPL"
}

let siswa2 = {
    nis: "102",
    nama: "Kazama",
    jurusan: "TKJ"
}

let siswa1 = {
    nis: "101",
    nama: "Noa",
    jurusan: "RPL"
}

//menampilkan nama siswa1
console.log("Nama Siswa 1 = " + siswa1.nama);

//mengubah nama siswa 1 menjadi Noa Kazama
siswa1.nama = "Noa Kazama"

//menampilkan nama setelah diubah
console.log("Nama Siswa 1 = " + siswa1.nama);