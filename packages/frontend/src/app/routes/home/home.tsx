import { ChangeEvent } from "react";
import DropdownField from "../../components/auth-components/general/dropdown-field/DropdownField";
import { categories } from "../../services/data";
import TabProfile from "../../ui/tabs/tabs-profile/TabProfile";
import SweetProfileAlert from "../../ui/alerts/SweetProfileAlert";
import {
  CategoryTag,
  ReturnBar,
  SeeMoreBar,
  StepperBar,
  Tag,
  ToogleViewBar,
} from "../../ui";

const Home = () => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="centeredPages column">
      <ReturnBar>
        <p>Esta es la home Page </p>
      </ReturnBar>
      <DropdownField
        data={categories}
        placeholder="Categorías"
        onChange={onChangeHandler}
      />
      <TabProfile fluid>
        <SweetProfileAlert message="😊Estás creando un nuevo tema👏, estás ayudando a la comunidad de Grawiki" />
      </TabProfile>
      <ToogleViewBar
        selected={false}
        onChoice={() => {
          console.log("change");
        }}
      >
        <CategoryTag icon={{ name: "BankIcon", props: { fill: true } }}>
          Bank
        </CategoryTag>
      </ToogleViewBar>
      <SeeMoreBar />
      <StepperBar pages={5} active={3} />
    </div>
  );
};

export default Home;
