import * as React from "react";
import { Link } from "react-router-dom";

import { Image, useAuthenticator } from "@aws-amplify/ui-react";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Logo from "../assets/logo.png";

const pages = [{ label: "Dashboard", href: "/" }];

function NavBar() {
  const { signOut } = useAuthenticator((context) => [context.user]);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/" style={{ color: "white" }}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  maxHeight: "64px",
                  maxWidth: "64px",
                }}
              >
                <Image
                  width="48px"
                  height="48px"
                  src={Logo}
                  alt="logo"
                  style={{ objectFit: "contain", filter: "contrast(600%)" }}
                />
              </Box>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link to={page.href}>
                    <Button>
                      <Typography textAlign="center">{page.label}</Typography>
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/" style={{ color: "white" }}>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                  maxHeight: "64px",
                  maxWidth: "64px",
                }}
              >
                <img
                  width="48px"
                  height="48px"
                  src={Logo}
                  alt="logo"
                  style={{ objectFit: "contain", filter: "contrast(200%)" }}
                />
              </Box>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  className="noDecor"
                  to={page.href}
                  style={{ color: "#fff" }}
                >
                  {page.label}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="profile">
                  <Button>
                    <Typography textAlign="center">Profile</Typography>
                  </Button>
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem onClick={signOut}>
                <Button>
                  <Typography textAlign="center">Log Out</Typography>
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
