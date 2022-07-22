import React, { FC } from 'react'

const Box: FC = () => {
    return (
        <mesh>
            <boxBufferGeometry attach={"geometry"} color="blue" />
            <meshLambertMaterial attach={"material"} />
        </mesh>
    )
}

export default Box