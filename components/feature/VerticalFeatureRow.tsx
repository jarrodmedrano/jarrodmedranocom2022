import { tw } from "twind";

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  subtitle: string;
  button?: any;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  return (
    <div className={tw`mt-20 flex flex-wrap items-start`}>
      <div className="w-full flex justify-center sm:w-1/2 p-6">
        <div
          className={tw`w-80 h-80
 xl-mr-2 rounded-full overflow-hidden justify-center align-center relative`}
        >
          <picture className={tw`absolute -my-10`}>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet="
portrait/jarrod-medrano_rxgtrq_c_scale,w_200.jpg 200w,
portrait/jarrod-medrano_rxgtrq_c_scale,w_519.jpg 519w,
portrait/jarrod-medrano_rxgtrq_c_scale,w_737.jpg 737w,
portrait/jarrod-medrano_rxgtrq_c_scale,w_949.jpg 949w,
portrait/jarrod-medrano_rxgtrq_c_scale,w_971.jpg 971w,
portrait/jarrod-medrano_rxgtrq_c_scale,w_1289.jpg 1289w,
portrait/jarrod-medrano_rxgtrq_c_scale,w_1400.jpg 1400w"
              src="portrait/jarrod-medrano_rxgtrq_c_scale,w_1400.jpg"
              alt="Jarrod Medrano"
            />
          </picture>
        </div>
      </div>
      <div className={tw`w-full sm:w-1/2 text-center sm:px-6`}>
        <header>
          <h1
            className={tw`text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero`}
          >
            <span className={tw`text-primary-500`}>{props.title}</span>
          </h1>
          <h3 className="text-3xl text-gray-900 font-semibold">
            {props.subtitle}
          </h3>
        </header>
        {props.description}
        {props.button}
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
