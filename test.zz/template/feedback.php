<div class="feedback">
    <form id="form">
        <div class="personality">
            <input id="name" type="text" name="name" required placeholder="Имя">
            <input id="middlename" type="text" name="middlename" required placeholder="Отчество">
            <input id="family" type="text" name="family" required placeholder="Фамилия">
            <input id="phone" type="number" name="phone" required placeholder="Номер телефона (88888888888)">
            <input id="sity" type="text" name="sity" required placeholder="Город проживания">
            <select name="profession" form="form">
                <option>Я электромонтажник</option>
                <option>Я слесарь</option>
                <option>Я сварщик</option>
            </select>
            <input id="invite" type="text" name="invite" placeholder="Кто пригласил">
            <textarea id="work" type="text" name="work" required placeholder="Где работал" maxlength="1000"></textarea>
            <p>Нажимая на кнопку, вы даете согласие на обработку своих персональных данных <a href="/document.pdf"
             target="_blank" id="blank">Прочитать соглашение</a></p><input type="checkbox">
            <input type="submit" value="Отправить">
        </div>
    </form>
</div>