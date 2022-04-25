import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function FilterTab(){
    const navigate = useNavigate();
    const hashTab = {
        0: "subjects",
        1: "instructors",
        2: "add"
    }
    const { tab, setTab } = useContext(AuthContext);

    const handleChange = (event, newValue) => {
        setTab(newValue);
        navigate(`/tests/${hashTab[newValue]}`)
        console.log(tab)
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={tab} onChange={handleChange} centered>
                <Tab label="Subjects" />
                <Tab label="Instructors" />
                <Tab label="Add" />
            </Tabs>
        </Box>
    )
}