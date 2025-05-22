import { useState } from "react";
import "./App.css";
import Display from "./components/Display.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [displayMode, setDisplayMode] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    studyTitle: "",
    studyDate: {
      from: "",
      to: "",
    },
  });

  return (
    <>
      {displayMode ? (
        <Display data={data}></Display>
      ) : (
        <Form data={data} setData={setData}></Form>
      )}
      <button onClick={() => setDisplayMode((mode) => !mode)}>
        {displayMode ? "Edit" : "Submit"}
      </button>
    </>
  );
}

export default App;
