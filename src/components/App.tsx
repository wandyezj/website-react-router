import React from "react";
import { Clock } from "./Clock";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

/**
 * The top level application component.
 */
export function App() {
    // Keys are used for links
    return (
        <div id="insert">
            <FluentProvider theme={webLightTheme}>
                <AllRoutes />
            </FluentProvider>
        </div>
    );
}

export function AllRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" key="/" element={<div>Root</div>} />
                <Route path="/test" key="/test" element={<div>Test</div>} />
                <Route path="/clock" key="/clock" element={<Clock />} />
                <Route path="/link" key="/link" element={<LinkPage />} />
            </Routes>
        </HashRouter>
    );
}

export function LinkPage() {
    return (
        <ul>
            <li>
                <Link to="/">root</Link>
            </li>
            <li>
                <Link to="/test">test</Link>
            </li>
            <li>
                <Link to="/clock">clock</Link>
            </li>
            <li>
                <Link to="/link">link</Link>
            </li>
        </ul>
    );
}
