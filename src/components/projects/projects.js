import React from "react";
import feelgood from "../../assets/img/projects/feelgood.jpg";
import taxibazaar from "../../assets/img/projects/taxibazaar.jpg";
import pack from "../../assets/img/projects/pack.jpg";

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      showme: true,
      projects: [
        {
          category: "DApp",
          name: "Krypt | Ethereum Transfer DApp",
          image: pack,
          description:"Krypt is a blockchain-based payment solution that is used to facilitate cryptocurrency transfers, currentlyEthereum. Any user can connect their crypto wallets and start using the app.",
          link: "https://krypto-client-yo1f.vercel.app/",
          button: "Demo Link",
        },
        {
          category: "DApp",
          name: "Decentralized Social Media | Lens Protocol",
          image: feelgood,
          description:"Decentralized Social Media platform based on LensProtocol which lets user login through their lens profile andtake the ownership of their own content on the platform.",
          link: "https://social-media-lensprotocol.vercel.app/",
          button: "Demo Link",
        },
        {
          category: "Web Page",
          name: "Crypto Coins Tracker",
          image: taxibazaar,
          description:
            "The website is a cryptocurrency tracker that offers users data and information on different cryptocurrencies in real-time. It is intended to assist people in keeping abreast of the most recent market events, pricing, and trends in the world of digital currencies.",
          link: "https://crypto-coins-tracker-five.vercel.app/",
          button: "Demo Link",
        },
      ],
    };
  }
  render() {
    return (
      <div id="work">
        <section class="text-gray-700 body-font overflow-hidden">
          {this.state.projects.map((project, key) => (
            <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt={project.name}
                  class="lg:w-1/2 w-full lg:h-auto  object-scale-down object-center rounded"
                  src={project.image}
                />
                <div class="lg:w-1/2 w-full  justify-center lg:pl-10 lg:py-6 items-center mt-6 lg:mt-0">
                  <h2 class="text-sm title-font text-gray-500 tracking-widest">
                    {project.category}
                  </h2>
                  <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                    {project.name}
                  </h1>
                  <div class="flex mb-4"></div>
                  <p class="leading-relaxed bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-4">
                    {project.description}
                  </p>
                  <div class="flex mt-6 items-center pb-2 border-b-2 border-gray-200 mb-5"></div>
                  <div class="flex">
                    <a
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <button
                        class={`flex mr-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ${project.classes}`}
                      >
                        {project.button}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
