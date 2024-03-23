import { useState } from 'react';
import {Button, Layout,theme } from 'antd';
import Logo from './components/Logo';
import Menulist from './components/Menulist';
import ToggleThemeButton from './components/ToggleThemeButton';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import '../../../../assets/css/admin/navigation.css';
import AdminPage from './Collegedetails';
import {   Typography, AppBar, Toolbar } from '@mui/material';
import EditCollegeDetails from './Editclg';
import UserList from './Payments';

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
      <UserList/>
      </Layout>
    </Layout>
    </>
    );
}

export default Navigation;
// import { useState } from 'react';
// import {Button, Layout,theme } from 'antd';
// import Logo from './components/Logo';
// import Menulist from './components/Menulist';
// import ToggleThemeButton from './components/ToggleThemeButton';
// import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
// import '../../../../assets/css/admin/navigation.css';
// import DashboardPage from './TaskManagementTable';
// import {   Typography, AppBar, Toolbar } from '@mui/material';

// const { Header, Sider } = Layout;
// function Navigation() {
//   const [darkTheme, setdarkTheme] = useState(true);
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleTheme = () => {
//     setdarkTheme (!darkTheme);
//   };

//   const{
//     token: {colorBgContainer},
//   } = theme.useToken();

//   return (
//     <>
//     <Layout>  
        
//       <Sider collapsed= {collapsed}
//       collapsible 
//       trigger={null}
//       theme={darkTheme ? 'dark': 'light'}
//       className="sidebar"
//       style={{position:"fixed"}}>
//       <Logo />
//       <Menulist darkTheme={darkTheme} />
//       <ToggleThemeButton darkTheme={darkTheme}
//         toggleTheme={toggleTheme} />
//       </Sider>
//       <Layout style={{marginLeft:"10%"}}>
        
//         <Header style = {{padding:0,background:
//           colorBgContainer,color:'black' ,marginLeft:'-120px',width:'110%', display:'flex'}}>
            
//           <Button 
//           type='text' 
//           style={{marginLeft:"8%"}}
//           className="togglee"
//           onClick={()=> setCollapsed(!collapsed)}
//           icon = {
//             collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>
//            }/>
//            <Toolbar style={{textAlign:'center',marginLeft:'24%'}}>
//           <Typography variant="h6" noWrap>
//             Admin Dashboard
//           </Typography>
//         </Toolbar>
//         </Header>
//       <DashboardPage/>
//       </Layout>
//     </Layout>
//     </>
//     );
// }

// export default Navigation;
