import { Comentario } from "./components/Comentario";
import { Menu } from "../../components/Menu";
import Footer from "../../components/footer";

function Forum() {
  return (
    <>
      <Menu />
      <div id="container">
        <Comentario />
        <Footer />
      </div>
    </>
  )
}


export default Forum;