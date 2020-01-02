import React, { useEffect } from 'react';
import './index.scss';
import { RouteChildrenProps } from 'react-router-dom';
import useStores from '../../store';

interface Props extends RouteChildrenProps { }

const IndexPage: React.FC<Props> = props => {
  const { userStore } = useStores();
  
  return (
    <div>
      首页
      <button onClick={e => props.history.push('/auth/login')}>登录</button>
      <button onClick={e => props.history.push('/auth/register')}>注册</button>
      {userStore.isLogin ? <span>已登录</span> : <span>未登录</span>}
    </div>
  )
}

export default IndexPage;