const profile = document.getElementById('profile');
profile.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="category">Profile</div>
        <div class="list">
            <table>
                <tr><th>名前(日)</th><td>おぬ的な何か</td></tr>
                <tr><th>名前(英)</th><td>Something Onu</td></tr>
                <tr><th>本名</th><td>RYGL YEXZV</td></tr>
                <tr><th>性別</th><td>男<!-- M3 --></td></tr>
                <tr><th>年齢</th><td><span id="age">XX</span>歳</td></tr>
            </table>
            <table>
                <tr><th>生年月日</th><td>2002/07/12</td></tr>
                <tr><th>血液型</th><td>O型<!-- C型 --></td></tr>
                <tr><th>国籍</th><td>日本</td></tr>
                <tr><th>在住１</th><td><span style="font-size: 12px">HCXJX<span class="triangle_right"></span>UCECJ<span class="triangle_right"></span>HWDJOZ</span></td></tr>
                <tr><th>在住２</th><td><span style="font-size: 12px">HCXJX<span class="triangle_right"></span>JUXNSZLG<span class="triangle_right"></span>HYOJJYNL</span></td></tr>
            </table>
            <table>
                <tr><th>趣味</th><td>小説執筆／画像編集／動画編集／イラスト／３ＤＣＧ制作／ソフトウェア制作／ウェブサイト制作／写真撮影／整理整頓</td></tr>
            </table>
        </div>
    `
);
