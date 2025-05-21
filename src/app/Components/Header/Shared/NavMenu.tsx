import Link from "next/link";

export const NavMenu = () => {
  const navlink = [{ path: "/", name: "Home" }];
  return (
    <div>
      {navlink.map((nav, index) => {
        return <button key={index}>{nav.name}</button>;
      })}
    </div>
  );
};
