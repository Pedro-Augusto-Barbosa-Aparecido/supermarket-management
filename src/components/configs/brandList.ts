export const LIST_PAGE_BRAND = {
    textInput: [
        {
            name: "name",
            id: "name",
            label: "Name",
            placeholder: "Type brand name..."
        },
    ],
    selectInput: [
        {
            name: "active",
            id: "active",
            label: "Status",
            defaultValue: "Active",
            options: [
                {
                    value: 1,
                    selected: true,
                    labelOption: "Active"
                },
                {
                    value: 0,
                    selected: false,
                    labelOption: "Inactive"
                },
            ]

        }
    ],
    tableHeader: [
        "Name",
        "Active"
    ]

}