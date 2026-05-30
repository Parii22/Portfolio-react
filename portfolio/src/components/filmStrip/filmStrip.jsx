import "./filmStrip.css";

function FilmStrip() {
  const images = [
    "/images/profile1.jpg",
    "/images/profile2.jpg",
    "/images/profile3.jpg",
    "/images/profile4.jpg",
  ];

  return (
    <div className="film-strip">
      {images.map((img, index) => (
        <div className="film-frame" key={index}>
          <img src={img} alt="" />
        </div>
      ))}
    </div>
  );
}

export default FilmStrip;