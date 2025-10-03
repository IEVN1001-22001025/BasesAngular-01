// Concatena 
export function calcularValorBase(banda1: number, banda2: number): number {
  return Number(`${banda1}${banda2}`);
}

// multiplica por 3 banda
export function calcularValorTotal(valorBase: number, multi: number): number {
  return valorBase * multi;
}

// maximo y mínimo 
export function calcularRango(valor: number, toleranciaPorciento: number): { max: number; min: number } {
  const p = toleranciaPorciento / 100; 
  const max = valor + (valor * p);
  const min = valor - (valor * p);
  return { max, min };
}

//
export function calcularResistencia(b1: number, b2: number, multi: number, tol: number) {
  const base = calcularValorBase(b1, b2);
  const valor = calcularValorTotal(base, multi);
  const { max, min } = calcularRango(valor, tol);
  return { valor, valorMax: max, valorMin: min };
}
