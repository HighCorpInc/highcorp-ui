import {IconProps} from "./iconProps.interface";

export function TrunkIcon(props: IconProps) {
    if (!props.altIcon) {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 512.000000 512.000000" x={props.x} y={props.y}>
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={props.color} stroke="none">
                    <path d="M4950 3829 c-14 -5 -192 -177 -397 -381 -205 -205 -374 -370 -377
                        -368 -2 3 -59 149 -127 325 -80 207 -133 331 -151 350 l-26 30 -1050 3 -1051
                        2 -28 -24 c-15 -13 -131 -197 -258 -408 l-230 -383 -515 -5 c-283 -3 -516 -6
                        -517 -8 -1 -1 -13 -14 -27 -29 -13 -14 -29 -45 -34 -67 -5 -23 -45 -279 -88
                        -569 l-78 -528 19 -37 c36 -67 58 -72 335 -72 l245 0 29 -53 c16 -28 66 -89
                        111 -134 65 -64 99 -89 166 -121 112 -53 174 -67 299 -66 84 1 121 7 185 27
                        146 48 295 167 367 294 l30 53 817 0 817 0 18 -36 c29 -62 104 -151 166 -199
                        245 -188 566 -189 810 -1 53 41 137 140 172 205 l17 31 197 0 c219 0 250 7
                        285 64 18 30 19 57 17 604 l-3 574 -37 34 -38 34 -290 0 c-159 0 -290 3 -290
                        8 0 4 150 158 334 341 366 366 365 365 332 444 -24 59 -98 90 -156 66z m-1086
                        -652 c77 -199 148 -377 159 -396 36 -59 47 -61 457 -61 l370 0 -2 -402 -3
                        -403 -189 -3 c-183 -2 -191 -3 -221 -26 -19 -15 -39 -44 -50 -73 -55 -150
                        -171 -249 -320 -272 -191 -29 -370 81 -440 272 -11 29 -31 58 -50 73 l-32 24
                        -944 0 c-1084 0 -987 9 -1029 -96 -33 -82 -59 -122 -114 -172 -156 -143 -399
                        -138 -550 13 -28 29 -61 78 -85 129 -62 130 -52 126 -317 126 -207 0 -224 1
                        -224 18 -1 9 25 191 57 404 l57 387 492 3 492 3 27 25 c15 14 124 187 242 385
                        118 198 221 370 229 383 l14 22 918 0 917 0 139 -363z"
                    />
                </g>
            </svg>
        )
    } else {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 512.000000 512.000000" x={props.x} y={props.y}>
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={props.color} stroke="none">
                    <path d="M4188.6,3080c-2,3-59,149-127,325c-80,207-133,331-151,350l-26,30l-1050,3l-1051,2l-28-24c-15-13-131-197-258-408l-230-383
                        l-515-5c-283-3-516-6-517-8c-1-1-13-14-27-29c-13-14-29-45-34-67c-5-23-45-279-88-569l-78-528l19-37c36-67,58-72,335-72h245l29-53
                        c16-28,66-89,111-134c65-64,99-89,166-121c112-53,174-67,299-66c84,1,121,7,185,27c146,48,295,167,367,294l30,53h817h817l18-36
                        c29-62,104-151,166-199c245-188,566-189,810-1c53,41,137,140,172,205l17,31h197c219,0,250,7,285,64c18,30,19,57,17,604l-3,574
                        l-37,34l-38,34h-290c-159,0-510.9,4.6-510.9,9.6 M3876.6,3177c77-199,148-377,159-396c36-59,47-61,457-61h370l-2-402l-3-403l-189-3
                        c-183-2-191-3-221-26c-19-15-39-44-50-73c-55-150-171-249-320-272c-191-29-370,81-440,272c-11,29-31,58-50,73l-32,24h-944
                        c-1084,0-987,9-1029-96c-33-82-59-122-114-172c-156-143-399-138-550,13c-28,29-61,78-85,129c-62,130-52,126-317,126
                        c-207,0-224,1-224,18c-1,9,25,191,57,404l57,387l492,3l492,3l27,25c15,14,124,187,242,385s221,370,229,383l14,22h918h917
                        L3876.6,3177z"
                    />
                </g>
            </svg>
        )
    }
}
