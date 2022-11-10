import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { router } from './routes/routes';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position='top-center' autoClose={3000}></ToastContainer>
    </>
  );
}

export default App;
