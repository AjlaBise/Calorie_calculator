import { useForm } from "react-hook-form";

function RegisterForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input {...register("email")} type="email" id="email" />
        </div>
        <div>
          <label>Lozinka</label>
          <input {...register("password")} type="password" id="password" />
        </div>
        <button type="submit">Registruj se</button>
      </form>
    </div>
  );
}

export default RegisterForm;
