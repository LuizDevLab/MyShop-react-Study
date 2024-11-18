import * as S from "./style";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({showCart}) => {
  return (
    <S.Container showCart={showCart}>
      <S.title>Carrinho</S.title>
    </S.Container>
  );
};
