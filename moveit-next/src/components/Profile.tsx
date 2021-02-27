import { profile } from "console";

import styles from '../styles/components/Perfil.module.css'

export function Profile(){
    return(
        <div>
            <img src="https://avatars.githubusercontent.com/u/67983309?s=460&u=6fc5cf5a318083b443a4e5f499173a0ffb752685&v=4" alt="Guilherme Maciel"/>
            <div>
                <strong>Guilherme Maciel</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}