import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material';
import React from 'react';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../../css/Pagination.scss';
import { useNavigate } from 'react-router-dom';

const PublicStudyListForm = ({ page, data, getPublicStudyList }) => {
  const navigate = useNavigate();
  return (
    <>
      <Form onSubmit={(e) => console.log(e)}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="studyName">
            <Form.Label>스터디 명</Form.Label>
            <Form.Control type="text" placeholder="스터디 명" />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="studyLeader">
            <Form.Label>방장</Form.Label>
            <Form.Control type="text" placeholder="방장" />
          </Form.Group>
        </Row>
        <Button type="submit">검색</Button>
      </Form>
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
