import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserContext from '../store/user-context';


function CreateUser() {

  const userCtx = useContext(UserContext);
  

  
  return (
    <>
      <div>
        <Form style={{width:'50%',flexDirection:'column',margin:'2rem auto'}} onSubmit={userCtx.setForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{textAlign:'left'}}>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="title" value={userCtx.valueT}  onChange={userCtx.setTitle}/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword" style={{textAlign:'left'}}>
            <Form.Label>Contet</Form.Label>
            <Form.Control type="text" placeholder="text..." onChange={userCtx.setContent} value={userCtx.valueC} />
          </Form.Group>
          <Button variant="primary" type="submit" style={{display:'flex',float:'right'}}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CreateUser;
