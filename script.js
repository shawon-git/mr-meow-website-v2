const members = [
  {
    name: "Sudipto Nandi Shawon",
    title: "Leader",
    bio: "",
    photo: "assets/member-shawon.jpg"
  },
  {
    name: "Shougoto Hazra Partho",
    title: "Member #2",
    bio: "",
    photo: "assets/member-partho.png"
  }
];

const grid = document.getElementById("membersGrid");
if (grid) {
  grid.innerHTML = members.map(member => `
    <article class="member-card">
      <img src="${member.photo}" alt="${member.name}">
      <div class="member-info">
        <h3>${member.name}</h3>
        <div class="title">${member.title}</div>
        ${member.bio ? `<p>${member.bio}</p>` : ""}
      </div>
    </article>
  `).join("");
}

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
if (menuBtn && nav) menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".theme-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
    btn.textContent = next === "light" ? "☀" : "☾";
  });
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
document.querySelectorAll(".theme-toggle").forEach(btn => btn.textContent = document.documentElement.dataset.theme === "light" ? "☀" : "☾");

function adminLogin(){
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const msg = document.getElementById("loginMsg");
  if(u === "Shawon229" && p === "607070"){
    msg.textContent = "Login successful. Member editing is manual in script.js for this version.";
    msg.style.color = "#ff8a00";
  } else {
    msg.textContent = "Wrong username or password.";
    msg.style.color = "#ff5a00";
  }
}
