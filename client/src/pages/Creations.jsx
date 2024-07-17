import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_API_URL;

function Creations() {
  const [creations, setCreations] = useState([]);

  useEffect(() => {
    const fetchCreations = async () => {
      try {
        const response = await fetch(`${URL}/api/creations`);
        const data = await response.json();
        setCreations(data);
      } catch (err) {
        console.error("Error fetching creations:", err);
      }
    };

    fetchCreations();
  }, []);

  return (
    <div className="globalContainer">
      <h2>Créations</h2>
      <div className="principalBloc">
        <div className="marionApropos">
          <div className="divInfo">
            {creations.map((creation) => (
              <div key={creation.id}>
                <p>Title: {creation.title}</p>
                <p>Description: {creation.description}</p>
                <p>Dancer Name: {creation.dancer_name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creations;
