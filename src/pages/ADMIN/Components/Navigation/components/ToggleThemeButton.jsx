import { Button } from 'antd';
import {HiOutlineSun, HiOutlineMoon} 
from 'react-icons/hi';

// eslint-disable-next-line react/prop-types
const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
   return (
     <div className="toggle-theme-btn">
       <Button onClick={toggleTheme}>
         {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
       </Button>
     </div>
   );
 };
 
 export default ToggleThemeButton;