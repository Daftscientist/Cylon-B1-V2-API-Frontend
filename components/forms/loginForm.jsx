

export default function LoginForm() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const formdata = {
        email: event.target.email.value,
        password: event.target.password.value,
      }
  
      // Send the data to the server in JSON format.
      let formData = new FormData();
        formData.append('email', formdata.email);
        formData.append('password', formdata.password);

        const res = await fetch(`${process.env.BASE_API_ROUTE}user/login`, { body: formData, method: "post" });
        const data = await res.json();
        console.log(data)
    }
    return (
      // We pass the event to the handleSubmit() function on submit.
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First Name</label>
        <input id="email" name="email" placeholder="email" required />
  
        <label htmlFor="last">Last Name</label>
        <input type="password" id="password" name="password" placeholder="Password" required />
  
        <button type="submit">Submit</button>
      </form>
    )
  }