import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProfessorsContext from './store/ProfessorsContext';
import StudentsContext from './store/StudentsContext';
import StaffContext from './store/StaffContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfessorsContext >
      <StudentsContext>
        <StaffContext>
          <App />
        </StaffContext>
      </StudentsContext>
    </ProfessorsContext>
  </React.StrictMode>
);


