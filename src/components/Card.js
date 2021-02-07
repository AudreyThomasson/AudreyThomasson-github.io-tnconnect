import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 290,
  },
  title: {
    textAlign: 'center',
  },
  line: {
      color: 'Primary',
  },
  subhead: {
      paddingTop: 12,   
  },
  pos: {
    marginBottom: 12,
  },
});



const OneCard = ({ help }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" className={classes.title} color="Primary" gutterBottom>
            {`${help.name}`}
        </Typography>
        
        <Divider variant='fullWidth' className='line'/>
        
        <Typography variant="body" className='subhead' gutterBottom>ADDRESS:</Typography>    
        <Typography variant="body2" >{`${help.address}`}</Typography>

        <Typography variant="body2" className='subhead' gutterBottom>PHONE:</Typography>
        <Typography variant="body2" ><Link href={`tel:${help.phone}`} onClick={preventDefault}>{`${help.phone}`}</Link></Typography>

        <Typography variant="body2" className='subhead'>NOTES:</Typography>
        <Typography variant="body2" >{`${help.notes}`}</Typography>
      </CardContent>
    </Card>
  );
}

export default OneCard;