function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="text" name="password" placeholder="Password" />
        </div>
        <input type="text" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
