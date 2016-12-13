const leftPad = require("left-pad")

function pad_lines(args) {
    const lines = args.lines || [];
    return { padded: lines.map(l => leftPad(l, 30, ".")) }
};

exports.handler = pad_lines;
