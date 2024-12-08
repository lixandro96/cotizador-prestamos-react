function formatearDinero(valor){
  const formater = new Intl.NumberFormat('en-ES', { 
    style: 'currency', 
    currency: 'USD',
  })
  return formater.format(valor)
}

function calcularTotalPagar(cantidad, plazo) {
  let total;

  // mientras mayor el monto es menor el interes
  if(cantidad < 5000){
    total = cantidad * 1.5
  }else if(cantidad >=5000 && cantidad < 10000) {
    total = cantidad *  1.4
  }else if(cantidad >= 10000 && cantidad < 15000){
    total = cantidad * 1.3
  }else{
    total = cantidad * 1.2
  }

  // mientras mayor el plazo es mayor el interes
  if (plazo === 6) {
    total *= 1.1
  }else if(plazo === 12){
    total *= 1.2
  }else if(plazo === 24){
    total *= 1.3
  }
  return total
}

export {
  formatearDinero,
  calcularTotalPagar
}