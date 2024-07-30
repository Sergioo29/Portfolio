import { FC } from 'react';

interface LogoType {
    className?: string;
}

const Logo: FC<LogoType> = ({ className }) => {
    return (
        <svg
            className={className}
            fill="none"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="100%"
            viewBox="0 0 500 148"
            enable-background="new 0 0 500 148"
        >
            <title>Sergio da Silva</title>
            <path
                fill="#556272"
                opacity="1.000000"
                stroke="none"
                d="
M351.000000,150.000000 
	C234.000046,150.000000 117.500084,150.000000 1.000094,150.000000 
	C1.000062,100.333389 1.000062,50.666786 1.000031,1.000134 
	C167.666550,1.000089 334.333099,1.000089 500.999725,1.000045 
	C500.999817,50.666531 500.999817,100.333061 500.999908,149.999786 
	C451.166656,150.000000 401.333344,150.000000 351.000000,150.000000 
M115.988182,83.353317 
	C117.255104,88.174881 120.187271,91.676010 124.698235,93.674507 
	C130.475296,96.233948 136.192490,95.639915 141.762482,92.374245 
	C141.202789,101.081688 135.728790,102.409401 121.275368,97.526703 
	C120.024368,100.073013 118.755211,102.656288 117.310150,105.597610 
	C126.501801,110.126892 135.295837,111.336761 144.393707,107.884323 
	C149.856262,105.811401 153.330154,101.403107 153.603973,95.796204 
	C154.128616,85.052528 153.756561,74.265060 153.756561,63.539722 
	C146.051224,62.371040 144.174347,62.668755 141.529968,65.393486 
	C135.107300,61.232220 128.526474,61.307636 122.310509,65.470184 
	C116.283249,69.506371 114.489525,75.543556 115.988182,83.353317 
M250.858734,96.844421 
	C255.664337,96.681885 260.469940,96.519348 264.494019,96.383247 
	C269.035461,96.677704 272.941223,96.930939 277.067261,97.198456 
	C277.067261,81.285789 277.067261,66.072510 277.067261,50.398098 
	C274.701630,50.398098 272.707428,50.582550 270.759888,50.359489 
	C266.770721,49.902599 264.849274,51.176891 265.314392,55.524151 
	C265.627167,58.447659 265.373932,61.431725 265.373932,64.418053 
	C264.502380,64.418053 264.145416,64.509712 263.860931,64.404800 
	C253.347122,60.527729 244.505295,63.575253 240.801758,72.369812 
	C236.708939,82.088776 240.492630,91.919106 250.858734,96.844421 
M28.336136,70.257462 
	C27.201265,70.005234 25.901428,70.020370 24.966780,69.443649 
	C23.168085,68.333786 21.576090,66.888939 19.898371,65.583015 
	C22.000349,64.390640 24.125444,62.174347 26.199446,62.221176 
	C30.387501,62.315723 34.547802,63.639687 39.204433,64.551537 
	C40.209976,61.980133 41.319939,59.141724 42.557457,55.977112 
	C33.021954,51.674904 23.925146,50.494179 14.707608,54.832180 
	C9.564930,57.252449 7.002457,61.637669 7.294193,67.334984 
	C7.586795,73.049210 11.124326,76.364243 16.313780,77.997261 
	C19.953024,79.142464 23.778576,79.742065 27.338461,81.073265 
	C29.101053,81.732376 30.451864,83.492676 31.988979,84.754761 
	C30.194662,85.856461 28.317444,88.001434 26.621372,87.866669 
	C21.268976,87.441353 15.984471,86.161667 10.108164,85.111504 
	C9.215510,87.133263 7.971919,89.949860 6.771470,92.668739 
	C14.921205,98.760223 29.864717,99.709259 37.890865,94.882881 
	C42.422718,92.157730 44.669998,88.161797 44.421234,82.846878 
	C44.170551,77.490829 40.955128,74.383354 36.282024,72.581459 
	C33.968033,71.689201 31.511293,71.167160 28.336136,70.257462 
M345.793945,95.904091 
	C353.617157,98.249443 361.483429,99.156578 369.267334,95.927818 
	C376.298248,93.011375 380.176636,85.928627 377.164551,79.900314 
	C375.569489,76.708115 371.964233,74.022980 368.644592,72.324066 
	C365.030701,70.474533 360.637695,70.206627 356.708344,68.881523 
	C355.369354,68.429985 354.406464,66.863258 353.271729,65.806099 
	C354.501953,64.629463 355.575684,62.752033 356.997742,62.434448 
	C359.344635,61.910336 361.965851,62.109268 364.380371,62.528362 
	C367.078430,62.996674 369.674957,64.049980 372.511475,64.907906 
	C373.768494,61.894474 374.898468,59.185539 376.229431,55.994823 
	C366.490326,51.715054 357.102448,50.300793 347.627533,55.153996 
	C342.542694,57.758556 340.414154,62.306610 340.931671,68.038193 
	C341.418274,73.427055 344.865631,76.330704 349.568329,77.902817 
	C353.345245,79.165451 357.364227,79.739990 361.074951,81.148796 
	C362.775269,81.794342 363.993286,83.710182 365.430023,85.049950 
	C363.706390,86.051918 361.899567,88.018990 360.274384,87.878883 
	C354.922729,87.417526 349.636902,86.193054 343.650940,85.143326 
	C342.769196,87.061539 341.483948,89.857536 339.985748,93.116859 
	C341.879883,94.062881 343.470337,94.857246 345.793945,95.904091 
M216.317932,73.391434 
	C215.687683,72.223518 215.210388,70.935417 214.402420,69.907143 
	C209.076935,63.129726 201.897583,61.482590 193.829803,62.949009 
	C186.690933,64.246597 181.700043,68.285561 179.788086,75.473755 
	C177.951248,82.379471 179.782211,88.354065 185.160660,93.051849 
	C191.305298,98.418854 201.776016,99.138359 209.083542,94.892677 
	C216.160980,90.780663 218.689835,83.819901 216.317932,73.391434 
M309.069977,64.192848 
	C300.651062,61.304585 292.617157,61.864773 284.581726,66.513031 
	C286.010132,69.327606 287.190338,71.653122 288.340332,73.919067 
	C299.646057,70.373375 302.867065,70.946655 304.352081,76.540955 
	C299.918213,76.953423 295.398346,76.985382 291.054901,77.876945 
	C285.708221,78.974434 283.038727,82.548210 283.087158,87.271698 
	C283.136719,92.103622 286.207703,96.324104 291.499115,96.884644 
	C296.020599,97.363632 300.701660,96.336082 306.128754,95.910934 
	C307.265320,97.385696 310.614960,97.816406 316.879608,96.167633 
	C316.879608,89.429085 317.089966,82.617149 316.809174,75.825523 
	C316.605743,70.905235 314.378998,66.878906 309.069977,64.192848 
M474.448639,76.958435 
	C472.300293,77.162331 470.101105,77.141235 468.013306,77.613098 
	C462.176147,78.932373 459.113647,82.546204 459.315338,87.535004 
	C459.515656,92.489861 462.847931,96.576019 468.507294,97.041924 
	C472.881531,97.402046 477.382050,96.228554 482.057465,95.711311 
	C484.930023,98.712982 489.062195,96.341095 493.026306,96.919907 
	C493.026306,89.366142 493.165039,82.543625 492.979095,75.729958 
	C492.848114,70.930046 490.810211,66.852531 486.313477,64.786011 
	C477.690460,60.823177 469.292297,61.968803 460.744507,66.314667 
	C462.209229,69.251930 463.430176,71.700401 464.612335,74.071091 
	C474.951050,70.273056 478.847412,70.916862 480.812592,76.950981 
	C478.873322,76.950981 477.109131,76.950981 474.448639,76.958435 
M79.706039,67.822395 
	C71.011086,60.381020 58.354454,60.769386 51.493481,68.688095 
	C45.379932,75.744156 46.182812,86.867691 53.241898,92.911720 
	C61.065880,99.610664 75.248222,99.144196 81.349274,91.808441 
	C78.617699,88.467354 76.705864,84.779190 70.794495,87.770493 
	C66.167656,90.111801 62.360691,87.864395 60.048885,82.981041 
	C68.184280,82.981041 76.031067,82.981041 83.770470,82.981041 
	C84.564072,75.975029 83.965149,73.686462 79.706039,67.822395 
M427.907654,87.690445 
	C428.088470,88.155319 428.259979,88.624062 428.451447,89.084503 
	C432.065460,97.774071 432.072144,97.837761 441.487244,96.924362 
	C442.701660,96.806541 444.441650,95.890419 444.874054,94.885994 
	C449.328400,84.538948 453.563538,74.097527 458.022034,63.288864 
	C456.177002,63.169224 454.874817,63.211529 453.622681,62.981583 
	C448.291229,62.002502 445.479919,64.256668 443.952148,69.403381 
	C442.636566,73.835266 440.413940,77.997894 438.116364,83.398315 
	C436.287933,78.757401 434.958069,75.384483 433.630096,72.010834 
	C429.850800,62.409946 429.850983,62.407719 419.405334,63.081795 
	C419.095642,63.101784 418.795837,63.274628 417.994965,63.541874 
	C421.211517,71.373871 424.415833,79.176048 427.907654,87.690445 
M402.836884,55.713959 
	C402.836884,69.305344 402.836884,82.896721 402.836884,96.612091 
	C407.117645,96.612091 410.807373,96.612091 414.552124,96.612091 
	C414.552124,81.155876 414.552124,66.101929 414.552124,50.399811 
	C411.790619,50.399811 409.322571,50.576836 406.890259,50.357388 
	C403.436401,50.045773 402.438660,51.693268 402.836884,55.713959 
M89.841087,74.520874 
	C89.841087,81.913567 89.841087,89.306252 89.841087,96.697296 
	C94.205063,96.697296 97.775360,96.697296 101.864113,96.697296 
	C101.864113,92.788864 101.862473,89.175659 101.864426,85.562454 
	C101.870125,75.009758 102.124603,74.688026 112.246780,72.393959 
	C112.246780,69.197205 112.246780,66.015152 112.246780,61.911976 
	C108.339851,63.145283 105.113503,64.163750 102.029099,65.137405 
	C98.692154,61.195431 94.301491,63.620178 89.841087,63.138374 
	C89.841087,66.953224 89.841087,70.240974 89.841087,74.520874 
M394.999512,70.589218 
	C394.999512,68.165558 394.999512,65.741890 394.999512,63.313385 
	C390.675415,63.313385 387.092438,63.313385 383.409515,63.313385 
	C383.409515,74.647720 383.409515,85.676178 383.409515,96.703362 
	C387.378601,96.703362 390.964630,96.703362 394.999512,96.703362 
	C394.999512,88.130211 394.999512,79.848015 394.999512,70.589218 
M173.862961,90.356644 
	C173.862961,81.424286 173.862961,72.491936 173.862961,63.381603 
	C169.577484,63.381603 165.884598,63.381603 162.125305,63.381603 
	C162.125305,74.663544 162.125305,85.566055 162.125305,96.615204 
	C166.104416,96.615204 169.791702,96.615204 173.862823,96.615204 
	C173.862823,94.587952 173.862823,92.950974 173.862961,90.356644 
M171.533295,58.464973 
	C175.009415,56.258141 176.238815,53.204453 174.006836,49.628574 
	C171.811813,46.111881 168.113434,46.081997 164.673050,47.221813 
	C161.486465,48.277550 159.947327,50.902489 160.774002,54.302353 
	C161.793961,58.497128 165.036438,59.400143 168.841019,59.148655 
	C169.496338,59.105335 170.142593,58.924961 171.533295,58.464973 
M381.953003,54.212494 
	C384.277191,58.806164 388.201263,60.527115 392.374512,58.624054 
	C395.735107,57.091568 396.867035,54.309361 395.893372,50.844734 
	C394.940613,47.454418 390.130829,45.268623 386.395996,47.227959 
	C384.363495,48.294220 383.343292,51.290100 381.953003,54.212494 
z"
            />
            <path
                fill="#D5E3E6"
                opacity="1.000000"
                stroke="none"
                d="
M115.917496,82.963936 
	C114.489525,75.543556 116.283249,69.506371 122.310509,65.470184 
	C128.526474,61.307636 135.107300,61.232220 141.529968,65.395523 
	C144.174347,62.668755 146.051224,62.371040 153.756561,63.539722 
	C153.756561,74.265060 154.128616,85.052528 153.603973,95.796204 
	C153.330154,101.403107 149.856262,105.811401 144.393707,107.884323 
	C135.295837,111.336761 126.501801,110.126892 117.310150,105.597610 
	C118.755211,102.656288 120.024368,100.073013 121.275368,97.526703 
	C135.728790,102.409401 141.202789,101.081688 141.762482,92.374245 
	C136.192490,95.639915 130.475296,96.233948 124.698235,93.674507 
	C120.187271,91.676010 117.255104,88.174881 115.917496,82.963936 
M136.124619,85.630722 
	C141.288605,83.706665 143.104980,80.954872 141.934174,76.829285 
	C140.959595,73.395111 136.929749,71.214111 133.088638,72.197548 
	C129.642426,73.079872 127.525818,75.234581 127.695831,78.982498 
	C127.914696,83.807152 131.018433,85.508408 136.124619,85.630722 
z"
            />
            <path
                fill="#D5E3E6"
                opacity="1.000000"
                stroke="none"
                d="
M250.491608,96.717674 
	C240.492630,91.919106 236.708939,82.088776 240.801758,72.369812 
	C244.505295,63.575253 253.347122,60.527729 263.860931,64.404800 
	C264.145416,64.509712 264.502380,64.418053 265.373932,64.418053 
	C265.373932,61.431725 265.627167,58.447659 265.314392,55.524151 
	C264.849274,51.176891 266.770721,49.902599 270.759888,50.359489 
	C272.707428,50.582550 274.701630,50.398098 277.067261,50.398098 
	C277.067261,66.072510 277.067261,81.285789 277.067261,97.198456 
	C272.941223,96.930939 269.035461,96.677704 264.494019,96.383247 
	C260.469940,96.519348 255.664337,96.681885 250.491608,96.717674 
M252.576736,84.446526 
	C255.133606,88.305763 258.516022,89.150238 262.442383,86.794411 
	C265.484985,84.968842 267.017517,79.234184 264.637085,76.076500 
	C263.126312,74.072487 259.828003,72.271973 257.398682,72.354874 
	C253.031250,72.503929 251.564468,76.170319 251.671799,80.268745 
	C251.701950,81.420403 252.014938,82.564667 252.576736,84.446526 
z"
            />
            <path
                fill="#D4E2E6"
                opacity="1.000000"
                stroke="none"
                d="
M28.727638,70.367538 
	C31.511293,71.167160 33.968033,71.689201 36.282024,72.581459 
	C40.955128,74.383354 44.170551,77.490829 44.421234,82.846878 
	C44.669998,88.161797 42.422718,92.157730 37.890865,94.882881 
	C29.864717,99.709259 14.921205,98.760223 6.771470,92.668739 
	C7.971919,89.949860 9.215510,87.133263 10.108164,85.111504 
	C15.984471,86.161667 21.268976,87.441353 26.621372,87.866669 
	C28.317444,88.001434 30.194662,85.856461 31.988979,84.754761 
	C30.451864,83.492676 29.101053,81.732376 27.338461,81.073265 
	C23.778576,79.742065 19.953024,79.142464 16.313780,77.997261 
	C11.124326,76.364243 7.586795,73.049210 7.294193,67.334984 
	C7.002457,61.637669 9.564930,57.252449 14.707608,54.832180 
	C23.925146,50.494179 33.021954,51.674904 42.557457,55.977112 
	C41.319939,59.141724 40.209976,61.980133 39.204433,64.551537 
	C34.547802,63.639687 30.387501,62.315723 26.199446,62.221176 
	C24.125444,62.174347 22.000349,64.390640 19.898371,65.583015 
	C21.576090,66.888939 23.168085,68.333786 24.966780,69.443649 
	C25.901428,70.020370 27.201265,70.005234 28.727638,70.367538 
z"
            />
            <path
                fill="#D5E3E6"
                opacity="1.000000"
                stroke="none"
                d="
M345.427368,95.777847 
	C343.470337,94.857246 341.879883,94.062881 339.985748,93.116859 
	C341.483948,89.857536 342.769196,87.061539 343.650940,85.143326 
	C349.636902,86.193054 354.922729,87.417526 360.274384,87.878883 
	C361.899567,88.018990 363.706390,86.051918 365.430023,85.049942 
	C363.993286,83.710182 362.775269,81.794342 361.074951,81.148796 
	C357.364227,79.739990 353.345245,79.165451 349.568329,77.902817 
	C344.865631,76.330704 341.418274,73.427055 340.931671,68.038193 
	C340.414154,62.306610 342.542694,57.758556 347.627533,55.153996 
	C357.102448,50.300793 366.490326,51.715054 376.229431,55.994823 
	C374.898468,59.185539 373.768494,61.894474 372.511475,64.907906 
	C369.674957,64.049980 367.078430,62.996674 364.380371,62.528362 
	C361.965851,62.109268 359.344635,61.910336 356.997742,62.434448 
	C355.575684,62.752033 354.501953,64.629463 353.271729,65.806091 
	C354.406464,66.863258 355.369354,68.429985 356.708344,68.881523 
	C360.637695,70.206627 365.030701,70.474533 368.644592,72.324066 
	C371.964233,74.022980 375.569489,76.708115 377.164551,79.900314 
	C380.176636,85.928627 376.298248,93.011375 369.267334,95.927818 
	C361.483429,99.156578 353.617157,98.249443 345.427368,95.777847 
z"
            />
            <path
                fill="#D5E3E6"
                opacity="1.000000"
                stroke="none"
                d="
M216.478149,73.744598 
	C218.689835,83.819901 216.160980,90.780663 209.083542,94.892677 
	C201.776016,99.138359 191.305298,98.418854 185.160660,93.051849 
	C179.782211,88.354065 177.951248,82.379471 179.788086,75.473755 
	C181.700043,68.285561 186.690933,64.246597 193.829803,62.949009 
	C201.897583,61.482590 209.076935,63.129726 214.402420,69.907143 
	C215.210388,70.935417 215.687683,72.223518 216.478149,73.744598 
M197.716187,87.988510 
	C201.782532,88.103500 204.391281,86.206642 205.085297,82.194267 
	C205.700378,78.638206 205.646149,74.640717 201.839005,73.211044 
	C199.516296,72.338829 195.785934,72.664146 193.790756,74.045097 
	C190.471054,76.342812 190.479965,80.494965 192.230560,83.941742 
	C193.084732,85.623550 195.318604,86.604614 197.716187,87.988510 
z"
            />
            <path
                fill="#D5E3E6"
                opacity="1.000000"
                stroke="none"
                d="
M309.410583,64.367043 
	C314.378998,66.878906 316.605743,70.905235 316.809174,75.825523 
	C317.089966,82.617149 316.879608,89.429085 316.879608,96.167633 
	C310.614960,97.816406 307.265320,97.385696 306.128754,95.910934 
	C300.701660,96.336082 296.020599,97.363632 291.499115,96.884644 
	C286.207703,96.324104 283.136719,92.103622 283.087158,87.271698 
	C283.038727,82.548210 285.708221,78.974434 291.054901,77.876945 
	C295.398346,76.985382 299.918213,76.953423 304.352081,76.540955 
	C302.867065,70.946655 299.646057,70.373375 288.340332,73.919067 
	C287.190338,71.653122 286.010132,69.327606 284.581726,66.513031 
	C292.617157,61.864773 300.651062,61.304585 309.410583,64.367043 
M297.789764,89.859009 
	C303.543915,89.597549 304.810699,88.396324 304.437469,83.243454 
	C302.501556,83.243454 300.477539,82.958702 298.589264,83.342232 
	C297.301727,83.603760 295.369812,84.673561 295.228943,85.608421 
	C295.046448,86.819519 296.359344,88.255943 297.789764,89.859009 
z"
            />
            <path
                fill="#D5E3E6"
                opacity="1.000000"
                stroke="none"
                d="
M474.896790,76.954712 
	C477.109131,76.950981 478.873322,76.950981 480.812592,76.950981 
	C478.847412,70.916862 474.951050,70.273056 464.612335,74.071091 
	C463.430176,71.700401 462.209229,69.251930 460.744507,66.314667 
	C469.292297,61.968803 477.690460,60.823177 486.313477,64.786011 
	C490.810211,66.852531 492.848114,70.930046 492.979095,75.729958 
	C493.165039,82.543625 493.026306,89.366142 493.026306,96.919907 
	C489.062195,96.341095 484.930023,98.712982 482.057465,95.711311 
	C477.382050,96.228554 472.881531,97.402046 468.507294,97.041924 
	C462.847931,96.576019 459.515656,92.489861 459.315338,87.535004 
	C459.113647,82.546204 462.176147,78.932373 468.013306,77.613098 
	C470.101105,77.141235 472.300293,77.162331 474.896790,76.954712 
M473.433960,83.605949 
	C472.815155,85.164299 472.196320,86.722649 471.577484,88.280991 
	C473.533783,88.730797 475.630981,89.851067 477.414062,89.476463 
	C480.232086,88.884430 481.736023,86.726471 480.673676,83.351814 
	C478.433929,83.351814 476.323975,83.351814 473.433960,83.605949 
z"
            />
            <path
                fill="#D5E3E6"
                opacity="1.000000"
                stroke="none"
                d="
M79.952362,68.095886 
	C83.965149,73.686462 84.564072,75.975029 83.770470,82.981041 
	C76.031067,82.981041 68.184280,82.981041 60.048885,82.981041 
	C62.360691,87.864395 66.167656,90.111801 70.794495,87.770493 
	C76.705864,84.779190 78.617699,88.467354 81.349274,91.808441 
	C75.248222,99.144196 61.065880,99.610664 53.241898,92.911720 
	C46.182812,86.867691 45.379932,75.744156 51.493481,68.688095 
	C58.354454,60.769386 71.011086,60.381020 79.952362,68.095886 
M69.861801,76.835159 
	C72.397949,76.987328 73.780342,75.721489 71.684479,73.874809 
	C69.921394,72.321327 67.022285,71.127945 64.772308,71.338402 
	C62.830902,71.520004 61.095486,73.903770 59.269005,75.313965 
	C59.563499,75.822556 59.857998,76.331139 60.152496,76.839722 
	C63.109291,76.839722 66.066086,76.839722 69.861801,76.835159 
z"
            />
            <path
                fill="#D5E3E6"
                opacity="1.000000"
                stroke="none"
                d="
M427.763916,87.334335 
	C424.415833,79.176048 421.211517,71.373871 417.994965,63.541874 
	C418.795837,63.274628 419.095642,63.101784 419.405334,63.081795 
	C429.850983,62.407719 429.850800,62.409946 433.630096,72.010834 
	C434.958069,75.384483 436.287933,78.757401 438.116364,83.398315 
	C440.413940,77.997894 442.636566,73.835266 443.952148,69.403381 
	C445.479919,64.256668 448.291229,62.002502 453.622681,62.981583 
	C454.874817,63.211529 456.177002,63.169224 458.022034,63.288864 
	C453.563538,74.097527 449.328400,84.538948 444.874054,94.885994 
	C444.441650,95.890419 442.701660,96.806541 441.487244,96.924362 
	C432.072144,97.837761 432.065460,97.774071 428.451447,89.084503 
	C428.259979,88.624062 428.088470,88.155319 427.763916,87.334335 
z"
            />
            <path
                fill="#D4E2E6"
                opacity="1.000000"
                stroke="none"
                d="
M402.837463,55.242012 
	C402.438660,51.693268 403.436401,50.045773 406.890259,50.357388 
	C409.322571,50.576836 411.790619,50.399811 414.552124,50.399811 
	C414.552124,66.101929 414.552124,81.155876 414.552124,96.612091 
	C410.807373,96.612091 407.117645,96.612091 402.836884,96.612091 
	C402.836884,82.896721 402.836884,69.305344 402.837463,55.242012 
z"
            />
            <path
                fill="#D5E3E6"
                opacity="1.000000"
                stroke="none"
                d="
M89.841087,74.024803 
	C89.841087,70.240974 89.841087,66.953224 89.841087,63.138374 
	C94.301491,63.620178 98.692154,61.195431 102.029099,65.137405 
	C105.113503,64.163750 108.339851,63.145283 112.246780,61.911976 
	C112.246780,66.015152 112.246780,69.197205 112.246780,72.393959 
	C102.124603,74.688026 101.870125,75.009758 101.864426,85.562454 
	C101.862473,89.175659 101.864113,92.788864 101.864113,96.697296 
	C97.775360,96.697296 94.205063,96.697296 89.841087,96.697296 
	C89.841087,89.306252 89.841087,81.913567 89.841087,74.024803 
z"
            />
            <path
                fill="#D7E5E8"
                opacity="1.000000"
                stroke="none"
                d="
M394.999512,71.077522 
	C394.999512,79.848015 394.999512,88.130211 394.999512,96.703362 
	C390.964630,96.703362 387.378601,96.703362 383.409515,96.703362 
	C383.409515,85.676178 383.409515,74.647720 383.409515,63.313385 
	C387.092438,63.313385 390.675415,63.313385 394.999512,63.313385 
	C394.999512,65.741890 394.999512,68.165558 394.999512,71.077522 
z"
            />
            <path
                fill="#D5E3E7"
                opacity="1.000000"
                stroke="none"
                d="
M173.862885,90.835320 
	C173.862823,92.950974 173.862823,94.587952 173.862823,96.615204 
	C169.791702,96.615204 166.104416,96.615204 162.125305,96.615204 
	C162.125305,85.566055 162.125305,74.663544 162.125305,63.381603 
	C165.884598,63.381603 169.577484,63.381603 173.862961,63.381603 
	C173.862961,72.491936 173.862961,81.424286 173.862885,90.835320 
z"
            />
            <path
                fill="#D4E2E6"
                opacity="1.000000"
                stroke="none"
                d="
M171.163177,58.636436 
	C170.142593,58.924961 169.496338,59.105335 168.841019,59.148655 
	C165.036438,59.400143 161.793961,58.497128 160.774002,54.302353 
	C159.947327,50.902489 161.486465,48.277550 164.673050,47.221813 
	C168.113434,46.081997 171.811813,46.111881 174.006836,49.628574 
	C176.238815,53.204453 175.009415,56.258141 171.163177,58.636436 
z"
            />
            <path
                fill="#D5E3E7"
                opacity="1.000000"
                stroke="none"
                d="
M381.909760,53.814087 
	C383.343292,51.290100 384.363495,48.294220 386.395996,47.227959 
	C390.130829,45.268623 394.940613,47.454418 395.893372,50.844734 
	C396.867035,54.309361 395.735107,57.091568 392.374512,58.624054 
	C388.201263,60.527115 384.277191,58.806164 381.909760,53.814087 
z"
            />
            <path
                fill="#596676"
                opacity="1.000000"
                stroke="none"
                d="
M135.743301,85.677307 
	C131.018433,85.508408 127.914696,83.807152 127.695831,78.982498 
	C127.525818,75.234581 129.642426,73.079872 133.088638,72.197548 
	C136.929749,71.214111 140.959595,73.395111 141.934174,76.829285 
	C143.104980,80.954872 141.288605,83.706665 135.743301,85.677307 
z"
            />
            <path
                fill="#596676"
                opacity="1.000000"
                stroke="none"
                d="
M252.387466,84.079422 
	C252.014938,82.564667 251.701950,81.420403 251.671799,80.268745 
	C251.564468,76.170319 253.031250,72.503929 257.398682,72.354874 
	C259.828003,72.271973 263.126312,74.072487 264.637085,76.076500 
	C267.017517,79.234184 265.484985,84.968842 262.442383,86.794411 
	C258.516022,89.150238 255.133606,88.305763 252.387466,84.079422 
z"
            />
            <path
                fill="#596676"
                opacity="1.000000"
                stroke="none"
                d="
M197.322067,87.945694 
	C195.318604,86.604614 193.084732,85.623550 192.230560,83.941742 
	C190.479965,80.494965 190.471054,76.342812 193.790756,74.045097 
	C195.785934,72.664146 199.516296,72.338829 201.839005,73.211044 
	C205.646149,74.640717 205.700378,78.638206 205.085297,82.194267 
	C204.391281,86.206642 201.782532,88.103500 197.322067,87.945694 
z"
            />
            <path
                fill="#5E6B7A"
                opacity="1.000000"
                stroke="none"
                d="
M297.409119,89.727180 
	C296.359344,88.255943 295.046448,86.819519 295.228943,85.608421 
	C295.369812,84.673561 297.301727,83.603760 298.589264,83.342232 
	C300.477539,82.958702 302.501556,83.243454 304.437469,83.243454 
	C304.810699,88.396324 303.543915,89.597549 297.409119,89.727180 
z"
            />
            <path
                fill="#5E6B7A"
                opacity="1.000000"
                stroke="none"
                d="
M473.823975,83.478882 
	C476.323975,83.351814 478.433929,83.351814 480.673676,83.351814 
	C481.736023,86.726471 480.232086,88.884430 477.414062,89.476463 
	C475.630981,89.851067 473.533783,88.730797 471.577484,88.280998 
	C472.196320,86.722649 472.815155,85.164299 473.823975,83.478882 
z"
            />
            <path
                fill="#616F7D"
                opacity="1.000000"
                stroke="none"
                d="
M69.442337,76.837440 
	C66.066086,76.839722 63.109291,76.839722 60.152496,76.839722 
	C59.857998,76.331139 59.563499,75.822556 59.269005,75.313965 
	C61.095486,73.903770 62.830902,71.520004 64.772308,71.338402 
	C67.022285,71.127945 69.921394,72.321327 71.684479,73.874809 
	C73.780342,75.721489 72.397949,76.987328 69.442337,76.837440 
z"
            />
        </svg>
    );
};

export default Logo;