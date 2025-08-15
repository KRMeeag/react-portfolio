import "./App.css";
import CardsSection from "./component/CardSection.js";
import ContactMe from "./component/ContactMe.js";
import Footer from "./component/Footer.js";
import HeroSection from "./component/HeroSection.js";
import Modal from "./component/Modal.js";
import Navbar from "./component/NavBar.js";


const modalContent = [
  {
    modalID: "modalSV",
    title: 'Second Vision', 
    bDesc: `Second Vision is an AI-powered pair of glasses with cameras and a bone-conduction 
            speaker. This project aims to use computer vision to provide additional well-needed 
            information for the severely visually impaired.`, 
    gpStatement: `The goal was to reduce the visually impaired’s dependence on human assistance by 
                  providing real-time feedback on the surrounding environment.`, 
    rAndC: `As the Project Lead, I spearheaded the conceptualization of ideas and managed the roadmaps of 
            this project.`
  },
  {
    modalID: "modalCK",
    title: `Cook-oo`, 
    bDesc: `Cook-oo is a recipe catalogue application made to cater to the available resources of the user. 
            Through its vast variety of recipes made to cater to any taste, allergies, and diet, Cook-oo 
            is determined to find healthy meals based on the ingredients and equipment available to the user.`,
    gpStatement: `The goal was to make healthy cooking more accessible to people by implementing a system that 
                  sorts through a large catalogue of recipes based on the ingredients and equipment available to the user.`, 
    rAndC: `As the assistant UI/UX developer of this project, I assisted the lead UI/UX developer of this project with 
            regards to the design, features, and documentation. `
  },
  {
    modalID: "modalKRZ",
    title: `Kraze Sportswear Inventory Management System`, 
    bDesc: `This project simply aims to optimize the current inventory system of Kraze Sportswear, a local sportswear shop
            in Lipa City, Batangas. This is a custom software commissioned by the owners themselves to cater the growing needs 
            of the small business.`, 
    gpStatement: `The goal was to improve the current implementation of Kraze Sportwear's inventory management system by 
                  introducing new infrastructure that makes the process optimize and less error-prone.`, 
    rAndC: `As the full stack developer of this project, I developed the infrastructure needed for this project.`
  }
];

function App() {
  return (
    <div className="App">
      {modalContent.map((content) => (
        <Modal key={content.id} {...content} />
      ))}
      <Navbar id="top"/>
      <div className="main-content">
        <HeroSection />
        <CardsSection />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;