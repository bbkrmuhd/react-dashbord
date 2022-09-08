import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';

import { TooltipComponent} from "@syncfusion/ej2-react-popups"


import { NavBar, Footer, SideBar, ThemeSettings} from './components'
import {Ecommerce,  Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar,Line, pie,
        Financial, ColorPicker, ColorMapping, Editor} from './pages'
import './App.css'
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu } = useStateContext()

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
          <SideBar />
            </div>
        ) : (
          <div className='w-0 dark:bg-dark-secondary-bg'>
            side bar
          </div>
        )}
        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'ml-72': 'flex-auto'}`}>
          <div className='fixed md-static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <NavBar />
          </div>
  
        <div>
            <Routes>
              {/* Dashboard */}
              <Route  path='/' element={<Ecommerce/>}/>
              <Route  path='/eCommerce' element={<Ecommerce/>}/>

              {/* pages */}
              <Route  path='/orders' element={<Orders/>}/>
              <Route  path='/employees' element={<Employees/>}/>
              <Route  path='/customers' element={<Customers/>}/>

              {/* Apps */}
              <Route  path='/kanban' element={<Kanban/>}/>
              <Route  path='/editor' element={<editor/>}/>
              <Route  path='/calender' element={<Calendar/>}/>
              <Route path='color-picker' element={<ColorPicker/>}/>

              {/* Charts */}
              <Route  path='/line' element={<Line/>}/>
              <Route  path='/area' element={<Area/>}/>
              <Route  path='/bar' element={<Bar/>}/>
              <Route path='financial' element={<Financial/>}/>
              <Route path='/color-mapping' element={<ColorMapping/>}/>
              <Route path='/pyramid' element={<Pyramid/>}/>
              <Route path='/line' element={<Line/>}/>
            </Routes>
            </div>
          </div>
        </div>
        </BrowserRouter>
  </div>
   );
}

export default App;