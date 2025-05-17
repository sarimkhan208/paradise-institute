import './App.css'
import Footer from './components/bars/footer'
import Navbar from './components/bars/navbar'
import { AllRoutes } from './router/all-routes'

function App() {

  return (
    <main>
      <Navbar/>
        <AllRoutes/>
      <Footer/>
    </main>
  )
}

export default App
