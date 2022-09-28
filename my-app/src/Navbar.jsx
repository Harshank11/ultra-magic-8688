// import NavbarStyle from "./Navbar.module.css";
import { useContext } from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

export default function Navbar() {


  return (
    <div>
      <div >
        <h1>Home</h1>
        <h1>Explore</h1>
        <h1>Products</h1>
        <button>Logout</button>
      </div>

        <Menu>
        <MenuButton >
            Actions
        </MenuButton>
        <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
        </Menu>
          
        <div class="header" id="header">
        <div>
            <img src="images\\ham.png" id="ham" onclick="showSideBar()"/>
            <img src="./ham.png" alt="broken" />
        </div>
        <div>
            <img src="images\\nav_logo.png" id="nav_logo"/>
        </div>

        <div id="nav">
            <ul>
              <li>Become a Host</li>
                <a href="/host/host.html">Become a Host</a>
                    <a href="/ZMS/ZMS.html">ZMS</a>
                
              
        
                {/* <%if(user===null){%> */}
                    <a href="/login" id="user_not_login">
                        <li id="login">Login/Signup</li>
                   </a>
                {/* <%}else{ %>  
                   <li><%=user.name%></li>
                <% } %> */}
                <li id="user">
                    <a href="#" id="nav_name"></a>
                    <i class="icon-user"></i>
                </li>
            </ul>
        </div>
    </div>
    </div>
    
  );
}
