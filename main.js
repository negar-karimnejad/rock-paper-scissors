const wrapper = document.querySelectorAll(".wrapper");
const container = document.querySelector(".container");
const playAgain = document.querySelector(".play-again");

let items = [];
let imageSource = [
  "image/rock.png",
  "image/paper.png",
  "image/scissors.png",
];
let ids = ["rock", "paper", "scissors"];

let randomIndex = Math.floor(Math.random() * 3);

wrapper.forEach((item) => {
  items.push(item);
  item.addEventListener("click", (e) => {
    const unChoosens = items.filter((i) => i.id !== item.id);
    unChoosens.forEach((unChoosen) => {
      unChoosen.style.display = "none";
    });

    const description = document.createElement("div");
    description.classList.add("discription");
    const score = document.createElement("p");
    score.classList.add("score");
    container.append(description);
    description.append(score);

    const competitor = document.createElement("div");
    competitor.classList.add("wrapper");
    container.append(competitor);
    const image = document.createElement("img");
    image.classList.add("img");
    image.src = imageSource[randomIndex];
    image.id = ids[randomIndex];
    competitor.append(image);

    item.replaceWith(item.cloneNode(true));

    getResult(e.target.id, image.id, score);

    playAgain.style.display = "block";
    playAgain.addEventListener("click", () => {
      window.location.reload();
    });
  });
});

function getResult(userChoise, computerChoise, score) {
  switch (userChoise + computerChoise) {
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      score.textContent = "You Lost.";
      break;
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      score.textContent = "You Win.";
      break;
    case "scissorsscissors":
    case "rockrock":
    case "paperpaper":
      score.textContent = "You Tied.";
      break;
  }
}
