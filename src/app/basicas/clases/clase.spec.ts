import { Jugador } from "./clase"

describe("Pruebas de clase", () => {
  let jugador = new Jugador();

  beforeAll(() => {

    //console.log("beforeAll");
  })

  beforeEach(() => {
    //jugador.hp = 100;
    jugador = new Jugador();
  })

  afterEach(() => {
    //jugador.hp = 100;
  })

/*
Ciclo de vida de las pruebas
  beforeAll();
  beforeEach();
  afterAll();
  afterEach(); */

  it("Debe retornar 80 hp si recibe 20 de daño", () => {
   // const jugador = new Jugador();
    const res = jugador.recibeDmg(20);
    expect(res).toBe(80);
  })

  it("Debe retornar 50 hp si recibe 50 de daño", () => {
    //const jugador = new Jugador();
    const res = jugador.recibeDmg(50);
    expect(res).toBe(50);
  })

  it("Debe retornar 0 hp si recibe 100 de daño", () => {
    //const jugador = new Jugador();
    const res = jugador.recibeDmg(100);
    expect(res).toBe(0);
  })
})
