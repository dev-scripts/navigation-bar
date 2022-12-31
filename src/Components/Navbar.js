import { AppBar, Toolbar, Button, Box, CssBaseline } from "@mui/material";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="static" color="primary">
          <Toolbar>
            <Button
              LinkComponent={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "darkblue" : "" };
              }}
              sx={{ color: "white" }}
            >
              Home
            </Button>

            <Button
              LinkComponent={NavLink}
              to="/contact"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "darkblue" : "" };
              }}
              sx={{ color: "white" }}
            >
              Contact
            </Button>

            <Button
              LinkComponent={NavLink}
              to="/about"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "darkblue" : "" };
              }}
              sx={{ color: "white" }}
            >
              About
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
