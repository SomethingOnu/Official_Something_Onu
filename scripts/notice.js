const notice = document.getElementById('notice');
let notice_data = [];

let notice_page = 0;
let notice_pages;

const setNotice = async () => {
    notice_data = await fetch('/data/notice.json').then(resp => resp.json());
    notice_pages = parseInt(notice_data.length / 5);

    updateNotice();
};

function changeNotice(page) {
    if (page === -1 && notice_page > 0) notice_page--;
    if (page === +1 && notice_page < notice_pages) notice_page++;

    updateNotice();
};

function updateNotice() {
    notice.innerHTML = "";

    for (let i = notice_page * 5; i <= notice_page * 5 + 4 && notice_data[i]; i++) {
        let content;
        
        if (notice_data[i].link !== "") {
            content = document.createElement('a');
            content.href = notice_data[i].link;
            content.target = "_blank";
            content.rel = "noopener noreferrer";
            content.className = "content link";
        }
        else
        {
            content = document.createElement('div');
            content.className = "content";
        };

        const date = document.createElement('div');
        date.className = "date";
        date.innerHTML = notice_data[i].date;

        const news = document.createElement('div');
        news.className = "news";
        news.innerHTML = notice_data[i].news;

        content.appendChild(date);
        content.appendChild(news);
        notice.appendChild(content);
    };
};
