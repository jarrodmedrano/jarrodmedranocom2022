import { tw } from "twind";

const Section = (props: any) => (
  <div
    className={tw`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : "py-16"
    }`}
  >
    {(props.title || props.description) && (
      <div className={tw`mb-12 text-center`}>
        {props.title && (
          <h2 className={tw`text-4xl text-gray-900 font-bold`}>
            {props.title}
          </h2>
        )}
        {props.description && (
          <div className={tw`mt-4 text-xl md:px-20`}>{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
