import { useState } from "react";
import { XIcon } from "@heroicons/react/solid";

export default function SpeedDial() {
  const [openDialog, setOpenDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(true);

  const handleSubmit = (e) => {
    console.log(process.env.API_KEY);
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      company,
      message,
    };
    fetch(process.env.NEXT_PUBLIC_API_KEY, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
      }
    });
  };

  return (
    <>
      <div
        data-dial-init
        className="fixed bottom-6 right-24 group sm:block hidden"
      >
        <div
          id="speed-dial"
          style={{
            maxHeight: "740px",
            minHeight: "640px",
            maxWidth: "540px",
            minWidth: "540px",
          }}
          className={`${
            openDialog ? "flex flex-col" : "hidden"
          } py-1 mb-4 bg-white rounded-lg border border-gray-100 overflow-y-auto shadow-sm dark:bg-gray-800 dark:border-gray-600`}
        >
          {submitted && (
            <div className="bg-indigo-900 text-center block py-2 lg:px-4">
              <div
                className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                role="alert"
              >
                <span className="w-full text-sm text-clip font-semibold mx-2 text-left">
                  The message was correctly sent to the portfolio email, thank
                  you very much for contacting us.
                </span>
                <XIcon
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => setSubmitted(false)}
                />
              </div>
            </div>
          )}
          <h1 className="text-center text-md pt-10 pb-4 text-gray-800 leading-normal sm:text-3xl font-bold capitalize dark:text-gray-100">
            Contact Me
          </h1>
          <span
            className="bg-gray-300 dark:bg-gray-600"
            style={{ paddingBottom: "1px" }}
          ></span>
          <form className="pt-6">
            <div class="w-full h-full grid px-8 gap-6 grid-cols-1 content-center">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="MichaelScott@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="company"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Dunder Mifflin"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Dunder Mifflin"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mensage
                </label>
                <textarea
                  type="text"
                  id="name"
                  class="bg-gray-50 border h-36 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Lorem ipsum"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => handleSubmit(e)}
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
        <button
          type="button"
          data-dial-toggle="speed-dial-menu-dropdown-alternative"
          aria-controls="speed-dial-menu-dropdown-alternative"
          aria-expanded="false"
          onClick={() => setOpenDialog(!openDialog)}
          className="flex justify-center items-center ml-auto w-14 h-14 text-white bg-blue-700 rounded-full hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
          </svg>
          <span className="sr-only">Open actions menu</span>
        </button>
      </div>
    </>
  );
}
