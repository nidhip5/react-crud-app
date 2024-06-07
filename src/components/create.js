import axios from "axios";
import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  let navigate = useNavigate();
  const postData = () => {
    axios
      .post(`https://65633ba1ee04015769a6f224.mockapi.io/api/v1/fakeData`, {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label className="text-xs text-white">First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label className="text-xs text-white">Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;
