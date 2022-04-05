"use strict";

const inp = document.querySelector("#input");

const profil = document.querySelector(".profil");
const leftimage = document.querySelector(".left__image");

inp.addEventListener("keypress", ishla);

function ishla(e) {
  let username = inp.value;

  if (e.keyCode == 13) {
    const urll = async function (a) {
      const fetchh = await fetch(
        `https://api.github.com/users/${username}?client_id=1e0cbfc2829e1f514397&client_secret=f4bb68f93fbf8e23c7dd9f162f5a2b7ed487a53f`
      );

      const javob = await fetchh.json();

      console.log(javob);

      let html;
      html = `  <div class="left__image">
      <img src="img/pexels-kira-schwarz-11031065.jpg" alt="" />
      <a  href="${javob.html_url}" class="btn">View Profile</a>
        </div>
      <div class="right__dic">
      <div class="public">
        <p>Public Repos: <span>${javob.public_repos}</span></p>
        <p>Public Gists: <span>${javob.public_gists}</span></p>
        <p>Public Followers: <span>${javob.followers}</span></p>
        <p>Public Following: <span>${javob.following}</span></p>
      </div>
      <div class="companys">
        <p>Company: <span>${javob.company}</span></p>
        <p>Website/Blog: <span>${javob.html_url}</span></p>
        <p>Location: <span>${javob.location}</span></p>
        <p>Member Since: <span>${javob.updated_at}</span></p>
      </div>
      </div>`;

      profil.insertAdjacentHTML("afterbegin", html);
      profil.classList.remove("hidden");
      inp.value = "";
    };

    urll();
  }
}
