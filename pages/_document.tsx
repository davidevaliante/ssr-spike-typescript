import Document, { Head, Main, NextScript } from 'next/document'
import * as React from "react";

export default class MyDocument extends Document {
    static async getInitialProps(ctx : any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
                    <title>Spike Slot</title>
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}