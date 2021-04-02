import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

export interface CardItemProps {
    subData: SubData | undefined,
    lastUpdate: string | undefined,
    title: string,
    bodyText: string
    style: string
}
 
const CardItem: React.SFC<CardItemProps> = ({ subData, title, bodyText, lastUpdate, style }) => {
    return ( 
        <Grid item component={Card} className={style} xs={12} md={3}>
            <CardContent>
                <Typography color='textSecondary' gutterBottom>{title}</Typography>
                <Typography variant='h5' color='textSecondary' gutterBottom>
                    <CountUp start={0} end={subData?.value || 0} duration={2.5} separator=','/>
                </Typography>
                <Typography color='textSecondary'>{new Date(lastUpdate || 0).toDateString()}</Typography>
                <Typography variant='body2' color='textSecondary'>{bodyText}</Typography>
            </CardContent>
        </Grid>
     );
}
 
export default CardItem;
