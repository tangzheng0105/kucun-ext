import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from 'antd';

import './index.css';

const Popup = () => {
  return (
    <div className="my-app">
      <h1>Demo Test!</h1>
      <Button type="primary">Primary Button</Button>
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
    root.render(<Popup />);
  }, 1 * 1000)

};

