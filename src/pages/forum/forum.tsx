import { Comentario } from "./components/Comentario";
import { Menu } from "../../components/Menu";
import Footer from "../../components/footer";
import "./forum.css";

function Forum() {
  return (
    <div className="container-forum">
      <Menu />
      <Comentario />
      <Footer />
    </div>
  )
}


export default Forum;