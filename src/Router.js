import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {NoAuthentication} from './navigation/noauthentication';
import {Authentication} from './navigation/authentication';
import {LOGIN_TOKEN_VALID} from './store/auth/types';
import Loading from './components/Loader/Loading';
import {initAxiosInterceptors} from './utilities/helpers/auth';

initAxiosInterceptors();

const Router = () => {
  //Actions
  const dispatch = useDispatch();
  const validToken = () => dispatch({type: LOGIN_TOKEN_VALID});

  //Reducers
  const loading = useSelector((state) => state.auth.loading);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    validToken();
  }, []);

  console.log(
    '%c Success User & Token Reducer',
    'color: green; font-size: 1.2em',
    user,
    token,
  );

  return (
    <>
      <NavigationContainer>
        {user ? (
          <Authentication />
        ) : loading == false ? (
          <NoAuthentication />
        ) : null}
        <Loading isActive={loading} />
      </NavigationContainer>
    </>
  );
};

export default Router;
