import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_API_URL;

function Medias() {
  const [medias, setMedias] = useState([]);

  // Récupération des Médias
  useEffect(() => {
    const fetchCreations = async () => {
      try {
        const response = await fetch(`${URL}/api/medias`);
        const data = await response.json();
        setMedias(data);
      } catch (err) {
        console.error("Error fetching creations:", err);
      }
    };

    fetchCreations();
  }, []);

  return (
    <div className="globalContainer">
      <h2>MÉDIAS</h2>

      <div className="principalBloc">
        <div className="mediasFlexContainer">
          <div className="mediasFlex">
            {medias.map((media) => (
              <div key={media.id} className="blocMedias">
                <div className="sectionMedias">
                  <h4>{media.title}</h4>
                  <img className="mediasImg" src={`/img/${media.img}`} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medias;
