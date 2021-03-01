import ClearCloud from './clearCloud'

export default function  createCloud() {
    let usaNuvem = JSON.parse(localStorage.getItem("usaNuvem"));

    if (usaNuvem || usaNuvem == null) {
      let wWidth = window.innerWidth;
      let wHeight = window.innerHeight;
      for (let i = 0; i < 6; i++) {
        let div = document.createElement("div");
        div.className = "cloudBase";
        let x = Math.floor(Math.random() * wHeight);
        let y = 0;
        let half = wWidth / 2;
        if (i % 2 == 0) {
          //par
          do {
            y = Math.floor(Math.random() * half + 0);
          } while (y > wWidth);
          div.style.animationDirection = "alternate";
        } else {
          //impar
          do {
            y = Math.floor(Math.random() * wWidth + half);
          } while (y > wWidth);
          div.style.animationDirection = "alternate-reverse";
        }
        div.style.top = x + "px";
        div.style.left = y + "px";
        document.querySelector(".Login_background").append(div);

        for (let j = 0; j < 5 + Math.round(Math.random() * 10); j++) {
          let cloud = document.createElement("div");
          cloud.className = "cloudLayer";
          let random_x = Math.random() * 512;
          let random_y = Math.random() * 512;
          let random_a = Math.random() * 360;
          let random_s = 0.25 + Math.random();
          random_x *= 0.3;
          random_y *= 0.3;

          let t = "rotateZ( " + random_a + "deg )  scale( " + random_s + " )";
          cloud.style.transform = t;
          cloud.style.top = random_x + "px";
          cloud.style.left = random_y + "px";
          div.appendChild(cloud);
        }
      }

      document.querySelector(".CloudControl").classList.remove("Disable");
    } else {
      const CloudControl = document.querySelector(".CloudControl");
      const styles = window.getComputedStyle(CloudControl);

      const newPosition = {
        top: styles.top,
        left: styles.left,
        animation: "none",
      };

      let bases = document.querySelectorAll(".cloudBase");

      bases.forEach((base) => {
        base.style.top = newPosition.top;
        base.style.left = newPosition.left;
      });

      setTimeout(function () {
        bases.forEach((base) => {
          base.classList.add("fade");
        });

        setTimeout(ClearCloud, 1000);
        document.querySelector(".CloudControl").classList.add("Disable");
      }, 1);
    }
  }