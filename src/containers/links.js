import React from "react"

import BTest from "../components/buttonTest"

export default function Links({children, ...restProps}) {
    return <></>
}

Links.Button = function LinksButton({ children, ...restProps}){
    return <>
        <BTest.Anchor>
            <BTest.Span>
                {children}
            </BTest.Span>
        </BTest.Anchor>
        </>
};