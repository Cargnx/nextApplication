// components/UnderConstruction.jsx
const UnderConstruction = ({ pageName }) => {
  return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-8">
        <img src="/icons/triangle-exclamation-solid.svg" alt="Danger svg icon" className="w-20"/>
        <h1 className="text-7xl">{pageName}</h1>
        <p className="text-3xl">Page is under construction</p>
      </div>
  );
};

export default UnderConstruction;