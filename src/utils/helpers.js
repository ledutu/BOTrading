/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */
/* eslint-disable radix */
/* eslint-disable no-bitwise */
/* eslint-disable no-shadow */
export const splitData = (rawData) => {
    let datas = [];
    let times = [];
    let vols = [];
    for (let i = 0; i < rawData.length; i++) {
        datas = [...datas, [
            rawData[i][1],
            rawData[i][2],
            rawData[i][3],
            rawData[i][4],
            rawData[i][5],
        ]];
        times = [...times, rawData[i][0]]
        vols = [...vols, rawData[i][5]];
    }
    return {
        datas: datas,
        times: times,
        vols: vols,
    };
};

export const spitColor = (data) => {

    let results = [{
        value: data.vols[0],
        itemStyle: {
            normal: {
                color: '#0CF49B',
            },
        }
    }];

    for (let i = 1; i < data.datas.length; i++) {
        if (data.datas[i][1] > data.datas[i - 1][1]) {
            results = [...results, {
                value: data.vols[i],
                itemStyle: {
                    normal: {
                        color: '#0CF49B',
                    },
                }
            }]

        } else {
            results = [...results, {
                value: data.vols[i],
                itemStyle: {
                    normal: {
                        color: '#FD1050',
                    },
                }
            }]
        }
    }

    return results;
}

export const splitChartData = data => {

};

export const style = (style, propsStyle) => {
    if (propsStyle) {
        if (Array.isArray(propsStyle)) {
            style = style.concat(propsStyle);
        } else {
            style.push(propsStyle);
        }
    }
    return style;
};

export const hexToRgbA = (hex, alpha = 1) => {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return (
            'rgba(' +
            [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
            ',' +
            alpha || 1 + ')'
        );
    }
    throw new Error('Bad Hex');
};

export const rgbToRgbA = (color, alpha) => {
    color = '' + color;
    if (!color || color.indexOf('rgb') < 0) {
        return;
    }

    if (color.charAt(0) == '#') {
        return color;
    }

    var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
        r = parseInt(nums[2]),
        g = parseInt(nums[3]),
        b = parseInt(nums[4]);

    return `rgba(${r}, ${g}, ${b}, ${alpha || 1})`;
};

export const rgbToHex = color => {
    color = '' + color;
    if (!color || color.indexOf('rgb') < 0) {
        return;
    }

    if (color.charAt(0) == '#') {
        return color;
    }

    var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
        r = parseInt(nums[2], 10).toString(16),
        g = parseInt(nums[3], 10).toString(16),
        b = parseInt(nums[4], 10).toString(16);

    return (
        '#' +
        ((r.length == 1 ? '0' + r : r) +
            (g.length == 1 ? '0' + g : g) +
            (b.length == 1 ? '0' + b : b))
    );
};

export const fileProps = file => {
    if (!file.path) file.path = file.uri;
    if (!file.filename)
        file.filename =
            file.fileName || file.path.substring(file.path.lastIndexOf('/') + 1);
    if (!file.name) file.name = file.fileName || file.filename;
    if (!file.type) file.type = file.mime;
    if (!file.uri) file.uri = file.path;
    if (file.fileSize) file.size = file.fileSize;
    return file;
};

export const toTimestamp = (strDate) => {
    var datum = Date.parse(strDate);
    return datum;
}

export const getTime = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var H = today.getHours();
    var m = today.getMinutes();


    today = mm + '/' + dd + '/' + yyyy + ' ' + H + ':' + m;
    return today;
}

export const convertTimetoDate = (unix_timestamp) => {

    var date = new Date(unix_timestamp);

    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}
