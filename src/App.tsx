import React, { useEffect, useState } from 'react';
import './App.css';
import { createStyles, MantineProvider, Switch } from '@mantine/core';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Voting from './pages/Voting/Voting';
import Proposals from './pages/Proposals/Proposals';
import { atom, useAtom } from 'jotai';

export type Proposal = {
  id: number;
  url: string;
  address: string;
  subDate: string;
};

export const signer = atom<string>('');

function App() {
  const [signerAtom, setSignerAtom] = useAtom(signer);
  const [proposals, setProposals] = useState<Proposal[]>([
    {
      id: 0,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 1,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 2,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 3,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 4,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 5,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 6,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 7,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 8,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    }
  ]);
  const [blacklistedUrls, setBlacklistedUrls] = useState<Proposal[]>([
    {
      id: 0,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 1,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 2,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 3,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 4,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 5,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 6,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 7,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    },
    {
      id: 8,
      url: 'placeholderurl',
      address: '0x0000000000000000000000000000000',
      subDate: '4/20/22'
    }
  ]);

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
            <Route
              path="/"
              element={
                <Dashboard
                  blacklistedUrls={blacklistedUrls}
                  recentProposals={proposals}
                />
              }
            />
            <Route
              path="/voting"
              element={<Voting recentProposals={proposals} />}
            />
            <Route
              path="/proposals"
              element={<Proposals recentProposals={proposals} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </MantineProvider>
  );
}

export default App;
