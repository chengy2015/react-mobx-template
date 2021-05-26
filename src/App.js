import "./App.css";
import React from "react";
import { Provider, observer, inject } from "mobx-react";
import { Modal, Button } from "antd";
import Home from "./view/index";
import home from "./store/home";

function App() {
  const { visible, changeShow } = home;
  return (
    <div>
      <Button
        type="primary"
        onClick={(e) => {
          changeShow(!visible);
        }}
      >
        show
      </Button>

      <Modal
        visible={visible}
        onCancel={(close) => {
          console.log("close", close);
        }}
      >
        <Home />
      </Modal>
    </div>
  );
}

export default App;
