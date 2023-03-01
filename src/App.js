import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Demo from './components/Demo/Demo';
import Recruitment from './components/Recruitment/Recruitment';
import { EmployeeDetails } from './components/EmployeeDetails/EmployeeDetails';
import Extra from './components/AdmissionForm/AdmissionForm';
import NoticeBoard from './components/NoticeBoard/NoticeBoard';
import Modal from './Modal/Modal';
import Provident from './components/Provident/Provident';
import EmployeeProvident from './components/EmployeeProvident/EmployeeProvident';
import AddNewPolicy from './components/AddNewPolicy/AddNewPolicy';
import AddClient from './components/AddClient/AddClient';
import ProvidentProfile from './components/ProvidentProfile/ProvidentProfile';
import CreateBonus from './components/Bonus/CreateBonus/CreateBonus';

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
{
  path: "modal",
  element: <div><Modal/></div>
},
{
  path: "provident",
  element: <div><Provident/></div>
},
{
  path: "EmployeeProvident",
  element: <div><EmployeeProvident/></div>
},
{
  path: "AddNewPolicy",
  element: <div><AddNewPolicy/></div>
},
{
  path: "AddClient",
  element: <div><AddClient/></div>
},
{
  path: "CreateBonus",
  element: <div><CreateBonus/></div>
},


{
  path: "ProvidentProfile",
  element: <div><ProvidentProfile/></div>
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
