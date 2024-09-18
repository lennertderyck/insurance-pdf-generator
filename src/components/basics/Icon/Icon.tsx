import { FC } from 'react';
import remix from 'remixicon/fonts/remixicon.symbol.svg';
import { IconProps } from './Icon.types';
import Svg from './Svg';

/**
 * 
 * @description Icons are from [Remixicons](https://remixicon.com/)
 */
const Icon: FC<IconProps> = ({ color = 'currentColor', size = 'base', name, className }) => {
    return (
        <Svg
            { ...{ color, size, className }}
        >
            <use href={ remix + `#ri-${ name }`}></use>
        </Svg>
    )
}

export default Icon