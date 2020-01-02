import React, { useEffect, useState } from 'react';
import './index.scss';

interface Props {
  value?: string;
  onChange?: Function;
  placeholder?: string;
}

const TextEditor: React.FC<Props> = props => {
  const [value, setValue] = useState('');

  useEffect(() => {
    props.value && setValue(props.value);
  }, [props.value]);

  function change(e: any) {
    setValue(e.currentTarget.value);
    props.onChange && props.onChange(e);
  }

  return (
    <div className="text-editor">
      <textarea onChange={change} placeholder={props.placeholder} />
    </div>
  )
}

TextEditor.defaultProps = {
  placeholder: 'Please type somting in here'
}

export default TextEditor;