import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setId] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);
  const updateData = () => {
    axios
      .put(
        `https://65633ba1ee04015769a6f224.mockapi.io/api/v1/fakeData/${id}`,
        {
          firstName,
          lastName,
          checkbox,
        }
      )
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label className="text-xs text-white">Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            checked={checkbox === true ? true : false}
            label="I agree to the Terms and Conditions"
            onChange={() => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button onClick={updateData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Update;
