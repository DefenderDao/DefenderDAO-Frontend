import {
  AppShell,
  Button,
  createStyles,
  Header,
  Navbar,
  Table
} from '@mantine/core';
import React, { useState } from 'react';
import { IoShieldSharp } from 'react-icons/io5';
import { atom, useAtom } from 'jotai';
import { atomWithInfiniteQuery, atomWithQuery } from 'jotai/query';

type Props = {};

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    height: '100%',
    width: '100%',
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.colors.platinum
  },
  button: {
    backgroundColor: theme.colors.lavender[0],
    borderRadius: theme.radius.xl,
    width: '165px',
    height: '36px',
    color: theme.colors.primaryColor[0],
    border: '2px solid #eaeaea'
  },
  connectWalletButton: {
    backgroundColor: theme.colors.lavender[0],
    borderRadius: theme.radius.xl,
    width: '165px',
    height: '36px',
    color: theme.colors.primaryColor[0],
    border: '2px solid #eaeaea',
    alignSelf: 'center'
  },
  navbar: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primaryColor[0],
    color: theme.colors.platinum[0]
  },
  header: {
    backgroundColor: theme.colors.primaryColor[0],
    color: theme.colors.platinum[0],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40vw',
    maxWidth: '350px'
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifySelf: 'flex-end',
    width: '45vw',
    maxWidth: '500px'
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '165px'
  },
  titleTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '875px',
    marginRight: '200px'
  },
  titleLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText1: {
    fontSize: '95px',
    fontWeight: 300,
    marginLeft: '45px',
    alignSelf: 'flex-start'
  },
  titleText2: {
    fontSize: '111px',
    fontWeight: 600,
    alignSelf: 'flex-end',
    marginTop: '-55px'
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },
  statContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    width: '325px',
    height: '325px',
    border: '3px solid #eaeaea',
    borderRadius: theme.radius.sm
  },
  proposalsTitle: {
    marginTop: '175px'
  },

  recentProposals: {
    width: '100%',
    height: '395px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll'
  },

  proposalTable: {
    width: '100%',
    height: '355px',
    overflow: 'scroll',
    color: '#eaeaea'
  },
  proposalTitle: {
    color: '#eaeaea'
  }
}));

type Proposal = {
  id: number;
  url: string;
  address: string;
  subDate: string;
};

const Dashboard = (props: Props) => {
  const { classes } = useStyles();
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
  const [blacklistedUrls, setBlacklistedUrls] = useState([
    {
      id: 0,
      url: 'placeholderUrl',
      address: '0x0000000000000000000000000000000',
      date: '4/21/22'
    },
    {
      id: 1,
      url: 'placeholderUrl',
      address: '0x0000000000000000000000000000000',
      date: '4/21/22'
    },
    {
      id: 2,
      url: 'placeholderUrl',
      address: '0x0000000000000000000000000000000',
      date: '4/21/22'
    },
    {
      id: 3,
      url: 'placeholderUrl',
      address: '0x0000000000000000000000000000000',
      date: '4/21/22'
    },
    {
      id: 4,
      url: 'placeholderUrl',
      address: '0x0000000000000000000000000000000',
      date: '4/21/22'
    },
    {
      id: 5,
      url: 'placeholderUrl',
      address: '0x0000000000000000000000000000000',
      date: '4/21/22'
    },
    {
      id: 6,
      url: 'placeholderUrl',
      address: '0x0000000000000000000000000000000',
      date: '4/21/22'
    },
    {
      id: 7,
      url: 'placeholderUrl',
      address: '0x0000000000000000000000000000000',
      date: '4/21/22'
    },
    {
      id: 8,
      url: 'placeholderUrl',
      address: '0x0000000000000000000000000000000',
      date: '4/21/22'
    },
    {
      id: 9,
      url: 'placeholderUrl',
      address: '0x0000000000000000000000000000000',
      date: '4/21/22'
    },
    {
      id: 10,
      url: 'placeholderUrl',
      address: '0x0000000000000000000000000000000',
      date: '4/21/22'
    }
  ]);

  const proposalsRows = proposals.map(proposal =>
    <tr key={proposal.id}>
      <td>
        {proposal.url}
      </td>
      <td>
        {proposal.address}
      </td>
      <td>
        {proposal.subDate}
      </td>
    </tr>
  );

  const blacklistedRows = blacklistedUrls.map(item => {
    <tr key={item.id}>
      <td>
        {item.url}
      </td>
      <td>
        {item.address}
      </td>
      <td>
        {item.date}
      </td>
    </tr>;
  });

  // const idAtom = atom(1);
  // const testAtom = atomWithQuery(get => ({
  //   queryKey: ['proposals', get(idAtom)],
  //   queryFn: async ({ queryKey: [, id] }) => {
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/users/${id}`
  //     );
  //     return res.json();
  //   }
  // }));

  return (
    <AppShell
      padding="md"
      className={classes.wrapper}
      header={
        <Header height={120} p="xs" className={classes.header}>
          <div className={classes.linkContainer}>
            <h4>Dashboard</h4>
            <h4>Voting</h4>
            <h4>Proposals</h4>
          </div>
          <div className={classes.logoContainer}>
            <h1>Defender DAO</h1>
            <Button className={classes.connectWalletButton}>
              Connect Wallet
            </Button>
          </div>
        </Header>
      }
    >
      <div className={classes.titleContainer}>
        <div className={classes.titleTextContainer}>
          <h2 className={classes.titleText1}>Welcome,</h2>
          <h1 className={classes.titleText2}>Defender!</h1>
        </div>
        <div className={classes.titleLogoContainer}>
          <IoShieldSharp color="#eaeaea" size={295} />
        </div>
      </div>
      <div className={classes.statsContainer}>
        <div className={classes.statContainer}>
          <h3>Voting Power</h3>
          <div className={classes.stat} />
        </div>
        <div className={classes.statContainer}>
          <h3>Past Votes</h3>
          <div className={classes.stat} />
        </div>
        <div className={classes.statContainer}>
          <h3>Successful Submissions</h3>
          <div className={classes.stat} />
        </div>
      </div>
      <h1 className={classes.proposalsTitle}>Recent Proposals</h1>
      <div className={classes.recentProposals}>
        <Table
          verticalSpacing="lg"
          horizontalSpacing="md"
          className={classes.proposalTable}
        >
          <thead>
            <tr>
              <th>Proposal URL</th>
              <th>Submitted By</th>
              <th>Submission Date</th>
            </tr>
          </thead>
          <tbody>
            {proposalsRows}
          </tbody>
        </Table>
      </div>
      <h1 className={classes.proposalsTitle}>Blaclisted URLs</h1>
      <div className={classes.recentProposals}>
        <Table
          verticalSpacing="lg"
          horizontalSpacing="md"
          className={classes.proposalTable}
        >
          <thead>
            <tr>
              <th>Blacklisted URL</th>
              <th>Submitted By</th>
              <th>Submission Date</th>
            </tr>
          </thead>
          <tbody>
            {proposalsRows}
          </tbody>
        </Table>
      </div>
    </AppShell>
  );
};

export default Dashboard;
