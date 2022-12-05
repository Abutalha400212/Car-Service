import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './layout/routes';

function App() {
  return (
    <div className='max-w-screen-lg	mx-auto'>
     <RouterProvider router={router}/>
    <Toaster/>
    </div>
   
  );
}

export default App;
