import { ChangeEvent } from "react";
import DropdownField from "../../components/auth-components/general/dropdown-field/DropdownField";
import { tags } from "../../services/data/tags.data";

const Home = () => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="centeredPages">
      <p>Esta es la home Page </p>
      <DropdownField
        data={tags}
        placeholder="Categorías"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Home;
