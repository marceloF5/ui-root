import { ISetupSliceTemplate } from '../types/ISetupSliceTemplate';

export const createTemplate = (
    setupSliceTemplate: ISetupSliceTemplate
): string => {
    const { sliceName, initialState, component } = setupSliceTemplate;

    const cssFiles = `
        <link href="slice-${sliceName}.client.css" rel="stylesheet">
    `;
    const jsFiles = `
        <script>
            window.__slice-${sliceName}__ = ${JSON.stringify(initialState)}
        </script>
        <script src="slice-${sliceName}.client.9132ba7385cc445b3b58.js" ></script>
    `;

    const pageSlice = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>${sliceName}</title>
                ${cssFiles}
            </head>
            <body>
                <div id="slice-${sliceName}">
                    ${component}
                </div>

                ${jsFiles}
            </body>
        </html>
    `;

    return pageSlice;
};
