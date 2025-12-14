
const { createRoot } = ReactDOM;

function Snowfall() {
  const count = 120;

  const flakes = Array.from({ length: count }, () => ({
    left: Math.random() * 100 + "%",
    duration: Math.random() * 15 + 10 + "s",
    delay: Math.random() * 8 + "s",
    size: Math.random() * 14 + 10 + "px",
    opacity: Math.random() * 0.6 + 0.4,
    swing: Math.random() * 160 - 80 + "px"
  }));

  return React.createElement(
    "div",
    { className: "snow-container" },
    flakes.map((f, i) =>
      React.createElement("div", {
        key: i,
        className: "snowflake",
        style: {
          left: f.left,
          animationDuration: f.duration,
          animationDelay: f.delay,
          fontSize: f.size,
          opacity: f.opacity,
          "--swing": f.swing
        }
      }, "❅")
    )
  );
}


createRoot(document.getElementById("snow")).render(React.createElement(Snowfall));

let block = document.querySelector('.hero_content')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 60 * dx / window.innerWidth / 2
    let angleY = 60 * dy / window.innerHeight / 2
    block.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})