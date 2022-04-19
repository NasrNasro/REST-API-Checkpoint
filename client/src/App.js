import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './Components/AddContact';
import Contactdetails from './Components/Contactdetails';
import ContactList from './Components/ContactList';
import Navbare from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbare></Navbare>
      <Routes>
        <Route path='/contacts' element={<ContactList></ContactList>} ></Route>
        <Route path='/addContact' element={<AddContact></AddContact>}></Route>
        <Route path='/edit/:id' element={<AddContact></AddContact>}></Route>
        <Route path='/contacts/:id' element={<Contactdetails></Contactdetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
