import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, BarsOutlined, DollarOutlined, PayCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const MenuList = ({darkTheme}) => {
   return (
       <Menu
        theme={darkTheme ? 'dark' : 'light'} 
        mode = "inline"
         className="menu-bar">
           <Menu.Item key="home" icon={<HomeOutlined />}>
           <Link to="/admin">Dashboard</Link>
           </Menu.Item>
           <Menu.Item key="activity" icon={<AppstoreOutlined />}>
           Queries
           </Menu.Item>

           <Menu.SubMenu 
           key="tasks" 
           icon={<BarsOutlined />}
           title="Tasks">
           <Menu.Item key="task-1"> <Link to ='/admin/display'>View College</Link></Menu.Item>
           <Menu.Item key="task-2"><Link to="/admin/editapplicationform">View Applications</Link></Menu.Item>
           <Menu.SubMenu key="subtasks" title="Subtasks">
               <Menu.Item key="subtask-1"><Link to="/admin/college">Add College Details</Link></Menu.Item>
               <Menu.Item key="subtask-2"><Link to="/admin/course">Add Course Details</Link></Menu.Item>
               </Menu.SubMenu>
            </Menu.SubMenu>

           
           <Menu.Item key="progress" icon={<DollarOutlined />}>
           <Link to="/admin/pay">Payments</Link>
           </Menu.Item>
           <Menu.Item key="payment" icon={<PayCircleOutlined />}>
           Settings
           </Menu.Item>
           <Menu.Item key="settings" icon={<SettingOutlined />}>
           <Link to="/">Logout</Link>
           </Menu.Item>
       </Menu>
   );
   };
export default MenuList;