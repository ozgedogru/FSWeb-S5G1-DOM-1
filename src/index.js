const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

document.querySelectorAll("nav > a")[0].textContent = "Servisler";
document.querySelectorAll("nav > a")[1].textContent = "Ürünler";
document.querySelectorAll("nav > a")[2].textContent = "Vizyon";
document.querySelectorAll("nav > a")[3].textContent = "Özellikler";
document.querySelectorAll("nav > a")[4].textContent = "Hakkımızda";
document.querySelectorAll("nav > a")[5].textContent = "İletişim";

document.getElementsByTagName("a").className = "italic";

document.getElementById("logo-img").src = "../mocks/img/logo.png";

document.querySelector(".cta-text h1").textContent = "Bu DOM Mükemmel!";
document.querySelector(".cta-text button").textContent = "Başlayın";

document.getElementById("cta-img").src = "../mocks/img/cta.png";

const baslikArr = document.querySelectorAll(".main-content .text-content h4");

const icerikArr = document.querySelectorAll(".main-content .text-content p");

baslikArr[0].textContent = "Özellikler";
icerikArr[0].textContent =
  "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

baslikArr[1].textContent = "Hakkında";
icerikArr[1].textContent =
  "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.getElementById("middle-img").src = "../mocks/img/accent.png";

baslikArr[2].textContent = "Servisler";
icerikArr[2].textContent =
  "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

baslikArr[3].textContent = "Ürünler";
icerikArr[3].textContent =
  "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

baslikArr[4].textContent = "Vizyon";
icerikArr[4].textContent =
  "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.querySelector(".contact h4").textContent = "İletişim";

document.querySelectorAll(".contact p")[0].textContent =
  "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";
document.querySelectorAll(".contact p")[1].textContent = "+90 (123) 456-7899";
document.querySelectorAll(".contact p")[2].textContent =
  "satis@birsirketsitesi.com.tr";

document.querySelector("footer > a").className = "bold";
document.querySelector(".bold").textContent =
  "Copyright Bir Şirket Sitesi 2022";
