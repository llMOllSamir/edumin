import { createContext, useState } from "react";

export const dataContext = createContext(0)

export default function DataContextProvider({ children }) {
    const [data, setData] = useState([
        {
            id: 1,
            img: require("../assists/avatar/1.jpg"),
            name: "Tiger Nixon",
            designation: "Clerk",
            phone: "123 456 7890",
            email: "info@example.com",
            address: "#8901 Demo Road",
            date: "2011/04/25",
        },
        {
            id: 2,
            img: require("../assists/avatar/2.jpg"),
            name: "Garrett Winters",
            designation: "Accountant",
            phone: "987 654 3210",
            email: "info@example.com",
            address: "#8901 Demo Road",
            date: "2011/07/25"
        },
        {
            id: 3,
            img: require("../assists/avatar/3.jpg"),
            name: "Ashton Cox",
            designation: "Junior Technical",
            phone: "(123) 4567 890",
            email: "info@example.com",
            address: "#8901 Demo Road",
            date: "2009/01/12"
        },
        {
            id: 4,
            img: require("../assists/avatar/4.jpg"),
            name: "Cedric Kelly",
            designation: "Developer",
            phone: "123 456 7890",
            email: "info@example.com",
            address: "#8901 Demo Road",
            date: "2012/03/29"
        },
        {
            id: 5,
            img: require("../assists/avatar/5.jpg"),
            name: "Airi Satou",
            designation: "Accountant",
            phone: "987 654 3210",
            email: "info@example.com",
            address: "#8901 Demo Road",
            date: "2008/11/28"
        },
        {
            id: 6,
            img: require("../assists/avatar/6.jpg"),
            name: "Brielle Williamson",
            designation: "Specialist",
            phone: "123 456 7890",
            email: "info@example.com",
            address: "#8901 Demo Road",
            date: "2012/12/02"
        },
        {
            id: 7,
            img: require("../assists/avatar/7.jpg"),
            name: "Herrod Chandler",
            designation: "Sales Assistant",
            phone: "987 654 3210",
            email: "info@example.com",
            address: "#8901 Demo Road",
            date: "2012/08/06"
        },
        {
            id: 8,
            img: require("../assists/avatar/8.jpg"),
            name: "Rhona Davidson",
            designation: "Librarian",
            phone: "(123) 4567 890",
            email: "info@example.com",
            address: "#8901 Demo Road",
            date: "2010/10/14"
        },
        {
            id: 9,
            img: require("../assists/avatar/9.jpg"),
            name: "Colleen Hurst",
            designation: "Librarian",
            phone: "(123) 4567 890",
            email: "info@example.com",
            address: "#8901 Demo Road",
            date: "2009/09/15"
        },
        {
            id: 10,
            img: require("../assists/avatar/10.jpg"),
            name: "Sonya Frost",
            designation: "Librarian",
            phone: "123 456 7890",
            email: "info@example.com",
            address: "#8901 Demo Road",
            date: "2008/12/13"
        },
    ]
    )
    const removeItem = ({ name }) => {
        setData(prev => prev.filter(item => item.name !== name))
    }
    const addItem = (item) => {
        setData(prev => [...prev, item])
    }
    return <dataContext.Provider value={{ data, removeItem, addItem }}>{children}</dataContext.Provider>
}