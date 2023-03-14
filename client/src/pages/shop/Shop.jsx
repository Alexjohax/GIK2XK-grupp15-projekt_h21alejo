import ResponsiveAppBar from "../../components/navigation/ResponsiveAppBar";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "../../theme/theme";

function Shop({ numberOfItems }) {
  return (
    <Container
      sx={{ backgroundColor: theme.palette.tertiaryLight.main }}
      maxWidth="xl"
    >
      <ResponsiveAppBar numberOfItemsInCart={numberOfItems} />
      <Container className="my-5" maxWidth="xl">
        <Outlet />
      </Container>
    </Container>
  );
}

export default Shop;
