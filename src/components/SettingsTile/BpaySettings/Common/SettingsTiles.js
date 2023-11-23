import { useEffect, useState } from "react"
import { useAuth } from "../../../../context/LoginContext"
import { Hr, StyledDiv, StyledLi } from "../../../PaymentsTile/common/StyledPayments"
import LinkButton from "../../../common/LinkButton"
import { getSettingsTiles } from "../../../../supabase/apiAccounts"
import Loader from "../../../common/Loader"

const SettingsTiles = () => {
    const { currentUser } = useAuth()
    const [seetingsTiles, setSettingsTiles] = useState([])

    useEffect(() => {
        getSettingsTiles(currentUser.userId).then((data) => setSettingsTiles(data))
    }, [currentUser.userId])
    return (
        <div>
            {seetingsTiles.length === 0 && <Loader />}
            <div>
                {seetingsTiles[0]?.settingTypes.map(setting => <StyledLi key={setting.id}>
                    <StyledDiv>
                        <img src={setting.icon} style={{ height: '50px' }} alt="icon" />
                        <Hr />
                        <LinkButton to={setting.path}>{setting.setting}</LinkButton>
                    </StyledDiv>
                </StyledLi>
                )}
            </div>
        </div>
    )
}
export default SettingsTiles