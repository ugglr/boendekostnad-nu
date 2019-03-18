import React from "react";
//import local css
import "./about.css";
//import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Import layout Element
import Bullet from "./Bullet";

const About = () => {
  const headline1 = "Hitta Objekt";
  const bullet1 =
    "Vad är det viktigaste kring ditt nya boende? Yta, antal rum, boendeform; Allt spelar roll för hur mycket ditt nya boende kommer kosta. Var ärlig mot dig själv när du letar och hitta de krav som boendet måste uppfylla, kontra de saker som är bonus";

  const headline2 = "Hitta Grundkostnader";
  const bullet2 =
    "Alla boendekostnadskalkyler byggs på ett uppskattat slutpris, vilken ränta kan du förvänta dig från banken, och baskostnader som hör boendet till.";

  const headline3 = "Identifiera andra kostnader";
  const bullet3 =
    "Där finns många andra kostnader utöver dina grundkostnader. Försäkringar, ny pendelväg till jobbet, nya elkostnader etc. Lägg till dessa i din kalkyl för att motverka obehagliga överraskningar och sömnlösa nätter.";

  const headline4 = "Kalkylera!";
  const bullet4 =
    "Bankerna älskar kunder som har grundligt räknat på sitt boende innan de ansöker om lånelöfte. Prata igenom din kalkyl med en bankman, gör en rimlighetsbedmöning innan du ansöker, det kan spela en roll för vilken ränta de kan ge dig.";
  return (
    <section
      class="content-section bg-primary text-white text-center"
      id="services"
    >
      <div class="container">
        <div class="content-section-heading">
          <h3 class="text-secondary mb-0">
            Ett steg nämre ditt nya drömboende!
          </h3>
          <h2 class="mb-5">Hur fungerar det?</h2>
        </div>
        <div class="row">
          <Bullet text={bullet1} label={headline1} iconPick={1} />
          <Bullet text={bullet2} label={headline2} iconPick={2} />
          <Bullet text={bullet3} label={headline3} iconPick={3} />
          <Bullet text={bullet4} label={headline4} iconPick={4} />
        </div>
      </div>
    </section>
  );
};

export default About;
