import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.searchBox}>
      <label>Find contacts by name:</label>
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
