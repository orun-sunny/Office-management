import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Demo from './components/Demo/Demo';

function App() {
  const router =createBrowserRouter([
    {
        path: "/",
        element: <div><Home/></div>
    },
    {
      path: "demo",
      element: <div><Demo/></div>
  },

    // <Templates/>
])


  return (
    <div className="App">
<RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
