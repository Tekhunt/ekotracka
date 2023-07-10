export const Enquiry = () => {
    return (
      <>
        <h1 className="text-3xl lg:text-4xl text-center  font-bold leading-9 text-gray-800 pb-4">
          About Ekotracka
        </h1>
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg">
                  At Ekotracka, we are dedicated to providing you with the best
                  waste management solutions. Our independent and
                  customer-focused approach ensures that we recommend the right
                  options for you.
                </p>

                <div className="mt-8">
                  <a
                    href="tel:01514754450"
                    className="text-2xl font-bold text-pink-600"
                  >
                    +2348056326821
                  </a>

                  <address className="mt-2 not-italic">
                    282 Kevin Brook, Victoria Island, Lagos
                  </address>
                </div>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="block w-full rounded-lg border border-gray-200 p-3"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="block w-full rounded-lg border border-gray-200 p-3"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="block w-full rounded-lg border border-gray-200 p-3"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="address">
                      House Address
                    </label>
                    <input
                      className="block w-full rounded-lg border border-gray-200 p-3"
                      placeholder="House Address"
                      type="text"
                      id="address"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="localGovt">
                      Local Government
                    </label>
                    <input
                      className="block w-full rounded-lg border border-gray-200 p-3"
                      placeholder="Local Government"
                      type="text"
                      id="localGovt"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className="block w-full rounded-lg border border-gray-200 p-3"
                      placeholder="Message"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg border border-black bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  