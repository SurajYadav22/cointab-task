import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./App.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [sign, setSign] = useState(false);

  useEffect(() => {
    getBlogFunction();
  }, []);

  const getBlogFunction = () => {
    axios
      .get("https://cointabapi.onrender.com/user?page=0")
      .then((res) => {
        let arr = res.data.blog;
        if (arr.length === 0) {
          setSign(false);
          getBlogFunction();
        } else {
          setSign(true);
        }
      })
      .catch((e) => console.log(e));
  };
  const navigate = useNavigate();

  const fetchButton = () => {
    if (sign === false) {
      axios.post("https://cointabapi.onrender.com/user").then((res) => {
        getBlogFunction();
        setSign(true);
      });
      alert("User Added");
    } else {
      alert("Data Already Added");
    }
  };

  const deleteButton = () => {
    if (sign == true) {
      axios.delete("https://cointabapi.onrender.com/user").then((res) => {
        getBlogFunction();
      });
      alert("Data Successfully Deleted");
    } else {
      alert("Data not Found");
    }
  };

  const userButton = () => {
    navigate("/users");
  };

  return (
    <div className="App">
      <button onClick={fetchButton}>Fetch Users</button>
      <button onClick={deleteButton}>Delete Users</button>
      <button onClick={userButton}>View Users</button>
    </div>
  );
};

export default Home;
