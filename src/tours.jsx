import Tour from "./tour";
import "./styles.css";

export default function Tours({ data, deleteData }) {
  return (
    <div className="tours-main">
      <h1>Our Tours</h1>
      <div className="underLine" />
      <div className="main-tours">
        {data.map((data) => {
          return <Tour key={data.id} {...data} deleteData={deleteData} />;
        })}
      </div>
    </div>
  );
}
