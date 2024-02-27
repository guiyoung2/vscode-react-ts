import { useNavigate } from "react-router-dom"
import  { SideTapLayout, TapBt } from "styled-component/sideTap"

interface Taps {
        Icon: string,
        path: string
}

const sideTaps: Taps[] = [
    {
        Icon: '',
        path: '/'
    },
    {
        Icon: '',
        path: '/project'
    },
    {
        Icon: '',
        path: '/content'
    }
]
const SideTapMenu = (): JSX.Element => {
    
    const navigate = useNavigate()

    return (
        <>
            <div className="sideTap">
                <SideTapLayout>
                  {
                     sideTaps.map(({Icon, path}) => {
                      return (
                        <TapBt onClick={() => {
                           navigate(path)
                         }} key={path}>
                          {/* <Icon /> */}
                          </TapBt>
                        )
                   })
                    }
                    </SideTapLayout>
            </div>
        </>
    )
}

export default SideTapMenu