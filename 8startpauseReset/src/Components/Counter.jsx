import PropTypes from "prop-types";


export default function Counter({start,pause,reset,count}) {
  return (
    <>
      <div className="container pl-10 pt-10">
        <button className="pl-10 pr-10 pt-4 pb-4 border-2 border-gray-400 text-2xl font-bold" onClick={start}>
          Start
        </button>
        <button className="pl-10 pr-10 pt-4 pb-4 border-2 border-gray-400 text-2xl font-bold" onClick={pause}>
          Pause
        </button>
        <button className="pl-10 pr-10 pt-4 pb-4 border-2 border-gray-400 text-2xl font-bold" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="result mt-4 pl-10 text-2xl font-bold">
        Elapsed Time : {count}
      </div>
    </>
  );
}

Counter.propTypes = {
  start: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};



