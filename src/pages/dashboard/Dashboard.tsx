import { createStyles } from '@mantine/core'
import React from 'react'

type Props = {}

const useStyles = createStyles((theme, _params, getRef) => ({
    wrapper: {
        height: '100%',
        width: '100%',
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        color: theme.colors.platinum

    }
}))

const Dashboard = (props: Props) => {
    const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>Defender DAO</div>
  )
}

export default Dashboard