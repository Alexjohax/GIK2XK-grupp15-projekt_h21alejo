import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DirectionsBike } from "@mui/icons-material";
import { Button } from "@mui/material";
import { AuthContext } from "../../App";
import { useContext } from "react";
import LoginModal from "../../components/login/LoginModal";

const navLinkStyles = "text-white mx-4 text-2xl uppercase";

function ResponsiveAppBar({ numberOfItemsInCart }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { isLoggedIn, setIsLoggedIn, setCurrentUser, currentUser } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
            color="secondary"
          >
            <DirectionsBike
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            GREAT BIKES
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  onClick={() => {
                    navigate("/products");
                  }}
                >
                  Shop now
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: { xs: 1, sm: 2 },
              display: { xs: "flex", sm: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GREAT BIKES
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <NavLink className={navLinkStyles} to="/products">
              Shop now
            </NavLink>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "right",
            }}
          >
            <Box sx={{ maxWidth: "80px", mr: 5 }}>
              <Link
                className="flex flex-col text-white justify-center items-center hover:scale-125 hover:text-white"
                to="cart"
              >
                <ShoppingCartIcon />
                <Typography>{numberOfItemsInCart}</Typography>
              </Link>
            </Box>
            {!isLoggedIn ? (
              <LoginModal />
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={currentUser.photoUrl ? currentUser.photoUrl : ""}
                    />
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
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      Profile
                    </Button>
                  </MenuItem>

                  {currentUser.isAdmin && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Button
                        onClick={() => {
                          navigate("/dashboard");
                        }}
                      >
                        Dashboard
                      </Button>
                    </MenuItem>
                  )}
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button onClick={handleLogout}>Logout</Button>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
