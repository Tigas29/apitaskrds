import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "./style.js";
const api = axios.create({
  baseURL: "http://localhost:3000",
});

function Index() {
  const [users, setUsers] = useState([]);
  const [depoiment, setDepoiment] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    api.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);
  function newUser() {
    // eslint-disable-next-line eqeqeq
    if (name == "" || depoiment == "") {
      console.log("oi");
    } else {
      api.post("/users", { name, depoiment }).then(() => {
        window.location.reload(true);
      });
    }
  }
  function delUser(id) {
    api.delete(`/users/${id}`).then((response) => {
      setUsers(response.data);
    });
  }

  return (
    <Container>
      <h1 className="depoimentTittle">Depoimentos</h1>
      <div className="mainContainerAboutContainer">
        <div className="containerDepoiments">
          {Array.isArray(users)
            ? users.map((user, index) => (
                <div className="boxDepoiment" key={index}>
                  <div className="allContentContainer">
                    <p className="depoiment">"{user.depoiment} "</p>
                    <p className="name">{user.name}</p>
                    <button
                      className="buttonDeleteUser"
                      onClick={() => delUser(user._id)}
                    >
                      Delete User
                    </button>
                  </div>
                </div>
              ))
            : window.location.reload(true)}
        </div>
      </div>

      <h1 className="depoimentTittle">Adicione um depoimento</h1>
      <div className="putContainer">
        <form className="formContainer">
          <div className="containerText">
            <label className="label">Digite seu depoimento: </label>
            <textArea
              className="inputText"
              rows="5"
              cols="33"
              maxlenght="200"
              required
              onChange={(event) => setDepoiment(event.target.value)}
            />
          </div>
          <div className="containerText">
            <label className="label">Gostaria de colocar seu nome? </label>
            <input
              type="text"
              required
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <button className=" buttonDeleteUser" onClick={newUser}>
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
}

export default Index;
