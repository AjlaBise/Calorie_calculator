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

const EditAccount = ({onSubmit}) => {
  const { register, handleSubmit } = useForm();

  return (
    <Wrapper>
      <Circle1></Circle1>
      <Circle2 />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Div>
          <label>Email</label>
          <Input {...register("email")} type="email" id="email" />

          <label>Role</label>
          <Input {...register("role")} type="text" id="role" />

          <Button type="submit">Save</Button>
        </Div>
      </Form>
    </Wrapper>
  );
};

export default EditAccount;
