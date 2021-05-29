import React from "react";
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
import { InputNum } from "./foodStyle";

function MealsForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Circle1 />
        <Circle2 />

        <Div>
          <label>serving_size</label>
          <InputNum
            {...register("serving_size")}
            type="number"
            id="serving_size"
          />

          <label>calories</label>
          <InputNum {...register("calories")} type="number" id="calories" />

          <Button type="submit">Add</Button>
        </Div>
      </Form>
    </Wrapper>
  );
}

export default MealsForm;
