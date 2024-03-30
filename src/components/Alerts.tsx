interface Props {
  text: string;
}

const Alerts = ({ text }: Props) => {
  return <div className="alert alert-primary">{text}</div>;
};

export default Alerts;
