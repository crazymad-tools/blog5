import React from 'react';
// import { useHistory  } from 'react-router';
import './index.scss';
import { RouteChildrenProps } from 'react-router-dom';

interface Props extends RouteChildrenProps {

}

const IndexPage: React.FC<Props> = props => {
  // const history = useHistory();

  return (
    <div>
      首页
      {/* <button onClick={e => history.push('/auth')}>登录</button> */}
      <button onClick={e => props.history.push('/auth/login')}>登录</button>
      <button onClick={e => props.history.push('/auth/register')}>注册</button>
    </div>
  )
}

export default IndexPage;