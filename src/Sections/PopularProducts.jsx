import { useGSAP } from "@gsap/react";
import PopularProductCard from "../Components/PopularProductCard";
import { products } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);


const PopularProducts = () => {
  useGSAP(
    () => {
      gsap.from("#text", {
        scrollTrigger: {
          trigger: "#text",
          start: "top 60%",
          end: "bottom 30%",
          scrub: true,
       
        },
        opacity: 0,
        x: -50,
        duration: 1,
      });


      gsap.from("#para", {
        scrollTrigger: {
          trigger: "#para",
          start: "top 40%",
          end: "bottom 20%",
          scrub: true,
        
        },
        opacity: 0,
        y: -100,
        duration: 1,
      });


      gsap.from("#card", {
        scrollTrigger: {
          trigger: "#card",
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
          
        },
        opacity: 0,
        scale:1.1,
        
        y: -50,
        duration: 1,
      });
    }
  
  );

  return (
    <section id="products" className="max-container">
      <div  className="flex flex-col justify-start gap-5">
        <h2 id="text" className="font-palanquin text-4xl font-bold">
          <span className="text-coral-red">Popular</span> Products
        </h2>
        <p
          id="para"
          className="mt-2 font-montserrat text-slate-gray lg:max-w-lg"
        >
          Lorem ipsum dolor quod quam ipsum dolorum modi error reprehenderit
          temporibus necessitatibus corporis assumenda esse porro, impedit
          molestias blanditiis!
        </p>
      </div>

      {/* cards */}

      <div id="card" className="mt-4 grid grid-cols-2 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
