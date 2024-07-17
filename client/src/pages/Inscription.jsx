function Inscription() {
  return (
    <div className="globalContainer">
      <h2>Inscription</h2>
      <form>
        <div className="row formRow">
          <div className="firstNameInput">
            <input
              type="text"
              className="form-control formInput"
              placeholder="Pseudo"
            />
          </div>
        </div>
        <div className="row formRow">
          <div className="emailInput">
            <input
              type="text"
              className="form-control formInput"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="row formRow">
          <div className="emailInput">
            <input
              type="text"
              className="form-control formInput"
              placeholder="Mot de passe"
            />
          </div>
        </div>
        <div className="submitButton">
          <button type="submit">S'inscrire</button>
        </div>
      </form>
    </div>
  );
}

export default Inscription;
