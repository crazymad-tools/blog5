import React from 'react';

interface Props { }

const IndexPage: React.FC<Props> = props => {

  return (
    <div>
      <ul>
        <li>1</li>
        <li>2 </li>
      </ul>
      <ul className="article-list">
        <li className="article-item">
          <p>博客开发日至</p>
        </li>
      </ul>
    </div>
  )
}

export default IndexPage;