import React from "react";
import marked from "marked";
import highlight from "highlight.js";

marked.setOptions({
  highlight: function(code, lang) {
    return highlight.highlightAuto(code, [lang]).value;
  },
  langPrefix: "hljs lang-"
});

interface Props {
  content: string;
}

const Preview: React.FC<Props> = props => {
  return (
    <div
      className="markdown-review"
      dangerouslySetInnerHTML={{ __html: marked(props.content) }}
    />
  );
};

export default Preview;
