import React, { Component } from 'react';
import { Table } from 'antd';
import reqwest from 'reqwest';

const columns = [{
  title: 'Articulo',
  dataIndex: 'Articulo',
  sorter: true,
  width: '20%',
}, {
  title: 'MinUV',
  dataIndex: 'MinUV',
  width: '20%',
}];

class TabLay extends Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }

  fetch = (params = {}) => {
    this.setState({ loading: true });
    reqwest({
      url: 'http://localhost:3001/api/v1/',
      method: 'GET',
      type: 'json',
    }).then((data) => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 500;
      this.setState({
        loading: false,
        data: data.recordset,
        pagination,
      });
    });
  }
  componentDidMount() {
    this.fetch();
  }
  render() {
    return (
      <Table columns={columns}
        rowKey={record => record.registered}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default TabLay