import { useForm } from "react-hook-form";
import {
  Wrapper,
  Form,
  Circle1,
  Circle2,
  Input,
  Div,
  Button,
} from "../../../styles/FormsStyle.js";

function RegisterForm({ onSubmit }) {

  const { register, handleSubmit } = useForm();

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Circle1></Circle1>
        <Circle2></Circle2>
        <Div>
          <label>Email</label>
          <Input {...register("email")} type="email" id="email" />

          <label>Password</label>
          <Input {...register("password")} type="password" id="password" />

          <Button type="submit">SignUp</Button>
        </Div>
      </Form>
    </Wrapper>
  );
}

export default RegisterForm;
