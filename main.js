var numbers = [5, 3, 1, 7, 4, 13, 16];
//Sayıları sıralama
document.write(
  numbers.sort((a, b) => {
    return a - b;
  })
);
//karşılaştırma yapmanın en kolay özelliği bibirinden çıkarmaktır.

var cars = [
  {
    marka: "BMW",
    yil: 2027,
  },
  {
    marka: "Mercedes",
    yil: 2013,
  },
  {
    marka: "Volvo",
    yil: 2009,
  },
];

cars.sort((araba1, araba2) => {
  return araba1.marka.localeCompare(araba2.marka);
});
console.log(cars);

//array ıtteratıon
var cars = [
  {
    marka: "BMW",
    yil: 2027,
  },
  {
    marka: "Mercedes",
    yil: 2013,
  },
  {
    marka: "Volvo",
    yil: 2009,
  },
  {
    marka: "Ferrari",
    yil: 2009,
  },
  {
    marka: "Porshe",
    yil: 2010,
  },
];

//foreach > dizide ki herbir eleman için fonk çalışıtırır

cars.forEach((araba) => {
  document.write("Araba markas" + araba.marka + "<br>");
});

//map > return zorunluluğu

const yeniSayilar = numbers.map((sayi) => {
  return sayi * 2;
});

console.log("eski>>", numbers);
console.log("yeni>>", yeniSayilar);

// DATE : TARİH OLUŞTURMANIN EN KOLAY YOLU DATE OBJESİDİR.

document.write("-------------------------------------" + "<br>");

const tarih = new Date();

//istediğimiz tarihten
const tarih2 = new Date("01/10/2000");

document.write("tarih: " + tarih + "<br>" + "<br>");

document.write("tarih: " + tarih2 + "<br>" + "<br>");

//okunabilir formata getiriyor
document.write("toDateString: " + tarih.toDateString() + "<br>" + "<br>");

document.write("toUTCString: " + tarih.toUTCString() + "<br>" + "<br>");

document.write("toISOString: " + tarih.toISOString() + "<br>" + "<br>");
// bilgisar tarih formul
document.write(
  "toLocaleDateString: " + tarih.toLocaleDateString() + "<br>" + "<br>"
);

// Date get methodları > tarihin belirli bölümleerini almak ALMAK

document.write("getFullYear: " + tarih.getFullYear() + "<br>" + "<br>");

document.write("getMonth: " + (tarih.getMonth() + 1) + "<br>" + "<br>");
//ayın günü
document.write("getDate: " + tarih.getDate() + "<br>" + "<br>");
//haftanın günü
document.write("getDay: " + tarih.getDay() + "<br>" + "<br>");
//saat
document.write("getHours: " + tarih.getHours() + "<br>" + "<br>");

document.write("getMinutes: " + tarih.getMinutes() + "<br>" + "<br>");

document.write("getSeconds: " + tarih.getSeconds() + "<br>" + "<br>");

document.write("getMilliseconds: " + tarih.getMilliseconds() + "<br>" + "<br>");
//1970den bu zamana kadar geçen süreyi milisaniye olarak göstermek
document.write("getTimes: " + tarih.getTime() + "<br>" + "<br>");

document.write("-------------------------------------" + "<br>");

// DATE set methodları >

tarih.setFullYear(2020);
tarih.setMonth(2);
tarih.setHours(10);
tarih.setMinutes(40);

document.write("getFullYear: " + tarih + "<br>" + "<br>");

document.write("-------------------------------------" + "<br>");

örnek;

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

// Bu dört satırda, document.getElementById fonksiyonunu kullanarak HTML belgesindeki id'si sırasıyla "hour", "minutes", "seconds" ve "ampm" olan elementleri seçiyoruz ve bunları hourEl, minuteEl, secondEl ve ampmEl değişkenlerine atıyoruz. Bu değişkenler daha sonra saat, dakika, saniye ve AM/PM bilgilerini güncellemek için kullanılacak.

//Bu satırda, saat güncelleme işlevi olan updateClock isimli bir fonksiyon tanımlıyoruz.
function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";//Bu satırda, başlangıç değeri "AM" olan bir ampm değişkeni tanımlıyoruz. Bu değişken, saatin AM mi yoksa PM mi olduğunu belirlemek için kullanılacak.
 // Bu üç satırda, new Date() objesi ile şu anki tarihi ve saati alıyoruz. getHours() metoduyla saat, getMinutes() metoduyla dakika ve getSeconds() metoduyla saniye bilgilerini alıyoruz ve bunları sırasıyla h, m ve s değişkenlerine atıyoruz.
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
//Bu koşulda, eğer saat (h) 12'den büyükse, 12 çıkararak 12 saatlik formatta göstermek için h değişkenini güncelliyoruz ve ampm değişkenini "PM" olarak ayarlıyoruz.
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
//Bu üç satırda, saat (h), dakika (m) ve saniye (s) değerlerini kontrol ediyoruz. Eğer herhangi bir değer 10'dan küçükse, başına "0" ekliyoruz (örneğin, 9'u "09" yapmak için). Bu, saatin daha düzgün görünmesini sağlıyor.
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
//Bu dört satırda, hourEl, minuteEl, secondEl ve ampmEl elementlerinin innerText özelliğini sırasıyla saat (h), dakika (m), saniye (s) ve AM/PM (ampm) değerleri ile güncelliyoruz. Bu, HTML sayfasındaki ilgili alanların yeni saat, dakika, saniye ve AM/PM bilgileri ile güncellenmesini sağlıyor.

//Bu satırda, setTimeout fonksiyonunu kullanarak updateClock fonksiyonunu 1 saniye (1000 milisaniye) sonra tekrar çağırıyoruz. Bu, saatin her saniye güncellenmesini sağlıyor.

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
//Bu satırda, updateClock fonksiyonunu çağırıyoruz, böylece saat güncellenmeye başlıyor ve her saniye kendini yeniliyor.

Bu kod parçası, bir dijital saati her saniye güncelleyerek HTML belgesinde göstermek için kullanılır.

setTimeout(() => {
  console.log("Bu mesaj 3 saniye sonra görünecek.");
}, 3000);

function selamVer() {
  console.log("Merhaba!");
}

setTimeout(selamVer, 2000); //setTimeout, zamanlamaya dayalı görevler için kullanışlıdır. Örneğin:

//Bir animasyonu belirli bir süre sonra başlatmak.
//Kullanıcı etkileşiminden sonra kısa bir gecikme ile bir bildirim göstermek.
//Bir işlemi belirli bir süre sonra yeniden denemek.

//MATH OBJESİ

document.write("Pi: " + Math.PI + "<br>" + "<br>");

document.write("E: " + Math.E + "<br>" + "<br>");

document.write("-------------------------------------" + "<br>");

// Math Metodları

//math rondom
document.write(Math.random() * 10 + "<br>" + "<br>");
//math max
document.write(
  "math max:" + Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9) + "<br>" + "<br>"
);

//math min
document.write(
  "math min:" + Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9) + "<br>" + "<br>"
);
//bir sayıyı yuvarlamak en yakın tamsayıya yuvarlıyor
document.write("Round: " + Math.round(3.15) + "<br>" + "<br>");

document.write("Round: " + Math.round(3.65) + "<br>" + "<br>");

//en yakın büyük tamsayı
document.write("ceil: " + Math.ceil(3.15) + "<br>" + "<br>");

//en yakın küçük tamsayı
document.write("floor: " + Math.floor(3.95) + "<br>" + "<br>");

//tam kısmını alır 10 mesela
document.write("trunc: " + Math.trunc(10.55) + "<br>" + "<br>");

//üssünü almaya yarar
document.write("pow: " + Math.pow(3, 2) + "<br>" + "<br>");

//karesini almaya yarar
document.write("sqrt: " + Math.sqrt(16) + "<br>" + "<br>");

//mutlak değer
document.write("abs: " + Math.abs(-10) + "<br>" + "<br>");

//KARŞILAŞTIRMALAR
/*
== eşit olduğunu kontrol eder
=== hem değeri hem tipi eşit mi 10 === "10"
!= eşit değil mi
!== hem değeri hem türü eşit değil
>
<
>=
<=

*/
//koşulumuz true ise bu satırı değilse bu bu satırır
document.write("1 == '1' :" + Boolean(1 == "1") + "<br>" + "<br>");

document.write("1 === '1':" + Boolean(1 === "1") + "<br>" + "<br>");

document.write("1 != 3:" + Boolean(1 != 3) + "<br>" + "<br>");

document.write("1 !== '1': " + Boolean(1 !== "1") + "<br>" + "<br>");

document.write("3 > 5: " + Boolean(3 > 5) + "<br>" + "<br>");

document.write("3 < 5: " + Boolean(3 < 5) + "<br>" + "<br>");

document.write("3 >=4 : " + Boolean(3 >= 4) + "<br>" + "<br>");

document.write("3 <= 2: " + Boolean(3 <= 2) + "<br>" + "<br>");

// her iki koşulun doğru olmasını bekler (ve &&)
document.write("3 > 5 && 1 < 3 " + Boolean(3 > 5 && 1 < 3) + "<br>" + "<br>");

//yalnızca birinin doğru olması yeterli (veya || )
document.write("3 > 5 && 1 < 3 " + Boolean(3 > 5 || 1 < 3) + "<br>" + "<br>");

// KOŞULLAR
let sayi1 = 5;
let sayi2 = 10;

// if(koşul>condition)
//koşul
if (sayi1 < 20) {
  //koşul gerçekleşirse çalışacak kodu gerçekleşmezse çalışmıyor
  document.write("Sayı1 20 den küçüktür" + "<br>");
}

//else > eğer koşul gerçekleşmezse devreye girer.

if (sayi2 < 15) {
  //eğer sayi 2 15den küçükse burası çalışır.
} else {
  //eğer sayi 2 15den büyükse burası çalışır
}

if (sayi2 > 10) {
  document.write("Sayı2 10dan büyüktür" + "<br>");
} else {
  document.write("Sayı2 10 veya daha küçüktür" + "<br>");
}

if (sayi1 > sayi1) {
  document.write("Sayı1 sayı2den büyüktür." + "<br>");
} else if (sayi1 > 10) {
  document.write("Sayı1 sayı2den küçük ama 10 dan büyüktür" + "<br>");
} else {
  document.write("Sayı1 hem sayı2 hem 10'dan küçüktür." + "<br>");
}

//birden çok koşulu test etme

// iki koşulda doğru olmalı
if (sayi1 < 10 && sayi2 < 20) {
  document.write("Sayı1 10'dan küçük ve sayi2 20den küçük" + "<br>");
}

//iki koşuldan 1i doğru olması yeterli
if (sayi1 < 10 || sayi2 < 20) {
  document.write("Sayı1 3'ten küçük veya sayi2 10dur" + "<br>");
}

//terneray operator ? : > tek satırda if else yazma ?=if :=değilse

let ahmetYas = 19;

let durum = ahmetYas > 18 ? "ehliyet alabilirsin" : "ehliyet alamazsın";

document.write(durum + "<br>");

// If-Else: Karmaşık koşullar veya birden fazla mantıksal ifade kontrol edilmesi gerektiğinde.

//SWITCH CASE

// Switch-Case: Tek bir değişkenin birden fazla olası değeri kontrol edilmesi gerektiğinde ve bu değerlerin sabit olduğu durumlarda.

let gun = 3;

switch (gun) {
  case 1: //gün 1 olma durumunda
    document.write("Bugün Pazartesi" + "<br>");
    break; //
  case 2:
    document.write("Bugün Salı" + "<br>");
    break;
  case 3:
    document.write("Bugün Çarşamba" + "<br>");
    break;
    default:
    document.write("Gün Bulunamadı" + "<br>");

}

document.write("-------------------------------------" + "<br>");

//DÖNGÜLER

const meyveler = ["Elma", "Armut", "Muz", "Karpuz"];

for (let i = 0; i < meyveler.length; i++) {
  //   document.write(i + "Döngü Çalıştı" + "<br>");
  document.write(i + "ninci eleman" + meyveler[i] + "<br>");
}

document.write("-------------------------------------" + "<br>");

for (eleman in meyveler) {
  document.write(eleman + "ninci eleman" + meyveler[eleman] + "<br>");
}

document.write("-------------------------------------" + "<br>");

//while döngüsü
//koşul gerçekleşene kadar yap

let sayac = 0;
while (sayac < meyveler.length) {
  document.write(sayac + "ninci eleman" + meyveler[eleman] + "<br>");
  sayac++;
}

//DO WHILE

let sayac2 = 0;

do {
  document.write(sayac2 + "ninci eleman" + meyveler[eleman] + "<br>");
  sayac2++;
} while (sayac2 < meyveler.length);

//prompt alert popup

// const girilenYas = prompt("Yaşınızı giriniz");

// document.write(girilenYas + "<br>");

// alert("Yaşınız çok küçük");

// const durum1 = confirm("devame etmek isityor musunuz?");

// document.write((durum1 ? "devam edecek" : "devam etmeyecek") + "<br>");

//hata yakalama try catch = kodlarda oluşacak olası hataları yakalama.işlem doğru ise yanlış ise hatayı ele almak

// let x = 10;

// try {
//   let z = x + y;
//   document.write(z);
// } catch (error) {
//   alert("HATA OLUŞTU");
// }
