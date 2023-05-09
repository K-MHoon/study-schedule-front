import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material';
import React from 'react';
import { Button, Col, Form, InputGroup, Row, Table } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../../css/Pagination.scss';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchButton = styled(Button)`
  margin: 0;
  background-color: #22b8cf;
  border-radius: 10px !important;
  border: 0;

  &:hover {
    background-color: #088699;
  }
`;

const PublicStudyListForm = ({ page, data, getPublicStudyList }) => {
  const navigate = useNavigate();
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text style={{ borderRadius: '10px 0 0 10px' }}>
          스터디명
        </InputGroup.Text>
        <Form.Control
          style={{ marginRight: '20px', borderRadius: '0 10px 10px 0' }}
          type="text"
        />
        <InputGroup.Text style={{ borderRadius: '10px 0 0 10px' }}>
          방장
        </InputGroup.Text>
        <Form.Control
          style={{ marginRight: '20px', borderRadius: '0 10px 10px 0' }}
          type="text"
        />
        <SearchButton>검색</SearchButton>
      </InputGroup>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>스터디 ID</th>
            <th>이름</th>
            <th>방장</th>
            <th>정원</th>
            <th>생성일</th>
          </tr>
        </thead>
        <tbody>
          {data.map((study) => (
            <tr key={study.id} onClick={() => navigate(`/study/${study.id}`)}>
              <td>{study.id}</td>
              <td>{study.studyName}</td>
              <td>{study.leaderId}</td>
              <td>
                {study.remainCount}/{study.fullCount}
              </td>
              <td>{study.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        activePage={page.number + 1}
        itemsCountPerPage={10}
        totalItemsCount={
          page.totalElements === undefined ? 0 : page.totalElements
        }
        pageRangeDisplayed={5}
        firstPageText={
          <KeyboardDoubleArrowLeft
            style={{ fontSize: 25, display: 'flex', color: '#22b8cf' }}
          />
        }
        prevPageText={
          <ArrowBackIos
            style={{ fontSize: 15, display: 'flex', color: '#22b8cf' }}
          />
        }
        nextPageText={
          <ArrowForwardIos
            style={{ fontSize: 15, display: 'flex', color: '#22b8cf' }}
          />
        }
        lastPageText={
          <KeyboardDoubleArrowRight
            style={{ fontSize: 25, display: 'flex', color: '#22b8cf' }}
          />
        }
        onChange={(e) => getPublicStudyList(e - 1)}
      />
    </>
  );
};

export default PublicStudyListForm;
