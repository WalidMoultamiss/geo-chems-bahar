import React from "react";

const getImage = ({ setStep }) => {

  //get names of countries
  const countries = [
    "morroco",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
  ]
  




  //rounded image
  const imgStyle = {
    borderRadius: "50%",
    //bg image
    backgroundImage: "url('/image/ABYSS.png')",
    backgroundSize: "60%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    boxShadow: "0px 0px 10px #000000",
    WebkitBoxShadow: "0px 5px 5px #00000040",
    backgroundPosition: "center",
    marginTop: "-70px",
    width: "120px",
    height: "120px",
    // margin: "0 auto"
  };

  //input style
  const inputStyle = {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    fontSize: "1rem",
    color: "black",
    //capitialize first letter
    textTransform: "capitalize",
    //shadow
    boxShadow: "0px 5px 5px #00000040",
    WebkitBoxShadow: "0px 5px 5px #00000040",
    backgroundColor: "transparent",
    textAlign: "left",
    padding: "0.5em",
    borderRadius: "0.3em",
  };

  const buttonStyle = {
    marginTop: "1em",
    width: "60%",
    border: "none",

    outline: "none",
    fontSize: "1rem",
    //font weight
    fontWeight: "bold",
    color: "white",
    //capitialize first letter
    textTransform: "capitalize",
    //shadow
    boxShadow: "0px 5px 5px #00000040",
    //text center
    textAlign: "center",
    backgroundColor: "#5ac4f0",
    padding: "0.5em",
    borderRadius: "0.3em",
  };

  const labelStyle = {
    textTransform: "capitalize",
    fontSize: "1rem",
    fontWeight: "thin",
    color: "black",
    textAlign: "left",
    padding: "0.5em",
    borderRadius: "0.3em",
  };

  const inputContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  };

  return (
    <div
      style={{
        backgroundColor: "#231f20",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "400px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          padding: "20px",
          boxShadow: "0px 0px 10px #000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img style={imgStyle} />
        <h2
          style={{
            color: "black",
            fontSize: "1.5rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          A new way to be safe
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div style={inputContainerStyle}>
            <label style={labelStyle}>Nom de la barque</label>
            <input style={inputStyle} type="text" />
          </div>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>immatriculation</label>
            <input style={inputStyle} type="text" />
          </div>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>choisir votre pays</label>
            <select style={inputStyle}>
              {
                countries.map((country, index) => {
                  return <option key={index}>{country}</option>
                })
              }
            </select>
          </div>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>image</label>
            <input style={inputStyle} type="file" />
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
          >
            <button onClick={() => setStep(2)} style={buttonStyle}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default getImage;
