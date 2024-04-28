import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./tasks/TaskBoard";

function App() {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <TaskBoard></TaskBoard>
      <Footer></Footer>
    </div>
  );
}

export default App;
