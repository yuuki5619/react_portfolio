import "./App.css";
import imgaes from "./img/icon.jpg";
import pcImage from "./img/pc.jpg";
function App() {
  return (
    <>
      <header className="text-gray-50 bg-slate-400 ">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="/" className="font-medium mb-4 md:mb-0">
            <span className="text-xl ml-3">Portfolio</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-200 duration-300">
              home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-200 duration-300">
              about
            </a>
            <a href="#skills" className=" hover:text-blue-200 duration-300">
              skills
            </a>
          </nav>
        </div>
      </header>
      <section className="text-gray-500" id="hoem">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center ">
          <div className="md:w-1/2 flex-grow py-5 mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-500 font-medium mb-4">
              Sato Yuuki
              <br />
              Web <br />
              Developer
            </h1>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src={imgaes} alt="" />
          </div>
        </div>
      </section>
      <section id="about" className="text-gray-500 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-500">
              About
            </h1>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed
              dicta accusantium animi dignissimos dolore praesentium iste ullam
              ut optio.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab totam
              minus porro iusto? Odit quas pariatur id blanditiis unde odio
              perspiciatis harum doloribus voluptate sit vitae, eum voluptates
              ullam distinctio maiores, sequi totam reprehenderit incidunt
              placeat temporibus corporis porro! Quae neque sed deserunt soluta,
              eaque sunt voluptatem repudiandae amet, quis necessitatibus
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center ">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM14.8055 18.4151C17.1228 17.4003 18.7847 15.1667 18.9806 12.525C18.1577 12.9738 17.12 13.3418 15.9371 13.598C15.7882 15.4676 15.3827 17.1371 14.8055 18.4151ZM9.1945 5.58487C7.24725 6.43766 5.76275 8.15106 5.22208 10.244C5.4537 10.4638 5.84813 10.7341 6.44832 11.0008C6.89715 11.2003 7.42053 11.3798 8.00537 11.5297C8.05853 9.20582 8.50349 7.11489 9.1945 5.58487ZM10.1006 13.9108C10.2573 15.3675 10.5852 16.6202 10.9992 17.5517C11.2932 18.2133 11.5916 18.6248 11.8218 18.8439C11.9037 18.9219 11.9629 18.9634 12 18.9848C12.0371 18.9634 12.0963 18.9219 12.1782 18.8439C12.4084 18.6248 12.7068 18.2133 13.0008 17.5517C13.4148 16.6202 13.7427 15.3675 13.8994 13.9108C13.2871 13.9692 12.6516 14 12 14C11.3484 14 10.7129 13.9692 10.1006 13.9108ZM8.06286 13.598C8.21176 15.4676 8.61729 17.1371 9.1945 18.4151C6.8772 17.4003 5.21525 15.1666 5.01939 12.525C5.84231 12.9738 6.88001 13.3418 8.06286 13.598ZM13.9997 11.8896C13.369 11.9609 12.6993 12 12 12C11.3008 12 10.631 11.9609 10.0003 11.8896C10.0135 9.66408 10.4229 7.74504 10.9992 6.44832C11.2932 5.78673 11.5916 5.37516 11.8218 5.15605C11.9037 5.07812 11.9629 5.03659 12 5.01516C12.0371 5.03659 12.0963 5.07812 12.1782 5.15605C12.4084 5.37516 12.7068 5.78673 13.0008 6.44832C13.5771 7.74504 13.9865 9.66408 13.9997 11.8896ZM15.9946 11.5297C15.9415 9.20582 15.4965 7.11489 14.8055 5.58487C16.7528 6.43766 18.2373 8.15107 18.7779 10.244C18.5463 10.4638 18.1519 10.7341 17.5517 11.0008C17.1029 11.2003 16.5795 11.3798 15.9946 11.5297Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-500 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    In, distinctio! Nam nemo atque doloribus! Necessitatibus
                    soluta perferendis consectetur atque natus?
                  </p>
                  <a href="/" className="flex mt-3 text-blue-500 items-center">
                    詳しくみる
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.46448 7.75739L7.05026 9.1716L9.87869 12L7.05029 14.8284L8.46451 16.2426L12.7071 12L8.46448 7.75739Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.2929 9.1716L12.7071 7.75739L16.9498 12L12.7071 16.2426L11.2929 14.8284L14.1213 12L11.2929 9.1716Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="text-gray-500 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="mb-5 lg:mb-0 w-full lg:w-1/2 flex justify-center">
            <img src={pcImage} alt="" className="rounded sm:h-96 sm:w-96" />
          </div>
          <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-500 mb-10 text-center">
              My Skills
            </h1>
            <div className="w-full">
              <h2>HTML</h2>
              <div className="shadow bg-blue-100 mt-2 w-full">
                <div
                  className="bg-blue-600 text-xs leading-none py-1 text-center text-white "
                  style={{ width: "10%" }}
                >
                  1年
                </div>
              </div>
              <h2 className="mt-2">css</h2>
              <div className="shadow bg-blue-100 mt-2 w-full">
                <div
                  className="bg-blue-600 text-xs leading-none py-1 text-center text-white "
                  style={{ width: "10%" }}
                >
                  1年
                </div>
              </div>
              <h2 className="mt-2">JavaScript</h2>
              <div className="shadow bg-blue-100 mt-2 w-full">
                <div
                  className="bg-blue-600 text-xs leading-none py-1 text-center text-white "
                  style={{ width: "10%" }}
                >
                  1年
                </div>
              </div>
              <h2 className="mt-2">DB(Oracle,HiRDB)</h2>
              <div className="shadow bg-blue-100 mt-2 w-full">
                <div
                  className="bg-blue-600 text-xs leading-none py-1 text-center text-white "
                  style={{ width: "30%" }}
                >
                  3年
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
