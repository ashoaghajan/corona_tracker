import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '65%',
        [theme.breakpoints.down(770)]: {
            width: '100%'
        },
    }
}));