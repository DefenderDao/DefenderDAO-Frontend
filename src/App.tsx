import React from 'react';
import './App.css';
import { createStyles, MantineProvider, Switch } from '@mantine/core';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Voting from './pages/Voting/Voting';
import Proposals from './pages/Proposals/Proposals';

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/proposals" element={<Proposals />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MantineProvider>
  );
}

export default App;
