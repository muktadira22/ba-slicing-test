
import './App.scss'
import Navbar from '@components/Navbar/Navbar'
import Sidebar from '@components/Sidebar/Sidebar'
import Navigation from '@components/Navigation/Navigation'
import OperationBudget from './pages/operation-budgets'

function App() {

  return (
    <div className='root'>
      <Sidebar />
      <div className='sc-container'>
        <Navbar />
        <Navigation />

        {/* Main Content */}
        <OperationBudget />
      </div>
    </div>
  )
}

export default App
