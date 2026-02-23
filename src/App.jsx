import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/Homepage";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projects/:id" element={<ProjectPage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter> 
  );
}