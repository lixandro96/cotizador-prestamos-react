import Header from './components/Header'
import Button from './components/Button'
import { formatearDinero, calcularTotalPagar } from './helpers'

import { useState, useEffect } from 'react'

function App() {
  const MIN = 0
  const MAX = 20000
  const DEFAULT = 10000
  const STEP = 100

  const [cantidad, setCantidad] = useState(DEFAULT)
  const [plazo, setPlazo] = useState(6)
  const [total, setTotal] = useState(0)
  const [pago, setPago] = useState(0)

  function handleChange(e){
    setCantidad(parseInt(e.target.value))
  }
  function handleClickDecremento(){
    const valor = cantidad - STEP

    if(valor < MIN){
      return
    }
    setCantidad(valor)
  }
  function handleClickIncremento(){
    const valor = cantidad + STEP
    if(valor > MAX){
      return
    }
    setCantidad(valor)
  }

  useEffect(() => {
    setTotal(calcularTotalPagar(cantidad, plazo))
  }, [cantidad, plazo])

  useEffect(() => {
    setPago(total / plazo)
  }, [total,plazo])

  return (
    
    <div className='my-10 max-w-lg mx-auto bg-white shadow p-10'>
      <Header />
      <div className='flex justify-between my-3'>
        <Button 
          operador='-'
          fn = {handleClickDecremento}
        />
        <Button
          operador = '+'
          fn = {handleClickIncremento}
        />
      </div>
      <input 
        className="w-full h-6 accent-lime-500 hover:accennt-lime-600 py-2 bg-gray-200s"
        type="range"
        name="cantidad"
        id="cantidad"
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
        onChange={handleChange}
      />
      <p className="text-4xl font-bold text-center mt-3 text-indigo-600 mb-5">
        {formatearDinero(cantidad)}
      </p>

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>Elige un <span className='text-indigo-600'>plazo</span> a pagar</h2>

      <select className='mt-5 w-full p-2 gb-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
      value = {plazo}
      onChange = {(e) => setPlazo(parseInt(+e.target.value))}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
        
      </select>

      <div className='my-5 space-y-3 bg-gray-50 p-5'>
      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>Resumen <span className='text-indigo-600'>pagos</span></h2>
      <p className='text-xl text-gray-500 text-center font-bold'>
        {plazo} Meses
      </p>
      
      <p className='text-xl text-gray-500 text-center font-bold'>
       {formatearDinero(pago)} Mensual
      </p>
      <p className='text-xl text-gray-500 text-center font-bold'>
        {formatearDinero(total)} Total a pagar 
      </p>
      </div>

      <p className='text-center text-gray-500 font-bold text-sm'>Desarrollado por <a href="https://github.com/lixandro96" target="_blank" rel="noreferrer">LixandroDev</a></p>
    </div>
  )
}

export default App
