function Contact() {
  return (
    <div className="globalContainer">
      <h2>Contact</h2>
      <div>
        <div className="principalBloc">
          <div className="leftRightContainer">
            <div className="leftBloc">
              <p>Contact</p>
            </div>
            <div className="rightBloc">
              <h3>Formulaire</h3>
              <form>
                <div className="row formRow">
                  <div className="firstNameInput">
                    <input
                      type="text"
                      className="form-control formInput"
                      placeholder="Prénom"
                    />
                  </div>
                </div>
                <div className="row formRow">
                  <div className="lastNameInput">
                    <input
                      type="text"
                      className="form-control formInput"
                      placeholder="Nom"
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
                  <div className="phoneInput">
                    <input
                      type="tel"
                      className="form-control formInput"
                      placeholder="Téléphone"
                    />
                  </div>
                </div>
                <div>
                  <div className="row formRow">
                    <div className="messageInput">
                      <textarea
                        rows={3}
                        className="form-control formInput"
                        placeholder="Message*"
                      />
                    </div>
                  </div>
                </div>
                <div className="submitButton">
                  <button type="submit">Envoyer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
