import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Allproduct from './Component/Allproduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-body-secondary">
        <Header />

        <Footer />
      </div>
    </>
  );
}

export default App
