import { ReactNode } from "react";

type ButtonListProps = {
  children: ReactNode;
};

const ButtonList = ({ children }: ButtonListProps) => {
  return <div className="flex flex-col">{children}</div>;
};

export default ButtonList;
