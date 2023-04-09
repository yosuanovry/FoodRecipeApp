import { combineReducers } from "redux";
import Auth_Login from "./AuthLogin";
import AuthReg from "./AuthRegister";
import AddMenu from "./AddMenu";
import { GetMenuByUser } from "../Actions/Menu";
import Delete_Menu from "./DeleteMenu";
import get_menuID from "./getMenuId";


const appReducers = combineReducers({
    Auth_Login, AuthReg, AddMenu, GetMenuByUser, Delete_Menu, get_menuID
})

export default appReducers;