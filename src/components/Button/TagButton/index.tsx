import { IoClose } from "react-icons/io5";
import { Container } from "./styles";

type ButtonType = {
  data: any,
  onRemove?: () => void,
  onClickData?: () => void;
}
export const TagButton = ({
  data,
  onRemove,
  onClickData
}: ButtonType) => {

  return (
    <Container>
      <p onClick={() => onClickData && onClickData()}>{data}</p>
      <IoClose onClick={() =>  onRemove && onRemove()}/>
    </Container>
  )
}
