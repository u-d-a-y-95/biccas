import { Bars3Icon } from "@heroicons/react/24/solid";
export const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center py-10 text-secondary">
      <div className="text-primary font-semibold text-3xl sm:text-4xl md:text-5xl">
        Biccas
      </div>
      <div className="hidden lg:flex items-center justify-between gap-20">
        <nav>
          <ul className="flex gap-8">
            <li className="text-black">Home</li>
            <li>Product</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <a>Login</a>
          <a className="bg-primary text-white p-2 rounded font-medium">
            Sign Up
          </a>
        </div>
      </div>
      <div className=" lg:hidden">
        <Bars3Icon className="w-6 aspect-square text-black" />
      </div>
    </header>
  );
};
