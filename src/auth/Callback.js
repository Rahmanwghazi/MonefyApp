import loading from './loading.svg';
import Auth from './Auth';
import { useEffect } from 'react';

const auth = new Auth();

const Callback = () => {
  useEffect(() => {
      auth.handleAuthentication();
  })

  const style = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  }

  return (
    <div style={style}>
      <img src={loading} alt="loading" />
      <p className="text-white">loading</p>
    </div>
  );

}

export default Callback;
