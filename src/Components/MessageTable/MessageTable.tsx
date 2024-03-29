import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import useMessages from "./../../hooks/useMessage";
import Loading from "../Loading/Loading";

const MessageTable = () => {
  const { data: messages, error, isLoading } = useMessages();

  const [pagesPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * pagesPerPage;
  const indexOfFirstPost = indexOfLastPost - pagesPerPage;

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentMessages = messages?.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  if (isLoading) return <Loading />;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Sender</th>
            <th>Email</th>
            <th>Message</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentMessages?.map((message) => (
            <tr key={message._id}>
              <td> {message.sender} </td>
              <td> {message.email} </td>
              <td>{message.message}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {messages.length > pagesPerPage && (
        <Pagination
          count={messages.length}
          paginate={paginate}
          pagesPerPage={pagesPerPage}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </>
  );
};

export default MessageTable;
