export default function clearCloud() {
    if (!JSON.parse(localStorage.getItem("usaNuvem"))) {
      const bases = document.querySelectorAll(".cloudBase");

      bases.forEach((base) => {
        base.remove();
      });
    }
  }