interface Props {
  children: string;
}

const Alerts = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alerts;
