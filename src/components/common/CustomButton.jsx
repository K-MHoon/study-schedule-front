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
