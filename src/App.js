import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Demo from './components/Demo/Demo';
import Recruitment from './components/Recruitment/Recruitment';
import { EmployeeDetails } from './components/EmployeeDetails/EmployeeDetails';
import Extra from './components/AdmissionForm/AdmissionForm';
import NoticeBoard from './components/NoticeBoard/NoticeBoard';

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
  {
    path: "recruitment",
    element: <div><Recruitment/></div>
},
{
  path: "employee",
  element: <div><EmployeeDetails/></div>
},
{
  path: "extra",
  element: <div><Extra/></div>
},
{
  path: "notice",
  element: <div><NoticeBoard/></div>
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
