import CSS from "csstype";

type HeadingProps = {
  title: string;
};

const HeadingStyle: CSS.Properties = {
  width: "",
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  padding: "0.9rem",
  fontFamily: "sans-serif",
  fontSize: "1.5rem"
};

const Heading = ({ title }: HeadingProps) => {
  return <h1 style={HeadingStyle}>{title}</h1>;
};

export default Heading;
