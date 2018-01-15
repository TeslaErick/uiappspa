import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css'
import TabLay from '../components/TablaLayout'
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Sider, Footer } = Layout;


class LayoutUI extends Component {
    // constructor(props){
    //     super(props)
    //         this.state = {  articulos: []   }
    // }
    // componentWillMount(){
    //     fetch('http://localhost:3001/api/v1/')
    //         .then((response)=>{
    //             return response.json();
    //         })
    //         .then((articulos)=>{
    //             this.setState({ articulos: articulos})
    //         })
    // }
  render() {
    return (
      <Layout>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">Pedido Sugerido</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="bar-chart" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="cloud-o" />
            <span className="nav-text">nav 5</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="appstore-o" />
            <span className="nav-text">nav 6</span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="team" />
            <span className="nav-text">nav 7</span>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="shop" />
            <span className="nav-text">nav 8</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: '#fff', padding: 0, textAlign: 'center'}}><h1>Pedidos</h1></Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>

          <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
            <TabLay />
          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Super Promociones Acayucan ©2018 Created by Proyecto Dual
        </Footer>
      </Layout>
    </Layout>
    );
  }
}

export default LayoutUI;