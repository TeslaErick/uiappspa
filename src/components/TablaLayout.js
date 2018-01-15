import React, { Component } from 'react';
import { Table } from 'antd';

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
  constructor(){
    super();
    this.state = {
      data: [],
      pagination: {},
      loading: false,
    }
  }

  componentDidMount(){
    this.setState({ loading: true });
    fetch('http://localhost:3001/api/v1')
    .then(results =>{
      return results.json();
    }).then(data => {
      console.log(data.recordset)
      const pagination = { ...this.state.pagination };
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.recordset,
        pagination
      });
    })
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