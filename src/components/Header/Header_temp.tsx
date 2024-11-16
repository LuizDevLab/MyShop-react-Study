import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import * as S from "./Styles";

export const Header: React.FC = () => {
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>
        <S.ButtonsWrapper>
          <S.AuthButton>
            Login
            <FiLogIn />
          </S.AuthButton>

          <S.CartButton>
            Carrinho
            <FiShoppingCart/>
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
    </S.StyledHeader>
  );
};
