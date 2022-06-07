import * as React from "react";
import Applet from "./Applet.js";

export default function MainPage({ articles }) {
    return (
        <>
            <Applet link="tmp" articles={articles} />
        </>
    );
}
