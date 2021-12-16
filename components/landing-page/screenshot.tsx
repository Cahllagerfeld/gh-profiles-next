const Screenshot = ({ url, alt }: any) => {
  return (
    <div>
      <div className="mb-4 shadow-xl">
        <img width="1000rem" src={url} alt={alt}></img>
      </div>
    </div>
  );
};

export default Screenshot;
