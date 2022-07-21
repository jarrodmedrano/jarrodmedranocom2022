import { tw } from "twind";
import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import NavbarTwoColumns from "../nav/Nav";
import { Button } from "../button/Button";
import Contact from "../../pages/contact";

interface Data {
  email: string;
  name: string;
  message: string;
}

// const handler: Handlers<Data> = {
//   GET(req, ctx) {
//     const url = new URL(req.url);
//     return ctx.render({ email, name, message });
//   },
// };

const Hero = () => {
  // const { email, name, message } = data;

  return (
    <Section yPadding="pt-20 pb-32">
      <VerticalFeatureRow
        title="Jarrod Medrano"
        subtitle="— Software Engineer"
        description="Hi, I'm Jarrod. I'm a full-time software developer and I do frontend development (most of the time)"
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
        button={
          <Section yPadding="pt-5 pb-32">
            <Contact />
          </Section>
        }
      />
    </Section>
  );
};

export { Hero };
