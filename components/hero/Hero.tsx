import { tw } from "twind";
import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import NavbarTwoColumns from "../nav/Nav";
import { Button } from "../button/Button";

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
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns>
          <li className={tw`mr-5`}>
            <a href="https://github.com/jarrodmedrano" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jarrod-medrano/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <VerticalFeatureRow
          title="Jarrod Medrano"
          subtitle="— Software Engineer"
          description="Hi, I'm Jarrod. I've been working in the tech industry for many years. Right now I specialize in frontend development."
          image="/assets/images/feature.svg"
          imageAlt="First feature alt text"
          button={
            <a href="mailto:jarrod@slashclick.com">
              <Button xl>Contact Me</Button>
            </a>
          }
        />
      </Section>
      {/* 
      <form>
        <input type="text" name="email" value={email} />
        <input type="text" name="name" value={name} />
        <textarea name="message" value={message} />
        <button type="submit">Search</button>
      </form> */}
    </Background>
  );
};

export { Hero };
