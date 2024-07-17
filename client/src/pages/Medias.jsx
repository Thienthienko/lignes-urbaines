import Laurene from "../assets/images/laurene.jpg";
import Lukas from "../assets/images/lukas.jpg";
import Yous from "../assets/images/yous.jpg";
import Eva from "../assets/images/eva.jpg";

function Medias() {
  return (
    <div className="globalContainer">
      <h2>Médias</h2>

      <div className="principalBloc">
        <div className="mediasFlex">
          <div className="blocMedias">
            <h3>Laurène</h3>
            <img src={Laurene} alt="" />
          </div>
          <div className="blocMedias">
            <h3>Lukas</h3>
            <img src={Lukas} alt="" />
          </div>
          <div className="blocMedias">
            <h3>Youness</h3>
            <img src={Yous} alt="" />
          </div>
          <div className="blocMedias">
            <h3>Eva</h3>
            <img src={Eva} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medias;
