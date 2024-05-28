import { Header } from "./components/Header"
import { Sidebar } from "./components/Siderbar"
import './global.css'

import styles from './App.module.css'



function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <div>
          teste
        </div>
      </div>
      
    </>
  )
}
//test
export default App
