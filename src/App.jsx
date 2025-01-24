import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components'

function App() {
  
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setconvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className='w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat relative'
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5902919/pexels-photo-5902919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      {/* Heading */}
      

      {/* Form Container */}
      <div className='w-full max-w-lg mx-auto border border-gray-400 rounded-lg p-8 backdrop-blur-sm bg-black/60 shadow-lg'>
      <h1 className='text-3xl font-extrabold text-center text-white mb-10'>
        Currency Converter
      </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className='w-full mb-6'>
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setAmount(amount)}
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from}
            />
          </div>
          <div className='relative w-full h-0.5 mb-6'>
            <button
              type='button'
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-blue-700 text-white px-4 py-2 hover:bg-blue-800 transition-colors'
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className='w-full mb-8'>
            <InputBox
              label='To'
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition-colors'
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className='absolute bottom-0 w-full text-center text-white py-2 text-sm bg-black/60'>
        &copy; {new Date().getFullYear()} Choudhary Sahab. All rights reserved. 
      </footer>
    </div>
  )
}

export default App
