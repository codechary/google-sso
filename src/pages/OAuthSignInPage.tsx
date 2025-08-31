import React from 'react';
import GoogleOAuthButton from '../library/GoogleOAuthButton';
import MicrosoftOAuthButton from "../library/MicrosoftOAuthButton";

export const OAuthSignInPage = () => {
    return (
        <div  className=" bg-gray-200 w-full h-screen flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-2">
                <GoogleOAuthButton text={'Sign in with Google'} />
                <MicrosoftOAuthButton text={'Sign in with Microsoft'} />
            </div>
        </div>
    );
}
