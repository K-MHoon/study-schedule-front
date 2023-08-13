import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const SubmitButton = styled(Button)`
  width: 100%;
  margin: 0;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  background: #22b8cf;
  border: none;

  &:hover {
    background-color: #088699;
  }
`;

export const SearchButton = styled(Button)`
  margin: 0;
  background-color: #22b8cf;
  border-radius: 10px !important;
  border: 0;

  &:hover {
    background-color: #088699;
  }
`;

export const RadiusButton = styled(Button)`
  margin: 0;
  border-radius: 50px;
  border: 0;
  background-color: #64d1e2;

  &:hover {
    background-color: #0a7384;
  }
`;
