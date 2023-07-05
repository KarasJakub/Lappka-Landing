import * as S from "./SliderButton.styled";

interface ButtonProps {
  onClick: () => void;
  image?: string;
  children?: React.ReactNode;
}

const Buttons = ({ onClick, image, children }: ButtonProps) => {
  return (
    <S.Button onClick={onClick}>
      {/* <img src={image} alt="" /> */}
      {children}
    </S.Button>
  );
};

export default Buttons;
