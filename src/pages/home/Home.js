import "./home.scss";
import {Posts, Stories} from "../../components";

const Home = () => {
    return (
        <div className={'home'}>
            <Stories/>
            <Posts/>
        </div>
    );
};

export {Home};
