const LoginPage = () => {
  const handleLoginSubmit=()=>{

  };
  const handleRegisterSubmit=()=>{};

  return (
    <>

<section>
<form onSubmit={handleLoginSubmit}>
  <h2>Login</h2>
  <label>
    <span>
      Email
    </span>
    <input type="text" />
  </label>
  <label>
    <span>
      Password
    </span>
    <input type="password" />
  </label>
  <button>Login</button>
</form>
<form onSubmit={handleRegisterSubmit}>
  <h2>Register</h2>
  <label>
    <span>
      Email
    </span>
    <input type="text" />
  </label>
  <label>
    <span>
      Password
    </span>
    <input type="password" />
  </label>
  <button>Register</button>
</form>
</section>
</>
);
};
export default LoginPage;
