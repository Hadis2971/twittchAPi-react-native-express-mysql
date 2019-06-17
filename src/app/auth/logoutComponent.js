import { removeUserDataFromAsyncStorage } from '../../helpers';

const Logout = (props) => {
  removeUserDataFromAsyncStorage();
  return props.navigation.navigate('Auth');
};

export default Logout;
