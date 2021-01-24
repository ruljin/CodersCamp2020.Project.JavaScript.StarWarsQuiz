## Implementacja

Requesty potrafią się powtarzać w trakcie rozgrywki, przydałoby się cachowanie

Czas odliczany w trakcie gry jest zatrzymywany w momencie wybierania odpowiedzi. To może prowadzić do wyklikanych highscoreów i wydłużyć rozgrywkę do np. godziny

Rozbijanie logiki na 3 linijkowe funkcje znacznie obniża czytelność kodu

Bardzo dużo tzw. ifologii, również obniża czytelność kodu i można jej w łatwy sposób uniknąć korzystając np. z Object literal. Przykład poniżej:

```js
const timeName = getSpeedFromLocalStorage();
  let time = 0;  
if (timeName === 'long') {
    time = 60;
  } else if (timeName === 'normal') {
    time = 40;
  } else if (timeName === 'fast') {
    time = 20;
  }
  gameTime = time;

```



Można to przekształcić do:

```js
  const timeName = getSpeedFromLocalStorage();
  const time = {
    long: 60,
    normal: 40,
    fast: 20
  };
  gameTime = time[timeName] || 0;
```

Jakość kodu znacznie wzrośnie jeśli zaczniecie korzystać z [lintera](https://eslint.org/), do tego polecam skorzystać z istniejących code styles, np. [airbnb](https://github.com/airbnb/javascript).

Poniżej kilka błędów, których mogliście w ten sposób uniknąć:

1. `game-over-submit.js`

   1. Powtarzacie się w exportach
   2.  w funkcji createTableRow raczej chcieliscie porówniania bez konwersji typów (`===`), przydałoby się poprawić tam nazewnictwo (j,k)

2. `game.answering.js` załuguje na porządny refactor, pamiętajcie o KISS i DRY

   1. `setNextQuestion()` zwraca promise, brakuje tam async i await

3. `ranking.js` powtarza się ten sam kod z pkt 1

   1. Ternary operator nie powinien zwracać boolean - funkcja `populateTable`, więcej o tym w pkt. 4
   2. :negative_squared_cross_mark: `js element.highlighted === true ? true : false`
   3. :white_check_mark: `js element.highlighted === true`

4. `easter-egg.js`

   1. **Najpierw importy potem deklaracje zmiennych**

   2. Gdy chcecie zwrócić boolean użyjcie `!!(expression)` zamiast ternary operator. :white_check_mark:

      ```js
      !!(array1.length === array2.length && array1.every((value, index) => value === array2[index]));
      ```

   3. Porównując zmienną do stringa powinniście unikać konwersji `if (state === 'open')`

   4.  `checkArrowStyles` jest nieczytelna i opiera się na efektach ubocznych. Pisząc funkcje starajcie się możliwie ich unikać 

      ```wiki
      In computer science, an operation, function or expression is said to have a side effect if it modifies some state variable value(s) outside its local environment, that is to say has an observable effect besides returning a value (the main effect) to the invoker of the operation.
      ```

5. `localScorage.js`

   1. o nazwie nawet nie wspominam :wink: 
   2. funkcje create...object są zupełnie niepotrzebne. Pamiętajcie, że destrukturyzację możecie również zrobić w parametrze
   3. `getCorrectAnswersNumber()` - niepotrzebna funkcja, powtarzacie się

6. Config.js - dobry pomysł. Fajnie że definiujecie tam zmienne dla danych zapisywanych w localStorage. Skorzystajcie z nich również w `modal.js` 

   1. tablice `CATEGORY_(...)_IDS`. Nie łatwiej byłoby stworzyć tablice, które nie zawierają nie wypisanych z palca ID? Wydaje mi się, że to max 3 linijki.

7. Literówki

   1. `isHighlited` w `game-over-submit.js` oraz `ranking.js`
   2. `settings.test.js` - difficilty

## CSS

Zrezygnowałbym z części zawartości pliku variables.scss na rzecz components.scss. Zdefiniował tam np klasę `.btn`,  następnie odnosił się do niej  w kolejnych deklracjach za pomocą `@extend .btn`

W paru miejscach niepotrzebnie używacie CSS Grid. Grid służy do pokazywania danych tabelarycznych, lub layoutów, ale na pewno nie do centrowania elementów. https://sarahmhigley.com/writing/grids-part1/ :mag: 

Deklarując wartość równą 0 nie definiujcie jednostek:

:white_check_mark:`margin: 0;`

:negative_squared_cross_mark:`margin: 0px;` 

W następnym projekcie polecam skorzystać z stylelint, unikniecie takich błędów jak powyżej, lub następujących:

1. w `game-over.scss` - `border-radius: rem;` 
2. chyba nieużywana klasa `.container--blur`
3. `game.scss` - nadpisujecie 2 linijki później `transition: text-shadow 1s linear;` 
4. `settings.scss` - nadpisujecie `align-items: unset;`

RWD

Przycisk play powinien być widoczny na pierwszych 100u viewportach, tak samo back. Najlepiej by było gdyby cała apka się tam zmieściła.

## HTML

Duże, nieklikalne przyciski w menu powinny być nagłówkami (Category, Speed, Mode). Pamiętajcie również, że nieklikalny przycisk powinien mieć atrybut disabled.

## UI/UX

Podczas przechodzenia pomiędzy ekranami pojawia się białe tło, żeby tego uniknąć zastanowiłbym się czy nie pisać SPA.

Zastanowiłbym się nad sposobem pokazywania punktacji po zakończeniu gry, jako użytkownik wolałbym zadeklarować swoją nazwę przed rozpoczęciem gry. Po wpisaniu imienia w rankingu moja nazwa się nie zmieniła. Pokazywanie rankingu z pojedynczym wpisem dla trybu solo trochę mija się z celem. Myślę, że dobrym pomysłem było by zintegorwanie tego z Hall of fame i odpowiednie zaakcentowanie bieżącego wyniku (niezależnie od tego czy się tam kwalifikuje, czy nie).



