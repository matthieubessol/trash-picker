import React, { useState } from 'react'
import { Coworker } from '../types'
import CoworkerCard from './CoworkerCard'

const PeopleRandomizer = ({ coworkers } : { coworkers: Array<Coworker> }) => {
    const [curSelected, setCurSelected] = useState<Coworker | null>(null)
    const [pickedCoworkers, setPickedCoworkers] = useState<Array<Coworker>>([])
    const namesPicked: string[] = pickedCoworkers.map((c: Coworker) => `${c.firstname} ${c.lastname}`)

    const pickRandom = (): void => {
        const toPickCoworkers = coworkers.filter((c: Coworker) => 
            !namesPicked.includes(`${c.firstname} ${c.lastname}`)
        )

        if (!toPickCoworkers?.length) {
            alert('Tout le monde a été pris !')
            return
        }

        // Very important line, do not remove, might brake legacy.
        new Audio(`${process.env.PUBLIC_URL}/lezgo.mp3`).play()
        const pickedIndex = Math.floor(Math.random() * toPickCoworkers.length - 1) + 1
        const newPicked = toPickCoworkers[pickedIndex]
        setCurSelected(newPicked)
        removeUser(newPicked)
    }

    let pickedName: string = ''
    if (curSelected) {
        pickedName = `${curSelected.firstname} ${curSelected.lastname}`
    }

    const removeUser = (coworker: Coworker) => {
        setPickedCoworkers([
            ...pickedCoworkers,
            coworker
        ])
    }

    return (
        <div className="randomizer">
            <div className="subtitle">
                <h2 className="h2">La roue de la fortune</h2>
            </div>
            <div className="randomizer__wrapper">
                <div className="coworkers">
                    {coworkers.map((c: Coworker) => {
                        const name: string = `${c.firstname} ${c.lastname}`
                        const isActive: boolean = pickedName === name
                        const isInactive: boolean = namesPicked.includes(`${c.firstname} ${c.lastname}`)
                        
                        return (
                            <CoworkerCard 
                                isActive={isActive} 
                                isInactive={isInactive} 
                                coworker={c} 
                                key={name}
                                onRemove={removeUser}
                            />
                        )
                    })}
                </div>

                <div>
                    <button onClick={pickRandom}>
                        On fait tourner la roue lezgoooo !
                    </button>
                    <p>J'ai pas eu le temps de faire une roue de la fortune tmtc</p>
                </div>
            </div>
        </div>
    )
}

export default PeopleRandomizer