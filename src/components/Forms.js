import React from "react";

export function NamePrompt() {
    return (
        <div>
            <label for='name'>What is your name?</label><br />
            <input type='text' id='name' name='name' />
        </div>
    );
}