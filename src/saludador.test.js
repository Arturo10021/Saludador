import botSaludos from "./saludador";
describe("Saludador", () => {
    it("Saludar a Pedro", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Pedro") 
      expect(resultado).toEqual("Hola Pedro");
    });
    it("Saludar a Pedro en el dia", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Pedro", 9) 
      expect(resultado).toEqual("Buenos dias Pedro");
    });
    it("Saludar a Pedro en la tarde", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Pedro", 15) 
      expect(resultado).toEqual("Buenas tardes Pedro");
    });
    it("Saludar a Pedro en la noche", () => {
      let botsaludos = new botSaludos();
      let resultado = botsaludos.saludar("Pedro", 21) 
      expect(resultado).toEqual("Buenas noches Pedro");
    });
  });
