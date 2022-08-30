let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

// A
// Ubah data dengan spread operator
let dataBaru = {...data, hobby: ["Menonton film", "Bermain game", "Membaca buku"]};
dataBaru.name = "Muhammad Rhefa Farizi";
dataBaru.email = "rhefa.farizi@gmail.com";

console.log(dataBaru);

// B
// Destructuring
let {street, city} = data.address;
console.log(`Saya tinggal di jalan ${street} kota ${city}`)