import { Button, createStyles } from '@mantine/core';
import React from 'react';

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
  }
}));

const Dashboard = (props: Props) => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1>Defender DAO</h1>
      <Button
        // variant="gradient"
        // gradient={{ from: '#c0a6ff', to: '#82c6f4', deg: 145 }}
        className={classes.button}
      >
        I'm a BUTTON!
      </Button>
    </div>
  );
};

export default Dashboard;
