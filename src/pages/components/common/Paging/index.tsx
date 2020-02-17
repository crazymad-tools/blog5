import React, { useEffect, useState } from "react";
import "./index.scss";

interface Props {
  total: number;
  current: number;
  onChange: Function;
  perPage: number;
}

const Paging: React.FC<Props> = props => {
  const [pageList, setPageList] = useState<number[]>([]);

  useEffect(() => {
    let list = [];
    let totalPage = Math.ceil(props.total / props.perPage);
    let start = Math.max(props.current - 2, 1);
    let end = Math.min(totalPage, start + 4);
    start = end - Math.min(4, totalPage - 1);

    for (; start <= end; start++) {
      list.push(start);
    }
    setPageList(list);
  }, [props.current]);

  function pervPage() {
    props.onChange(Math.max(1, props.current - 1));
  }

  function nextPage() {
    props.onChange(
      Math.min(Math.ceil(props.total / props.perPage), props.current + 1)
    );
  }

  return (
    <ul className="paging">
      <li onClick={pervPage}>prev</li>
      {pageList.map((page: number, index: number) => (
        <li
          key={index}
          className={`${props.current === page ? "active" : ""}`}
          onClick={e => props.onChange(page)}>
          {page}
        </li>
      ))}
      <li onClick={nextPage}>next</li>
    </ul>
  );
};

export default Paging;
