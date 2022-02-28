import React from "react";
import { Route, Routes } from "react-router-dom";

import SubMenus from "./components/SubMenus";
import { MENUS, MENUS_SELLS, MENUS_EXPENSES } from "./components/configs/menus";
import PageList from "./pages/generics/list";
import { LIST_PAGE_BRAND } from "./components/configs/brandList";

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<SubMenus settings={MENUS_SELLS.settings} menus={MENUS_SELLS.menus} />} />
            <Route path="/product" element={<SubMenus settings={MENUS.settings} menus={MENUS.menus} />} />
            <Route path="/product/brand/" element={<PageList tableHeader={LIST_PAGE_BRAND.tableHeader} title="Brand List" textInput={LIST_PAGE_BRAND.textInput} selectInput={LIST_PAGE_BRAND.selectInput} />} />
            <Route path="/expense" element={<SubMenus settings={MENUS_EXPENSES.settings} menus={MENUS_EXPENSES.menus} />} />
        </Routes>
    );

}
