import React, {useEffect} from 'react';
import {Keyboard, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {string, object} from 'yup';
import {FormInput} from './Form/Input';
import {loginRequest} from '../../../store/auth/action';
import Loading from '../../../components/Loader/Loading';

const SignInScreen = () => {
  const message = {
    required: 'Required',
    email: 'Email Invalid',
  };

  //Validations
  const schema = object().shape({
    email: string().required(message.required).email(message.email),
    password: string().required(message.required),
  });

  const {control, register, handleSubmit, errors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  //Actions
  const dispatch = useDispatch();
  const sendData = (values) => dispatch(loginRequest(values));

  //Reducers
  const loading = useSelector((state) => state.auth.loading);
  const errorAuth = useSelector((state) => state.auth.error);

  const onSubmit = (values) => {
    sendData(values);
  };

  useEffect(() => {
    register('email');
    register('password');
  }, [register, loading]);

  return (
    <Container>
      <ContentDismiss onPressOut={() => Keyboard.dismiss()}></ContentDismiss>
      <Title>Welcome</Title>
      {errorAuth ? <TextError>Invalid Access</TextError> : null}
      <WrapperForm>
        <Label allowFontScaling={false}>User</Label>
        <Controller
          render={({onChange, onBlur, value}) => (
            <FormInput
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              keyboardType="email-address"
              error={errors.email}
            />
          )}
          control={control}
          name="email"
          rules={{required: true}}
          error={errors.email}
          defaultValue=""
        />
        <Label>Password</Label>
        <Controller
          render={({onChange, onBlur, value}) => (
            <FormInput
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              keyboardType="default"
              error={errors.password}
              secureTextEntry={true}
            />
          )}
          control={control}
          name="password"
          rules={{required: true}}
          error={errors.password}
          defaultValue=""
        />
      </WrapperForm>
      <Button onPress={handleSubmit(onSubmit)}>
        <TextButton allowFontScaling={false}>
          {'SignIn'.toUpperCase()}
        </TextButton>
      </Button>
      <Loading isActive={loading} />
    </Container>
  );
};

export default SignInScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
  justify-content: center;
  align-items: center;
`;
const ContentDismiss = styled(Pressable)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.Text`
  width: 80%;
  height: auto;
  font-size: 32px;
  text-align: center;
  color: #427b73;
  margin-bottom: 30px;
`;
const WrapperForm = styled.View`
  width: 80%;
  height: auto;
  flex-direction: column;
`;
const Label = styled.Text`
  color: #1e1e1e;
  font-size: 16px;
`;
const Button = styled(Pressable)`
  background-color: #427b73;
  width: 250px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-top: 30px;
`;
const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const TextError = styled.Text`
  color: red;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
