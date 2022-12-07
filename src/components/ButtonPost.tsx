import { Button } from "@mui/material";
type ButtonProps = {
  text: string;
  onClick: () => void;
};

const ButtonPost = ({ text, onClick }: ButtonProps) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonPost;
