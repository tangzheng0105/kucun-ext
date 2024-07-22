import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { createRoot } from 'react-dom/client';
import { Button } from 'antd';

import MyTable from './modules/myTable'

import './index.css';

const Popup = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="my-app">
      <h1>Demo Test!</h1>
      <Button type="primary" onClick={showModal}>Primary Button</Button>
      <MyTable isModalOpen={isModalOpen} onCancel={handleCancel}></MyTable>
    </div>
  );
};


window.onload = function () {
  // 页面加载完成后执行的代码
  setTimeout(() => {
    const app = document.body;
    const container = document.createElement('div')
    app.appendChild(container)

    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    console.log('render ext page')
    root.render( <ConfigProvider locale={zhCN}>
      <Popup /></ConfigProvider>      
      );
  }, 1 * 1000)

};

