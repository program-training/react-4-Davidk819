import "./App.css";
import DataContextProvider from "./components/textContext/textContext";
import Grandpa from "./components/Grandpa/Grandpa";
import ThemeProvider from "./components/ThemeContext/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import Title from "./components/Title/Title";
import Header from "./components/Header/Header";
import UserContextProvider from "./components/UserContext/UserContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <UserContextProvider>
          <Header></Header>
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
