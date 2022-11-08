import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/styles";

import Dropdown from "muicss/lib/react/dropdown";
import DropdownItem from "muicss/lib/react/dropdown-item";

import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const pages = [
  "Home",
  "Scores",
  "Applications",
  "FAQs",
  "Cohorts",
  "About",
  "find",
  "SubmitScore",
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElScores, setAnchorElScores] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenScoresMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseScoresMenu = () => {
    setAnchorElScores(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const MyAppBar = styled(AppBar)({
    boxShadow: "0 1px 5px .5px rgba(0, 0, 0, .1)",
  });

  const isactivestyle = { color: "blue" };

  return (
    <MyAppBar position="fixed" className="bg-white shadow-none">
      <Container maxWidth="xl" className="bg-white shadow-none">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img src={logo} className="w-[50px] h-[50px]" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="small"
              className="text-indigo-600"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) =>
                page != "SubmitScore" ? (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <NavLink
                        className="text-md text-gray-600 text-justify "
                        to={page === "Home" ? "/" : "/" + page}
                        style={({ isActive }) =>
                          isActive ? isactivestyle : undefined
                        }
                      >
                        {page}
                      </NavLink>
                    </Typography>
                  </MenuItem>
                ) : (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <a
                        className="text-md text-gray-600 text-justify "
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdM4rAcpKGAgYECffYpgkIyN1XNkAWBou36W2HWMuPOKtZM-w/viewform?usp=sf_link"
                      >
                        {page}
                      </a>
                    </Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img src={logo} className="w-[50px] h-[50px]" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) =>
              page != "SubmitScore" ? (
                <Button
                  key={page}
                  onClick={handleCloseScoresMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <NavLink
                    className="text-md text-gray-600 text-justify "
                    to={page == "Home" ? "/" : "/" + page}
                    style={({ isActive }) =>
                      isActive ? isactivestyle : undefined
                    }
                  >
                    {page}
                  </NavLink>
                </Button>
              ) : (
                <Button
                  key={page}
                  onClick={handleCloseScoresMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <a
                    className="text-md text-gray-600 text-justify "
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdM4rAcpKGAgYECffYpgkIyN1XNkAWBou36W2HWMuPOKtZM-w/viewform?usp=sf_link"
                  >
                    {page}
                  </a>
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </MyAppBar>
  );
};
export default NavBar;
