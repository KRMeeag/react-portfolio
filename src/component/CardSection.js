import {useState} from "react";
import Cards from "./Cards.js";

const cardContent = [
  {
    img: "https://www.researchgate.net/profile/Stefano-Mattoccia-2/publication/301973607/figure/fig3/AS:560925863944192@1510746555374/Embedded-3D-camera-mounted-on-conventional-glasses-The-camera-is-self-powered-through.png",
    alt: "Sample picture of an embedded camera on glasses",
    targetID: "#modalSV",
    title: "Second Vision",
    description: `A proposed concept of an assistive wearable technology aimed at helping severely visually impaired individuals navigate their surroundings`
  }, 
  {
    img: "/images/cook-oo_sample.png",
    alt: "Gallery of Cook-Oo Design",
    targetID: "#modalCK",
    title: "Cook-oo",
    description: `A proposed concept of a cooking app that provides a catalogue of healthy recipes based on ingredients that are currently accessible to the user`
  }, 
  {
    img: "/images/kraze_shop.jpg",
    alt: "Front of Kraze shop",
    targetID: "#modalKRZ",
    title: "Kraze Inventory Management System",
    description: `A database management system that aims to modernize the inventory manage system of a local sportswear shop in Barangay Mabini, Lipa City, Batangas`
  }
];

const CardSection = () => {
  const [bgColor, setCardBg] = useState('#ffffff');

  function randomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
  }

  const cardBg = () => {setCardBg(randomColor());};

  return (
    <div className="">
      <div 
        class="content-container" 
        id="my-projects"
        style = {{backgroundColor: bgColor}}
        > 
          <h1 class="header-content"> My Projects</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              {cardContent.map((card) => (
                <Cards 
                  key={card.id} 
                  {...card} 
                  onTitleClick = {cardBg} />
              ))}
            </div>
        </div>
    </div>
  );
};

export default CardSection;