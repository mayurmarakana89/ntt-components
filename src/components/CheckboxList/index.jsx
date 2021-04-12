import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  checklistLabel: {
    fontWeight: 'bold',
    color: '#036'
  },
  checklistHelpText: {
    color: '#036'
  },
  checklistGroup: {
    marginBottom: '48px'
  }
}));

const CheckboxList = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    personal_info: true,
    covid_vaccine: false,
    covid_vaccine_attr: false,
    covid_date_of_vaccine: false,
    covid_second_vaccine: false,
    all: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { personal_info, covid_vaccine, covid_vaccine_attr, covid_date_of_vaccine, covid_second_vaccine, all } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" color={"primary"} className={classes.formControl}>
        <FormLabel component="label" className={classes.checklistLabel}>Credential Type</FormLabel>
        <FormHelperText className={classes.checklistHelpText}>Identify the type of credentials you will be scanning for today:</FormHelperText>
        <br />
        <FormGroup className={classes.checklistGroup}>
          <FormControlLabel
            control={<Checkbox color="primary" checked={personal_info} onChange={handleChange} name="personal_info" />}
            label="User Personal Information"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={covid_vaccine} onChange={handleChange} name="covid_vaccine" />}
            label="Covid-19 Vaccination"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={covid_vaccine_attr} onChange={handleChange} name="covid_vaccine_attr" />}
            label="Covid-19 Vaccination attributes"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={covid_date_of_vaccine} onChange={handleChange} name="covid_date_of_vaccine" />}
            label="Covid-19 Date of Vaccination"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={covid_second_vaccine} onChange={handleChange} name="covid_second_vaccine" />}
            label="Covid-19 2nd Vaccination completed"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={all} onChange={handleChange} name="all" />}
            label="All"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CheckboxList;