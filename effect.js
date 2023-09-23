export function setupEffect() {
  const grid = document.querySelector(".grid");
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
      card.style.opacity = "0";
      card.classList.add("no-gradient");
  });

  document.addEventListener('DOMContentLoaded', () => {
      let lastCardIndex = cards.length - 1;

      cards.forEach((card, index) => {
          card.style.animation = `slideFadeIn .7s ${0.1 * (index + 1)}s forwards`;

          card.addEventListener('animationend', () => {
              card.style.animation = '';
              card.style.opacity = '';
              card.classList.remove('no-gradient');
              if (index === lastCardIndex) {
                  document.addEventListener("mousemove", (e) => {
                      grid.style.setProperty("--x", e.x + "px");
                      grid.style.setProperty("--y", e.y + "px");
                  });
              }
          });
      });
  });
}
