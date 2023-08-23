import "./Centerbar.css"
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../data";

function Centerbar()
{
    return(
        <div className="centerbar">
            <div className="centerbarWrapper">
                <Share />
                {Posts.map((p) => (<Post key = {p.id} post = {p} />))}
            </div>
        </div>
    )
}
export default Centerbar;