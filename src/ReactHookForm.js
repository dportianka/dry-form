import { useForm } from "react-hook-form";

/*
 * uncontrolled form on steroids
 *
 * watch can track specific value
 *
 * need to forward ref and props driling
 *
 * a lot of boilerplate code
 *
 * */

const ReactHookForm = () => {
  const { register, watch, handleSubmit } = useForm();
  const onSubmit = (event) => {
    event.preventDefault();

    console.log("Form values:", {
      name: event.target.name.value,
      email: event.target.email.value,
      agree: event.target.agree.checked, // why???
    });
  };

  console.log(watch("email"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Enter your name: </label>
        <input {...register("name")} />
      </div>
      <div>
        <label htmlFor="email">Enter your email: </label>
        <input type="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="agree">Agree</label>
        <input type="checkbox" {...register("agree")} />
      </div>
      <div>
        <input type="submit" value="Subscribe!" />
      </div>
    </form>
  );
};

export default ReactHookForm;
