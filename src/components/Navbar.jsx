import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: rgb(1, 180, 180);
  color: white;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              HATEKA
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link
              to="/register"
              style={{ color: "white", textDecoration: "none" }}
            >
              REGISTER
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="login" style={{ color: "white", textDecoration: "none" }}>
              SIGN IN
            </Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to="cart">
                <ShoppingCartOutlinedIcon
                  color="action"
                  style={{ color: " white" }}
                />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
