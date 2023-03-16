import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import Article from "./routes/article/article.component";
import Compose from "./routes/compose/compose.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="posts/*" element={<Article />} />
        <Route path="compose" element={<Compose />} />
        <Route path="login" element={<SignIn />} />
      </Route>
    </Routes>
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
