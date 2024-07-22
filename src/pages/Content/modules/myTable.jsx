import React from 'react';
import { Modal,Table,DatePicker } from 'antd';

import './myTable.css';

const MyTable = ({isModalOpen, onCancel}) => {
  const { RangePicker } = DatePicker;
  const columns = [
    {
      title: '分类',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '数量',
      dataIndex: 'num',
      width: '30%',
      key: 'num',
    },
  ];
  const data = [
    {
      key: 1,
      name: '2024-07-22',
      num: 60,
      children: [
        {
          key: 11,
          name: 'BL',
          num: 42,
        },
        {
          key: 12,
          name: 'WH',
          num: 30,
          children: [
            {
              key: 121,
              name: 'S',
              num: 16,
            },
            {
              key: 122,
              name: 'M',
              num: 16,
            },
            {
              key: 123,
              name: 'L',
              num: 16,
            },
          ],
        },
        {
          key: 13,
          name: 'AP',
          num: 72,
          children: [
            {
              key: 131,
              name: 'S',
              num: 42
            }
          ],
        },
      ],
    },
    {
      key: 2,
      name: '2024-07-23',
      num: 32
    },
  ];
  return (
    <>
      <Modal title="库存明细统计" open={isModalOpen} onOk={onCancel}>
      <RangePicker />
      <Table
        columns={columns}
        dataSource={data}
      />
      </Modal>
    </>
  );
};


export default MyTable

