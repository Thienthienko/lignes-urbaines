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
        <div className="creationsBloc">
          {creations.map((creation) => (
            <section key={creation.id} className="creationsSection">
              <div className="principalSection">
                <img
                  className="principalSectionImg"
                  src={`/img/${creation.img}`}
                  alt=""
                />
              </div>
              <div className="secondSection">
                <p className="creationText">Title: {creation.title}</p>
                <p className="creationText">
                  Description: {creation.description}
                </p>
                <p className="creationText">Dancer Name: {creation.dancer}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Creations;
