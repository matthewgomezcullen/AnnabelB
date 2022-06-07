import { Container, Box } from '@material-ui/core';
import React from 'react';

import useStyles from '../styles';

const Header = ({ theme }) => {
    const classes = useStyles();

    return (
        <>
            <Container
                className={classes.header}
                maxWidth="xl"
                height="150"
            >
                <Container
                    className={classes.logoContainer}
                    height="150"
                    width="400"
                    align="center"
                >
                    <img
                        src="../static/images/logo.jpg"
                        alt="Annabel B. logo"
                        height="150"
                        width="400"
                    />
                </Container>
            </Container>
        </>
    );
};

export default Header;
