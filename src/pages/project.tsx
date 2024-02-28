import { useNavigate } from "react-router-dom"


const Project = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <button
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    go home
                </button>
                <button
                    onClick={() => {
                        navigate('/content');
                    }}
                >
                    go content
                </button>
                <h2>프로젝트입니다</h2>
            </div>
        </>
    );
};

export default Project;