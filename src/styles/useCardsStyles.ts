import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        margin: '50px 0'
    },

    card: {
        margin: '0 2%',
        [theme.breakpoints.down(770)]: {
            margin: '2% 0 !important'
        },
    },
      
    infected: {
        borderBottom: '10px solid rgba(0, 0, 255, 0.5)',
    },
    
    recovered: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)'
    },
    
    deaths: {
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)'
    },
}));