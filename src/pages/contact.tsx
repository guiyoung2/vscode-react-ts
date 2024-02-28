import { useNavigate } from "react-router-dom"


const Contact = () => {
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
                    <h2>연락입니다</h2>
            </div>
        </>
    )
}

export default Contact