import { usuarioIngresado } from "./booleans"

describe("Pruebas booleanos", () => {
  it("debe retornar true",() => {
    const res = usuarioIngresado();
    expect(res).toBeTruthy();
  })
} )
