import "./App.css";
import { db } from "./cfg";
import { collection, addDoc } from "firebase/firestore";

const saveDataDb = (data) => {
  const dbRef = collection(db, "users");

  addDoc(dbRef, data).then((data) => {
    console.log("data saved");
  });
};

function App() {
  return (
    <div className="App">
      <p
        onClick={() => {
          saveDataDb({
            username: "ada",
            password: "ada",
          });
        }}
      >
        testApp
      </p>
    </div>
  );
}

export default App;
