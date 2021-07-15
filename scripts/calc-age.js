const age = document.getElementById('age');

const date_birth = new Date("2002-07-11T15:00:00.000Z");
const date_now = new Date();
// 日本時刻はUTC+9なので設定したい時刻から9時間を引く

const unix_diff = Math.floor((date_now - date_birth) / 1000);
const leap_day = Math.floor((date_now.getFullYear() - date_birth.getFullYear() + date_birth.getFullYear() % 2000) / 4);
const age_year = Math.floor((unix_diff / (60 * 60 * 24) - leap_day) / 365);

age.innerHTML = age_year;
