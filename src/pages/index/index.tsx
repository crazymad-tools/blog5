import React, { useState, useEffect } from "react";
import { Paging } from "../components/common";

interface Props {}

const IndexPage: React.FC<Props> = props => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <Paging
        total={100}
        current={currentPage}
        perPage={5}
        onChange={(current: any) => setCurrentPage(current)}
      />

      <ul className="article-list">
        <li className="article-item">
          <p>文章1</p>
        </li>
      </ul>

      <Paging
        total={100}
        current={currentPage}
        perPage={5}
        onChange={(current: any) => setCurrentPage(current)}
      />
    </div>
  );
};

export default IndexPage;
