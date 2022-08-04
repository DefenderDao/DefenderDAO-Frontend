import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStyles, MantineProvider } from '@mantine/core';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
  return (
    <MantineProvider theme={{
      colors: {
        primaryColor: ['#1f2345', '#283071' ],
        platinum: ['#eaeaea',]
      }
    }}>
    <div className="App">
      <Dashboard />
    </div>
    </MantineProvider>
  );
}

export default App;
