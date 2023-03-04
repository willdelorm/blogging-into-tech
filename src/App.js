import Navigation from "./components/navigation/navigation.component";
import Compose from "./pages/compose/compose.component";
import Home from "./pages/home/home.component";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      {/* <Home /> */}
      <Compose />
    </div>
  );
};

export default App;

// NavBar
// - LogoIcon
// - NavMenu
// -- MenuItem
// -- MenuItem
// -- MenuItem
// Title
// FeaturePost
// - Image
// - Text
// -- Date
// -- Title
// -- Preview text
// PostHistory
// - PostPreview
// -- Image
// -- Date
// -- Title
// -- Content preview
