import "./App.scss";
import { db } from "./cfg";
import { collection, addDoc } from "firebase/firestore";
import IG from "./Ig";

const saveDataDb = (data) => {
  const dbRef = collection(db, "users");

  addDoc(dbRef, data).then((data) => {
    console.log("data saved");
  });
};

// saveDataDb({
//   username: "ada",
//   password: "ada",
// });

function App() {
  return (
    <div className="App">
      <IG />
    </div>
  );
}

export default App;
