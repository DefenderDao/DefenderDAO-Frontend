import React, { useEffect, useState } from 'react';
import './App.css';
import { createStyles, MantineProvider, Switch } from '@mantine/core';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Voting from './pages/voting/Voting';
import Proposals from './pages/proposals/Proposals';
import { atom, useAtom } from 'jotai';
import { Contract, ethers } from 'ethers';
import * as DefenderBoxJson from './rinkeby/DefenderBox.json';
import * as GovernorJson from './rinkeby/DefenderGovernor.json';
import * as TokenJson from './rinkeby/DefenderToken.json';
import * as TimelockJson from './rinkeby/TimeLock.json';

export type Proposal = {
  id: number;
  url: string;
  address: string;
  subDate: string;
};


export const signer = atom<string>('');
export const proposalsAtom = atom<Proposal[]>([]);
export const blacklistAtom = atom<Proposal[]>([]);
//Set contract addresses into global state
export const defenderAddress = atom('0x3b9DDa9a2e6FA88A2402105C4fEb0b044F71Ff5c');
export const timelockAddress = atom('0x767fa811cAc7c211bDFD226FE4856f9256bF276f');
export const governorAddress = atom('0x039e6a8D47Bf0db69476B567C80eE1bb6ab6e0eE');
export const boxAddress = atom('0x29027C6Ba306B61212Ee26531B6aF804d26DD961');

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



const DEFENDER_TOKEN_ADDRESS='0x3b9DDa9a2e6FA88A2402105C4fEb0b044F71Ff5c';
const TIMELOCK_ADDRESS='0x767fa811cAc7c211bDFD226FE4856f9256bF276f';
const GOVERNOR_ADDRESS='0x039e6a8D47Bf0db69476B567C80eE1bb6ab6e0eE';
const BOX_ADDRESS='0x29027C6Ba306B61212Ee26531B6aF804d26DD961';


const provider = ethers.providers.getDefaultProvider("rinkeby");

//instantiate contracts
const defenderContract = new Contract(
  DEFENDER_TOKEN_ADDRESS,
  TokenJson.abi,
  provider
)

const timelockContract = new Contract(
  TIMELOCK_ADDRESS,
  TokenJson.abi,
  provider
)

const governorContract = new Contract(
  GOVERNOR_ADDRESS,
  TokenJson.abi,
  provider
)

const boxContract = new Contract(
  BOX_ADDRESS,
  TokenJson.abi,
  provider
)

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
