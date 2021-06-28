let btn = document.querySelector("button");
let div = document.querySelector("div");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

btn.addEventListener("click", function () {
  fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9c5aef89bemsh83112047e4398a9p1faef8jsn9d1ff4189521",
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data.body.map((item) => {
        const { setup, punchline } = item;
        // let h2 = document.createElement('h2');
        h2.textContent = setup;
        // let h3 = document.createElement('h3');
        h3.innerText = punchline;
        // div.appendChild(h2);
        // div.appendChild(h3)
      });
    })
    .catch((err) => {
      console.error(err);
    });
});
