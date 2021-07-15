const contents = document.getElementById('contents');
const pickup_data = [
    "Bad Apple!! by Unique Media",
    "The Lost Hometown",
    "Invisible Maze"
];

const setContents = async () => {
    const work_data = await fetch('/data/works.json').then(resp => resp.json());
    contents.innerHTML = "";

    for (let n in pickup_data) {
        for (let i in work_data) {
            if (work_data[i].name === pickup_data[n] && work_data[i].type === "work") {
                const has_link = !!work_data[i].link;

                const work = document.createElement('div');
                work.className = "work";

                if (has_link) {
                    const link = document.createElement('a');
                    link.href = work_data[i].link;
                    link.target = "_blank";
                    link.rel = "noopener noreferrer";

                    work.appendChild(link);
                };

                const divA = document.createElement('div');
                    const image = document.createElement('img');
                    image.src = `/images/${has_link ? work_data[i].name : "WIP"}.png`;
                divA.appendChild(image);

                const divB = document.createElement('div');
                divB.className = `${has_link ? "" : "wip"}`;
                    const name = document.createElement('div');
                    name.className = "name";
                    name.innerHTML = work_data[i].name;
                    const explanation = document.createElement('div');
                    explanation.className = "explanation";
                    explanation.innerHTML = work_data[i].explanation;
                divB.appendChild(name);
                divB.appendChild(explanation);

                work.appendChild(divA);
                work.appendChild(divB);
                contents.appendChild(work);
            }
        }
    }
};
