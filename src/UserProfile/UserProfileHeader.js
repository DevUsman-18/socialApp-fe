import UserProfileBio from "./UserProfileBio";
import UserProfileLogoutButton from "./UserProfileLogoutButton";
import {Stack} from "@mui/material";
import React from "react";
// const banner = new MDCBanner(document.querySelector('.mdc-banner'));

function UserProfileHeader(props) {
    return (
        <div className="mdc-banner" role="banner" >
        <div className="mdc-banner__content"
             role="alertdialog"
             aria-live="assertive" >
            <Stack direction="row" spacing={4}  sx={{mb: 10}}>
                <UserProfileLogoutButton />
            </Stack>
            <div className="mdc-banner__graphic-text-wrapper">
                <div className="mdc-banner__text" >
                   <UserProfileBio bio={props.bio} />
                </div>
            </div>

        </div>
    </div>
    )
}

export default UserProfileHeader