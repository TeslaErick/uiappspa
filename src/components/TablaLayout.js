import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
// {
//   title: 'Fecha Inicio',
//   dataIndex: 'FechaInicio',
//   width: '20%',
// },
// {
//   title: 'Fecha Final',
//   dataIndex: 'FechaFinal',
//   width: '20%',
// },
// {
//   title: 'Almacen',
//   dataIndex: 'Almacen',
//   width: '10%',
// },
// {
//   title: 'Articulo',
//   dataIndex: 'Articulo',
//   sorter: true,
//   width: '10%',
// }, 
// {
//   title: 'MinUV',
//   dataIndex: 'MinUV',
//   width: '10%',
// },
// {
//   title: 'Promedio UV',
//   dataIndex: 'PromUV',
//   width: '10%',
// },
// {
//   title: 'Maxima UV',
//   dataIndex: 'MaxUV',
//   width: '10%',
// },
// {
//   title: 'Stock Min',
//   dataIndex: 'SctockMinCalc',
//   width: '10%',
// },
  { title: 'ARTICULO', width: 100, dataIndex: 'Articulo', key: 'articulo', fixed: 'left' },
  { title: 'NOMBRE', width: 220, dataIndex: 'Nombre', key: 'nombre', fixed: 'left' },
  { title: 'RELACION', dataIndex: 'Relacion', key: '1', width: 150 },
  { title: 'TIPO', dataIndex: 'Tipo', key: '2', width: 150 },
  { title: 'MARCA', dataIndex: 'Marca', key: '3', width: 150 },
  { title: 'FECHA', dataIndex: 'Fecha', key: '4', width: 150 },
  { title: 'ZARAGOZA', dataIndex: 'ZARAGOZA', key: '5', width: 150 },
  { title: 'VICTORIA', dataIndex: 'VICTORIA', key: '6', width: 150 },
  { title: 'OLUTA', dataIndex: 'OLUTA', key: '7', width: 150 },
  { title: 'JALTIPAN', dataIndex: 'JALTIPAN', key: '8', width: 150 },
  { title: 'TOTAL', dataIndex: 'TOTAL', key: '9', width: 150 },
  { title: 'EXISTUV', dataIndex: 'ExistUV', key: '10', width: 150 },
  { title: 'TOTAL', dataIndex: 'ExistUC', key: '11', width: 150 },
  { title: 'StockMinimoActUV', dataIndex: 'StockMinimoActUV', key: '12', width: 150 },
  { title: 'StockMinimoActUC', dataIndex: 'StockMinimoActUC', key: '13', width: 150 },
  { title: 'StockMinimoTriUV', dataIndex: 'StockMinimoTriUV', key: '14', width: 150 },
  { title: 'StockMinimoTriUC', dataIndex: 'StockMinimoTriUC', key: '15', width: 150 },
  { title: 'PedidoSugeridoActCAL', dataIndex: 'PedidoSugeridoActCAL', key: '16', width: 150 },
  { title: 'PedidoSugeridoTriCAL', dataIndex: 'PedidoSugeridoTriCAL', key: '16', width: 150 },
  { title: 'ExistZaragoza', dataIndex: 'ExistZaragoza', key: '17', width: 150 },
  { title: 'MinZaragoza', dataIndex: 'MinZaragoza', key: '17', width: 150 },
  { title: 'MinTriZaragoza', dataIndex: 'MinTriZaragoza', key: '17', width: 150 },
  { title: 'ExistVictoria', dataIndex: 'ExistVictoria', key: '17', width: 150 },
  { title: 'MinVictoria', dataIndex: 'MinVictoria', key: '17', width: 150 },
  { title: 'MinTriVictoria', dataIndex: 'MinTriVictoria', key: '17', width: 150 },
  { title: 'ExistOluta', dataIndex: 'ExistOluta', key: '17', width: 150 },
  { title: 'MinOluta', dataIndex: 'MinOluta', key: '17', width: 150 },
  { title: 'ExistJaltipan', dataIndex: 'MinTriOluta', key: '17', width: 150 },
  { title: 'ExistJaltipan', dataIndex: 'ExistJaltipan', key: '17', width: 150 },
  { title: 'MinJaltipan', dataIndex: 'MinJaltipan', key: '17', width: 150 },
  { title: 'MinTriJaltipan', dataIndex: 'MinTriJaltipan', key: '17', width: 150 },
  { title: 'ExistBodega', dataIndex: 'ExistBodega', key: '17', width: 150 },

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
    fetch('http://localhost:3001/api/v1/120')
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
        scroll={{ x: 2000, y: 300 }}
      />
    );
  }
}

export default TabLay