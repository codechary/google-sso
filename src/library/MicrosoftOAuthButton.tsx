import React from 'react';
import Text from "./typography/Text";
import {MicrosoftIcon} from "./icons/MicrosoftIcon";
interface MicrosoftOAuthButtonProps {
    onClick?: () => Promise<void>;
    text: string
}

const MicrosoftOAuthButton = (props: MicrosoftOAuthButtonProps) => {
    const { onClick, text } = props;
    return (
        <div className="w-80" onClick={onClick}>
            <div className="w-full bg-white rounded-md cursor-pointer shadow px-3 py-2">
                <div className="flex gap-2 justify-center items-center" v-loading="loading">
                    <MicrosoftIcon />
                    <Text size={'normal'}>{text}</Text>
                </div>
            </div>
        </div>
    )
}

export default MicrosoftOAuthButton;
