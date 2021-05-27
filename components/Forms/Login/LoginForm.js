import {
  WrapperLogin,
  Form,
  Circle1,
  Circle2,
  Input,
  Div,
  Bottom,
} from "./index";
import { useForm } from "react-hook-form";

function LoginForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();
  return (
    <WrapperLogin>
      <Circle1></Circle1>
      <Circle2 />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Div>
          <label>Email</label>
          <Input
            {...register("email")}
            type="email"
            placeholder="email"
            id="email"
          />

          <label>Password</label>
          <Input
            {...register("password")}
            type="password"
            placeholder="Lozinka"
            id="password"
          />
        
        {<Bottom type="submit">Login</Bottom>}
        </Div>
      </Form>
    </WrapperLogin>
  );
}

export default LoginForm;
