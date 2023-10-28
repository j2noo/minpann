import styled from "styled-components";

const Header = () => {
  return <HeaderLayout> 어플 이름</HeaderLayout>;
};
const HeaderLayout = styled.header`
  width: 100%;
  height: 40px;
  background-color: wheat;
  text-align: center;
  line-height: 40px;
`;
export default Header;
