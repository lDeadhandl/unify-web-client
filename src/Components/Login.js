import React, { Component } from 'react';
import './Login.css'

export default class extends Component {
    //Calls spotify authorization API when login is clicked
    GetSpotifyAuthorization() {
        var data = {
            client_id: "e7b6b7ff0e444353aa5edfa5ea1728cb",
            response_type: "code",
            scope: "user-library-read",
            redirect_uri: "http://localhost:3000/app/"
        };

        var body = "";
        for (var key in data) {
            if (body.length) {
                body += "&";
            }
            body += key + "=";
            body += encodeURIComponent(data[key]);
        }

        return window.location.href = "https://accounts.spotify.com/en/authorize/?" + body;
    }

    render(){ 
        return (
            <body>
                <h1>Unify</h1>
                <h2>The Artificially Intelligent Disk Jockey</h2>
                <button className="button" onClick={() => this.GetSpotifyAuthorization()}>Sign in With Spotify</button>
                <script src="app.js"></script>

                <div>
                    {/* <img src="link.png" width="100" height="100"/> */}
                    {/* <iframe src="https://open.spotify.com/embed/track/6rqhFgbbKwnb9MLmUQDhG6" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                </div>
            </body>
)}
}
