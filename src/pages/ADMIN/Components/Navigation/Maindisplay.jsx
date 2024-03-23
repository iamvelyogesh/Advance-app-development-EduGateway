import { useState } from 'react';
import {Button, Layout,theme } from 'antd';
import Logo from './components/Logo';
import Menulist from './components/Menulist';
import ToggleThemeButton from './components/ToggleThemeButton';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import '../../../../assets/css/admin/navigation.css';
// import AdminPage from './Collegedetails';
import {   Typography, AppBar, Toolbar } from '@mui/material';
import InstitutesPage from './InstitutePage';

const { Header, Sider } = Layout;
function Navigation() {
  const [darkTheme, setdarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setdarkTheme (!darkTheme);
  };

  const{
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <>
    <Layout>
      <Sider collapsed= {collapsed}
      collapsible 
      trigger={null}
      theme={darkTheme ? 'dark': 'light'}
      className="sidebar">
      <Logo />
      <Menulist darkTheme={darkTheme} />
      <ToggleThemeButton darkTheme={darkTheme}
        toggleTheme={toggleTheme} />
      </Sider>
      <Layout style={{marginLeft:'-2%'}}>
        <Header style = {{padding:0,background:
          colorBgContainer,color:'black' ,marginLeft:'-3px',width:'100%',display:'flex'}}>
          <Button 
          type='text'
          style={{marginLeft:'50px'}} 
          className="togglee"
          onClick={()=> setCollapsed(!collapsed)}
          icon = {
            collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>
           }/>
            <Toolbar style={{textAlign:'center',marginLeft:'36%'}}>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
        </Header>
      <InstitutesPage/>
      </Layout>
    </Layout>
    </>
    );
}

export default Navigation;