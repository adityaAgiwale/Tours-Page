import { useEffect, useState } from "react";
import Loading from "./loading";
import "./styles.css";
import Tours from "./tours";

const URL = "https://course-api.com/react-tours-project";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [tourData, setTourData] = useState([]);

  const deleteData = (id) => {
    const newData = tourData.filter((data) => data.id !== id);
    setTourData(newData);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const responce = await fetch(URL);
      const data = await responce.json();
      setLoading(false);
      setTourData(data);
    } catch (error) {
      setLoading(false);
      console.log("error is" + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div className="App">
      {tourData.length !== 0 ? (
        <Tours data={tourData} deleteData={deleteData} />
      ) : (
        <div>
          <h1 className="noDataFound">No data Found</h1>
          <button onClick={fetchData} className="refreshBtn">
            Refresh
          </button>
        </div>
      )}
    </div>
  );
}
