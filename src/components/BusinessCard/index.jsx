import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import BusinessIcon from '@material-ui/icons/Business';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '24px 0'
  },
  cardHeader: {
    paddingBottom: 0,
    color: '#036'
  }
}));

const BusinessCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <BusinessIcon />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Business Information"
      />
      <CardContent>
        <Typography>
          <strong>BCSC User name:</strong> user name here
          <br />
          <strong>Business name:</strong> business name here
        </Typography>
      </CardContent>
      
    </Card>
  );
}

export default BusinessCard;