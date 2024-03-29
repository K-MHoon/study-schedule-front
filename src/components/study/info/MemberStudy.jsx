import React, { useCallback, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Url } from '../../../App';
import { LinkTd } from '../../common/CustomTable';

const MyTr = styled.tr`
  background-color: ${(props) => (props.isMine ? '#CCFDB1' : '#FCF8B6')};
`;

const MemberStudy = ({ data, removeSelectedStudyMember }) => {
  const [studyList, setStudyList] = useState([]);
  const navigate = useNavigate();

  const handleRemoveSelectedStudyMember = useCallback(
    (e) => {
      e.preventDefault();
      removeSelectedStudyMember(studyList);
    },
    [studyList],
  );

  const handleStudyList = useCallback(
    (id) => {
      if (studyList.find((data) => data === id)) {
        setStudyList(studyList.filter((data) => data !== id));
      } else {
        setStudyList([...studyList, id]);
      }
    },
    [studyList],
  );

  const gotoStudyManageForm = useCallback((study) => {
    if (study.isMine) {
      navigate(`${Url.studyInfoPage}/${study.id}`);
    } else {
      navigate(`/study/${study.id}`, { state: { readOnly: true } });
    }
  }, []);

  return (
    <Form.Group className="mb-3 form-border" controlId="joinedStudys">
      <div className="form-content">
        <Form.Label className="form-custom-label">
          가입된 스터디 목록
        </Form.Label>
        <div style={{ textAlign: 'right', fontSize: '13px' }}>
          <span style={{ color: '#CCFDB1' }}>●</span> 내가 생성한 스터디
          <br />
          <span style={{ color: '#FCF8B6' }}>●</span> 내가 가입한 스터디
        </div>
        <p />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>이름</th>
              <th>방장</th>
              <th>활성화</th>
              <th>생성일</th>
              <th>가입일</th>
            </tr>
          </thead>
          <tbody>
            {data.map((study) => (
              <MyTr key={study.id} isMine={study.isMine}>
                <td>
                  <Form.Check
                    type="checkbox"
                    id={study.id}
                    onChange={(e) => handleStudyList(study.id)}
                  />
                </td>
                <LinkTd onClick={() => gotoStudyManageForm(study)}>
                  {study.studyName}
                </LinkTd>
                <td>{study.leaderId}</td>
                <td>{study.isUse}</td>
                <td>{study.createdAt}</td>
                <td>{study.joinedAt}</td>
              </MyTr>
            ))}
          </tbody>
        </Table>
        <div style={{ textAlign: 'right' }}>
          <Button
            variant="danger"
            className="danger-button"
            onClick={handleRemoveSelectedStudyMember}
          >
            선택한 스터디 탈퇴하기
          </Button>
        </div>
      </div>
    </Form.Group>
  );
};

export default MemberStudy;
