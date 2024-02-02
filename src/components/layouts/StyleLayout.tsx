import React from 'react';

type Props = {
  children: React.ReactNode;
};

const StyleLayout = ({ children }: Props) => {
  return <div className="p-8 flex flex-col justify-center items-center min-h-[90dvh]">{children}</div>;
};

export default StyleLayout;
