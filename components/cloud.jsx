import React from "react";
import CloudBtn from "../images/cloud.png";
import CreateCloud from "../pages/api/createCloud";
import ToogleCloud from "../pages/api/toogleCloud";

export default function Cloud() {

  React.useEffect(() => {
    function HasCloud() {
      let Nuvem = JSON.parse(localStorage.getItem("usaNuvem"));
      Nuvem = Nuvem == null ? true : Nuvem;

      localStorage.setItem("usaNuvem", !Nuvem);

      if (Nuvem) {
        ToogleCloud();
        CreateCloud();
      }
    }
    HasCloud();
  }, []);

  const functions = () => {
    ToogleCloud();
    CreateCloud();
  };

  return (
    <>
      <div className="Login_background">
        <div
          className="CloudControl OSInline"
          title=" Ativar/Desativar nuvens"
          onClick={functions}
        >
          <img alt="logo" src={CloudBtn} className="imgCloud" />
        </div>
      </div>
    </>
  );
}
