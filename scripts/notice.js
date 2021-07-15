const notice = document.getElementById('notice');

const setNotice = async () => {
    const notice_data = await fetch('/data/notice.json').then(resp => resp.json());
    notice.innerHTML = "";

    for (let i = 0; i <= 4; i++) {
        const div = document.createElement('div');

        const date = document.createElement('div');
        date.className = "date";
        date.innerHTML = notice_data[i].date;

        const news = document.createElement('div');
        news.className = "news";
        news.innerHTML = notice_data[i].news;

        div.appendChild(date);
        div.appendChild(news);
        notice.appendChild(div);
    };
};
