import React, { useState, FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from "next/navigation";
//import { useNavigate } from 'react-router-dom';

function SearchBar(): JSX.Element {

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState<string>('');
  //const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    //navigate(`/?${searchTerm}`);
    router.push(`/?location=${searchTerm}`);
    /*
    const capitalizedSearchTerm: string = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
    console.log("url in search bar: ", `/filter/${capitalizedSearchTerm}`);
    
    const url: string = `/filter/${capitalizedSearchTerm}`;

    Use navigate() to navigate without a full page reload
    navigate(url);
    */
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button type="submit" style={{ backgroundColor: '#e61e4d' }}> {/* Set background color to red */}
  Submit
</Button>
    </Form>
  );
}

export default SearchBar;