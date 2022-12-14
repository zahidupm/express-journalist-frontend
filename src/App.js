import 'react-photo-view/dist/react-photo-view.css';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
