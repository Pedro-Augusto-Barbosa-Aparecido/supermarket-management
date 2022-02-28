import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export type IconWarning = {
    warning: Boolean,
    icon: string

}

export type SubMenu = {
    link: string,
    title: string,
    icon_warning: IconWarning,
    icon: string

}

export type Menu = {
    menu_title: string,
    sub_menu: Array<SubMenu>
}

export type SubMenusProps = {
    settings: Boolean,
    menus: Array<Menu>

}

export default function SubMenus (props: SubMenusProps) {
    const menuSettings = props.settings ? "container-menu-settings" : "";

    return (
        <main>
            <div className="container">
                <div className={`container-menu ${menuSettings}`}>
                    {
                        props.menus.map((menu, index) => {
                            return (
                                <div className="menu-block" key={index}>
                                    <div className="menu-block-title">
                                        {
                                            props.settings ?
                                            <i className="fa fa-cogs" aria-hidden="true"/>
                                                :
                                            <i className="fa fa-table" aria-hidden="true"/>
                                        }
                                        <p>{menu.menu_title}</p>
                                    </div>
                                    {
                                        menu.sub_menu.map((sub_menu, _index) => {
                                            return (
                                                <div className="menu-block-sub-menu" key={_index}>
                                                    <Link to={`/${sub_menu.link}`} className="menu-block-link">
                                                        <i className={sub_menu.icon} aria-hidden="true"></i>
                                                        <p>{sub_menu.title}</p>
                                                        {
                                                            sub_menu.icon_warning.warning ? 
                                                                <i className={`warning ${sub_menu.icon_warning.icon}`} title="Sorry, this area is unavailable!"/>
                                                            :
                                                            <></>
                                                        }
                                                    </Link>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            );
                        })
                        
                    }
                </div>
            </div>
        </main>
    );

}
