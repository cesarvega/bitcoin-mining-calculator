
import { RequestCar } from './components/RequestCar'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/request-my-car/:id" element={<RequestCar />} />
    </Routes>
  )
}

export default App
