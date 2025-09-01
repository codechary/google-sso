import React from 'react';
import GoogleOAuthButton from '../library/GoogleOAuthButton';
import MicrosoftOAuthButton from "../library/MicrosoftOAuthButton";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {BasicUserDetails} from "../types/basic-user-details";

export const OAuthSignInPage = () => {
    const [executed, setExecuted] = React.useState(false);
    const nav = useNavigate()
    const handleGoogleSignIn = () => {
        const clientId = process.env.REACT_APP_GOOOGLE_CLIENT_ID;
        console.log('Client ID:', clientId); // Debugging line to check if clientId is correctly retrieved
        window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(process.env.REACT_APP_FE_URL!)}&response_type=code&scope=${encodeURIComponent("email profile")}&access_type=offline`;
    }

    const getCodeAndExchangeToken = async () => {
        if (executed) {
            return
        }
        setExecuted(true);
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        if (!code) {
            return;
        }
        const googleTokenEndPoint = 'https://oauth2.googleapis.com/token';
        const clientId = process.env.REACT_APP_GOOOGLE_CLIENT_ID;
        const clientSecret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;
        const redirectUri = process.env.REACT_APP_FE_URL;

        const body = {
            client_id: clientId,
            client_secret: clientSecret,
            code,
            grant_type: 'authorization_code',
            redirect_uri: redirectUri
        }

        const tokenResponse = await axios.request({
            url: googleTokenEndPoint,
            method: 'POST',
            data: body,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (tokenResponse.status === 200 && tokenResponse.data.access_token) {
            const accessToken = tokenResponse.data.access_token;
            const userDetails = await axios.request({
                url: 'https://www.googleapis.com/oauth2/v2/userinfo?alt=json',
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            })

            console.log('userDetails', userDetails);
            localStorage.setItem('oauth_user_details', JSON.stringify({
                firstName: userDetails.data.given_name,
                lastName: userDetails.data.family_name,
                email: userDetails.data.email,
                avatar: userDetails.data.picture,
                emailVerified: userDetails.data.verified_email
            } as BasicUserDetails))
            nav('/profile')
        }
    }

    getCodeAndExchangeToken().then();
    return (
        <div  className=" bg-gray-200 w-full h-screen flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-2">
                <GoogleOAuthButton text={'Sign in with Google'} onClick={handleGoogleSignIn} />
                <MicrosoftOAuthButton text={'Sign in with Microsoft'} />
            </div>
        </div>
    );
}
