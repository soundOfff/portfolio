import { Menu } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ListItems({ info, router }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          onClick={(e) => router(e, info)}
          className={classNames(
            active ? "bg-gray-100 text-white" : "text-white dark:text-black",
            "block px-4 py-2 text-sm cursor-pointer"
          )}
        >
          {info}
        </a>
      )}
    </Menu.Item>
  );
}
