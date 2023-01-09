import { Menu } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ListItems({ info }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? "bg-gray-100 text-white" : "text-white dark:text-black",
            "block px-4 py-2 text-sm"
          )}
        >
          {info}
        </a>
      )}
    </Menu.Item>
  );
}
