import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext";

// TODO: Add content for Home page (welcome message or description)
// TODO: Use useContext to access theme and style accordingly
function Home() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div style={{
        backgroundColor: theme === "dark" ? "#333333" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#333333",
      }} >
        <h1>Welcome!</h1>
        <p>Use the navbar to open the counter or switch themes.</p>
    </div>
  );
}

export default Home;