import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material';
import React, { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../../css/Pagination.scss';
import { useNavigate } from 'react-router-dom';

const PublicStudyListForm = ({
  page,
  data,
  loading = true,
  getPublicStudyList,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && data && (
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
      )}
      {!loading && page && (
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
      )}
    </>
  );
};

export default PublicStudyListForm;
