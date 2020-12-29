import React from 'react';
import styled from 'styled-components';

export const FormInput = (props) => {
  const {error} = props;
  return (
    <>
      <TextInput autoCapitalize="none" {...props} />
      {error && <Error>{error.message}</Error>}
    </>
  );
};

export const TextInput = styled.TextInput`
  color: #696969;
  border-width: 1px;
  border-radius: 5px;
  border-color: #1e1e1e;
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  font-size: 16px;
  padding: 10px;
`;

export const Error = styled.Text`
  color: red;
  font-size: 14px;
  margin-top: -20px;
  margin-bottom: 20px;
`;
