import React, { useState, Suspense } from "react";
import "./index.scss";
import TextEditor from "../components/TextEditor";
import Tmp from './Tmp';
import useStore from '../../store';
import { Message } from '../components/common'
// import Preview from "./Preview";
// import Preview from './Tmp';
// import("./Preview").then((template) => {
//   Preview = template;
// });
const Preview = React.lazy(() => import("./Preview"));

interface Props { }

const EditPage: React.FC<Props> = props => {
  const [preview, setPreview] = useState<boolean>(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTages] = useState<string[]>([]);
  const [abstract, setAbstract] = useState('');
  const { articleStore } = useStore();

  function publish() {
    // history.push()
    // console.log('')
    Message.success('发布成功');
    // articleStore.publish({
    //   title, content, tags, abstract
    // })
  }

  return (
    <div id="editPage">
      <div className="editor-header">
        <div className="title-input-box">
          <input value={title} onChange={e => setTitle(e.currentTarget.value)} placeholder="Please type article title in here" />
        </div>
        <div className="tools">
          <span
            className={`iconfont blog-icon-yulan ${preview ? "active" : ""}`}
            onClick={e => setPreview(!preview)}
          />
          <span className="iconfont blog-icon-publish" onClick={publish} />
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
        {preview && (
          <Suspense fallback={<Tmp />}>
            <Preview content={content} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default EditPage;
