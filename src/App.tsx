import React from 'react';
import './App.css';
import { createStyles, MantineProvider } from '@mantine/core';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <MantineProvider
      theme={{
        colors: {
          primaryColor: ['#1f2345', '#283071'],
          platinum: ['#eaeaea'],
          lavender: ['#cbc5ea', '#a99ce9'],
          orangeRed: ['#FE5F55'],
          wintergreen: ['#638475'],
          lightPink: ['#dfb9e9', '#dba4eb']
        }
      }}
    >
      <div className="App">
        <Dashboard />
      </div>
    </MantineProvider>
  );
}

export default App;
