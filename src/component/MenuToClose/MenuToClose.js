
import './MenuToClose.scss';


const MenuToClose = ({state  , setstate}) => {

    return (

        <div className={`barToclose ${state? "active" : ""}`}
        onClick={()=>{setstate(!state)}}>
            <div className="content">
            </div>
        </div>

    )
};
export default MenuToClose ;