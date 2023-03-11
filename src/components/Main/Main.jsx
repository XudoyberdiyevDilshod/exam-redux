import { Form } from "../Form/Form";
import { Hero } from "../Hero/Hero";
import { Products } from "../Products/Products";
import { Questions } from "../Questions/Questions";
import { Services } from "../Services/Services";

export const Main = () => {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Questions />
      <Form />
    </>
  );
};
