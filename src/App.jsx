import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from './assets/slider1.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className="btn">Button</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='relative'>
        <img src={img} alt="" className='w-full ' />
        <h1 className='flex items-center justify-center bg-gradient-to-r w-full h-full top-0  from-[rgba(0,0,0,0.7)] absolute to-[rgba(0,0,0,0.1)] text-white'>fdsijfdsfdsif</h1>
      </div>
    </>
  )
}

export default App
