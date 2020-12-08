// format for loop
for (statement 1; statement 2; statement 3) {
    // code block to be executed
}

// contoh for loop
for (let index = 1; index <= 10; index++) {
    console.log("Perulangan ke-" + index)
}

// for/in loop
let siswa = { 
    nama: "Devano Abe",
    gender: "Laki - Laki",
    jurusan: "RPL",
    usia: "18",
    alamat: "Malang"
}

for (key in siswa){
    console.log(key);
}

// for/of Loop
let presiden = ["Soekarno", "Soeharto", "Habibie", "Gus Dur", "Megawati", "SBY", "Jokowi"]
for (pres of presiden) {
    console.log(pres)
}

// while loop
let laptop = ["Lenovo","HP","Acer","Asus"]
let i = 0
while(laptop[1]){
    console.log(laptop[i])
    i++
}

// format do.. while loop
do {
    // code block to be executed
}

// contoh do.. while loop
let gadget = ["xiaomi","Samsung","Motorola","Sony Ericson"]
let i = 0
do{
    console.log(laptop[i])
    i++
}while(gadget[i])
