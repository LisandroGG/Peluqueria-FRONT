import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='min-h-screen grid place-content-center'>
      <h1 className='text-9xl'>Hola</h1>
      <Toaster position="top-center" />
    </div>
  )
}

export default App
