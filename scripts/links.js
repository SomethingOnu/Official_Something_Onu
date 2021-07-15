const links = document.getElementById('links');

const onLoad = async () => {
    const link_data = await fetch('/data/links.json').then(resp => resp.json());
    for (let i in link_data) {
        if (link_data[i].type === "category") {
            const category = document.createElement('div');
            category.className = "category";
            category.innerHTML = link_data[i].category;

            links.appendChild(category);
        };

        if (link_data[i].type === "link") {
            const has_link = !!link_data[i].link;

            const link = document.createElement('div');
            link.className = "link";

            if (has_link) {
                const a = document.createElement('a');
                a.href = link_data[i].link;
                a.target = "_blank";
                a.rel = "noopener noreferrer";

                link.appendChild(a);
            };

            const icon = document.createElement('i');
            icon.className = link_data[i].icon;
            link.appendChild(icon);

            const name = document.createElement('div');
            name.className = "name";
            name.innerHTML = link_data[i].name;
            link.appendChild(name);

            links.appendChild(link);
        };
    };
};

window.onload = onLoad;
