// "use strict";
import { usuarios } from "./modulo.js";

const $root = document.querySelector("#root");
const $div = document.createElement("div");

// let texto = "Este seria el texto del elemento"
// $div.textContent = texto;
// $div.classList.add("box");
// $root.appendChild($div);

const $texto = document.createTextNode("Este seria el texto del elemento");


usuarios().then((listado) => {
  listado.forEach(usuario => {
    const $div = document.createElement("div");
    $div.classList.add("box")
    $div.textContent = usuario.name;
    $root.appendChild($div)

    const $username = document.createElement("div");
    $div.classList.add("box")

    $username.textContent = usuario.username;
    $div.appendChild($username)

    const $email = document.createElement("div");
    $div.classList.add("box")
    $email.textContent = usuario.email;
    $div.appendChild($email);


    const $address = document.createElement("div");
    $div.classList.add("box")
    $address.textContent = usuario.address.street;
    $div.appendChild($address)

    const $address2 = document.createElement("div");
    $div.classList.add("box")
    $address2.textContent = usuario.address.suite;
    $div.appendChild($address2)

    const $address3 = document.createElement("div");
    $div.classList.add("box")
    $address3.textContent = usuario.address.city;
    $div.appendChild($address3)

    const $address4 = document.createElement("div");
    $div.classList.add("box")
    $address4.textContent = usuario.address.zipcode;
    $div.appendChild($address4)


    // segundo arreglo

    const $geo =document.createElement("div");
    $div.classList.add("box");
    $geo.textContent = usuario.address.geo.lat;
    $div.appendChild($geo)

    const $geo2 =document.createElement("div");
    $div.classList.add("box");
    $geo2.textContent = usuario.address.geo.lng;
    $div.appendChild($geo2);

    // -------------------------------------

    const $phone = document.createElement("div");
    $div.classList.add("box")

    $phone.textContent = usuario.phone;
    $div.appendChild($phone)

    const $website = document.createElement("div");
    $div.classList.add("box");
    $website.textContent = usuario.website;
    $div.appendChild($website);

    // -----------------------

    const $company = document.createElement("div");
    $div.classList.add("box");
    $company.textContent = usuario.company.name;
    $div.appendChild($company);


    const $catchPhras = document.createElement("div");
    $div.classList.add("box")
    $catchPhras.textContent = usuario.company.catchPhras;
    $div.appendChild($catchPhras);











    
    })
  });
