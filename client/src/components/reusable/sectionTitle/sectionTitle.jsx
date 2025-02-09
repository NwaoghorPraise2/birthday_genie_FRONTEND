import "./sectionTitle.scss";

const SectionTitle = ({ title, subtitle, highlighted, centered }) => {
  return (
    <div className={centered ? "SectionTitle centered" : "SectionTitle"}>
      <h2>{title}</h2>
      <h3>
        {subtitle} <span>{highlighted}</span>
      </h3>
    </div>
  );
};

export default SectionTitle;
