import icon from "./icon.png";

export const Zagolovok = () => {
    return (
       <div className="zagolovok" style={{top: "70px",width: "1560px",height: "380px",}}>
            <div className="text1">
                Открой для себя 
                финансовую  грамотность
            </div>

            <div className="text2">
                Измените свое отношение к деньгами и научитесь 
                грамотно пользоваться ими
            </div>

            <div >
                <img className="icon" src = {icon} alt = "icon"></img>           
            </div>
        </div>
    );
};