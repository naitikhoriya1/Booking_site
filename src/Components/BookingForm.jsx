import { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    hotelname: "",
    hotelemail: "",
    hotelphone: "",
    hotelrent: "",
    hotellocation: "",
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
    // console.log(formData);
  };
  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const formD = new FormData();
    formD.append("hotelimage", formData.hotelimage);
    formD.append("hotel name", formData.hotelname);
    formD.append("email", formData.hotelemail);
    formD.append("Mobile No ", formData.hotelphone);
    formD.append("rent", formData.hotelrent);
    formD.append("Location", formData.hotellocation);
    try {
      const response = await fetch("http://localhost:3000/BookingForm", {
        method: "POST",

        body: formD,
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-1 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add Your Hotel
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Hotel Name
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="hotelname"
                  type="text"
                  autoComplete="email"
                  required=""
                  value={formData.hotelname}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Hotel Email
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="hotelemail"
                  type="email"
                  required=""
                  value={formData.hotelemail}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Mobile"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone No.
              </label>
              <div className="mt-2">
                <input
                  id="Mobile"
                  name="hotelphone"
                  type="number"
                  required=""
                  value={formData.hotelphone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Location
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="hotellocation"
                  type="text"
                  autoComplete="current-password"
                  required=""
                  value={formData.hotellocation}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="repassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  rent/Day
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  ></a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="repassword"
                  name="hotelrent"
                  type="number"
                  autoComplete="current-password"
                  required=""
                  value={formData.hotelrent}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="repassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Hotel Image
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="repassword"
                  name="hotelimage"
                  type="file"
                  autoComplete="current-password"
                  required=""
                  onChange={handleFileUpload}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                // onClick={handleShowError}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="mt-5 text-center text-sm text-gray-500">
            Welcome ..
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              THANKS FOR VISIT
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
