const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz
{
	constructor(type, questions, results, arr)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;
		//код Мухина Ю.Р.		
		this.arr = arr;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		//Добавляем очки
		//Мухина Ю.Р.
		let number = quiz.arr[this.current];
		let value = this.questions[number].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[number].answers.length; i++)
			{
				if(this.questions[number].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

//Класс, представляющий вопрос
class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

//Класс, представляющий ответ
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

//Класс, представляющий результат
class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

//Массив с результатами
const results = 
[
	new Result("Вам многому нужно научиться", 30),
	new Result("Вы уже неплохо разбираетесь", 50),
	new Result("Ваш уровень выше среднего", 70),
	new Result("Вы в совершенстве знаете тему", 90)
];

//Массив с вопросами
const questions = 
[
	new Question('За какую плату работал Балда у попа в сказке А.С. Пушкина "Сказка о попе и работнике его Балде"?', 
	[
		new Answer("Три подзатыльника", 0),
		new Answer("Три поцелуя", 0),
		new Answer("Три рубля", 0),
		new Answer("Три щелчка по лбу", 1)
    ]),
    
    new Question("Кто такая Арина Радионовна?", 
	[
		new Answer("Певица 80-х", 0),
		new Answer("Актрисса 90-х", 0),
		new Answer("Няня Пушкина", 1)
	]),

	new Question('Сколько лет рыбачил старик из сказки А.С.Пушкина "Сказка о рыбаке и рыбке"?', 
	[
		new Answer("43", 0),
		new Answer("23", 0),
		new Answer("53", 0),
		new Answer("33", 1)
	]),

	new Question('Какую позицию на поле называют "голкипер"?', 
	[
		new Answer("Защитник", 0),
		new Answer("Вратарь", 1),
		new Answer("Полузащитник", 0),
		new Answer("Нападающий", 0)
	]),

	new Question("Официальный язык государства Израиль?", 
	[
		new Answer("Иврит", 1),
		new Answer("Фарси", 0),
		new Answer("Русский", 0),
		new Answer("Арабский", 0)
	]),
	new Question("Откуда, согласно греческой мифологии, появился на свет Пегас?", 
	[
		new Answer("Из облака на горе Геликон", 0),
		new Answer("От звуков лиры Аполлона", 0),
		new Answer("Из вод источника Гиппокрена", 0),
		new Answer("Из крови горгоны Медузы", 1)
	]),

	new Question("Как называется детеныш норки?", 
	[
		new Answer("Котенок", 0),
		new Answer("Щенок", 1),
		new Answer("Белек", 0),
		new Answer("Норик", 0)
	]),

	new Question("В артериях кровь движется...?", 
	[
		new Answer("Сверху вниз", 0),
		new Answer("От органов к сердцу", 0),
		new Answer("От сердца к органам", 1),
		new Answer("Снизу вверх", 0)
	]),

    new Question("От какого дерева появляются желуди?", 
	[
		new Answer("Каштан", 0),
		new Answer("Ясень", 0),
		new Answer("Клен", 0),
		new Answer("Дуб", 1)
	]),

	new Question("Где муха-цокотуха нашла денежку?", 
	[
		new Answer("На лугу", 0),
		new Answer("В лесу", 0),
		new Answer("В поле", 1),
		new Answer("Во дворе", 0)
	]),

	new Question('Как звали крысу в сказке "Золотой ключик"?', 
	[
		new Answer("Чучундра", 0),
		new Answer("Шушара", 1),
		new Answer("Мымра", 0),
		new Answer("Шуршелла", 0)
	]),

	new Question("В какое море впадает Жёлтая река?", 
	[
		new Answer("Жёлтое море", 1),
		new Answer("Ионическое море", 0),
		new Answer("Чёрное море", 0),
		new Answer("Каспийское море", 0)
	]),

	new Question("Какая планета совершает 1 оборот вокруг солнца со скоростью 47,9 км/с", 
	[
		new Answer("Марс", 0),
		new Answer("Меркурий", 1),
		new Answer("Юпитер", 0),
		new Answer("Сатурн", 0)
	]),

	new Question("Кем по образованию был Антон Павлович Чехов?", 
	[
		new Answer("Юрист", 0),
		new Answer("Учитель", 0),
		new Answer("Врач", 1),
		new Answer("Дипломат", 0)
	]),

    new Question("Чему равна сумма чисел от 0 до 100 включительно?", 
	[
		new Answer("3525", 0),
		new Answer("1000", 0),
		new Answer("7550", 0),
		new Answer("5050", 1)
	]),

	new Question("Какой буквой физики обозначают ускорение свободного падения?", 
	[
		new Answer("f", 0),
		new Answer("n", 0),
		new Answer("g", 1),
		new Answer("m", 0)
	]),

	new Question("Кто из этих российских императоров и императриц правил раньше остальных?", 
	[
		new Answer("Елизавета Петровна", 0),
		new Answer("Анна Иоановна", 1),
		new Answer("Петр III", 0),
		new Answer("Екатерина II", 0)
	]),

	new Question("В какие годы строился Колизей?", 
	[
		new Answer("72-80", 1),
		new Answer("260-300", 0),
		new Answer("580-605", 0),
		new Answer("1085-1124", 0)
	]),

	new Question("Изобретатель тачки?", 
	[
		new Answer("Пифагор", 0),
		new Answer("Паскаль", 1),
		new Answer("Архимед", 0),
		new Answer("Эдисон", 0)
	]),

	new Question("Облик какой женщины дошёл до наших дней благодаря скульптору Тутмесу?", 
	[
		new Answer("Клеопатры", 0),
		new Answer("Далилы", 0),
		new Answer("Нефертити", 1),
		new Answer("Семирамды", 0)
    ]),
    
    new Question("Для какой нации романшский язык является национальным?", 
	[
		new Answer("Австрия", 0),
		new Answer("Албания", 0),
		new Answer("Болгария", 0),
		new Answer("Швейцария", 1)
	]),

	new Question("Что из этого остров (остальные - города)?", 
	[
		new Answer("Санта-Ана", 0),
		new Answer("Санта-Моника", 0),
		new Answer("Санта-Исабель", 1),
		new Answer("Санта-Марта", 0)
	]),

	new Question("Какое из этих вин красное?", 
	[
		new Answer("Ркацители", 0),
		new Answer("Мукузани", 1),
		new Answer("Цинандали", 0),
		new Answer("Гевюрцтраминер", 0)
	]),

	new Question("Как называется самый многочисленный отряд млекопитающих?", 
	[
		new Answer("грызуны", 1),
		new Answer("хищные", 0),
		new Answer("кошачьи", 0),
		new Answer("приматы", 0)
	]),

	new Question("Как называется один из важнейших фондовых индексов в Японии?", 
	[
		new Answer("Yisei", 0),
		new Answer("Nikkei", 1),
		new Answer("Nippon", 0),
		new Answer("Nisei", 0)
	]),

	new Question("Чем или кем при российском дворе заведовал шталмейстер?", 
	[
		new Answer("Царскими покоями", 0),
		new Answer("Царской псарней", 0),
		new Answer("Царскими конюшнями", 1),
		new Answer("Дворцовыми слугами", 0)
	]),
	new Question("Кто первым доказал периодичность появления комет? ", 
	[
		new Answer("Галилей", 0),
		new Answer("Коперник", 0),
		new Answer("Кеплер", 0),
		new Answer("Галлей", 1)
	]),

	new Question('Про какую летнюю погоду говорят "Вёдро"  ', 
	[
		new Answer("Теплая дождливая", 0),
		new Answer("Прохладная дождливая", 0),
		new Answer("Сухая ясная", 1),
		new Answer("Длительные заморозки", 0)
	]),

	new Question("С какой из этих стран Чехия не граничит? ", 
	[
		new Answer("Венгрия", 1),
		new Answer("Германия", 0),
		new Answer("Австрия", 0),
		new Answer("Польша", 0)
	]),

	new Question("Где в основном проживают таты? ", 
	[
		new Answer("Татарстан", 0),
		new Answer("Дагестан", 1),
		new Answer("Башкортостан", 0),
		new Answer("Туркменистан", 0)
	]),

	new Question("Как, в переводе на русский язык, звучало бы название фильма 'Мимино'? ", 
	[
		new Answer("Медведь", 0),
		new Answer("Гора", 0),
		new Answer("Сокол", 1),
		new Answer("Любовь", 0)
	]),
    new Question("Как называется курс парусного судна, совпадающий с направлением ветра?", 
	[
		new Answer("Бейдевинд", 0),
		new Answer("Галфиндк", 0),
		new Answer("Бакштаг", 0),
		new Answer("Фордевинд", 1),
	]),

	new Question("На вершине какой горы расположена сорокаметровая статуя Христа, являющаяся символом Рио-де-Жанейро? ", 
	[
		new Answer("Корковадо", 1),
		new Answer("Ильимани", 0),
		new Answer("Уаскаран", 0),
		new Answer("Тупунгато", 0)
	]),

	new Question("Какое брюхо, согласно спорной русской пословице, глухо к ученью? ", 
	[
		new Answer("Толстое", 0),
		new Answer("Сытое", 1),
		new Answer("Пустое", 0),
		new Answer("Тощее", 0)
	]),

	new Question("Благодаря какому животному Шурик познакомился с Ниной в к/ф 'Кавказская пленница'? ", 
	[
		new Answer("Осел", 1),
		new Answer("Верблюд", 0),
		new Answer("Конь", 0),
		new Answer("Ежик", 0)
	]),

	new Question("Что из этого является видом ткани? ", 
	[
		new Answer("Креп-лизет", 0),
		new Answer("Креп-мюзет", 0),
		new Answer("Креп-жоржет", 1),
		new Answer("Креп-жаннет", 0)
	]),

	new Question("Как называется комедия В. В. Маяковского? ", 
	[
		new Answer("Пена", 0),
		new Answer("Жук", 0),
		new Answer("Паук", 0),
		new Answer("Клоп", 1)
	]),
    new Question("Кто является чемпионом гонок 'Формулы-1' 1998-99 г.г.?", 
	[
		new Answer("Хаккинен", 1),
		new Answer("Кулхард", 0),
		new Answer("Барикелло", 0),
		new Answer("М. Шумахер", 0)
	]),

	new Question("Чье произведение легло в основу оперы Дж. Верди 'Травиата'? ", 
	[
		new Answer("В. Гюго", 0),
		new Answer("О. Бальзака", 0),
		new Answer("А.Дюма-сына", 1),
		new Answer("Г. Флобера", 0)
	]),

	new Question("Какой из этих городов - родина Казановы?", 
	[
		new Answer("Неаполь", 0),
		new Answer("Венеция", 1),
		new Answer("Милан", 0),
		new Answer("Флоренция", 0)
	]),

	new Question("Кто считается основоположником кубизма? ", 
	[
		new Answer("В. Кандинский", 0),
		new Answer("Ф. Леже", 0),
		new Answer("П. Пикассо", 1),
		new Answer("К. Малевич", 0)
	]),

	new Question("Территория какой из этих стран - наибольшая? ", 
	[
		new Answer("Германия", 0),
		new Answer("Италия", 0),
		new Answer("Финляндия", 0),
		new Answer("Япония", 1)
	]),

	new Question("Какая из этих кислот является витамином? ", 
	[
		new Answer("Молочная", 0),
		new Answer("Яблочная", 0),
		new Answer("Никотиновая", 1),
		new Answer("Янтарная", 0)
	]),
    new Question("Какая очередность этих трех букв в русском алфавите правильная?", 
	[
		new Answer("Ь Ы Ъ", 0),
		new Answer("Ъ Ь Ы", 0),
		new Answer("Ь Ъ Ы", 0),
		new Answer("Ъ Ы Ь", 1),
	]),

	new Question("Какая березка стояла во поле?", 
	[
		new Answer("Высокая", 0),
		new Answer("Зеленая", 0),
		new Answer("Кудрявая", 1),
		new Answer("Засохшая", 0)
	]),

	new Question("Кто из этих знаменитых людей не является тезкой остальных?", 
	[
		new Answer("Горбачев", 0),
		new Answer("Лужков", 1),
		new Answer("Боярский", 0),
		new Answer("Лермонтов", 0)
	]),

	new Question("Какой ресторан находится на углу Старого и Нового Арбата? ", 
	[
		new Answer("Пекин", 0),
		new Answer("Белград", 0),
		new Answer("София", 0),
		new Answer("Прага", 1)
	]),

	new Question("Какой вид березы славится красивой древесиной?", 
	[
		new Answer("Курильская", 0),
		new Answer("Корейская", 0),
		new Answer("Карельская", 1),
		new Answer("Канадская", 0)
	]),

	new Question("Какая поэма есть у В. В. Маяковского? ", 
	[
		new Answer("Свирель-губы", 0),
		new Answer("Барабан-нервы", 0),
		new Answer("Скрипка-ладони", 0),
		new Answer("Флейта-позвоночник", 1)
	]),
    new Question("Какая из этих рек впадает в Азовское море?", 
	[
		new Answer("Днестр", 0),
		new Answer("Дон", 1),
		new Answer("Южный Буг", 0),
		new Answer("Днепр", 0)
	]),
	new Question("Кто из этих великих футболистов прошлого был защитником?",
    [
        new Answer("Платини", 0),
        new Answer("Гарринча", 0),
		new Answer("Беккенбауэр", 1),
        new Answer("Эйсебио", 0),
    ]),

    new Question("Какую икру больше всего любил Джеймс Бонд?", 
	[
		new Answer("Белужью", 1),
		new Answer("Севрюжью", 0),
		new Answer("Стерляжью", 0),
		new Answer("Осетровую", 0)
	]),

	new Question("Какой цвет волос был у возлюбленной Тристана Изольды, если верить Бедье?", 
	[
		new Answer("Рыжий", 0),
		new Answer("Вороново крыло", 0),
		new Answer("Белокурый", 1),
		new Answer("Каштановый", 0)
	]),

	new Question("У автомобилей какой из этих стран международный регистрационный знак DZ?", 
	[
		new Answer("Алжир", 1),
		new Answer("Белиз", 0),
		new Answer("Бенин", 0),
		new Answer("Замбия", 0)
	]),

	new Question("Одним из направлений какой религиозной философии является учение дзен?", 
	[
		new Answer("Иудаизм", 0),
		new Answer("Буддизм", 1),
		new Answer("Индуизм", 0),
		new Answer("Даосизм", 0)
	]),

	new Question("В каком городе в 1932 году был проведён первый международный кинофестиваль?", 
	[
		new Answer("Канн", 0),
		new Answer("Париж", 0),
		new Answer("Венеция", 1),
		new Answer("Берлин", 0)
    ]),
    
    new Question("С какой фигуры начинаются соревнования по городошному спорту?", 
	[
		new Answer("Пушка", 1),
		new Answer("Пулемётное гнездо", 0),
		new Answer("Артиллерия", 0),
		new Answer("Часовые", 0)
	]),

	new Question("Сколько раз в сутки подзаводят часы на Спасской башне московского Кремля?", 
	[
		new Answer("Один", 0),
		new Answer("Четыре", 0),
		new Answer("Три", 0),
		new Answer("Два", 1)
	]),

	new Question("Кто получил первую Нобелевскую премию по литературе?", 
	[
		new Answer("Романист", 0),
		new Answer("Эссеист", 0),
		new Answer("Поэт", 1),
		new Answer("Драматург", 0)
	]),

	new Question("С какой буквы начинаются слова, опубликованные в 16 м томе последнего издания Большой Советской энциклопедии?", 
	[
		new Answer("М", 1),
		new Answer("Н", 0),
		new Answer("О", 0),
		new Answer("П", 0)
	]),

	new Question("Как назвали первую кимберлитовую трубку, открытую Ларисой Попугаевой 21 августа 1954 года?", 
	[
		new Answer("«Мир»", 0),
		new Answer("«Зарница»", 1),
		new Answer("«Советская»", 0),
		new Answer("«Удачная»", 0)
    ]),
    
    new Question("В честь какого растения область Фриули-Венеция-Джулия в Италии ежегодно проводит трёхмесячный фестиваль?", 
    [
		new Answer("лук", 0),
		new Answer("фасоль", 0),
		new Answer("артишок", 0),
		new Answer("спаржа", 1)
	]),

	new Question("Как 'в народе' называют химическое соединение - тринитротолуол?", 
	[
		new Answer("Пластид", 0),
		new Answer("Тротил", 1),
		new Answer("Динамит", 0),
		new Answer("Гексаген", 0)
	]),

	new Question("У кого из 'вампиров' кровь пьют только самки?", 
	[
		new Answer("Летучие мыши", 0),
		new Answer("Клещи", 0),
		new Answer("Комары", 1),
		new Answer("Пиявки", 0)
	]),

	new Question("В каком российском городе к его 300-летию был открыт памятник Зайцу?", 
	[
		new Answer("Санкт-Петербург", 1),
		new Answer("Москва", 0),
		new Answer("Тула", 0),
		new Answer("Воронеж", 0)
	]),

	new Question("Для чего зайцу его большие уши?", 
	[
		new Answer("Для красоты", 0),
		new Answer("Обмахиваться в жару", 0),
		new Answer("Для устрашения врагов-хищников", 0),
		new Answer("Они как рупоры, зайцу слышны даже самые тихие шорохи", 1)
    ]),
    
    new Question("Что обычно охотники замечают за зайцем?", 
	[
		new Answer("Он напевает", 0),
		new Answer("Он барабанит", 1),
		new Answer("Он трубит", 0),
		new Answer("Он бренчит", 0)
	]),

	new Question("Что при травле зайца кричали охотники?", 
	[
		new Answer("«Агу!»", 0),
		new Answer("«Ура!»", 0),
		new Answer("«А-та-та!»", 0),
		new Answer("«Ату!»", 1)
	]),

	new Question("Какого зайца НЕ бывает?", 
	[
		new Answer("Тумак", 0),
		new Answer("Чувак", 1),
		new Answer("Беляк", 0),
		new Answer("Русак", 0)
	]),

	new Question("Кто такой агути?", 
	[
		new Answer("Горбатый заяц", 1),
		new Answer("Сутулый заяц", 0),
		new Answer("Хромой заяц", 0),
		new Answer("Лысый заяц", 0)
	]),

	new Question("Заячьей картошкой в народе называют:", 
	[
		new Answer("Морковь", 0),
		new Answer("Гриб дождевик", 1),
		new Answer("Капусту", 0),
		new Answer("Кору деревьев", 0)
    ]),
    
    new Question("В русских сказках лисичка-сестричка, коза-дереза, а зайчик-... Кто?", 
	[
		new Answer("Обгрызайчик", 0),
		new Answer("Попугайчик", 0),
		new Answer("Побегайчик", 1),
		new Answer("Петляйчик", 0)
	]),

	new Question("Какая российская автономия полностью окружена Краснодарским краем?", 
	[
		new Answer("Хакасия", 0),
		new Answer("Адыгея", 1),
		new Answer("Удмуртия", 0),
		new Answer("Индушетия", 0)
	]),

	new Question("Где жил старик со своею старухой из сказки А.С. Пушкина 'Сказка о рыбаке и рыбке'?", 
	[
		new Answer("в землянке", 1),
		new Answer("в шалаше", 0),
		new Answer("в избушке", 0),
		new Answer("в лачужке", 0)
	]),

	new Question("Какой рыболовной снастью ловил рыбу старик из сказки А.С. Пушкина 'Сказка о рыбаке и рыбке'?", 
	[
		new Answer("Удочкой", 0),
		new Answer("Сачком", 0),
		new Answer("Бреднем", 0),
		new Answer("Невод", 1)
	]),
	new Question("Кто такие лангобарды?", 
	[
		new Answer("Средневековые певцы", 0),
		new Answer("Крупные моллюски", 0),
		new Answer("Династия итал. герцогов", 0),
		new Answer("Германское племя", 1)
	]),

	new Question("Какой Российский город с 13 века славится Золотой вышивкой по материи?", 
	[
		new Answer("Оренбург", 0),
        new Answer("Жостово", 0),
        new Answer("Торжок", 1),
		new Answer("Холмогоры", 0)
	]),

	new Question("Какая ветвь философии включает в себя изучение этики и эстетики?", 
	[
		new Answer("Аксиология", 1),
		new Answer("Эпистемология", 0),
        new Answer("Экзистенциализм", 0),
        new Answer("Метафизика", 0)
	]),

	new Question("	Какое из перечисленных небесных тел является спутником Юпитера?", 
	[
		new Answer("Каллисто", 1),
		new Answer("Деймос", 0),
        new Answer("Деспина", 0),
        new Answer("Псамафа", 0)
	]),

	new Question("Кто написал реквием, будучи аббатом?", 
	[
		new Answer("Г.Берлиоз", 0),
		new Answer("Ф.Лист", 1),
        new Answer("С.Д.Верди", 0),
        new Answer("В.А.Моцарт", 0)
	]),

	new Question("Кто из перечисленных не змея?", 
	[
		new Answer("Щитомордник", 0),
		new Answer("Абома", 0),
		new Answer("Чаквелла", 1),
		new Answer("Крайт", 0)
    ]),

    new Question("Какой из этих архитектурных памятников Санкт-Петербурга построен Огюстом Монферраном?", 
	[
		new Answer("Адмиралтейство", 0),
		new Answer("Смольный институт", 0),
		new Answer("Казанский собор", 0),
		new Answer("Исаакиевский собор", 1)
	]),

	new Question("Что такое портшез?", 
	[
		new Answer("Женское портмоне", 0),
        new Answer("Кожаное кресло", 0),
        new Answer("Вид паланкина", 1),
		new Answer("Открытая легкая повозка", 0)
	]),

	new Question("Как называл народ медную монету в 3 копейки после 40 годов XIX века?", 
	[
        new Answer("Грош", 0),
		new Answer("Гривенный", 1),
		new Answer("Гривенник", 0),
		new Answer("Гривна", 0)
	]),

	new Question("На борту какого линкора ВМФ США был подписан акт о капитуляции Японии во второй мировой войне?", 
	[
		new Answer("«Миссури»", 1),
        new Answer("«Висконсин»", 0),
        new Answer("«Нью-Джерси»", 0),
		new Answer("«Айова»", 0)
	]),

	new Question("Из произведений какого писателя физики заимствовали слово «кварк»?", 
	[
        new Answer("Льюис Кэррол", 0),
        new Answer("Уильям Фолкнер", 0),
		new Answer("Джеймс Джойс", 1),
		new Answer("Уильям Теккерей", 0)
	]),

	new Question("В какие годы строился Колизей?", 
	[
		new Answer("260-300", 0),
		new Answer("580-605", 0),
		new Answer("72-80", 1),
		new Answer("1085-1124", 0)
    ]),

    new Question("Какой древнегреческий бог олицетворял западный ветер?", 
	[
		new Answer("Эвр", 0),
		new Answer("Борей", 0),
		new Answer("Нот", 0),
		new Answer("Зефир", 1)
	]),

	new Question("Какое из этих зданий было построено раньше других?", 
	[
		new Answer("Храм Христа Спасителя", 0),
        new Answer("Зимний дворец", 0),
        new Answer("Храм Василия Блаженного", 1),
		new Answer("Дворец Съездов", 0)
	]),

	new Question("Где действовали суровые законы, получившие впоследствии название «драконовские»?", 
	[
		new Answer("Древние Афины", 1),
		new Answer("Древний Рим", 0),
        new Answer("Древний Египет", 0),
        new Answer("Шумер", 0)
	]),

	new Question("Автор Бременских музыкантов?", 
	[
		new Answer("Братья Гримм", 1),
		new Answer("Сельма Лагерлеф", 0),
        new Answer("Ганс Христиан Андерсен", 0),
        new Answer("Шарль Перро", 0)
	]),

    new Question("Какая из этих муз была покровительницей истории?",
    [
		new Answer("Евтерпа", 0),
        new Answer("Клио", 1),
        new Answer("Эрато", 0),
		new Answer("Каллиопа", 0)
	]),

	new Question("У каких народов жрецы назывались друидами?", 
	[
		new Answer("Этруски", 0),
		new Answer("Древние германцы", 0),
		new Answer("Древние кельты", 1),
		new Answer("Иберы", 0)
    ]),

    new Question("Что означает термин геронтократия?", 
	[
		new Answer("Власть землевладельцев", 0),
		new Answer("Власть самых воинственных", 0),
		new Answer("Власть мудрейших", 0),
		new Answer("Власть старейших", 1)
	]),

	new Question("Какой из открытых еще Г. Галилеем спутников Юпитера является крупнейшим во всей Солнечной системе?", 
	[
		new Answer("Ио", 0),
        new Answer("Европа", 0),
        new Answer("Ганимед", 1),
		new Answer("Каллисто", 0)
	]),

	new Question("Какой древний народ построил город Чичен-Ица?", 
	[
        new Answer("Ацтеки", 0),
		new Answer("Майя", 1),
		new Answer("Инки", 0),
		new Answer("Ольмеки", 0)
	]),

	new Question("На борту какого линкора ВМФ США был подписан акт о капитуляции Японии во второй мировой войне?", 
	[
		new Answer("«Миссури»", 1),
        new Answer("«Висконсин»", 0),
        new Answer("«Нью-Джерси»", 0),
		new Answer("«Айова»", 0)
	]),

	new Question("В древнерусской живописи один из атрибутов архангела - тонкий жезл в его руке. Как этот жезл назывался?", 
	[
        new Answer("Орарь", 0),
        new Answer("Кондак", 0),
		new Answer("Мерило", 1),
		new Answer("Лор", 0)
	]),

	new Question("Как назывался доспех древнерусского воина - кольчужная рубашка без рукавов с металлическими пластинами?", 
	[
		new Answer("Бармица", 0),
		new Answer("Зерцало", 0),
		new Answer("Колонтарь", 1),
		new Answer("Рамень", 0)
    ]),
    
    new Question("Каких преступников Данте поместил в девятый круг ада?", 
	[
		new Answer("Еретиков", 0),
		new Answer("Самоубийц", 0),
		new Answer("Предателей", 1),
		new Answer("Убийц", 0)
    ])
	
];

//Сам тест
arr = [];
while(arr.length < 100){
	var randomnumber = Math.floor(Math.random()*100) ;
	if(arr.indexOf(randomnumber) > -1) continue;
	arr[arr.length] = randomnumber;
}
console.log(arr)
const quiz = new Quiz(1, questions, results, arr);

Update();

//Обновление теста
function Update()
{
	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		//Если есть, меняем вопрос в заголовке
		//код Мухина Ю.Р.
		let number = quiz.arr[quiz.current];
		headElem.innerHTML = quiz.questions[number].text;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[number].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[number].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
	}
	else
	{
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[number].text;
		pagesElem.innerHTML = "Очки: " + quiz.score;
	}
}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}

	let btnEnd = document.getElementById("buttonEnd");
	btnEnd.addEventListener("click", function (e) { 
		buttonsElem.innerHTML = "";
		headElem.innerHTML = "";
		pagesElem.innerHTML = "";
		headElem.innerHTML =  "Очки: " + quiz.score;
	 })
}

function Click(index) 
{
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "button button_correct";
	}

	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
}