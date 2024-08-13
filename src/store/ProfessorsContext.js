import { createContext, useState } from "react";

export const professorsContext = createContext()

export default function ProfessorsContext({ children }) {
    const [keys] = useState(["name", "department", "gender", "education", "mobile", "email", "joiningDate"])
    const [data, setData] = useState([
        {
            id: 1,
            img: require("../assists/avatar/1.jpg"),
            name: "Tiger Nixon",
            department: "Architect",
            gender: "Male",
            education: "M.COM., P.H.D.",
            mobile: "123 456 7890",
            email: "info@example.com",
            joiningDate: "2011/04/25"
        },
        {
            id: 2,
            img: require("../assists/avatar/2.jpg"),
            name: "Garrett Winters",
            department: "Accountant",
            gender: "Male",
            education: "M.COM., P.H.D.",
            mobile: "123 456 7890",
            email: "info@example.com",
            joiningDate: "2011/07/25"
        },
        {
            id: 3,
            img: require("../assists/avatar/3.jpg"),
            name: "Ashton Cox",
            department: "Junior Technical Author",
            gender: "Male",
            education: "B.COM.",
            mobile: "123 456 7890",
            email: "info@example.com",
            joiningDate: "2009/01/12"
        },
        {
            id: 4,
            img: require("../assists/avatar/4.jpg"),
            name: "Cedric Kelly",
            department: "Senior Javascript Developer",
            gender: "Male",
            education: "B.E., M.S.",
            mobile: "123 456 7890",
            email: "info@example.com",
            joiningDate: "2012/03/29"
        },
        {
            id: 5,
            img: require("../assists/avatar/5.jpg"),
            name: "Airi Satou",
            department: "Accountant",
            gender: "Female",
            education: "M.COM., P.H.D.",
            mobile: "123 456 7890",
            email: "info@example.com",
            joiningDate: "2008/11/28"
        },
        {
            id: 6,
            img: require("../assists/avatar/6.jpg"),
            name: "Brielle Williamson",
            department: "Integration Specialist",
            gender: "Female",
            education: "M.S. IT",
            mobile: "123 456 7890",
            email: "info@example.com",
            joiningDate: "2012/12/02"
        },
        {
            id: 7,
            img: require("../assists/avatar/7.jpg"),
            name: "Herrod Chandler",
            department: "Sales Assistant",
            gender: "Male",
            education: "B.COM.",
            mobile: "123 456 7890",
            email: "info@example.com",
            joiningDate: "2012/08/06"
        },
        {
            id: 8,
            img: require("../assists/avatar/8.jpg"),
            name: "Rhona Davidson",
            department: "Integration Specialist",
            gender: "Female",
            education: "B.E., M.S.",
            mobile: "123 456 7890",
            email: "info@example.com",
            joiningDate: "2010/10/14"
        },
        {
            id: 9,
            img: require("../assists/avatar/9.jpg"),
            name: "Colleen Hurst",
            department: "Javascript Developer",
            gender: "Female",
            education: "B.E., M.S.",
            mobile: "123 456 7890",
            email: "info@example.com",
            joiningDate: "2009/09/15"
        },
        {
            id: 10,
            img: require("../assists/avatar/10.jpg"),
            name: "Sonya Frost",
            department: "Software Engineer",
            gender: "Female",
            education: "B.E., M.S.",
            mobile: "123 456 7890",
            email: "info@example.com",
            joiningDate: "2008/12/13"
        }
    ])

    const removeItem = ({ id }) => {
        setData(prev => prev.filter(item => item.id !== id))
    }
    const addItem = (item) => {
        setData(prev => [...prev, { ...item, id: Math.max(...prev.map(({ id }) => id)) + 1 }])
    }

    return (
        <professorsContext.Provider value={{ data, removeItem, keys }}>
            {children}
        </professorsContext.Provider>
    )
}