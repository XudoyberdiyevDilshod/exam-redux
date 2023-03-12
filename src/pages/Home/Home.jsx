import { Companies } from "../../components/Companies/Companies";
import { Form } from "../../components/Form/Form";
import { Hero } from "../../components/Hero/Hero";
import { Products } from "../../components/Products/Products";
import { Questions } from "../../components/Questions/Questions";
import { Services } from "../../components/Services/Services";

export const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Products />
      <Questions />
      <Form />
      <Companies />
    </main>
  );
};
