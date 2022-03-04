import React from "react";
import { Route, Routes } from "react-router-dom";

import SubMenus from "./components/SubMenus";
import { MENUS, MENUS_SELLS, MENUS_EXPENSES } from "./components/configs/menus";
import BrandList from "./pages/Brand/list";

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<SubMenus settings={MENUS_SELLS.settings} menus={MENUS_SELLS.menus} />} />
            <Route path="/product" element={<SubMenus settings={MENUS.settings} menus={MENUS.menus} />} />
            <Route path="/product/brand/" element={<BrandList />} />
            <Route path="/expense" element={<SubMenus settings={MENUS_EXPENSES.settings} menus={MENUS_EXPENSES.menus} />} />
        </Routes>
    );

}
