import {useState} from 'react';
import axios from "axios"

const Test = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ access input values here
    console.log('firstName 👉️', firstName);
    console.log('email 👉️', email);
    console.log('cellphone 👉️', cellphone);

    //Api call
    // axios.get("https://strapi-movie-app.onrender.com/api/users/").then((response) => {
    //   console.log(response)
    //   let id = response.data[0].id;
    //   axios.put("https://strapi-movie-app.onrender.com/api/users/" + id, {data: {
    //     username: firstName,
    //     email: email,
    //     cellphone: cellphone}
    //   }).then((res) => {
    //     console.log(res)
    //   });
    // }); 

    // 👇️ clear all input values in the form
    setFirstName('');
    setEmail('');
    setCellphone('')
  };

  return (
    <div>
      <form >
        <input
          id="first_name"
          name="first_name"
          type="text"
          onChange={event => setFirstName(event.target.value)}
          value={firstName}
        />
        <label onClick={event => setEmail(event.target.value)} className="bg-green-500" value={7}>$$$</label>
        <label onClick={event => setEmail(event.target.value)} className="bg-green-500" value={9}>###</label>
        <input
          id="last_name"
          name="last_name"
          type="text"
          value={email}
          
        />
       

        <button type="submit" onSubmit={handleSubmit}>Submit form</button>
      </form>
    </div>
  );
};

export default Test;
