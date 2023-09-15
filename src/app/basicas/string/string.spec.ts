import { mensaje } from './string';
/* describe("Should contain strings");
describe("Should contain strings");
 */

describe("Pruebas de strings", () => {
    it("Must be return string", () => {
        const resp = mensaje("Aaron");
        expect(typeof resp).toBe("string");
    })
    });


describe("Pruebas de strings", () => {
    it("Debe retornar un saludo con el nombre enviado", () => {
        const nombre = "Juan"
        const resp = mensaje(nombre);
        expect(resp).toContain(nombre);
    })
    });
