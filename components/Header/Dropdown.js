import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import ListItems from "./ListItems";
import { useRouter } from "next/router";

export default function Dropdown({ name, items, isActive }) {
  console.log(isActive);
  const router = useRouter();

  const handleClickRouter = (e) => {
    e.preventDefault();
    const newHref = router.basePath + `/#${e.target.value}`;
    router.push(newHref);
  };
  const handleClickProyects = (e, info) => {
    e.preventDefault();
    const newHref = router.basePath + `/#${info}`;
    router.push(newHref);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={(e) => {
            if (e.target.value !== "Proyects") handleClickRouter(e);
          }}
          value={name}
          className={` ${
            isActive ? "border-b-2 border-blue-400" : null
          } inline-flex w-full justify-center items-center rounded-md  bg-transparent px-4 py-2 text-md md:text-lg font-medium text-black dark:text-white shadow-sm focus:outline-none`}
        >
          {name}
          {items ? (
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          ) : null}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {items ? (
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black  dark:bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-2">
              {items.map((info) => {
                return <ListItems info={info} router={handleClickProyects} />;
              })}
            </div>
          </Menu.Items>
        ) : null}
      </Transition>
    </Menu>
  );
}
