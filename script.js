const ob = {
    g: {
        g2: {
            g3: [
                1,2,3,4
            ]
        }
    },
    g12: {
        g212: {
            g312: [
                41,23,35,41
            ]
        },
        g321: {
            g2312321: {
                g321321233: [
                    1321,2321,3,4
                ]
            }
        },
        g13211233212: {
            g232132132112: {
                g313212312: [
                    41231,23213,33215,41321
                ]
            }
        }
    },
    gdsfgdsf: {
        FGFG: {
            GFDSGSDF: 
            [1,232,332,4]
        }
    }
};


let lst = [],
    len = Object.keys(ob).length;


const obj = (data) => {
    for (let i of Object.values(data)) {
        lst.push(i)
    }
}

obj(ob)


const hg = (data) => {
    for (let j = 0; j < len; j++) {
        if(Array.isArray(lst[j])) {
            console.log(lst[j])
        }else {
            obj(lst[j])
        }
    }
    lst.splice(0, len,);
    len = lst.length
    if (lst.length === 0) {
    }else{
        hg()
    }
}

hg()