import Text from "./Text";
import TextSM from "./TextSM";

const Ticket = ({ children = null, title = "", description = "" }) => {
  return (
    <article className="my-3 flex items-center gap-2">
      {children}
      <div>
        <TextSM className="text-text-dark m-0 p-0 font-semibold">
          {title}
        </TextSM>
        <Text className="text-text-dark m-0 w-fit border-0 border-b border-dashed p-0 leading-5">
          {description}
        </Text>
      </div>
    </article>
  );
};

export default Ticket;
