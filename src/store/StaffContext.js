import { createContext, useState } from "react";

export const staffContext = createContext()

export default function StaffContext({ children }) {
    const [keys] = useState(["name", "designation", "mobile", "email", "address", "joiningDate"])
    const [data, setData] = useState(
        [
            {
                id: 1,
                name: "Tiger Nixon",
                designation: "Clerk",
                mobile: "123 456 7890",
                email: "info@example.com",
                address: "#8901 Demo Road",
                joiningDate: "2011/04/25",
                img: require("../assists/avatar/1.jpg"),
            },
            {
                id: 2,
                name: "Garrett Winters",
                designation: "Accountant",
                mobile: "987 654 3210",
                email: "info@example.com",
                address: "#8901 Demo Road",
                joiningDate: "2011/07/25",
                img: require("../assists/avatar/2.jpg"),
            },
            {
                id: 3,
                name: "Ashton Cox",
                designation: "Junior Technical",
                mobile: "(123) 4567 890",
                email: "info@example.com",
                address: "#8901 Demo Road",
                joiningDate: "2009/01/12",
                img: require("../assists/avatar/3.jpg"),
            },
            {
                id: 4,
                name: "Cedric Kelly",
                designation: "Developer",
                mobile: "123 456 7890",
                email: "info@example.com",
                address: "#8901 Demo Road",
                joiningDate: "2012/03/29",
                img: require("../assists/avatar/4.jpg"),
            },
            {
                id: 5,
                name: "Airi Satou",
                designation: "Accountant",
                mobile: "987 654 3210",
                email: "info@example.com",
                address: "#8901 Demo Road",
                joiningDate: "2008/11/28",
                img: require("../assists/avatar/5.jpg"),
            },
            {
                id: 6,
                name: "Brielle Williamson",
                designation: "Specialist",
                mobile: "123 456 7890",
                email: "info@example.com",
                address: "#8901 Demo Road",
                joiningDate: "2012/12/02",
                img: require("../assists/avatar/6.jpg"),
            },
            {
                id: 7,
                name: "Herrod Chandler",
                designation: "Sales Assistant",
                mobile: "987 654 3210",
                email: "info@example.com",
                address: "#8901 Demo Road",
                joiningDate: "2012/08/06",
                img: require("../assists/avatar/7.jpg"),
            },
            {
                id: 8,
                name: "Rhona Davidson",
                designation: "Librarian",
                mobile: "(123) 4567 890",
                email: "info@example.com",
                address: "#8901 Demo Road",
                joiningDate: "2010/10/14",
                img: require("../assists/avatar/8.jpg"),
            },
            {
                id: 9,
                name: "Colleen Hurst",
                designation: "Librarian",
                mobile: "(123) 4567 890",
                email: "info@example.com",
                address: "#8901 Demo Road",
                joiningDate: "2009/09/15",
                img: require("../assists/avatar/9.jpg"),
            },
            {
                id: 10,
                name: "Sonya Frost",
                designation: "Librarian",
                mobile: "123 456 7890",
                email: "info@example.com",
                address: "#8901 Demo Road",
                joiningDate: "2008/12/13",
                img: require("../assists/avatar/10.jpg"),
            },
            {
                id: 11,
                name: "Jena Gaines",
                designation: "Office Manager",
                mobile: "987 654 3210",
                email: "info@example.com",
                address: "#8901 Demo Road",
                joiningDate: "2008/12/19",
                img: require("../assists/avatar/1.jpg"),
            },
            {
                id: 12,
                name: "Quinn Flynn",
                designation: "Support Lead",
                mobile: "(123) 4567 890",
                email: "info@example.com",
                address: "#8901 Demo Road",
                joiningDate: "2013/03/03",
                img: require("../assists/avatar/2.jpg"),
            },
            {
                id: 13,
                name: "Charde Marshall",
                designation: "Regional Director",
                mobile: "123 456 7890",
                email: "info@example.com",
                address: "#8901 Demo Road",
                joiningDate: "2008/10/16",
                img: require("../assists/avatar/3.jpg"),
            }, {
                "id": 14,
                "name": "Haley Kennedy",
                "designation": "Librarian",
                "mobile": "987 654 3210",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2012/12/18",
                img: require("../assists/avatar/4.jpg"),
            },
            {
                "id": 15,
                "name": "Tatyana Fitzpatrick",
                "designation": "Regional Director",
                "mobile": "(123) 4567 890",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2010/03/17",
                img: require("../assists/avatar/5.jpg"),
            },
            {
                "id": 16,
                "name": "Michael Silva",
                "designation": "Librarian",
                "mobile": "123 456 7890",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2012/11/27",
                img: require("../assists/avatar/6.jpg"),
            },
            {
                "id": 17,
                "name": "Paul Byrd",
                "designation": "Financial Officer",
                "mobile": "987 654 3210",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2010/06/09",
                img: require("../assists/avatar/7.jpg"),
            },
            {
                "id": 18,
                "name": "Gloria Little",
                "designation": "Systems Administrator",
                "mobile": "(123) 4567 890",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2009/04/10",
                img: require("../assists/avatar/8.jpg"),
            },
            {
                "id": 19,
                "name": "Bradley Greer",
                "designation": "Librarian",
                "mobile": "(123) 4567 890",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2012/10/13",
                img: require("../assists/avatar/9.jpg"),
            },
            {
                "id": 20,
                "name": "Dai Rios",
                "designation": "Personnel Lead",
                "mobile": "123 456 7890",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2012/09/26",
                img: require("../assists/avatar/10.jpg"),
            },
            {
                "id": 21,
                "name": "Jenette Caldwell",
                "designation": "Receptionist",
                "mobile": "987 654 3210",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2011/09/03",
                img: require("../assists/avatar/1.jpg"),
            },
            {
                "id": 22,
                "name": "Yuri Berry",
                "designation": "Receptionist",
                "mobile": "(123) 4567 890",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2009/06/25",
                img: require("../assists/avatar/2.jpg"),
            },
            {
                "id": 23,
                "name": "Caesar Vance",
                "designation": "Pre-Sales Support",
                "mobile": "(123) 4567 890",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2011/12/12",
                img: require("../assists/avatar/3.jpg"),
            },
            {
                "id": 24,
                "name": "Doris Wilder",
                "designation": "Sales Assistant",
                "mobile": "123 456 7890",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2010/09/20",
                img: require("../assists/avatar/4.jpg"),
            },
            {
                "id": 25,
                "name": "Angelica Ramos",
                "designation": "Executive Officer",
                "mobile": "987 654 3210",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2009/10/09",
                img: require("../assists/avatar/5.jpg"),
            },
            {
                "id": 26,
                "name": "Gavin Joyce",
                "designation": "Developer",
                "mobile": "(123) 4567 890",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2010/12/22",
                img: require("../assists/avatar/6.jpg"),
            },
            {
                "id": 27,
                "name": "Jennifer Chang",
                "designation": "Regional Director",
                "mobile": "(123) 4567 890",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2010/11/14",
                img: require("../assists/avatar/7.jpg"),
            },
            {
                "id": 28,
                "name": "Brenden Wagner",
                "designation": "Software Engineer",
                "mobile": "123 456 7890",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2011/06/07",
                img: require("../assists/avatar/8.jpg"),
            },
            {
                "id": 29,
                "name": "Fiona Green",
                "designation": "Receptionist",
                "mobile": "987 654 3210",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2010/03/11",
                img: require("../assists/avatar/9.jpg"),
            },
            {
                "id": 30,
                "name": "Shou Itou",
                "designation": "Receptionist",
                "mobile": "(123) 4567 890",
                "email": "info@example.com",
                "address": "#8901 Demo Road",
                "joiningDate": "2011/08/14",
                img: require("../assists/avatar/10.jpg"),
            }
        ])

    const removeItem = ({ id }) => {
        setData(prev => prev.filter(item => item.id !== id))
    }

    const addItem = (item) => {
        setData(prev => [...prev, { ...item, id: Math.max(...prev.map(({ id }) => id)) + 1 }])
    }

    return (
        <staffContext.Provider value={{ data, removeItem, keys }}>
            {children}
        </staffContext.Provider>
    )
}