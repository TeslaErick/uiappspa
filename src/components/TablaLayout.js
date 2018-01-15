import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
{
  title: 'Fecha Inicio',
  dataIndex: 'FechaInicio',
  width: '20%',
},
{
  title: 'Fecha Final',
  dataIndex: 'FechaFinal',
  width: '20%',
},
{
  title: 'Almacen',
  dataIndex: 'Almacen',
  width: '10%',
},
{
  title: 'Articulo',
  dataIndex: 'Articulo',
  sorter: true,
  width: '10%',
}, 
{
  title: 'MinUV',
  dataIndex: 'MinUV',
  width: '10%',
},
{
  title: 'Promedio UV',
  dataIndex: 'PromUV',
  width: '10%',
},
{
  title: 'Maxima UV',
  dataIndex: 'MaxUV',
  width: '10%',
},
{
  title: 'Stock Min',
  dataIndex: 'SctockMinCalc',
  width: '10%',
},
];

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
    fetch('http://localhost:3001/api/v1/bodega')
    .then(results =>{
      return results.json();
    }).then(data => {
      const pagination = { ...this.state.pagination };
      pagination.total = data.totalCount
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
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default TabLay