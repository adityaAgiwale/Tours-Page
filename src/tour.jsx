import { useState } from "react";
import "./styles.css";

export default function Tour({ id, name, image, info, price, deleteData }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="tour">
      <img src={image} alt={name} />
      <footer>
        <div className="info">
          <h3>{name}</h3>
          <p>$ {price}</p>
        </div>
        <p className="desc">
          {showInfo ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setShowInfo(!showInfo)} className="showMore">
            {showInfo ? "Show less" : " Show more"}
          </button>
        </p>

        <button onClick={() => deleteData(id)} className="notIntreseted">
          Not Intrested
        </button>
      </footer>
    </div>
  );
}
