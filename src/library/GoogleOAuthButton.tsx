import React from 'react';
import {GoogleIcon} from "./icons/GoogleIcon";
import Text from "./typography/Text";
interface GoogleOAuthButtonProps {
    onClick?: () => void;
    text: string
}

const GoogleOAuthButton = (props: GoogleOAuthButtonProps) => {
    const { onClick, text } = props;

    return (
        <div className="w-80" onClick={onClick}>
            <div className="w-full bg-white rounded-md cursor-pointer shadow px-3 py-2">
                <div className="flex gap-2 justify-center items-center" v-loading="loading">
                    <GoogleIcon />
                    <Text size={'normal'}>{text}</Text>
                </div>
            </div>
        </div>
    )
}

export default GoogleOAuthButton;
