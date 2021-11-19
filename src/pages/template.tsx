import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { Padding, Spacer, Text } from '../components';
import { Elements, ElementsTool, Test } from '../modules/template';
import { LoadingBlockScreen, SecurePage } from '../navigation';
const Page = () => {
    return (
        <Padding height="100%" backgroundColor="dark">
            <Grid container spacing={1} style={{ height: '100%' }}>
                <Grid
                    item
                    md={3}
                    style={{ position: 'relative', height: '100%' }}
                >
                    <Elements />
                </Grid>
                <Grid
                    item
                    md={7}
                    style={{ height: '100%', position: 'relative' }}
                >
                    <Test/>
                </Grid>
                <Grid
                    item
                    md={2}
                    style={{ height: '100%', position: 'relative' }}
                >
                    <ElementsTool />
                </Grid>
            </Grid>
            {/* <Elements/> */}
        </Padding>
    );
};
export default () => {
    return (
        <SecurePage>
            <div
                style={{ position: 'absolute', height: '100%', width: '100%', margin:'0 !important' }}
            >
                <Page />
            </div>
        </SecurePage>
    );
};
