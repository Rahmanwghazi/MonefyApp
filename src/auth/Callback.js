import Auth from './Auth';
import { useEffect } from 'react';
import { Messaging } from 'react-cssfx-loading/lib';
import { RefreshPage } from '../utils/Reloader';

const auth = new Auth();

const Callback = () => {
  useEffect(() => {
    auth.handleAuthentication();
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      RefreshPage()
    }, 2000);
    return () => clearInterval(interval);
  }, []);



  return (
    <div>
      <Messaging style={{ marginLeft: 50, marginTop: 50 }} color="#EEEEEE" width="15px" height="15px" />
    </div>
  );

}

export default Callback;
