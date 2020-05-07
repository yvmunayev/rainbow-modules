import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="32px"
            height="26px"
            viewBox="0 0 32 26"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g
                transform="translate(-151.000000, -23.000000)"
                fill="currentColor"
                fillRule="nonzero"
            >
                <g transform="translate(151.000000, 23.000000)">
                    <path
                        d="M30.8325127,23.9593257 C30.8325127,24.8441798 30.1151587,25.5617248 29.2301136,25.5617248 L2.09491792,25.5617248 C1.51351328,25.5617248 0.976907042,25.246318 0.694995836,24.7390298 C0.411446597,24.2307404 0.426490045,23.6086597 0.733285397,23.1141124 L14.2984109,1.25027098 C14.5907249,0.779080484 15.1057558,0.492307692 15.660394,0.492307692 C16.2150525,0.492307692 16.7302705,0.779086007 17.0220196,1.25023119 L30.5368069,23.0320719 C30.7270074,23.3002124 30.8314987,23.6214524 30.8325127,23.9593257 Z M29.3304095,23.8841366 L15.7666932,2.02834238 C15.7439214,1.99156828 15.7037904,1.96923077 15.660394,1.96923077 C15.616897,1.96923077 15.5764683,1.99174178 15.5534241,2.02888741 L1.98830355,23.8927209 C1.96410499,23.9317284 1.96293022,23.9803076 1.9853835,24.0205592 C2.00725664,24.0599189 2.0495901,24.0848017 2.09491792,24.0848017 L29.2301136,24.0848017 C29.2993886,24.0848017 29.3555896,24.0285857 29.355593,23.961549 C29.3555036,23.9318542 29.346878,23.9062992 29.3304095,23.8841366 Z"
                        id="Shape"
                    />
                    <path d="M14.6532126,15.8038813 L14.372722,11.6070067 C14.3201352,10.7890826 14.2942579,10.2018912 14.2942579,9.84576555 C14.2942579,9.36100195 14.4213148,8.98274323 14.6750128,8.711239 C14.9290436,8.4388195 15.2640347,8.30335861 15.6784884,8.30335861 C16.1809751,8.30335861 16.5172143,8.47709469 16.6862908,8.82456685 C16.8553673,9.17237183 16.9403216,9.6736104 16.9403216,10.3271177 C16.9403216,10.712865 16.9197694,11.1048529 16.8793309,11.5011675 L16.5023203,15.8210219 C16.4615489,16.3353239 16.3740152,16.7294752 16.2392199,17.0043909 C16.1047575,17.278641 15.8824286,17.4156828 15.5732316,17.4156828 C15.2575445,17.4156828 15.0386271,17.2833837 14.9163129,17.0172048 C14.793333,16.7518579 14.7055497,16.3471393 14.6532126,15.8038813 Z M15.6258184,21.5692897 C15.2693599,21.5692897 14.9579996,21.4543809 14.6927359,21.2237313 C14.4268897,20.9933313 14.2942579,20.6704884 14.2942579,20.255785 C14.2942579,19.8934189 14.4213148,19.5851372 14.6750128,19.3307736 C14.9290436,19.0767428 15.2404039,18.9496858 15.6084282,18.9496858 C15.9767021,18.9496858 16.2899762,19.07641 16.5502475,19.3307736 C16.8101859,19.5848043 16.9403216,19.8933356 16.9403216,20.255785 C16.9403216,20.6645807 16.8089378,20.9855931 16.5455047,21.2194046 C16.2827372,21.4524672 15.9763692,21.5692897 15.6258184,21.5692897 Z" />
                </g>
            </g>
        </svg>
    );
};

Error.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Error.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Error;