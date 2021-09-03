let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{Q_}", ms: 100 },
    { t: "{QU_}", ms: 100 },
    { t: "{QUA_}", ms: 100 },
    { t: "{QUAN_}", ms: 100 },
    { t: "{QUANT_}", ms: 100 },
    { t: "{QUANTU_}", ms: 100 },
    { t: "{QUANTUM_}", ms: 100 },
    { t: "{QUANTUM _}", ms: 100 },
    { t: "{QUANTUM C_}", ms: 100 },
    { t: "{QUANTUM CR_ }", ms: 100 },
    { t: "{QUANTUM CRA_}", ms: 100 },
    { t: "{QUANTUM CRAF_}", ms: 100 },
    { t: "{QUANTUM CRAFT_}", ms: 100 },
    { t: "{QUANTUM CRAFT }", ms: 200 },
    { t: "{QUANTUM CRAFT_}", ms: 200 },
    { t: "{QUANTUM CRAFT }", ms: 200 },
    { t: "{QUANTUM CRAFT_}", ms: 200 },
    { t: "{QUANTUM CRAFT}", ms: 200 },
    { t: "{QUANTUM CRAFT}", ms: 200 },

        

    
   
    

];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();