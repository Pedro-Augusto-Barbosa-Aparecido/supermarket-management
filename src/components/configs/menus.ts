export const MENUS = {
    settings: true,
    menus: [
        {
            "menu_title": "Products",
            sub_menu: [
                {
                    link: "product/brand/",
                    title: "Brand",
                    icon_warning: {
                        warning: false,
                        icon: "bi bi-exclamation-triangle"
                    },
                    icon: "bi bi-award"
                },
                {
                    link: "#",
                    title: "Products",
                    icon_warning: {
                        warning: true,
                        icon: "bi bi-exclamation-triangle"
                    },
                    icon: "bi bi-bag-fill"
                },
            ]
        }
    ]

};

export const MENUS_SELLS = {
    settings: false,
    menus: [
        {
            "menu_title": "Sells",
            sub_menu: [
                {
                    link: "#",
                    title: "Sells",
                    icon_warning: {
                        warning: true,
                        icon: "bi bi-exclamation-triangle"
                    },
                    icon: "fa fa-shopping-cart"
                },
                {
                    link: "#",
                    title: "Expenses",
                    icon_warning: {
                        warning: true,
                        icon: "bi bi-exclamation-triangle"
                    },
                    icon: "fa fa-money"
                },
                {
                    link: "#",
                    title: "Dashboard Sells",
                    icon_warning: {
                        warning: true,
                        icon: "bi bi-exclamation-triangle"
                    },
                    icon: "fa fa-line-chart"
                },
            ]
        }
    ]

};

export const MENUS_EXPENSES = {
    settings: false,
    menus: [
        {
            "menu_title": "Expenses",
            sub_menu: [
                {
                    link: "#",
                    title: "Orders",
                    icon_warning: {
                        warning: true,
                        icon: "bi bi-exclamation-triangle"
                    },
                    icon: "bi bi-truck"
                },
                {
                    link: "#",
                    title: "Serve",
                    icon_warning: {
                        warning: true,
                        icon: "bi bi-exclamation-triangle"
                    },
                    icon: "bi bi-truck-flatbed"
                },
                {
                    link: "#",
                    title: "Spending",
                    icon_warning: {
                        warning: true,
                        icon: "bi bi-exclamation-triangle"
                    },
                    icon: "fa fa-money"
                },
            ]
        }
    ]

};