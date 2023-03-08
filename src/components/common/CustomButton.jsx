import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const SubmitButton = styled(Button)`
  width: 100%;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  background: #22b8cf;
  border: none;

  &:hover {
    background-color: #088699;
  }

  &:last-child {
    margin-top: 10px;
  }
`;
