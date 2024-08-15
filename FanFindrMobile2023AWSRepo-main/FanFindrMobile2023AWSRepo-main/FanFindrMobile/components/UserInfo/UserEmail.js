import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Auth } from 'aws-amplify';

const UserEmail = () => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        setUserEmail(user.attributes.email);
      })
      .catch(error => {
        console.log('Error retrieving user information:', error);
      });
  }, []);

  return <Text>{userEmail}</Text>;
};

export default UserEmail;