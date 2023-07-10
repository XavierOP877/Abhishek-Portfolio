import React from 'react';
import hero from "../assets/img/hero.png";

export default function Hero() {
    return (
      // eslint-disable-next-line
        <div>
            <section className="text-gray-700 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:order-1 order-2">
      
      <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">Hi<span role="img" aria-label="Waving hand">👋</span>,<br/> I am <span className="text-indigo-600 ">Abhishek Tripathi</span>,
      <br/> <span className="sm:text-5xl text-4xl">A Frontend Developer</span>
      </h1>
      <p className="mb-8 leading-relaxed text-2l">A Passionate Problem Solver before a Developer. I combine my creative and problem solving skills to give out what's best for the Product & Humans.<br/></p>
      <div className="flex justify-center">
      <a href="#work"> <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Work</button></a>
      <a href="https://drive.google.com/file/d/1AGIvDwJ8425DFpIbJ1jTJqtOqPLGKHbz/view?usp=sharing" rel="noopener noreferrer" target="_blank" ><button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"> Resume</button></a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:order-2 order-1 ">
      <img className="object-cover object-center rounded" alt="harsh illu" src={hero} />
    </div>
  </div>
</section>
        </div>
    )
}
