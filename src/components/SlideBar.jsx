import { Drawer, Box, Typography, Divider, Accordion, AccordionSummary, AccordionDetails, IconButton, ListItemButton, ListItemIcon, ListItemText, Button } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink, useNavigate } from 'react-router-dom';
import CommitIcon from '@mui/icons-material/Commit';
export default function SlideBar({ open, toggleDrawer }) {
    const [expanded, setExpanded] = React.useState(false);
    const navigate = useNavigate()
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const routes = [
        {
            title: "Dashboard", path: "/home", icon: <HomeIcon />, children: [
                { title: "Dashboard1", path: "/Dashboard1" },
                { title: "Dashboard2", path: "/Dashboard2" },
                { title: "Dashboard3", path: "/Dashboard3" },
            ]
        },
        {
            title: "Professors", path: "/Professors", icon: <PersonIcon />, children: [
                { title: "All Professors", path: "/allProfessors" },
                { title: "Add Professors ", path: "/addProfessors" },
                { title: "Edit Professors", path: "/editProfessors" },
                { title: "Professor Profile", path: `/professorProfile` },
            ]
        },
        {
            title: "Students", path: "/Students", icon: <GroupIcon />, children: [
                { title: "All Students", path: "/allStudents" },
                { title: "Add Students", path: "/addStudents" },
                { title: "Edit Students", path: "/editStudents" },
                { title: "Student Profile", path: "/StudentsProfile" },
            ]
        },
        {
            title: "Staff", path: "/Staff", icon: <GroupIcon />, children: [
                { title: "All Staff", path: "/allStaff" },
                { title: "Add Staff ", path: "/addStaff" },
                { title: "Edit Staff", path: "/editStaff" },
                { title: "Staff Profile", path: "/StaffProfile" },
            ]
        },
    ]




    return (
        <Drawer open={open} onClose={() => toggleDrawer(false)}>
            <Box sx={{ width: "300px", height: "100%", textAlign: "center", userSelect: 'none' }}   >
                <Box sx={{ padding: "35px" }} bgcolor={"primary.main"} > <img src={require('../assists/logo/logo-text-white.png')} alt="logo" /> </Box>
                {
                    routes.map((route, index) => (
                        <Accordion
                            sx={{ bgcolor: "transparent", width: "100%" }}
                            elevation={0}
                            disableGutters
                            expanded={expanded === index} onChange={handleChange(index)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={route.title}
                                id={index}
                            >
                                <Typography  >
                                    <IconButton>{route.icon}</IconButton> {route.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {route.children.map((child, i) => (
                                    <ListItemButton
                                        sx={{ margin: "0", padding: "0" }}
                                        key={i}
                                    >
                                        <ListItemText
                                            primary={<Button disableRipple LinkComponent={NavLink} to={`${route.path}${child.path}`} startIcon={<CommitIcon sx={{ rotate: '90deg' }} />} sx={{
                                                color: "black",
                                                fontWeight: "bold",
                                                "&.active": { color: "secondary.light" }
                                            }}>{child.title}</Button>}
                                            onClick={() => {
                                                toggleDrawer(false)
                                            }}
                                            primaryTypographyProps={{ fontSize: 14, fontWeight: 'bold' }}
                                        />
                                    </ListItemButton>
                                ))}
                            </AccordionDetails>
                        </Accordion>)
                    )
                }
            </Box>
        </Drawer>
    )
}
