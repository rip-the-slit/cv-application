import { useState } from "react";
import "./App.css";
import Display from "./components/Display.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [displayMode, setDisplayMode] = useState(false);
  const newResponsability = () => {
    const newId = crypto.randomUUID();
    return { id: newId, value: "" };
  };
  const newCompany = () => {
    const newId = crypto.randomUUID();
    return {
      id: newId,
      name: "",
      position: "",
      responsabilities: [newResponsability()],
      newResponsability,
      workedDate: {
        from: "",
        to: "",
      },
    };
  };
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
    companies: [newCompany()],
    newCompany,
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
