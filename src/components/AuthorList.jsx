import React from "react";

function AuthorList({ authors }) {
  return (
    <>
      <div className="components">
        <h1>Authors Components</h1>
        <ul>
          {
            authors.map((author) => {
              return <li key={author.id}>{author.name}</li>;
            })
            //keys get used by React for performance in reconciliation phase
          }
        </ul>
      </div>
    </>
  );
}

export default AuthorList;
