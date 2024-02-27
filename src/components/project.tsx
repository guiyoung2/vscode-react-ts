import { useNavigate } from "react-router-dom"


const Project = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <h2>프로젝트입니다</h2>
            <button onClick={()=>{
                        navigate("/")
                    }}>go home</button>
                    <button onClick={()=>{
                        navigate("/content")
                    }}>go content</button>
            </div>
        </>
    )
}

export default Project