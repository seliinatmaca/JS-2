//use strict;

// katı mod
//javascriptin bize serbest bıraktığı konularda use strict mode devreye girerse eğer bunları engellemeye yarıyor.
//her şeyi istediğimiz gibi yapamıyoruz bazı kuralları var o kuralların dışarı çıktığımızda bize hata veriyor.

//şunları şunları yapamazsın. bu kurallara dikkat et diyor.

//"use strict"; //bütün projede geçerli olur

y = 100; //yasak

//olması gereken
// const x = 1;

// function islemYap() {
//   "use strict";
//   //z = 40;
// }
// islemYap();

// //aynı isme sahip parametreler yasak

// function deneme(a, a) {
//   // aynı iki parametreyi yazamıyorum
// }

// //YASAKLI KELİMELER
// //public > static > package > interface

// let public;

// //proje de dikkatsizlikten kaynaklı yaptığımız hatalar için bize uyaran ve bir takım kurallar koyan yazım kodu

// // EcmaScript (ES 1) > İLK SÜRÜM 1997

// // ES 1 > ES 2 > ES 3 > ES 4 > ES 5 > ES 6 2015

// let text =
//   "SELAMLAR \
// MERHABA \
// ";

// let dizi = ["a", "b"];
// console.log(text[3]);

// console.log(Array.isArray(text));
// console.log(Array.isArray(dizi));

// //spread operator >>>herhangi bir diziyi parçalara bölmemize dağıtmamıza yarıyor

// let dizi2 = [1, 2, 3, 20, 5, 6, 5];

// console.log(Math.max(dizi2));

// console.log(Math.max(...dizi2));

// function topla(a, b, c, d, e, f, g) {
//   return a + b + c + d + e + f + g;
// }

// console.log(topla(...dizi2));

// // obje methodları

// const person = {
//   name: "selin",
//   lastname: "atmaca",
//   yas: 10,
// };

// //entries ve values

// //anahtar- değer çiftlerini verir-entries
// console.log(Object.entries(person));

// //sadece dğerler
// console.log(Object.values(person));

// //! ASYNC > Gerçekleşmesi belirli bir zaman alan işlemler > Ağ istekleri >Veri Tabanı sorguları
// function ekranaBas() {
//   console.log("adım 1");
// }

// console.log("adım 2");

// setTimeout(ekranaBas, 2000);
// console.log("adım 3");

// // Promise (başarılı > data,  başarısız > hata mesajı) (resolve,reject)

// // function veriyiCek() {
// // clg "Veri başarıyla çekildi";
// // }

// // veriyiCek()
// //   .then(() => {})
// //   .catch(() => {});

// function getData(data) {
//   return new Promise((resolve, reject) => {
//     console.log("Veri çekilmeye başlandı");

//     if (data) {
//       resolve("Veri çekilmeye başlandı");
//     } else {
//       reject("Hata oluştu");
//     }
//   });
// }

// //then >catch
// getData(true)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     alert(error);
//   });

// // ASYNC > AWAIT

// async function datayiCek() {
//   try {
//     const gelenData = await getData(true);
//     console.log(gelenData);
//   } catch (error) {
//     alert(error);
//   }
// }
// datayiCek();

//! DOM > Document Object Model
console.log(document);
// DOM Methodları
const baslik = document.getElementById("baslik");
const paragraf = document.getElementById("paragraf");

console.dir(baslik);

baslik.innerText = "<b>JS</b> tarafından değiştirildi.";
paragraf.innerText = "Burayı da js den yönetiyorum";

paragraf.innerHTML = "Burayı da  <b>JS</b> den yönetiyorum";

//DOM elemanlarını çekme methodları
// getElementById > id ye göre çeker
document.getElementById("baslik");

//getElementsByClassName
const listeElemanları = document.getElementsByClassName("list");
console.log(listeElemanları);

//getElementsByTagName > o etikete sahip olan bütün elemanlar
const liste = document.getElementsByTagName("ul");
console.log(liste);
console.log(liste[0]);

//querySelector > yukarıda ki üç methodunda işini yapar
const buton = document.querySelector("button");
console.log(buton);

const butonlar = document.querySelectorAll("button");
console.log(butonlar);

//classlist > elemanın classlarından oluşna bir dizi
const etütSınıfı = document.querySelector(".baslik");

console.log(etütSınıfı.classList);

// classlist.add > yeni class ekler
etütSınıfı.classList.add("kirmizi");

// classlist.remove > varolan clası çıkarır
etütSınıfı.classList.remove("buyuk");

//classlist.toggle > verilen class varsa çıkarır yoksa ekler
etütSınıfı.classList.toggle("kirmizi");
etütSınıfı.classList.toggle("kirmizi");

//style üzerinde işlem yapma
const yeniButon = document.querySelector(".yesilbuton");

console.log(yeniButon.style);

yeniButon.style.backgroundColor = "red";
yeniButon.style.padding = "10px 20px";
yeniButon.style.color = "white";

//js de html elemanları ouşturma
//createElement > html elemanı oluşturma
const item = document.createElement("li");
item.innerText = "Adım 5";
liste[0].appendChild(item);
