"use strict";

const inp = document.querySelector("#input");

inp.addEventListener("keypress", ishla);

function ishla(e) {
  let username = inp.value;

  if (e.keyCode == 13) {
    console.log(username);

    const urll = async function () {
      const fetchh = await fetch(`https://api.github.com/users/${username}`);
      const javob = await fetchh.json();

      console.log(javob.updated_at);
      console.log(javob);
    };

    urll();
  }
}

//  updated_at


