import React from "react";

const Landing = () => {
    return (<div style={{textAlign: "left"}}>
            <br></br>
            <h5 align={"center"}> You can use this application to collect feedback from your customers</h5>
            <br></br>
            <div className={"container"}>
                <h6>Front end: React </h6>
                <h6>Back end: Node </h6>
                <h6>Database: MongoDB </h6>
                <h6>Server: Heroku </h6>
                <h6>Integrated with: Stripe, SendGrid, and Google OAuth</h6>
                <h6><a href={"https://github.com/ZhiyuanMa2017/Customer-Feedback-Collection"}>GitHub Link </a></h6>

                <br></br>
            </div>
            <h5>1. Use the top right "Login with Google" button to login with your Google account.</h5>
            <h5> 2. Use the "➕" button to create a new survey and send surveys to your customers.</h5>
            <h5> 3. Go back to survey page to see results.</h5>
        </div>)
}

export default Landing;
