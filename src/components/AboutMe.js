import { useState, useEffect } from "react";
import './AboutMe.css'

function AboutMe() {
  const [photos, setPhotos] = useState([]);

  const fetchData = () => {
    fetch("https://api.unsplash.com/photos/?client_id=MBZ4qWrAs_NslYQicIzMbFgUiOVsf9meX-vpXfXfwZo")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return photos.length > 0 ? (
    <div style={{marginTop: "30px"}}>
      <h1>Photos</h1>
      <div className="photo-container">
        {photos.map((photo, index) => (
          <div key={index} className="photo">
            <h2>Name: {photo.user.name}</h2>
            <div className="img-container">
            <img className="photo-img" src={photo.urls.regular} alt={photo.alt_description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default AboutMe;