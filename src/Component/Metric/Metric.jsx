import './Metric.css'
const analytics = [
  { figure: "$1B", text: "Trade Volume" },
  { figure: "12M", text: "Overall Trades" },
  { figure: "300", text: "Interactions" },
  { figure: "40", text: "Community Delegates" },
];

const Metric = () => {
  return (
    <div className="--flex-center">
      <div className="--flex-between metric">
        {analytics.map(({ i, figure, text }) => (
          <div key={i}>
            <h1> {figure}+ </h1>
            <p> {text} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metric;
