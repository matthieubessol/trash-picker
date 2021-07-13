import { Coworker } from '../types'

const CoworkerCard = ({
    coworker,
    isActive,
    isInactive,
    onRemove}: {
        coworker: Coworker,
        isActive: boolean,
        isInactive: boolean,
        onRemove: (coworker: Coworker) => void
    }) => (
    <div className={`coworker ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`}>
        <span className="coworker__remove" onClick={() => onRemove(coworker)}>Enlever</span>
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