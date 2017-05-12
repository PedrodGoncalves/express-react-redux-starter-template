export default body => `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel= "stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/antd/2.10.0/antd.min.css" />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYPvYvmo81VNRuuHcOuUwJaIjAvKNJvwM&libraries=places"
        
        type="text/javascript"></script>
        <style>
        *, *:before, *:after {
            box-sizing: inherit;
            font-family: inherit;
        }

        body, html, #root {
            margin: 0;
            padding: 0;
            min-height: 100%;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Roboto', 'Open Sans', sans-serif;
            font-size: 12px;
        }

        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: rgba(159,128, 196, 1);
        }
        :-moz-placeholder { /* Firefox 19+ */
            color: rgba(159,128, 196, 1);
        }
        :-ms-input-placeholder { /* IE 10+ */
            color: rgba(159,128, 196, 1);
        }
        :-moz-placeholder { /* Firefox 18- */
            color: rgba(159,128, 196, 1);
        }
        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px white inset;
        }
        </style>
        <title>Ta pedido</title>
    </head>
    <body>
        <div id="root">${body}</div>
        <script src="bundle.js" type="text/javascript"></script>
    
    </body>
    </html>
`