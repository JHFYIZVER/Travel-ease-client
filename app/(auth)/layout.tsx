import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="wrapper h-svh flex items-center justify-center">
      {children}
    </div>
  );
}
