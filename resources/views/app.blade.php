<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="Description" content="Blog platform assigment created by Alejandro Katcheroff.">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Inlined Google Font import for improved performance -->
        <style>
            /* cyrillic-ext */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v14/XRXV3I6Li01BKofIOOaBTMnFcQIG.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v14/XRXV3I6Li01BKofIMeaBTMnFcQIG.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v14/XRXV3I6Li01BKofIOuaBTMnFcQIG.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v14/XRXV3I6Li01BKofIO-aBTMnFcQIG.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v14/XRXV3I6Li01BKofINeaBTMnFcQ.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Nunito SemiBold'), local('Nunito-SemiBold'), url(https://fonts.gstatic.com/s/nunito/v14/XRXW3I6Li01BKofA6sKUbOvIWzgPDEtj.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Nunito SemiBold'), local('Nunito-SemiBold'), url(https://fonts.gstatic.com/s/nunito/v14/XRXW3I6Li01BKofA6sKUZevIWzgPDEtj.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Nunito SemiBold'), local('Nunito-SemiBold'), url(https://fonts.gstatic.com/s/nunito/v14/XRXW3I6Li01BKofA6sKUbuvIWzgPDEtj.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Nunito SemiBold'), local('Nunito-SemiBold'), url(https://fonts.gstatic.com/s/nunito/v14/XRXW3I6Li01BKofA6sKUb-vIWzgPDEtj.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Nunito SemiBold'), local('Nunito-SemiBold'), url(https://fonts.gstatic.com/s/nunito/v14/XRXW3I6Li01BKofA6sKUYevIWzgPDA.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* cyrillic-ext */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Nunito Bold'), local('Nunito-Bold'), url(https://fonts.gstatic.com/s/nunito/v14/XRXW3I6Li01BKofAjsOUbOvIWzgPDEtj.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Nunito Bold'), local('Nunito-Bold'), url(https://fonts.gstatic.com/s/nunito/v14/XRXW3I6Li01BKofAjsOUZevIWzgPDEtj.woff2) format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Nunito Bold'), local('Nunito-Bold'), url(https://fonts.gstatic.com/s/nunito/v14/XRXW3I6Li01BKofAjsOUbuvIWzgPDEtj.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Nunito Bold'), local('Nunito-Bold'), url(https://fonts.gstatic.com/s/nunito/v14/XRXW3I6Li01BKofAjsOUb-vIWzgPDEtj.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Nunito Bold'), local('Nunito-Bold'), url(https://fonts.gstatic.com/s/nunito/v14/XRXW3I6Li01BKofAjsOUYevIWzgPDA.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
        </style>

        <!-- Styles -->
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

        @routes

        <!-- Scripts -->
        <script src="{{ mix('/js/app.js') }}" defer></script>

    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
