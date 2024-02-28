import { useNavigate } from "react-router-dom"


const About = () => {
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
                    <h2>어바웃입니다</h2>
            </div>
        </>
    )
}

export default About