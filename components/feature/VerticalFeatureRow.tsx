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
          <picture className={tw`absolute`}>
            <img
              sizes="(max-width: 997px) 100vw, 997px"
              srcSet="
              portrait/jarrodmedrano_skqhty_ar_1_1,c_fill,g_auto__c_scale,w_200.png 200w,
              portrait/jarrodmedrano_skqhty_ar_1_1,c_fill,g_auto__c_scale,w_997.png 997w"
              src="portrait/jarrodmedrano_skqhty_ar_1_1,c_fill,g_auto__c_scale,w_997.png"
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
