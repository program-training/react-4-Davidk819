import "./App.css";
import DataContextProvider from "./components/textContext/textContext";
import Grandpa from "./components/Grandpa/Grandpa";
import ThemeProvider from "./components/ThemeContext/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <ThemeProvider>
        <Title></Title>
      </ThemeProvider>
    </>
  );
}

export default App;
