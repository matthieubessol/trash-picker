import { Coworker } from '../types'

const CoworkerCard = ({coworker, isActive, isInactive}: { coworker: Coworker, isActive: boolean, isInactive: boolean}) => (
    <div className={`coworker ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`}>
        <div className="coworker__emoji">{coworker.emoji}</div>
        <p className="coworker__name">{coworker.firstname} {coworker.lastname}</p>
        <p className="coworker__info">{coworker.job} - {`${coworker.age >= 30 ? '👴 <- vieux' : `${coworker.age} ans` }`}</p>
    </div>
)

CoworkerCard.defaultProps = {
    isActive: false,
    isInactive: false
}

export default CoworkerCard