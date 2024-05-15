import React from "react";
import { FacebookShareButton, LinkedinShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon, LinkedinIcon, EmailShareButton, EmailIcon } from "react-share";

function Share({ lead }) {
    const getShareMessage = () => {
        return `Check out this lead:\nLead ID: ${lead.id}\nLead Details:\nLead Name: ${lead.Detais.name}\nLead num: ${lead.Detais.num}\nSub-Source: ${lead.source}\nStatus: ${lead.status}\nCampaign: ${lead.cmapaign}\nType: ${lead.type}\nCreated At: ${lead.credit}\nUpdated At: ${lead.update}\nAdded By: ${lead.add}`;
    };

    const encodedMessage = encodeURIComponent(getShareMessage());
    const currentPageUrl = window.location.href; 


    return (
        <div className="olo">
            <p>
                Sare The Data On This PlatForm
            </p>
            <div className="pupup">
                <FacebookShareButton url={currentPageUrl} quote={getShareMessage()}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <WhatsappShareButton url={currentPageUrl} title={getShareMessage()}>
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <LinkedinShareButton url={currentPageUrl} title={getShareMessage()}>
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>

                <EmailShareButton url={currentPageUrl} subject="Check out this lead" body={getShareMessage()}>
                    <EmailIcon size={32} round/>
                </EmailShareButton>
            </div>
        </div>
    );
}

export default Share;
