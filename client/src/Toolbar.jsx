import Icon from "@mdi/react";
import { mdiFilterOff, mdiFilterPlus, mdiFilterMinus } from "@mdi/js";

function Toolbar({ filter, setFilter }) {
  return (
    <div style={{ margin: "4px 0px" }}>
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>
        <Icon path={mdiFilterOff} size={1} color="blue" />
      </button>
      <button
        onClick={() => setFilter("credit")}
        disabled={filter === "credit"}
      >
        <Icon path={mdiFilterPlus} size={1} color="green" />
      </button>
      <button onClick={() => setFilter("debit")} disabled={filter === "debit"}>
        <Icon path={mdiFilterMinus} size={1} color="red" />
      </button>
    </div>
  );
}

export default Toolbar;
