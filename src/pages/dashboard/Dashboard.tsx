import { AppShell, Button, createStyles, Table } from '@mantine/core';
import React, { useState } from 'react';
import { IoShieldSharp } from 'react-icons/io5';
import { atom, useAtom } from 'jotai';
import { atomWithInfiniteQuery, atomWithQuery } from 'jotai/query';
import { Proposal } from '../../App';
import NavComponent from '../../components/Navbar/NavComponent';

type Props = {
  recentProposals: Proposal[];
  blacklistedUrls: Proposal[];
};

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

  navbar: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primaryColor[0],
    color: theme.colors.platinum[0]
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
  proposalRowLabel: {
    color: '#eaeaea',
    textAlign: 'right'
  },
  submitProposalButton: {
    backgroundColor: theme.colors.lavender[0],
    borderRadius: theme.radius.xl,
    width: '165px',
    height: '36px',
    color: theme.colors.primaryColor[0],
    border: '2px solid #eaeaea',
    alignSelf: 'center',
    marginTop: '65px'
  },
  votingPageButton: {
    backgroundColor: theme.colors.lavender[0],
    borderRadius: theme.radius.xl,
    width: '165px',
    height: '36px',
    color: theme.colors.primaryColor[0],
    border: '2px solid #eaeaea',
    alignSelf: 'center',
    marginTop: '65px'
  }
}));

const Dashboard = ({ recentProposals, blacklistedUrls }: Props) => {
  const { classes } = useStyles();

  const proposalsRows = recentProposals.map(proposal =>
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

  const blacklistedRows = blacklistedUrls.map(item =>
    <tr key={item.id}>
      <td>
        {item.url}
      </td>
      <td>
        {item.address}
      </td>
      <td>
        {item.subDate}
      </td>
    </tr>
  );

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
      header={<NavComponent />}
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
          <thead className={classes.proposalRowLabel}>
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
      <Button className={classes.submitProposalButton}>
        Submit Proposal
      </Button>
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
            {blacklistedRows}
          </tbody>
        </Table>
      </div>
      <Button className={classes.votingPageButton}>Vote Now!</Button>
    </AppShell>
  );
};

export default Dashboard;
