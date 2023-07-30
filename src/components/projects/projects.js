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
          category: "Web3 App",
          name: "EasyFund",
          image: taxibazaar,
          description:"Crowdfunding over the years has helped the people but has also seen heavy frauds in the name of crowdfunding. With Betterfund we want to bring transparency to the process of crowdfunding and build trust among people to contribute to all the causes. It is to be a ReactJS based application, which will be supported by any browser. User will require 'Metamask' browser extension to sign the transactions.",
          link: "https://better-fund-two.vercel.app/",
          button: "Demo Link",
        },
        {
          category: "Web Page",
          name: "EasyShop | Ecommerce",
          image: feelgood,
          description:"Full-stack ecommerce application built with MERN stack. Currently under construction for additional features. This project has features like buyers register and browse the marketplace while interacting with products across different categories and admins control and manage the marketplace items and customer acounts.",
          link: "https://easy-shop-1.vercel.app/",
          button: "Demo Link",
        },
        {
          category: "DApp",
          name: "Krypt | Ethereum Transfer DApp",
          image: pack,
          description:"Krypt is a blockchain-based payment solution that is used to facilitate cryptocurrency transfers, currentlyEthereum. Any user can connect their crypto wallets and start using the app.",
          link: "https://krypto-client-yo1f.vercel.app/",
          button: "Demo Link",
        }
        
        
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
