import { Cosmonaut, Country, Mission } from "./type";

function createCosmonaut(name:string, mission:Mission, country:Country) {
  const cosmonaut:Cosmonaut = { name, mission, country };
  cosmonaut.country = country;
  cosmonaut.mission = mission;
  cosmonaut.name = name;
  return cosmonaut;
}

function main() {
  const cosmonaute:Cosmonaut = createCosmonaut('Billy', Mission.MOON, Country.IND);
  const cosmonaute2:Cosmonaut = createCosmonaut('William', Mission.MARS, Country.RU);
  console.log('Name: ', cosmonaute.name, 'Mission: ', cosmonaute.mission, 'Country: ', cosmonaute.country);
  console.log('Name: ', cosmonaute2.name, 'Mission: ', cosmonaute2.mission, 'Country: ', cosmonaute2.country);
}

main();
