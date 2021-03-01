export default function toogleNuvem() {
    let novoValor = JSON.parse(localStorage.getItem("usaNuvem"));

    novoValor = novoValor == null ? true : novoValor;

    localStorage.setItem("usaNuvem", !novoValor);

    const bases = document.querySelectorAll(".cloudBase");

    if (bases != null) {
      setTimeout(function () {
        bases.forEach((base) => {
          base.classList.add("begin");
        });
      }, 1);

      setTimeout(function () {
        bases.forEach((base) => {
          base.classList.remove("begin");
        });
      }, 10872);
    }
  }
 