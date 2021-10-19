import React from 'react';
import { Grid } from '@material-ui/core';
import CardItem from './CardItem';
import useStyles from '../styles/useCardsStyles';
import cx from 'classnames';

export interface ChardsProps {
    data: Data | undefined

}
 
const Chards: React.SFC<ChardsProps> = ({ data }) => {

    const classes = useStyles();
    console.log(data)

    return ( 
        <div className={classes.container}>
            <Grid container spacing={3} justify='center'>
                <CardItem subData={data?.confirmed}  lastUpdate={data?.lastUpdate} style={cx(classes.infected, classes.card)} 
                    title='Infected' bodyText='Number of active cases of COVID-19'/>

                <CardItem subData={data?.recovered}  lastUpdate={data?.lastUpdate} style={cx(classes.recovered, classes.card)} 
                    title='Recovered (currently no data)' bodyText='Number of recoveries from COVID-19'/>

                <CardItem subData={data?.deaths}  lastUpdate={data?.lastUpdate} style={cx(classes.deaths, classes.card)} 
                    title='Deaths' bodyText='Number of deaths caused by COVID-19'/>
            </Grid>
        </div>
    );
}
 
export default Chards;