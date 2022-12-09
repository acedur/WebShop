import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [counter, setCounter] = useState(0);
  const images = [
    "https://as2.ftcdn.net/v2/jpg/01/24/65/59/1000_F_124655917_Vjc5JErdTetkRwnUWbIF9RJbY6g5BM6X.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/623/464/non_2x/concept-of-shopping-online-with-smart-phone-on-blue-sky-background-vector.jpg",
    "https://www.wsav.com/wp-content/uploads/sites/75/2022/08/GettyImages-1133980246.jpg?strip=1",
  ];
  useEffect(() => {
    setTimeout(() => {
      let count = counter + 1 > 2 ? 0 : counter + 1;
      setCounter(count);
    }, 5000);
  }, [counter]);

  return (
    <div
      className="homeContainer"
      style={{ backgroundImage: `url(${images[counter]})` }}
      alt="Background Image"
    >
      <div className="homeText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
  );
}

export default Home;
