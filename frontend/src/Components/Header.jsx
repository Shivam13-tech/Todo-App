import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header(){
    return (
        <div>
            {/* <h1 className="header">Todo App</h1> */}
            <Box sx={{ flexGrow: 3 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit" component="div">
                          TODO App
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Header;