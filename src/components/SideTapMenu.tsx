import { useNavigate } from "react-router-dom"
import  { SideTapLayout, TapMenu } from "styled-component/sideTap"

interface Taps {
        name: string,
        Icon: string,
        path: string
}

const sideTaps: Taps[] = [
    {   name: 'Home',
        Icon: '',
        path: '/'
    },
    {   
        name: 'About',
        Icon: '',
        path: '/about'
    },
    {   
        name: 'Project',
        Icon: '',
        path: '/project'
    },
    {   
        name: 'Practice',
        Icon: '',
        path: '/practice'
    },
    {   
        name: 'Contact',
        Icon: '',
        path: '/contact'
    }
]
const SideTapMenu = (): JSX.Element => {
    
    const navigate = useNavigate()

    return (
        <>
            <div className="sideTap">
                <SideTapLayout>
                  {
                     sideTaps.map(({name, path}) => {
                      return (
                        <TapMenu onClick={() => {
                           navigate(path)
                         }} key={path}>
                          {/* <Icon /> */}
                          <div>{name}</div>
                          </TapMenu>
                        )
                   })
                    }
                    </SideTapLayout>
            </div>
        </>
    )
}

export default SideTapMenu