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
import {InputNum} from './foodStyle';

function FoodForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Circle1 />
        <Circle2 />

        <Div>
          <label>Name</label>
          <Input {...register("name")} type="text" id="name" />

          <label>serving_size</label>
          <InputNum
            {...register("serving_size")}
            type="number"
            id="serving_size"
          />

          <label>calories</label>
          <InputNum {...register("calories")} type="number" id="calories" />

          <label>proteins</label>
          <InputNum {...register("proteins")} type="number" id="proteins" />

          <label>carbs</label>
          <InputNum {...register("carbs")} type="number" id="carbs" />

          <label>fat</label>
          <InputNum {...register("fat")} type="number" id="fat" />

          <Button type="submit">Add</Button>
        </Div>
      </Form>
    </Wrapper>
  );
}

export default FoodForm;
