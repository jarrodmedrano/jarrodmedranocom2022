import { tw } from "twind";

export default function NavbarTwoColumns(props: any) {
  return (
    <div className={tw`flex flex-wrap justify-between items-center`}>
      <div>
        <a>Jarrod Medrano</a>
      </div>

      <nav>
        <ul
          className={tw`navbar flex items-center font-medium text-xl text-gray-800`}
        >
          {props.children}
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  );
}
