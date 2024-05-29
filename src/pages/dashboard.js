import { AiOutlineAppstore } from "react-icons/ai";
import HeaderContent from "../components/headerContent";
import Content from "../components/wrapperContent";

export default function Dashboard() {
  return (
    <Content>
      <HeaderContent
        text="dashboard page"
        icon={<AiOutlineAppstore className="inline-block text-xl" />}
      />
    </Content>
  );
}
