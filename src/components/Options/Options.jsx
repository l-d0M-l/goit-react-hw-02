import css from "./Options.module.css";

function Options({ update, feedbackCount }) {
  return (
    <>
      <ul className={css.list}>
        <li>
          <button
            onClick={() => {
              update("good");
            }}
          >
            Good
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              update("neutral");
            }}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              update("bad");
            }}
          >
            Bad
          </button>
        </li>
        {Boolean(feedbackCount) && (
          <li>
            <button
              onClick={() => {
                update(0);
              }}
            >
              Reset
            </button>
          </li>
        )}
      </ul>
    </>
  );
}

export default Options;
