import { Header } from '@mantine/core';
import React from 'react';
import { createStyles, Button } from '@mantine/core';
import { ethers } from 'ethers';
import { useAtom } from 'jotai';
import { signer } from '../../App';

type Props = {};

const NavComponent = (props: Props) => {
  const useStyles = createStyles((theme, _params, getRef) => ({
    connectWalletButton: {
      backgroundColor: theme.colors.lavender[0],
      borderRadius: theme.radius.xl,
      width: '165px',
      height: '36px',
      color: theme.colors.primaryColor[0],
      border: '2px solid #eaeaea',
      alignSelf: 'center'
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
    }
  }));

  const { classes } = useStyles();
  const [signerAtom, setSignerAtom] = useAtom(signer);

  async function connectWallet() {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      'any'
    );
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    console.log('Account:', await signer.getAddress());
    setSignerAtom(await signer.getAddress());
  }

  const clickHandler = () => {
    return async (event: React.MouseEvent) => {
      await connectWallet();
    };
  };

  return (
    <Header height={120} p="xs" className={classes.header}>
      <div className={classes.linkContainer}>
        <h4>Dashboard</h4>
        <h4>Voting</h4>
        <h4>Proposals</h4>
      </div>
      <div className={classes.logoContainer}>
        <h1>Defender DAO</h1>
        <Button
          className={classes.connectWalletButton}
          onClick={clickHandler()}
        >
          Connect Wallet
        </Button>
      </div>
    </Header>
  );
};

export default NavComponent;
