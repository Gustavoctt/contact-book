import P from "../Typography/P";
import * as S from "./styles";

interface IProps {
  message: string;
  isVisible: boolean;
  onClick: () => void;
  type: "warning" | "success";
}

const Snackbar: React.FC<IProps> = ({ type, message, onClick, isVisible }) => {
  if (!isVisible) return null;

  const color = {
    warning: "var(--yellow)",
    success: "var(--green)",
  };

  return (
    <S.Snackbar onClick={onClick}>
      <S.Container backgroundColor={color[type]}>
        <P color="var(--white)">{message}</P>
      </S.Container>
    </S.Snackbar>
  );
};

export default Snackbar;
