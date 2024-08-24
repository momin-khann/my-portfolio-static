import React from "react";
import { NavigationDots, SocialMedia } from "@/components";

interface Props {
  children: React.ReactNode;
  classNames?: string;
  idName: string;
}

const AppWrapper = ({ children, classNames = "", idName }: Props) => {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        {/* Children Goes here */}
        {children}
      </div>

      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrapper;
