import { BreakableText } from "@/components/Messages/BreakableText";
import classes from "./TextContent.module.css";

export type TextContentProps = {
  text: string;
};

export const TextContent: React.FC<TextContentProps> = ({ text }) => {
  return (
    <div
      className={classes.text}
      onClick={(event) => {
        event.stopPropagation();
      }}
      style={{
        color: "#000000",
        fontSize: "1.5em",
      }}>
      <BreakableText>{text}</BreakableText>
    </div>
  );
};
