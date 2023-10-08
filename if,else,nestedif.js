let nama = 'Rachmat Mulandani'
let umur = 20

alert(`Nama saya adalah ${nama}, umur saya adalah ${umur}`)

// // if, else, nested if

const game = 'Mobile Legends'

if (game == 'Mobile Legends') {
    console.log('Mobile Legends');
}

let legend = prompt('Apakah kamu memiliki skin legend?')

if (legend == 1){
  legend = 'punya skin legend'
}else {
  legend = 'tidak punya skin legend'
}
alert(`Nama saya adalah ${nama}, umur saya adalah ${umur}, saya ${legend}`)

let angka = prompt('Masukkan angka')

if (angka >=3 && angka <=5){
    if (angka >3){
        console.log('Genshin');
    }else{
        console.log('Get rich');
    }
}else if (angka <3){
    console.log('Mobile Legends');
}else{
    console.log('Ninja Heroes');
}
