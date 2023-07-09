import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const CleanDisabledForm = styled(Form.Control)`
  &:disabled {
    background-color: white;
  }
`;
