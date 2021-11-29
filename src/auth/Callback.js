import loading from './loading.svg';
import Auth from './Auth';
import { useEffect } from 'react';
import { Messaging } from 'react-cssfx-loading/lib';

const auth = new Auth();

const Callback = () => {
  useEffect(() => {
      auth.handleAuthentication();
  },[])

  return (
    <div>
      <Messaging style={{marginLeft: 50, marginTop: 50}} color="#EEEEEE" width="15px" height="15px" />
    </div>
  );

}

export default Callback;
