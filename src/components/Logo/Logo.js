// material-ui
import { useTheme } from "@mui/material/styles";

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    <>
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
        alt="Swift Logo"
        width="100"
      />{" "}
      Swift Seller Center
    </>
  );
};

export default Logo;
