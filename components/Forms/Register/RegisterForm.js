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

function RegisterForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <WrapperLogin>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Circle1></Circle1>
        <Circle2></Circle2>
        <Div>
          <label>Email</label>
          <Input {...register("email")} type="email" id="email" />

          <label>Password</label>
          <Input {...register("password")} type="password" id="password" />

          <Bottom type="submit">SignUp</Bottom>
        </Div>
      </Form>
    </WrapperLogin>
  );
}

export default RegisterForm;
