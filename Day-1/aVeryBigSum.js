

const aVeryBigSum = (ar) => {
  let total_suma = 0;

  for (let i = 0; i < ar.length; i++) {
    total_suma += ar[i]
  }
  return total_suma
}

arreglo = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
resultado = aVeryBigSum(arreglo)
console.log(resultado);

