import { combineReducers } from "redux";
import Auth_Login from "./AuthLogin";
import Auth_Verify from "./AuthVerify";
import AuthReg from "./AuthRegister";
import AddMenu from "./AddMenu";
import { GetMenuByUser } from "../Actions/Menu";
import Delete_Menu from "./DeleteMenu";
import get_menuID from "./getMenuId";
import get_category from "./GetCategory";
import edit_menu from "./EditMenu";
import get_user from "./GetUser";
import search_menu from "./SearchMenu";
import edit_user from "./EditProfile";
import add_notification from "./AddNotification";


const appReducers = combineReducers({
    Auth_Login, 
    AuthReg, 
    AddMenu, 
    GetMenuByUser, 
    Delete_Menu, 
    get_menuID, 
    get_category,
    edit_menu,
    get_user,
    Auth_Verify,
    search_menu,
    edit_user,
    add_notification
})

export default appReducers;