import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import React from 'react';
import { Spinner, Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import '../../css/Pagination.scss';

const PublicStudyListForm = ({ page, data, loading, gotoSelectPage }) => {
  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && (
        <>
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
                <tr key={study.id}>
                  <td>{study.id}</td>
                  <td>{study.studyName}</td>
                  <td>{study.leaderName}</td>
                  <td>
                    {study.remainCount}/{study.fullCount}
                  </td>
                  <td>{study.createdBy}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ReactPaginate
            activeClassName={'item active '}
            breakClassName={'item break-me'}
            breakLabel={'...'}
            containerClassName={'pagination'}
            disabledClassName={'disabled-page'}
            marginPagesDisplayed={page.size}
            nextClassName={'item next '}
            nextLabel={
              <ArrowForwardIos
                style={{ fontSize: 15, display: 'flex', color: '#22b8cf' }}
              />
            }
            onPageChange={(e) => console.log(e)}
            pageCount={page.totalPages}
            pageClassName={'item pagination-page '}
            pageRangeDisplayed={5}
            previousLabel={
              <ArrowBackIos
                style={{ fontSize: 15, display: 'flex', color: '#22b8cf' }}
              />
            }
          />
        </>
      )}
    </>
  );
};

export default PublicStudyListForm;
