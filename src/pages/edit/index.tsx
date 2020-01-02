import React, { useState } from 'react';
import './index.scss';
import TextEditor from '../components/TextEditor';

interface Props {

}

const EditPage: React.FC<Props> = props => {
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <div id="editPage">
      <div className="editor-header">
        <div className="title-input-box">
          <input placeholder="Please type article title in here" />
        </div>
        <div className="tools">
          <span
            className={`iconfont blog-icon-yulan ${preview ? 'active' : ''}`}
            onClick={e => setPreview(!preview)}
          />
          <span className="iconfont blog-icon-publish" />
          <span className="iconfont blog-icon-14" />
          <span className="iconfont blog-icon-table" />
        </div>
      </div>
      <div className="editor-container">
        <div className="editor-input">
          <TextEditor />
        </div>
        {
          preview && <div className="markdown-review">preview page</div>
        }
      </div>
    </div>
  )
}

export default EditPage;

