import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';

import { TooltipComponent} from "@syncfusion/ej2-react-popups"

import './App.css'


const App = () => {

  const activeMenu = true
  return ( 
    <div >
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
          <TooltipComponent content="Settings" position='Top'>
            <button type='button ' className='text-3xl p-3 hover:drop-shadow-lg hover:bg-light-gray text-white ' style={{background: 'blue', borderRadius: '50%'}}>
              <FiSettings />
            </button>
          </TooltipComponent>

        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            sideBar
            </div>
        ) : (
          <div className='w-0 dark:bg-dark-secondary-bg'>
            side bar
          </div>
        )}
        <div className={
          `'dark:bg-main-bg bg-main-bg min-h-screen w-ful ${activeMenu ? 'ml-72' : 'flex-2'}`
        }>
          <div className='fixed md-static bg-main-bg dark:bg-main-dark-bg navBar w-full'>
            navBar
          </div>
        </div>

        <div>
            <Routes>
              {/* Dashboard */}
              <Route  path='/' element='eCommerce'/>
              <Route  path='/eCommerce' element='eCommerce'/>

              {/* pages */}
              <Route  path='/orders' element='Orders'/>
              <Route  path='/employees' element='Employees'/>
              <Route  path='/customers' element='Customers'/>

              {/* Apps */}
              <Route  path='/kanban' element='Kanban'/>
              <Route  path='/editor' element='editor'/>
              <Route  path='/calender' element='Calendar'/>
              <Route path='color-picker' element='ColorPicker' />

              {/* Charts */}
              <Route  path='/line' element='Line'/>
              <Route  path='/area' element='Area'/>
              <Route  path='/bar' element='Bar'/>
              <Route path='financial' element='Financial' />
              <Route path='/color-mapping' element='ColorMapping' />
              <Route path='/pyramid' element='Pyramid' />
              <Route path='/line' element='Line' />
            </Routes>
          </div>
        </div>

        </BrowserRouter>
  </div>
   );
}

export default App;