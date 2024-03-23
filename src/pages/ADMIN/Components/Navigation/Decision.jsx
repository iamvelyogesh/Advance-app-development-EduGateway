import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const UpdateEnrollmentForm = () => {
  const classes = useStyles();
  const [id, setId] = useState('');
  const [stage, setStage] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleChangeStage = (event) => {
    setStage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.put(`http://localhost:2020/enrollments/${id}/stage?stage=${stage}`);
        setMessage(`Enrollment with ID ${id} updated successfully.`);
    } catch (error) {
      setMessage(`Error updating enrollment: ${error.message}`);
    }
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Update Enrollment Stage
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          label="Enrollment ID"
          variant="outlined"
          value={id}
          onChange={handleChangeId}
          required
        />
        <TextField
          className={classes.textField}
          label="New Stage"
          variant="outlined"
          value={stage}
          onChange={handleChangeStage}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Update Stage
        </Button>
      </form>
      {message && <Typography variant="body1" color="textSecondary">{message}</Typography>}
    </Container>
  );
};

export default UpdateEnrollmentForm;
