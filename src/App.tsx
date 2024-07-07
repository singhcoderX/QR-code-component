type Props = {};

import { useNavigate } from "react-router-dom";

const App = (props: Props) => {
  const navigate = useNavigate();

  return <div className=" bg-red-200 w-screen h-screen">Hello World</div>;
};

export default App;
