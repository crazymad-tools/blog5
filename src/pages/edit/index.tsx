import React, { useState } from "react";
import "./index.scss";
import TextEditor from "../components/TextEditor";
// import Preview from "./Preview";
// import Preview from './Tmp';
// import("./Preview").then((template) => {
//   Preview = template;
// });
const Preview = React.lazy(() => import('./Preview'));

interface Props {}

const EditPage: React.FC<Props> = props => {
  const [preview, setPreview] = useState<boolean>(false);
  const [content, setContent] = useState("");

  return (
    <div id="editPage">
      <div className="editor-header">
        <div className="title-input-box">
          <input placeholder="Please type article title in here" />
        </div>
        <div className="tools">
          <span
            className={`iconfont blog-icon-yulan ${preview ? "active" : ""}`}
            onClick={e => setPreview(!preview)}
          />
          <span className="iconfont blog-icon-publish" />
          <span className="iconfont blog-icon-14" />
          <span className="iconfont blog-icon-table" />
        </div>
      </div>
      <div className="editor-container">
        <div className="editor-input">
          <TextEditor
            onChange={(e: any) => setContent(e.currentTarget.value)}
          />
        </div>
        {preview && <Preview content={content} />}
      </div>
    </div>
  );
};

export default EditPage;
