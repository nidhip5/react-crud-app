import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";

const Read = () => {
  const [apiData, setApiData] = useState([]);
  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("checkbox", checkbox);
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(`https://65633ba1ee04015769a6f224.mockapi.io/api/v1/fakeData`)
      .then((res) => {
        setApiData(res?.data);
      });
  };
  const deleteSingleData = (itemId) => {
    axios
      .delete(
        `https://65633ba1ee04015769a6f224.mockapi.io/api/v1/fakeData/${itemId}`
      )
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.length > 0
            ? apiData.map((item) => {
                return (
                  <Table.Row>
                    <Table.Cell>{item?.firstName}</Table.Cell>
                    <Table.Cell>{item.lastName}</Table.Cell>
                    <Table.Cell>
                      {item?.checkbox ? "Checked" : "Unchecked"}
                    </Table.Cell>
                    <Link to="/update">
                      <Table.Cell>
                        <Button onClick={() => setData(item)}>Update</Button>
                      </Table.Cell>
                    </Link>
                    <Table.Cell>
                      <Button onClick={() => deleteSingleData(item.id)}>
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })
            : null}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
