type Props = {
  name: string;
};
const Sample = ({ name }: Props) => {
  return <div className="text-3xl font-bold underline">Hello world {name}</div>;
};

export default Sample;
