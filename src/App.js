import React from 'react';
import './App.css';
import CenteredLayout from './layouts/CenteredLayout'
import CenteredPage from './pages/CenteredPage'

function App() {
  return (
    <CenteredLayout>
      <CenteredPage />
    </CenteredLayout>
  );
}

export default App;
