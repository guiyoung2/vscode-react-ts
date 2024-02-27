import { useNavigate } from "react-router-dom"


const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <h2>제목입니다</h2>
                <div>
                    <button onClick={()=>{
                        navigate("/project")
                    }}>go project</button>
                    <button onClick={()=>{
                        navigate("/content")
                    }}>go content</button>
                </div>
            </div>
        </>
    )
}

export default Home