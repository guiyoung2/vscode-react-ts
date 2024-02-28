import { useNavigate } from "react-router-dom"
import { SideBtsLayout,  TapBt } from "styled-component/sideTap";

interface Bts {
    name: string;
    icon: string;
    path: string;
}

const sideBts: Bts[] = [
    {
    name: "Home",
    icon: "",
    path: "/"
},
{
    name: "about",
    icon:"",
    path: "/about"
},
{
    name: "project",
    icon:"",
    path: "/project"
},
{
    name: "practice",
    icon:"",
    path: "/practice"
},
{
    name: "contact",
    icon:"",
    path: "/contact"
}
]

const SideBts = (): JSX.Element => {

    const navigate = useNavigate()

    return (
        <>
            <div className="sideBts">
                <SideBtsLayout>
                  {
                     sideBts.map(({name, path}) => {
                      return (
                        <TapBt onClick={() => {
                           navigate(path)
                         }} key={name}>
                          {/* <Icon /> */}
                          <div>{name}</div>
                          </TapBt>
                        )
                   })
                    }
                    </SideBtsLayout>
            </div>
        </>
    )
}

export default SideBts