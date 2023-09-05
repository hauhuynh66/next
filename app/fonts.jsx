import { Global } from "@emotion/react";

export function CustomFonts() {
    return (
        <Global
            styles={[
            {
                '@font-face' : {
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 300,
                    src: `url('https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z11lFc-K.woff2') format('woff2')`,
                }
            }, 
            {
                '@font-face' : {
                    fontFamily: 'Pacifico',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    src: `url(https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6K6MmTpA.woff2) format('woff2')`
                }
            }
        ]}/>
    )
}