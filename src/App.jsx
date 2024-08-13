import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Stack } from '@mui/material';
import AllDataDisplay from './layouts/AllDataDisplay';
import { studentsContext } from './store/StudentsContext';
import { professorsContext } from './store/ProfessorsContext';
import { staffContext } from './store/StaffContext';


function App() {

  return (
    <Router>
      <Stack sx={{ minHeight: '100vh', bgcolor: 'whitesmoke' }} justifyContent={'space-between'}>
        <Navbar />
        <main >
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/professors" >
              <Route path="allProfessors" element={<AllDataDisplay title={"All Professors"} context={professorsContext} />} />
            </Route>
            <Route path="/students" >
              <Route path="allStudents" element={<AllDataDisplay title={"All Students"} context={studentsContext} />} />
            </Route>
            <Route path="/staff" >
              <Route path="allStaff" element={<AllDataDisplay title={"All Staff"} context={staffContext} />} />
            </Route>
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </Stack>
    </Router>
  );
}

export default App;
