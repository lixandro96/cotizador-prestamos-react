import PropTypes from 'prop-types';

function Button({operador,fn}) {

  return (
    <button className='h-10 w-10 flex justify-center items-center text-white font-bold rounded-full text-2xl bg-lime-500 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500' onClick={fn}>
      {operador}
    </button> 
  )
}
  
Button.propTypes = {
  operador: PropTypes.string.isRequired,
  fn: PropTypes.func.isRequired
}

export default Button