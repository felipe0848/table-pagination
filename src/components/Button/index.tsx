import Spinner from "../Spinner";
import { Container } from "./styles";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: (e?: any) => void;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export function Button({
  type = "button",
  isLoading = false,
  disabled = false,

  fullWidth = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Container
      type={type}
      $isFullWidth={fullWidth}
      $isDisabled={isLoading || disabled}
      {...rest}
    >
      {isLoading ? <Spinner size={14} /> : children}
    </Container>
  );
}
