import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useContext, useEffect } from "react";
import UserContext from "../store/user-context";

function UsersTable() {
  const userCtx = useContext(UserContext);

  console.log(userCtx.list);


  useEffect(() => {

    userCtx.getItems();

  },[])

  const editButton = () => {
    console.log("edit");
  };



  return (
    <Table
      striped
      bordered
      hover
      size="dark"
      style={{ width: "60%", margin: "2rem auto" }}
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Content</th>
          <th></th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userCtx.list && userCtx.list.length > 0 ? (
          userCtx.list.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.content}</td>
              <td>@mdo</td>
              <td>
                <Button
                  variant="warning"
                  style={{ marginRight: "0.5rem" }}
                  onClick={editButton}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => userCtx.deleteItem(e.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No data available.</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default UsersTable;
