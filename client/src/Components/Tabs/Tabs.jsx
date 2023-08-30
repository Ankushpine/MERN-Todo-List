import { TABS } from "../../Redux/Actions/todoAction";
import { useDispatch } from "react-redux";
import { toggleTab } from "../../Redux/Actions/todoAction";

export default function Tabs({ currentTab }) {
  const dispatch = useDispatch();

  return (
    <>
      {TABS.map((tab, i) => (
        <button
          className={tab === currentTab ? " selected button" : "button"}
          onClick={() => dispatch(toggleTab(tab))}
          key={i}
        >
          {tab}
        </button>
      ))}
    </>
  );
}
