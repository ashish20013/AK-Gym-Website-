// import TrainerSection from './Pages/Trainer/TrainerSection'
import "./App.css";




import Navbar from "./component/Navbar/Navbar";

// import PricingSection from './Pages/PricingSection/PricingSection';
import 'react-multi-carousel/lib/styles.css';

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import TrainingProgram from "./Pages/Training Program/TrainingProgram";
import PricingSection from "./Pages/PriceingSection/PricingSection";
import TrainerSection from "./Pages/Trainer/TrainerSection";
import Footer from "./Pages/Footer/Footer";



// import WholeTeam from './component/WholeTeam/WholeTeam'



function App() {
  return (
    <div className="App">

      <Navbar />
      <Home/>
      <About/>
      <TrainingProgram/>
      <PricingSection/>
      <TrainerSection/>
      <Footer/>
    




    </div>
  );
}

export default App;

