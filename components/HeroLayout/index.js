import classnames from "classnames";

const HeroLayout = ({ title, children, className }) => {
  return (
    <div className={classnames("mx-5 lg:mx-20", className)}>
      <p className="text-[32px] text-black mb-4 mt-32">{title}</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-2 gap-2">{children}</div>
    </div>
  );
};

export default HeroLayout;
