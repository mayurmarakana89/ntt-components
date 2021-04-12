import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {

    },
  },
  leftAlign: {
    float: 'left'
  },
  rightAlign: {
    float: 'right'
  }
}));

const ActionButton = ({
    align = "right",
    buttonText = "button",
    color = "",
    disabled = false,
    onClick = ()=>{}
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={align === "left" ? classes.leftAlign : classes.rightAlign}><Button variant="contained" color={color} onClick={onClick}>{buttonText}</Button></span>
    </div>
  );
}

export default ActionButton;