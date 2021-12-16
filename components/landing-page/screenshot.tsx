const Screenshot = ({ url, alt }: any) => {
  return (
    <div className="flex justify-center">
      <div className="mb-4 shadow-xl">
        <img width="500rem" src={url} alt={alt}></img>
      </div>
    </div>
  );
};

export default Screenshot;
