import Link from "next/link";

export const NavMenu = () => {
  const navlink = [{ path: "/", name: "Home" }];
  return (
    <div>
      {navlink.map((nav, index) => {
        return (
          <Link href={nav.path} key={index}>
            {nav.name}
          </Link>
        );
      })}
    </div>
  );
};
