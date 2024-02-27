import { useNavigate } from "react-router-dom"


const Content = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <h2>콘텐츠입니다</h2>
            <button onClick={()=>{
                        navigate("/")
                    }}>go home</button>
                    <button onClick={()=>{
                        navigate("/project")
                    }}>go project</button>
            </div>
        </>
    )
}

export default Content