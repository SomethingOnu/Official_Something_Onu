const terminal = document.getElementById('terminal');
const home = document.getElementById('home');
let terminal_data = [];
let l = -1;

const setData = new Promise(async (resolve, reject) => {
    terminal_data = await fetch('/data/terminal.json').then(resp => resp.json());
    resolve();
    reject();
});

setData
    .then(function () {
        window.onload = setData;
        setContents();
        setNotice();

        const runTerminal = () => {
            l++;
            terminal.insertAdjacentHTML("beforeend", `${terminal_data[l][1]}`);
            if (l < terminal_data.length - 1) {
                setTimeout(runTerminal, terminal_data[l][0]);
            } else {
                terminal.className = "hide";
                home.className = "";
            }
        };

        runTerminal();
    })
    .catch(function() {
        window.onload = setData;
    });

function toggleWindow() {
    // terminal.classList.toggle("hide");
    // home.classList.toggle("hide");
    terminal.className = "hide";
    home.className = "";
};
