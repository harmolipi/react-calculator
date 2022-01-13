const Display = ({ calculation }) => {
  return (
    <div id="display" className=" p-4 text-3xl text-right w-full h-full">
      {calculation}
    </div>
  );
};

export default Display;
