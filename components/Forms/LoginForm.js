import { useForm } from "react-hook-form";

function LoginForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="email"
          id="email"
        />
      </div>

      <div>
        <label>Lozinka</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Lozinka"
          id="password"
        />
      </div>
      {loading && "Signing in..."}
      {<button type="submit">Prijavi se</button>}
    </form>
  );
}

export default LoginForm;
