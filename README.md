# alltheunicode
Responsive full Unicode support keyboard and implementation of Wikimedia IMEs

##Getting Started

Firstly add the dependencies which for ATU is the latest version of Bootstrap, JQuery, JQuery UI and Dragon_drop.

To add to your website you can either clone a copy of the latest version and store locally or add the Rawgit files to your website:
 - https://rawgit.com/BluePigeons/alltheunicode/master/alltheunicode.js
 - https://rawgit.com/BluePigeons/alltheunicode/master/alltheunicode.css

Once added you will need to define the text area that you are looking to input in - defined the value of the variable **atu_the_input** like this for example:
```
atu_the_input = document.getElementById("test_text_area")
```
Although this could also be updated and changed throughout the website.

The alternative methods of input are split into two parts, keyboards and IMEs.

##Keyboards

So one way of allowing alternative inputs is through providing additional in browser inputs. This is done with the function **addKeyboard** that takes one input, a JSON onject defining the options to be expressed in the Dragon_drop display of the keyboard. For more info please see Dragon_drop's documentation [here](https://github.com/BluePigeons/dragon_drop).

You will need to add the class "atu-keyboard-parent" to the element that will contain the keyboard.

For example:
```
var dragon_opts = {
	"minimise": false
};
addKeyboard(dragon_opts);
```

Once open, users can select between the blocks of Unicode ranges and the corresponding keyboards will load.

Within addKeyboard function, if the setup has not been initialised then it will be done automatically the first time that addKeyboard is run and then not repeated after that. This function takes not inputs and initialises the event listeners to the keyboard based on whatever element(s) have the parent classname mentioned earlier. If the elements with that classname changes then the event listeners might not respond properly and so you may need to run the function again manually:

```
atu_initialise_setup();
```

##IMEs

IMEs are Input Method Editors, methods of mapping one keyboard input to another set of Unicode characters, normally from traditional Western Latin alphabet keyboards to languages that are difficult to input by individual alphabet characters. The pattern of mapping varies from IME to IME, often with multiple different IMEs available for different languages - for example Latin keyboard to Mandarin Chinese can be done with a Pinyin IME, with the pattern of writing out the characters in a format and then typing a number at the end to select the choice of tone.

Alltheunicode uses the [Wikimedia JQuery IME extension library](https://github.com/wikimedia/jquery.ime) to allow you to dynamically generate IME options for a wide range of languages. The plain Wikimedia JQuery extension was difficult to use for dynamically generated input areas, hence the development of its incorporation to this.

You can manually load the libraries for this either by downloading and storing locally or using the Rawgit URLs of the following files (in that order):

"https://rawgit.com/wikimedia/jquery.ime/master/libs/rangy/rangy-core.js"
"https://rawgit.com/BluePigeons/alltheunicode/master/libs/jquery.ime.js"
"https://rawgit.com/wikimedia/jquery.ime/master/src/libs/jquery.ime.selector.js"
"https://rawgit.com/wikimedia/jquery.ime/master/src/jquery.ime.preferences.js"
"https://rawgit.com/wikimedia/jquery.ime/master/src/jquery.ime.inputmethods.js"

Or alternatively you can use the **active_load** option in the addIMEs function that allows you ATU to dynamically load for you.

Whichever method you use, it is important to use the ATU version of the jquery.ime.js file as that specifies a different path for loading the rules for each language, as otherwise the whole folder needs to be added to the site manually each time.

To add the IME options you need to define the element that the IME options are to be loaded in by labelling it with classname "polyanno-enable-IME" and then run the function **addIMEs** that takes three options:

```
addIMEs(by_button, initialise_options, active_load)
```
 - **by_button** - (Boolean) If true then the function will look for button(s) with class "polyanno-add-ime" to be clicked to enable IMEs.
 - **initialise_options** - (Boolean) If true then event listeners will be setup automatically for the areas defined by "atu_the_input" and for the IME selection options menu being loaded. Recommended to set to true.
 - **active_load** - (Boolean) If true then it will actively load the relevant Wikimedia JQuery extension files only in response to this function (see earlier for more info).

For an example of a basic demo simply loading the options menus see [demo here](#).

If you want to manually initialise the IME event listeners then you can do so by running the function atu_initialise_IMEs function like so:

```
atu_initialise_IMEs();
```

##Get In Touch

This project was developed by [Erin Nolan](https://github.com/BluePigeons) for use in the [PolyAnno.Ed project](#) at the University of Edinburgh. Feel free to tweet complaints and compliments to Erin [@thegreyskies](https://twitter.com/TheGreySkies)!

