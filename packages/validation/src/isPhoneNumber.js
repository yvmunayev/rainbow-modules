/* eslint-disable no-useless-escape */
const matchers = [
    /^\d{10}$/,
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
    /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
    /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
    /^((\+?971)|0)?5[024568]\d{7}$/,
    /^(\+?973)?(3|6)\d{7}$/,
    /^(\+?213|0)(5|6|7)\d{8}$/,
    /^((\+?20)|0)?1[0125]\d{8}$/,
    /^(\+?964|0)?7[0-9]\d{8}$/,
    /^(\+?962|0)?7[789]\d{7}$/,
    /^(\+?965)[569]\d{7}$/,
    /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
    /^(!?(\+?966)|0)?5\d{8}$/,
    /^(!?(\+?963)|0)?9\d{8}$/,
    /^(\+?216)?[2459]\d{7}$/,
    /^(\+?375)?(24|25|29|33|44)\d{7}$/,
    /^(\+?359|0)?8[789]\d{7}$/,
    /^(\+?880|0)1[13456789][0-9]{8}$/,
    /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
    /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
    /^(\+43|0)\d{1,4}\d{3,12}$/,
    /^(\+41|0)(7[5-9])\d{1,7}$/,
    /^(\+?30|0)?(69\d{8})$/,
    /^(\+?61|0)4\d{8}$/,
    /^(\+?44|0)7\d{9}$/,
    /^(\+?44|0)1481\d{6}$/,
    /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
    /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
    /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
    /^(\+?353|0)8[356789]\d{7}$/,
    /^(\+?91|0)?[6789]\d{9}$/,
    /^(\+?254|0)(7|1)\d{8}$/,
    /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
    /^(\+?230|0)?\d{8}$/,
    /^(\+?234|0)?[789]\d{9}$/,
    /^(\+?64|0)[28]\d{7,9}$/,
    /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
    /^(\+?250|0)?[7]\d{8}$/,
    /^(\+65)?[689]\d{7}$/,
    /^(?:0|94|\+94)?(7(0|1|2|5|6|7|8)( |-)?\d)\d{6}$/,
    /^(\+?255|0)?[67]\d{8}$/,
    /^(\+?256|0)?[7]\d{8}$/,
    /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
    /^(\+?27|0)\d{9}$/,
    /^(\+?26)?09[567]\d{7}$/,
    /^(\+263)[0-9]{9}$/,
    /^(\+?57)?([1-8]{1}|3[0-9]{2})?[2-9]{1}\d{6}$/,
    /^(\+?56|0)[2-9]\d{1}\d{7}$/,
    /^(\+506)?[2-8]\d{7}$/,
    /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
    /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
    /^(\+?52)?(1|01)?\d{10,11}$/,
    /^(\+?507)\d{7,8}$/,
    /^(\+?595|0)9[9876]\d{7}$/,
    /^(\+598|0)9[1-9][\d]{6}$/,
    /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
    /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
    /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
    /^(\+?679)?\s?\d{3}\s?\d{4}$/,
    /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    /^(\+?33|0)[67]\d{8}$/,
    /^(\+?594|0|00594)[67]\d{8}$/,
    /^(\+?590|0|00590)[67]\d{8}$/,
    /^(\+?596|0|00596)[67]\d{8}$/,
    /^(\+?262|0|00262)[67]\d{8}$/,
    /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
    /^(\+?36)(20|30|70)\d{7}$/,
    /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
    /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
    /^(\+?7|8)?7\d{9}$/,
    /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
    /^(\+370|8)\d{8}$/,
    /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
    /^(\+?47)?[49]\d{7}$/,
    /^(\+?977)?9[78]\d{8}$/,
    /^(\+?32|0)4?\d{8}$/,
    /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
    /^(\+?47)?[49]\d{7}$/,
    /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
    /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,
    /^(\+?351)?9[1236]\d{7}$/,
    /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
    /^(\+?7|8)?9\d{9}$/,
    /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
    /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    /^(\+3816|06)[- \d]{5,9}$/,
    /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
    /^(\+66|66|0)\d{9}$/,
    /^(\+?90|0)?5\d{9}$/,
    /^(\+?38|8)?0\d{9}$/,
    /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,
    /^((\+|00)86)?1([3568][0-9]|4[579]|6[67]|7[01235678]|9[189])[0-9]{8}$/,
    /^(\+?886\-?|0)?9\d{8}$/,
];

export default function isPhoneNumber(value) {
    return matchers.some((matcher) => matcher.test(value));
}
