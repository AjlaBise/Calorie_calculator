import {
  Wrapper,
  Form,
  Circle1,
  Circle2,
  Input,
  Div,
  Button,
} from "../../../styles/FormsStyle.js";
import { useForm } from "react-hook-form";

function LoginForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();
  return (
    <Wrapper>
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

          {<Button type="submit">Login</Button>}
        </Div>
      </Form>
    </Wrapper>
  );
}

export default LoginForm;
