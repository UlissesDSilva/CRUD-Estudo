import { Main } from "./style";
import Header from "../Header";

export default (props) => {

  return(
    <>
      <Header {...props}/>
      <Main className="container-fluid">
        <div className="p-3 mt-3 main">
          {props.children}
        </div>
      </Main>
    </>
  )
}