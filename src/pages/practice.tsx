import { useNavigate } from "react-router-dom"


const Practice = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
            <button onClick={()=>{
                navigate("/")
            }}>go home</button>
                    <button onClick={()=>{
                        navigate("/project")
                    }}>go project</button>
                    <h2>연습입니다</h2>
            </div>
        </>
    )
}

export default Practice