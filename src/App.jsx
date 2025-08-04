import { useState } from "react";
import {Display} from "./components/Display.jsx";
import Form from "./components/Form.jsx";
import "./styles/App.css";

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
  const [editCompanyIndex, setEditCompanyIndex] = useState(0);

  if (displayMode) {
    document.querySelector("body").classList.add("display-mode")
  } else {
    document.querySelector("body").classList.remove("display-mode")
  }

  return (
    <div className="container">
      {displayMode ? (
        <Display data={data}></Display>
      ) : (
        <Form
          data={data}
          setData={setData}
          editCompanyIndex={editCompanyIndex}
          setEditCompanyIndex={setEditCompanyIndex}
        ></Form>
      )}
      <button
        onClick={() => setDisplayMode((mode) => !mode)}
        className="switch"
      >
        {displayMode ? "Edit" : "Submit"}
      </button>
    </div>
  );
}

export default App;
