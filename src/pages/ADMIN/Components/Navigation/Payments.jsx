import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, makeStyles,Card ,CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

const UserList = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2020/api/users/usersWithSuccessfulPayments');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className={classes.root}>
    <Typography variant="h4" gutterBottom>
      Users with Successful Payments
    </Typography>
    <List>
      {users.map((user) => (
        <Card key={user.userId} className={classes.card}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {user.username}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Email: {user.email}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Mobile Number: {user.mobileNumber}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              User Role: {user.userRole}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </List>
  </Container>
  );
};

export default UserList;
