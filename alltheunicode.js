
////full unicode keyboard based on code from https://www.cs.tut.fi/~jkorpela/fui.html8

////multi language IME support using code from https://github.com/wikimedia/jquery.ime

////largest unicode font coverage from https://www.google.com/get/noto/
////////long term would like to use the promises of FontFaceFaceObserver for loading fonts 
////////see https://github.com/bramstein/fontfaceobserver and https://www.filamentgroup.com/lab/font-events.html for more info

var noto_font_src = "fonts/noto_unhinted/"; 
var noto_fonts = 
`NotoKufiArabic-Regular.ttf  
NotoNaskhArabic-Regular.ttf   
NotoNaskhArabicUI-Regular.ttf  
NotoNastaliqUrdu-Regular.ttf   
NotoSans-Regular.ttc   
NotoSans-Regular.ttf   
NotoSansArmenian-Regular.ttf   
NotoSansAvestan-Regular.ttf  
NotoSansBalinese-Regular.ttf   
NotoSansBamum-Regular.ttf  
NotoSansBatak-Regular.ttf    
NotoSansBengali-Regular.ttf   
NotoSansBengaliUI-Regular.ttf  
NotoSansBrahmi-Regular.ttf   
NotoSansBuginese-Regular.ttf   
NotoSansBuhid-Regular.ttf  
NotoSansCanadianAboriginal-Regular.ttf   
NotoSansCarian-Regular.ttf   
NotoSansCham-Regular.ttf   
NotoSansCherokee-Regular.ttf   
NotoSansCoptic-Regular.ttf 
NotoSansCuneiform-Regular.ttf 
NotoSansCypriot-Regular.ttf  
NotoSansDeseret-Regular.ttf   
NotoSansDevanagari-Regular.ttf   
NotoSansDevanagariUI-Regular.ttf   
NotoSansEgyptianHieroglyphs-Regular.ttf   
NotoSansEthiopic-Regular.ttf   
NotoSansGeorgian-Regular.ttf   
NotoSansGlagolitic-Regular.ttf   
NotoSansGothic-Regular.ttf    
NotoSansGujarati-Regular.ttf    
NotoSansGujaratiUI-Regular.ttf   
NotoSansGurmukhi-Regular.ttf   
NotoSansGurmukhiUI-Regular.ttf   
NotoSansHanunoo-Regular.ttf 
NotoSansHebrew-Regular.ttf   
NotoSansImperialAramaic-Regular.ttf  
NotoSansInscriptionalPahlavi-Regular.ttf   
NotoSansInscriptionalParthian-Regular.ttf 
NotoSansJavanese-Regular.ttf  
NotoSansKaithi-Regular.ttf  
NotoSansKannada-Regular.ttf    
NotoSansKannadaUI-Regular.ttf  
NotoSansKayahLi-Regular.ttf  
NotoSansKharoshthi-Regular.ttf  
NotoSansKhmer-Regular.ttf   
NotoSansKhmerUI-Regular.ttf  
NotoSansLao-Regular.ttf  
NotoSansLaoUI-Regular.ttf  
NotoSansLepcha-Regular.ttf  
NotoSansLimbu-Regular.ttf 
NotoSansLinearB-Regular.ttf  
NotoSansLisu-Regular.ttf   
NotoSansLycian-Regular.ttf   
NotoSansLydian-Regular.ttf    
NotoSansMalayalam-Regular.ttf    
NotoSansMalayalamUI-Regular.ttf  
NotoSansMandaic-Regular.ttf  
NotoSansMeeteiMayek-Regular.ttf
NotoSansMongolian-Regular.ttf    
NotoSansMyanmar-Regular.ttf   
NotoSansMyanmarUI-Regular.ttf  
NotoSansNKo-Regular.ttf  
NotoSansNewTaiLue-Regular.ttf  
NotoSansOgham-Regular.ttf  
NotoSansOlChiki-Regular.ttf  
NotoSansOldItalic-Regular.ttf  
NotoSansOldPersian-Regular.ttf   
NotoSansOldSouthArabian-Regular.ttf  
NotoSansOldTurkic-Regular.ttf    
NotoSansOriya-Regular.ttf    
NotoSansOriyaUI-Regular.ttf  
NotoSansOsmanya-Regular.ttf  
NotoSansPhagsPa-Regular.ttf  
NotoSansPhoenician-Regular.ttf   
NotoSansRejang-Regular.ttf  
NotoSansRunic-Regular.ttf  
NotoSansSamaritan-Regular.ttf  
NotoSansSaurashtra-Regular.ttf  
NotoSansShavian-Regular.ttf    
NotoSansSinhala-Regular.ttf  
NotoSansSundanese-Regular.ttf 
NotoSansSylotiNagri-Regular.ttf
NotoSansSymbols-Regular.ttf 
NotoSansSyriacEastern-Regular.ttf 
NotoSansSyriacEstrangela-Regular.ttf 
NotoSansSyriacWestern-Regular.ttf 
NotoSansTagalog-Regular.ttf 
NotoSansTagbanwa-Regular.ttf 
NotoSansTaiLe-Regular.ttf 
NotoSansTaiTham-Regular.ttf 
NotoSansTaiViet-Regular.ttf 
NotoSansTamil-Regular.ttf   
NotoSansTamilUI-Regular.ttf  
NotoSansTelugu-Regular.ttf   
NotoSansTeluguUI-Regular.ttf   
NotoSansThaana-Regular.ttf 
NotoSansThai-Regular.ttf   
NotoSansThaiUI-Regular.ttf    
NotoSansTibetan-Regular.ttf  
NotoSansTifinagh-Regular.ttf
NotoSansUI-Regular.ttf   
NotoSansUgaritic-Regular.ttf 
NotoSansVai-Regular.ttf 
NotoSansYi-Regular.ttf 
NotoSerif-Regular.ttf 
NotoSerifArmenian-Regular.ttf 
NotoSerifBengali-Regular.ttf
NotoSerifDevanagari-Regular.ttf
NotoSerifGeorgian-Regular.ttf 
NotoSerifGujarati-Regular.ttf 
NotoSerifKannada-Regular.ttf 
NotoSerifKhmer-Regular.ttf 
NotoSerifLao-Regular.ttf 
NotoSerifMalayalam-Regular.ttf 
NotoSerifTamil-Regular.ttf 
NotoSerifTelugu-Regular.ttf 
NotoSerifThai-Regular.ttf`;


var noto_cjk_font_src = "fonts/noto_cjk/"; 
var noto_cjk_fonts = 
`NotoSansCJK-Regular.ttc 
NotoSansCJKjp-Regular.otf 
NotoSansCJKkr-Regular.otf 
NotoSansCJKsc-Regular.otf 
NotoSansCJKtc-Regular.otf 
NotoSansJP-Regular.otf 
NotoSansKR-Regular.otf 
NotoSansMonoCJKjp-Regular.otf 
NotoSansMonoCJKkr-Regular.otf 
NotoSansMonoCJKsc-Regular.otf 
NotoSansMonoCJKtc-Regular.otf 
NotoSansSC-Regular.otf 
NotoSansTC-Regular.otf`;

var noto_emoji_regular_font_src = `fonts/noto_emojis/`;
var noto_emoji_regular_fonts = 
`NotoEmoji-Regular.ttf`;

var noto_emoji_colour_font_src = `fonts/noto_emojis/`;
var noto_emoji_colour_fonts = 
`NotoColorEmoji.ttf`;

var atu_all_font_names_array = [];
var atu_the_font_array = [];
//var atu_new_style = document.createElement('style');

var atu_font_file_endindex = function(file_name){
  if (file_name.indexOf(".ttc") != -1) {
    return file_name.indexOf(".ttc");
  }
  else if (file_name.indexOf(".ttf") != -1) {
    return file_name.indexOf(".ttf");
  }
  else if (file_name.indexOf(".otf") != -1) {
    return file_name.indexOf(".otf");
  }
  else if (file_name.indexOf(".woff") != -1) {
    return file_name.indexOf(".woff");
  };
};

var atu_set_fonts = function(font_file_list, font_src, unicode_range) {
  var atu_all_fonts_array = String.raw({raw: font_file_list}).split('\n');
  atu_all_fonts_array.forEach(function(font_file){
    var atu_font_name = font_file.substring(0, atu_font_file_endindex(font_file)).toLowerCase();
    atu_all_font_names_array.unshift(" "+atu_font_name); ///will load family names in reverse order of list above

    var atu_new_font_face = `
@font-face {
    font-family: ` + atu_font_name + `;
    src: url('` + font_src + font_file + `') ;
    unicode-range: `+unicode_range+`;
}
      `;

    atu_the_font_array.unshift({ "name": atu_font_name, "CSS": atu_new_font_face, "file": font_src + font_file  });
    //atu_new_style.appendChild(document.createTextNode(atu_new_font_face));
  });
};
/////use the following to update values of font lists in CSS
/*
atu_set_fonts(noto_fonts, noto_font_src, "U+??");
atu_set_fonts(noto_cjk_fonts, noto_cjk_font_src, "U+??");
atu_set_fonts(noto_emoji_regular_fonts, noto_emoji_regular_font_src, "U+??");
atu_set_fonts(noto_emoji_colour_fonts, noto_emoji_colour_font_src, "U+??");

var atu_all_font_family = atu_all_font_names_array.toString() + `, Helvetica, Arial, sans-serif`;

var atu_detect_tofu = function(thisDOM){
/////
};

var atu_set_current_font = function(thisDOM) {
  var font_family = atu_detect_tofu(thisDOM);
  $(thisDOM).css("font-family", font_family);
};

atu_new_style.appendChild(document.createTextNode(`
.c {
  font-family: `+atu_all_font_family+` ;
}
  `));

document.head.appendChild(atu_new_style);

var atu_main_HTML = `

  <div class="row fullunicodesupportkeyboard">
    <div class="col-md-12">

      <div class="row keyboardHandlebar ui-draggable-handle">
        <button class="btn col-md-1">
          <span class="closePopupBtn glyphicon glyphicon-remove"></span>
        </button>
        <button class="btn col-md-1 polyanno-colour-change polyanno-popup-min">
          <span> _ </span>
        </button>
        <button class="btn  atu-options-btn atu-search-dropdown-toggle col-md-2" type="button" >
            <span class="glyphicon glyphicon-search"></span>
            <span class="caret"></span>
        </button>
        <button class="btn  atu-options-btn atu-options-dropdown-toggle col-md-2" type="button" >
            <span class="glyphicon glyphicon glyphicon-list-alt"></span>
            <span class="caret"></span>
        </button>
        <button class="col-md-2 atu-options-btn atu-prev-btn" type="button" id="atu-prev-btn" title="Previous 256 characters" >
                <span class='glyphicon glyphicon-chevron-left'></span>
              </button>
        <button class="col-md-2 atu-options-btn atu-next-btn" type="button" id="atu-next-btn" title="Next 256 characters">
                <span class='glyphicon glyphicon-chevron-right'></span>
              </button>
      </div>

          <div class="row languageRow optionRows">
            <div class="atu-languageChoice">
                <select id="atu-blockMenuID" class="atu-blockMenu">
                <optgroup label="Basic Multilingual Plane">
                  <option value="0000">Basic Latin</option><option value="0080">Latin-1 Supplement</option><option value="0100">Latin Extended-A</option><option value="0180">Latin Extended-B</option><option value="0250">IPA Extensions</option><option value="02B0">Spacing Modifier Letters</option><option value="0300">Combining Diacritical Marks</option><option value="0370">Greek and Coptic</option><option value="0400">Cyrillic</option><option value="0500">Cyrillic Supplement</option><option value="0530">Armenian</option><option value="0590">Hebrew</option><option value="0600">Arabic</option><option value="0700">Syriac</option><option value="0750">Arabic Supplement</option><option value="0780">Thaana</option><option value="07C0">NKo</option><option value="0800">Samaritan</option><option value="0840">Mandaic</option><option value="08A0">Arabic Extended-A</option><option value="0900">Devanagari</option><option value="0980">Bengali</option><option value="0A00">Gurmukhi</option><option value="0A80">Gujarati</option><option value="0B00">Oriya</option><option value="0B80">Tamil</option><option value="0C00">Telugu</option><option value="0C80">Kannada</option><option value="0D00">Malayalam</option><option value="0D80">Sinhala</option><option value="0E00">Thai</option><option value="0E80">Lao</option><option value="0F00">Tibetan</option><option value="1000">Myanmar</option><option value="10A0">Georgian</option><option value="1100">Hangul Jamo</option><option value="1200">Ethiopic</option><option value="1380">Ethiopic Supplement</option><option value="13A0">Cherokee</option><option value="1400">Unified Canadian Aboriginal Syllabics</option><option value="1680">Ogham</option><option value="16A0">Runic</option><option value="1700">Tagalog</option><option value="1720">Hanunoo</option><option value="1740">Buhid</option><option value="1760">Tagbanwa</option><option value="1780">Khmer</option><option value="1800">Mongolian</option><option value="18B0">Unified Canadian Aboriginal Syllabics Extended</option><option value="1900">Limbu</option><option value="1950">Tai Le</option><option value="1980">New Tai Lue</option><option value="19E0">Khmer Symbols</option><option value="1A00">Buginese</option><option value="1A20">Tai Tham</option><option value="1AB0">Combining Diacritical Marks Extended</option><option value="1B00">Balinese</option><option value="1B80">Sundanese</option><option value="1BC0">Batak</option><option value="1C00">Lepcha</option><option value="1C50">Ol Chiki</option><option value="1CC0">Sundanese Supplement</option><option value="1CD0">Vedic Extensions</option><option value="1D00">Phonetic Extensions</option><option value="1D80">Phonetic Extensions Supplement</option><option value="1DC0">Combining Diacritical Marks Supplement</option><option value="1E00">Latin Extended Additional</option><option value="1F00">Greek Extended</option><option value="2000">General Punctuation</option><option value="2070">Superscripts and Subscripts</option><option value="20A0">Currency Symbols</option><option value="20D0">Combining Diacritical Marks for Symbols</option><option value="2100">Letterlike Symbols</option><option value="2150">Number Forms</option><option value="2190">Arrows</option><option value="2200">Mathematical Operators</option><option value="2300">Miscellaneous Technical</option><option value="2400">Control Pictures</option><option value="2440">Optical Character Recognition</option><option value="2460">Enclosed Alphanumerics</option><option value="2500">Box Drawing</option><option value="2580">Block Elements</option><option value="25A0">Geometric Shapes</option><option value="2600">Miscellaneous Symbols</option><option value="2700">Dingbats</option><option value="27C0">Miscellaneous Mathematical Symbols-A</option><option value="27F0">Supplemental Arrows-A</option><option value="2800">Braille Patterns</option><option value="2900">Supplemental Arrows-B</option><option value="2980">Miscellaneous Mathematical Symbols-B</option><option value="2A00">Supplemental Mathematical Operators</option><option value="2B00">Miscellaneous Symbols and Arrows</option><option value="2C00">Glagolitic</option><option value="2C60">Latin Extended-C</option><option value="2C80">Coptic</option><option value="2D00">Georgian Supplement</option><option value="2D30">Tifinagh</option><option value="2D80">Ethiopic Extended</option><option value="2DE0">Cyrillic Extended-A</option><option value="2E00">Supplemental Punctuation</option><option value="2E80">CJK Radicals Supplement</option><option value="2F00">Kangxi Radicals</option><option value="2FF0">Ideographic Description Characters</option><option value="3000">CJK Symbols and Punctuation</option><option value="3040">Hiragana</option><option value="30A0">Katakana</option><option value="3100">Bopomofo</option><option value="3130">Hangul Compatibility Jamo</option><option value="3190">Kanbun</option><option value="31A0">Bopomofo Extended</option><option value="31C0">CJK Strokes</option><option value="31F0">Katakana Phonetic Extensions</option><option value="3200">Enclosed CJK Letters and Months</option><option value="3300">CJK Compatibility</option><option value="3400">CJK Unified Ideographs Extension A</option><option value="4DC0">Yijing Hexagram Symbols</option><option value="4E00">CJK Unified Ideographs</option><option value="A000">Yi Syllables</option><option value="A490">Yi Radicals</option><option value="A4D0">Lisu</option><option value="A500">Vai</option><option value="A640">Cyrillic Extended-B</option><option value="A6A0">Bamum</option><option value="A700">Modifier Tone Letters</option><option value="A720">Latin Extended-D</option><option value="A800">Syloti Nagri</option><option value="A830">Common Indic Number Forms</option><option value="A840">Phags-pa</option><option value="A880">Saurashtra</option><option value="A8E0">Devanagari Extended</option><option value="A900">Kayah Li</option><option value="A930">Rejang</option><option value="A960">Hangul Jamo Extended-A</option><option value="A980">Javanese</option><option value="A9E0">Myanmar Extended-B</option><option value="AA00">Cham</option><option value="AA60">Myanmar Extended-A</option><option value="AA80">Tai Viet</option><option value="AAE0">Meetei Mayek Extensions</option><option value="AB00">Ethiopic Extended-A</option><option value="AB30">Latin Extended-E</option><option value="ABC0">Meetei Mayek</option><option value="AC00">Hangul Syllables</option><option value="D7B0">Hangul Jamo Extended-B</option><option value="D800">High Surrogates</option><option value="DB80">High Private Use Surrogates</option><option value="DC00">Low Surrogates</option><option value="E000">Private Use Area</option><option value="F900">CJK Compatibility Ideographs</option><option value="FB00">Alphabetic Presentation Forms</option><option value="FB50">Arabic Presentation Forms-A</option><option value="FE00">Variation Selectors</option><option value="FE10">Vertical Forms</option><option value="FE20">Combining Half Marks</option><option value="FE30">CJK Compatibility Forms</option><option value="FE50">Small Form Variants</option><option value="FE70">Arabic Presentation Forms-B</option><option value="FF00">Halfwidth and Fullwidth Forms</option><option value="FFF0">Specials</option></optgroup><optgroup label="Supplementary Multilingual Plane"><option value="10000">Linear B Syllabary</option><option value="10080">Linear B Ideograms</option><option value="10100">Aegean Numbers</option><option value="10140">Ancient Greek Numbers</option><option value="10190">Ancient Symbols</option><option value="101D0">Phaistos Disc</option><option value="10280">Lycian</option><option value="102A0">Carian</option><option value="102E0">Coptic Epact Numbers</option><option value="10300">Old Italic</option><option value="10330">Gothic</option><option value="10350">Old Permic</option><option value="10380">Ugaritic</option><option value="103A0">Old Persian</option><option value="10400">Deseret</option><option value="10450">Shavian</option><option value="10480">Osmanya</option><option value="10500">Elbasan</option><option value="10530">Caucasian Albanian</option><option value="10600">Linear A</option><option value="10800">Cypriot Syllabary</option><option value="10840">Imperial Aramaic</option><option value="10860">Palmyrene</option><option value="10880">Nabataean</option><option value="10900">Phoenician</option><option value="10920">Lydian</option><option value="10980">Meroitic Hieroglyphs</option><option value="109A0">Meroitic Cursive</option><option value="10A00">Kharoshthi</option><option value="10A60">Old South Arabian</option><option value="10A80">Old North Arabian</option><option value="10AC0">Manichaean</option><option value="10B00">Avestan</option><option value="10B40">Inscriptional Parthian</option><option value="10B60">Inscriptional Pahlavi</option><option value="10B80">Psalter Pahlavi</option><option value="10C00">Old Turkic</option><option value="10E60">Rumi Numeral Symbols</option><option value="11000">Brahmi</option><option value="11080">Kaithi</option><option value="110D0">Sora Sompeng</option><option value="11100">Chakma</option><option value="11150">Mahajani</option><option value="11180">Sharada</option><option value="111E0">Sinhala Archaic Numbers</option><option value="11200">Khojki</option><option value="112B0">Khudawadi</option><option value="11300">Grantha</option><option value="11480">Tirhuta</option><option value="11580">Siddham</option><option value="11600">Modi</option><option value="11680">Takri</option><option value="118A0">Warang Citi</option><option value="11AC0">Pau Cin Hau</option><option value="12000">Cuneiform</option><option value="12400">Cuneiform Numbers and Punctuation</option><option value="13000">Egyptian Hieroglyphs</option><option value="16800">Bamum Supplement</option><option value="16A40">Mro</option><option value="16AD0">Bassa Vah</option><option value="16B00">Pahawh Hmong</option><option value="16F00">Miao</option><option value="1B000">Kana Supplement</option><option value="1BC00">Duployan</option><option value="1BCA0">Shorthand Format Controls</option><option value="1D000">Byzantine Musical Symbols</option><option value="1D100">Musical Symbols</option><option value="1D200">Ancient Greek Musical Notation</option><option value="1D300">Tai Xuan Jing Symbols</option><option value="1D360">Counting Rod Numerals</option><option value="1D400">Mathematical Alphanumeric Symbols</option><option value="1E800">Mende Kikakui</option><option value="1EE00">Arabic Mathematical Alphabetic Symbols</option><option value="1F000">Mahjong Tiles</option><option value="1F030">Domino Tiles</option><option value="1F0A0">Playing Cards</option><option value="1F100">Enclosed Alphanumeric Supplement</option><option value="1F200">Enclosed Ideographic Supplement</option><option value="1F300">Miscellaneous Symbols and Pictographs</option><option value="1F600">Emoticons</option><option value="1F650">Ornamental Dingbats</option><option value="1F680">Transport and Map Symbols</option><option value="1F700">Alchemical Symbols</option><option value="1F780">Geometric Shapes Extended</option><option value="1F800">Supplemental Arrows-C</option></optgroup><optgroup label="Supplementary Ideographic Plane"><option value="20000">CJK Unified Ideographs Extension B</option><option value="2A700">CJK Unified Ideographs Extension C</option><option value="2B740">CJK Unified Ideographs Extension D</option><option value="2F800">CJK Compatibility Ideographs Supplement</option></optgroup><optgroup label="Supplementary Special-Purpose Plane"><option value="E0000">Tags</option><option value="E0100">Variation Selectors Supplement</option></optgroup><optgroup label="Supplementary Private-Use Area"><option value="F0000">Supplementary Private Use Area-A</option><option value="100000">Supplementary Private Use Area-B</option>
                </optgroup>
              </select>
            </div>
          </div>
      
          <div class="row searchUnicodeRow optionRows bottomOptionRow">
              <span class="searchUnicodeLabel col-md-3">Search U+</span>
              <input class="col-md-6 atu-ucode" placeholder="Unicode Number" size="6" maxlength="6" pattern="[0-9a-zA-Z]{1,6}" >
              <div class="col-md-3">
                <button type="button" class="atu-ucode-search-btn">
                  <span class='glyphicon glyphicon-search'></span>
                </button>
                <span class="glyphicon glyphicon-question-sign"></span>
              </div>
        </div>    

          <div id="mapPopup" class="row theKeys">
        <div class="col-md-12 chars">
                <div class="row">
              <div id='mapPopupBodyInitial' class='atu-mapPopupBody col-md-12'>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,0)'> </div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,1)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,2)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,3)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,4)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,5)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,6)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,7)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,8)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,9)'> </div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,10)'>
</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,11)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,12)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,13)'>
</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,14)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,15)'></div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,16)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,17)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,18)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,19)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,20)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,21)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,22)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,23)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,24)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,25)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,26)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,27)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,28)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,29)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,30)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,31)'></div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c normal' data-info='SPACE' onclick='clicked(this,32)'> </div></div><div class='sameWidth'><div class='c normal' data-info='EXCLAMATION MARK' onclick='clicked(this,33)'>!</div></div><div class='sameWidth'><div class='c normal' data-info='QUOTATION MARK' onclick='clicked(this,34)'>'</div></div><div class='sameWidth'><div class='c normal' data-info='NUMBER SIGN' onclick='clicked(this,35)'>#</div></div><div class='sameWidth'><div class='c normal' data-info='DOLLAR SIGN' onclick='clicked(this,36)'>$</div></div><div class='sameWidth'><div class='c normal' data-info='PERCENT SIGN' onclick='clicked(this,37)'>%</div></div><div class='sameWidth'><div class='c normal' data-info='AMPERSAND' onclick='clicked(this,38)'>&amp;</div></div><div class='sameWidth'><div class='c normal' data-info='APOSTROPHE' onclick='clicked(this,39)'>'</div></div><div class='sameWidth'><div class='c normal' data-info='LEFT PARENTHESIS' onclick='clicked(this,40)'>(</div></div><div class='sameWidth'><div class='c normal' data-info='RIGHT PARENTHESIS' onclick='clicked(this,41)'>)</div></div><div class='sameWidth'><div class='c normal' data-info='ASTERISK' onclick='clicked(this,42)'>*</div></div><div class='sameWidth'><div class='c normal' data-info='PLUS SIGN' onclick='clicked(this,43)'>+</div></div><div class='sameWidth'><div class='c normal' data-info='COMMA' onclick='clicked(this,44)'>,</div></div><div class='sameWidth'><div class='c normal' data-info='HYPHEN-MINUS' onclick='clicked(this,45)'>-</div></div><div class='sameWidth'><div class='c normal' data-info='FULL STOP' onclick='clicked(this,46)'>.</div></div><div class='sameWidth'><div class='c normal' data-info='SOLIDUS' onclick='clicked(this,47)'>/</div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c normal' data-info='DIGIT ZERO' onclick='clicked(this,48)'>0</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT ONE' onclick='clicked(this,49)'>1</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT TWO' onclick='clicked(this,50)'>2</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT THREE' onclick='clicked(this,51)'>3</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT FOUR' onclick='clicked(this,52)'>4</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT FIVE' onclick='clicked(this,53)'>5</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT SIX' onclick='clicked(this,54)'>6</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT SEVEN' onclick='clicked(this,55)'>7</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT EIGHT' onclick='clicked(this,56)'>8</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT NINE' onclick='clicked(this,57)'>9</div></div><div class='sameWidth'><div class='c normal' data-info='COLON' onclick='clicked(this,58)'>:</div></div><div class='sameWidth'><div class='c normal' data-info='SEMICOLON' onclick='clicked(this,59)'>;</div></div><div class='sameWidth'><div class='c normal' data-info='LESS-THAN SIGN' onclick='clicked(this,60)'>&lt;</div></div><div class='sameWidth'><div class='c normal' data-info='EQUALS SIGN' onclick='clicked(this,61)'>=</div></div><div class='sameWidth'><div class='c normal' data-info='GREATER-THAN SIGN' onclick='clicked(this,62)'>&gt;</div></div><div class='sameWidth'><div class='c normal' data-info='QUESTION MARK' onclick='clicked(this,63)'>?</div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c normal' data-info='COMMERCIAL AT' onclick='clicked(this,64)'>@</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A' onclick='clicked(this,65)'>A</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER B' onclick='clicked(this,66)'>B</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER C' onclick='clicked(this,67)'>C</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER D' onclick='clicked(this,68)'>D</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER E' onclick='clicked(this,69)'>E</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER F' onclick='clicked(this,70)'>F</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER G' onclick='clicked(this,71)'>G</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER H' onclick='clicked(this,72)'>H</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER I' onclick='clicked(this,73)'>I</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER J' onclick='clicked(this,74)'>J</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER K' onclick='clicked(this,75)'>K</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER L' onclick='clicked(this,76)'>L</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER M' onclick='clicked(this,77)'>M</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER N' onclick='clicked(this,78)'>N</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O' onclick='clicked(this,79)'>O</div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER P' onclick='clicked(this,80)'>P</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER Q' onclick='clicked(this,81)'>Q</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER R' onclick='clicked(this,82)'>R</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER S' onclick='clicked(this,83)'>S</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER T' onclick='clicked(this,84)'>T</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER U' onclick='clicked(this,85)'>U</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER V' onclick='clicked(this,86)'>V</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER W' onclick='clicked(this,87)'>W</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER X' onclick='clicked(this,88)'>X</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER Y' onclick='clicked(this,89)'>Y</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER Z' onclick='clicked(this,90)'>Z</div></div><div class='sameWidth'><div class='c normal' data-info='LEFT SQUARE BRACKET' onclick='clicked(this,91)'>[</div></div><div class='sameWidth'><div class='c normal' data-info='REVERSE SOLIDUS' onclick='clicked(this,92)'>\</div></div><div class='sameWidth'><div class='c normal' data-info='RIGHT SQUARE BRACKET' onclick='clicked(this,93)'>]</div></div><div class='sameWidth'><div class='c normal' data-info='CIRCUMFLEX ACCENT' onclick='clicked(this,94)'>^</div></div><div class='sameWidth'><div class='c normal' data-info='LOW LINE' onclick='clicked(this,95)'>_</div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c normal' data-info='GRAVE ACCENT' onclick='clicked(this,96)'></div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A' onclick='clicked(this,97)'>a</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER B' onclick='clicked(this,98)'>b</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER C' onclick='clicked(this,99)'>c</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER D' onclick='clicked(this,100)'>d</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER E' onclick='clicked(this,101)'>e</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER F' onclick='clicked(this,102)'>f</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER G' onclick='clicked(this,103)'>g</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER H' onclick='clicked(this,104)'>h</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER I' onclick='clicked(this,105)'>i</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER J' onclick='clicked(this,106)'>j</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER K' onclick='clicked(this,107)'>k</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER L' onclick='clicked(this,108)'>l</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER M' onclick='clicked(this,109)'>m</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER N' onclick='clicked(this,110)'>n</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O' onclick='clicked(this,111)'>o</div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER P' onclick='clicked(this,112)'>p</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER Q' onclick='clicked(this,113)'>q</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER R' onclick='clicked(this,114)'>r</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER S' onclick='clicked(this,115)'>s</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER T' onclick='clicked(this,116)'>t</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER U' onclick='clicked(this,117)'>u</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER V' onclick='clicked(this,118)'>v</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER W' onclick='clicked(this,119)'>w</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER X' onclick='clicked(this,120)'>x</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER Y' onclick='clicked(this,121)'>y</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER Z' onclick='clicked(this,122)'>z</div></div><div class='sameWidth'><div class='c normal' data-info='LEFT CURLY BRACKET' onclick='clicked(this,123)'>{</div></div><div class='sameWidth'><div class='c normal' data-info='VERTICAL LINE' onclick='clicked(this,124)'>|</div></div><div class='sameWidth'><div class='c normal' data-info='RIGHT CURLY BRACKET' onclick='clicked(this,125)'>}</div></div><div class='sameWidth'><div class='c normal' data-info='TILDE' onclick='clicked(this,126)'>~</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,127)'>&nbsp;</div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,128)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,129)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,130)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,131)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,132)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,133)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,134)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,135)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,136)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,137)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,138)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,139)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,140)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,141)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,142)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,143)'>&nbsp;</div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,144)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,145)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,146)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,147)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,148)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,149)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,150)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,151)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,152)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,153)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,154)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,155)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,156)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,157)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,158)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,159)'>&nbsp;</div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c normal' data-info='NO-BREAK SPACE' onclick='clicked(this,160)'>&nbsp;</div></div><div class='sameWidth'><div class='c normal' data-info='INVERTED EXCLAMATION MARK' onclick='clicked(this,161)'>¡</div></div><div class='sameWidth'><div class='c normal' data-info='CENT SIGN' onclick='clicked(this,162)'>¢</div></div><div class='sameWidth'><div class='c normal' data-info='POUND SIGN' onclick='clicked(this,163)'>£</div></div><div class='sameWidth'><div class='c normal' data-info='CURRENCY SIGN' onclick='clicked(this,164)'>¤</div></div><div class='sameWidth'><div class='c normal' data-info='YEN SIGN' onclick='clicked(this,165)'>¥</div></div><div class='sameWidth'><div class='c normal' data-info='BROKEN BAR' onclick='clicked(this,166)'>¦</div></div><div class='sameWidth'><div class='c normal' data-info='SECTION SIGN' onclick='clicked(this,167)'>§</div></div><div class='sameWidth'><div class='c normal' data-info='DIAERESIS' onclick='clicked(this,168)'>¨</div></div><div class='sameWidth'><div class='c normal' data-info='COPYRIGHT SIGN' onclick='clicked(this,169)'>©</div></div><div class='sameWidth'><div class='c normal' data-info='FEMININE ORDINAL INDICATOR' onclick='clicked(this,170)'>ª</div></div><div class='sameWidth'><div class='c normal' data-info='LEFT-POINTING DOUBLE ANGLE QUOTATION MARK' onclick='clicked(this,171)'>«</div></div><div class='sameWidth'><div class='c normal' data-info='NOT SIGN' onclick='clicked(this,172)'>¬</div></div><div class='sameWidth'><div class='c control' data-info='SOFT HYPHEN (Other, format)' onclick='clicked(this,173)'>­</div></div><div class='sameWidth'><div class='c normal' data-info='REGISTERED SIGN' onclick='clicked(this,174)'>®</div></div><div class='sameWidth'><div class='c normal' data-info='MACRON' onclick='clicked(this,175)'>¯</div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c normal' data-info='DEGREE SIGN' onclick='clicked(this,176)'>°</div></div><div class='sameWidth'><div class='c normal' data-info='PLUS-MINUS SIGN' onclick='clicked(this,177)'>±</div></div><div class='sameWidth'><div class='c normal' data-info='SUPERSCRIPT TWO' onclick='clicked(this,178)'>²</div></div><div class='sameWidth'><div class='c normal' data-info='SUPERSCRIPT THREE' onclick='clicked(this,179)'>³</div></div><div class='sameWidth'><div class='c normal' data-info='ACUTE ACCENT' onclick='clicked(this,180)'>´</div></div><div class='sameWidth'><div class='c normal' data-info='MICRO SIGN' onclick='clicked(this,181)'>µ</div></div><div class='sameWidth'><div class='c normal' data-info='PILCROW SIGN' onclick='clicked(this,182)'>¶</div></div><div class='sameWidth'><div class='c normal' data-info='MIDDLE DOT' onclick='clicked(this,183)'>·</div></div><div class='sameWidth'><div class='c normal' data-info='CEDILLA' onclick='clicked(this,184)'>¸</div></div><div class='sameWidth'><div class='c normal' data-info='SUPERSCRIPT ONE' onclick='clicked(this,185)'>¹</div></div><div class='sameWidth'><div class='c normal' data-info='MASCULINE ORDINAL INDICATOR' onclick='clicked(this,186)'>º</div></div><div class='sameWidth'><div class='c normal' data-info='RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK' onclick='clicked(this,187)'>»</div></div><div class='sameWidth'><div class='c normal' data-info='VULGAR FRACTION ONE QUARTER' onclick='clicked(this,188)'>¼</div></div><div class='sameWidth'><div class='c normal' data-info='VULGAR FRACTION ONE HALF' onclick='clicked(this,189)'>½</div></div><div class='sameWidth'><div class='c normal' data-info='VULGAR FRACTION THREE QUARTERS' onclick='clicked(this,190)'>¾</div></div><div class='sameWidth'><div class='c normal' data-info='INVERTED QUESTION MARK' onclick='clicked(this,191)'>¿</div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A WITH GRAVE' onclick='clicked(this,192)'>À</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A WITH ACUTE' onclick='clicked(this,193)'>Á</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A WITH CIRCUMFLEX' onclick='clicked(this,194)'>Â</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A WITH TILDE' onclick='clicked(this,195)'>Ã</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A WITH DIAERESIS' onclick='clicked(this,196)'>Ä</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A WITH RING ABOVE' onclick='clicked(this,197)'>Å</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER AE' onclick='clicked(this,198)'>Æ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER C WITH CEDILLA' onclick='clicked(this,199)'>Ç</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER E WITH GRAVE' onclick='clicked(this,200)'>È</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER E WITH ACUTE' onclick='clicked(this,201)'>É</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER E WITH CIRCUMFLEX' onclick='clicked(this,202)'>Ê</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER E WITH DIAERESIS' onclick='clicked(this,203)'>Ë</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER I WITH GRAVE' onclick='clicked(this,204)'>Ì</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER I WITH ACUTE' onclick='clicked(this,205)'>Í</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER I WITH CIRCUMFLEX' onclick='clicked(this,206)'>Î</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER I WITH DIAERESIS' onclick='clicked(this,207)'>Ï</div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER ETH' onclick='clicked(this,208)'>Ð</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER N WITH TILDE' onclick='clicked(this,209)'>Ñ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O WITH GRAVE' onclick='clicked(this,210)'>Ò</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O WITH ACUTE' onclick='clicked(this,211)'>Ó</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O WITH CIRCUMFLEX' onclick='clicked(this,212)'>Ô</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O WITH TILDE' onclick='clicked(this,213)'>Õ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O WITH DIAERESIS' onclick='clicked(this,214)'>Ö</div></div><div class='sameWidth'><div class='c normal' data-info='MULTIPLICATION SIGN' onclick='clicked(this,215)'>×</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O WITH STROKE' onclick='clicked(this,216)'>Ø</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER U WITH GRAVE' onclick='clicked(this,217)'>Ù</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER U WITH ACUTE' onclick='clicked(this,218)'>Ú</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER U WITH CIRCUMFLEX' onclick='clicked(this,219)'>Û</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER U WITH DIAERESIS' onclick='clicked(this,220)'>Ü</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER Y WITH ACUTE' onclick='clicked(this,221)'>Ý</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER THORN' onclick='clicked(this,222)'>Þ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER SHARP S' onclick='clicked(this,223)'>ß</div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A WITH GRAVE' onclick='clicked(this,224)'>à</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A WITH ACUTE' onclick='clicked(this,225)'>á</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A WITH CIRCUMFLEX' onclick='clicked(this,226)'>â</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A WITH TILDE' onclick='clicked(this,227)'>ã</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A WITH DIAERESIS' onclick='clicked(this,228)'>ä</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A WITH RING ABOVE' onclick='clicked(this,229)'>å</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER AE' onclick='clicked(this,230)'>æ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER C WITH CEDILLA' onclick='clicked(this,231)'>ç</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER E WITH GRAVE' onclick='clicked(this,232)'>è</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER E WITH ACUTE' onclick='clicked(this,233)'>é</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER E WITH CIRCUMFLEX' onclick='clicked(this,234)'>ê</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER E WITH DIAERESIS' onclick='clicked(this,235)'>ë</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER I WITH GRAVE' onclick='clicked(this,236)'>ì</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER I WITH ACUTE' onclick='clicked(this,237)'>í</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER I WITH CIRCUMFLEX' onclick='clicked(this,238)'>î</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER I WITH DIAERESIS' onclick='clicked(this,239)'>ï</div></div>
                  </div>
                  <div class='row keyRow'>
                    <div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER ETH' onclick='clicked(this,240)'>ð</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER N WITH TILDE' onclick='clicked(this,241)'>ñ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O WITH GRAVE' onclick='clicked(this,242)'>ò</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O WITH ACUTE' onclick='clicked(this,243)'>ó</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O WITH CIRCUMFLEX' onclick='clicked(this,244)'>ô</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O WITH TILDE' onclick='clicked(this,245)'>õ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O WITH DIAERESIS' onclick='clicked(this,246)'>ö</div></div><div class='sameWidth'><div class='c normal' data-info='DIVISION SIGN' onclick='clicked(this,247)'>÷</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O WITH STROKE' onclick='clicked(this,248)'>ø</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER U WITH GRAVE' onclick='clicked(this,249)'>ù</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER U WITH ACUTE' onclick='clicked(this,250)'>ú</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER U WITH CIRCUMFLEX' onclick='clicked(this,251)'>û</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER U WITH DIAERESIS' onclick='clicked(this,252)'>ü</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER Y WITH ACUTE' onclick='clicked(this,253)'>ý</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER THORN' onclick='clicked(this,254)'>þ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER Y WITH DIAERESIS' onclick='clicked(this,255)'>ÿ</div></div>
                  </div>
                </div>
                </div>
            </div>
          </div>
    </div>
  </div>

`;
*/

var atu_handlebar_HTML = `
        <button class="btn  atu-options-btn atu-search-dropdown-toggle col-md-2" type="button" >
            <span class="glyphicon glyphicon-search"></span>
            <span class="caret"></span>
        </button>
        <button class="btn  atu-options-btn atu-options-dropdown-toggle col-md-2" type="button" >
            <span class="glyphicon glyphicon glyphicon-list-alt"></span>
            <span class="caret"></span>
        </button>
        <button class="col-md-2 atu-options-btn atu-prev-btn" type="button" id="atu-prev-btn" title="Previous 256 characters" >
                <span class='glyphicon glyphicon-chevron-left'></span>
              </button>
        <button class="col-md-2 atu-options-btn atu-next-btn" type="button" id="atu-next-btn" title="Next 256 characters">
                <span class='glyphicon glyphicon-chevron-right'></span>
        </button>
`;

var atu_main_HTML = `

      <div class="row languageRow optionRows">
        <div class="atu-languageChoice">
            <select id="atu-blockMenuID" class="atu-blockMenu">
            <optgroup label="Basic Multilingual Plane">
              <option value="0000">Basic Latin</option><option value="0080">Latin-1 Supplement</option><option value="0100">Latin Extended-A</option><option value="0180">Latin Extended-B</option><option value="0250">IPA Extensions</option><option value="02B0">Spacing Modifier Letters</option><option value="0300">Combining Diacritical Marks</option><option value="0370">Greek and Coptic</option><option value="0400">Cyrillic</option><option value="0500">Cyrillic Supplement</option><option value="0530">Armenian</option><option value="0590">Hebrew</option><option value="0600">Arabic</option><option value="0700">Syriac</option><option value="0750">Arabic Supplement</option><option value="0780">Thaana</option><option value="07C0">NKo</option><option value="0800">Samaritan</option><option value="0840">Mandaic</option><option value="08A0">Arabic Extended-A</option><option value="0900">Devanagari</option><option value="0980">Bengali</option><option value="0A00">Gurmukhi</option><option value="0A80">Gujarati</option><option value="0B00">Oriya</option><option value="0B80">Tamil</option><option value="0C00">Telugu</option><option value="0C80">Kannada</option><option value="0D00">Malayalam</option><option value="0D80">Sinhala</option><option value="0E00">Thai</option><option value="0E80">Lao</option><option value="0F00">Tibetan</option><option value="1000">Myanmar</option><option value="10A0">Georgian</option><option value="1100">Hangul Jamo</option><option value="1200">Ethiopic</option><option value="1380">Ethiopic Supplement</option><option value="13A0">Cherokee</option><option value="1400">Unified Canadian Aboriginal Syllabics</option><option value="1680">Ogham</option><option value="16A0">Runic</option><option value="1700">Tagalog</option><option value="1720">Hanunoo</option><option value="1740">Buhid</option><option value="1760">Tagbanwa</option><option value="1780">Khmer</option><option value="1800">Mongolian</option><option value="18B0">Unified Canadian Aboriginal Syllabics Extended</option><option value="1900">Limbu</option><option value="1950">Tai Le</option><option value="1980">New Tai Lue</option><option value="19E0">Khmer Symbols</option><option value="1A00">Buginese</option><option value="1A20">Tai Tham</option><option value="1AB0">Combining Diacritical Marks Extended</option><option value="1B00">Balinese</option><option value="1B80">Sundanese</option><option value="1BC0">Batak</option><option value="1C00">Lepcha</option><option value="1C50">Ol Chiki</option><option value="1CC0">Sundanese Supplement</option><option value="1CD0">Vedic Extensions</option><option value="1D00">Phonetic Extensions</option><option value="1D80">Phonetic Extensions Supplement</option><option value="1DC0">Combining Diacritical Marks Supplement</option><option value="1E00">Latin Extended Additional</option><option value="1F00">Greek Extended</option><option value="2000">General Punctuation</option><option value="2070">Superscripts and Subscripts</option><option value="20A0">Currency Symbols</option><option value="20D0">Combining Diacritical Marks for Symbols</option><option value="2100">Letterlike Symbols</option><option value="2150">Number Forms</option><option value="2190">Arrows</option><option value="2200">Mathematical Operators</option><option value="2300">Miscellaneous Technical</option><option value="2400">Control Pictures</option><option value="2440">Optical Character Recognition</option><option value="2460">Enclosed Alphanumerics</option><option value="2500">Box Drawing</option><option value="2580">Block Elements</option><option value="25A0">Geometric Shapes</option><option value="2600">Miscellaneous Symbols</option><option value="2700">Dingbats</option><option value="27C0">Miscellaneous Mathematical Symbols-A</option><option value="27F0">Supplemental Arrows-A</option><option value="2800">Braille Patterns</option><option value="2900">Supplemental Arrows-B</option><option value="2980">Miscellaneous Mathematical Symbols-B</option><option value="2A00">Supplemental Mathematical Operators</option><option value="2B00">Miscellaneous Symbols and Arrows</option><option value="2C00">Glagolitic</option><option value="2C60">Latin Extended-C</option><option value="2C80">Coptic</option><option value="2D00">Georgian Supplement</option><option value="2D30">Tifinagh</option><option value="2D80">Ethiopic Extended</option><option value="2DE0">Cyrillic Extended-A</option><option value="2E00">Supplemental Punctuation</option><option value="2E80">CJK Radicals Supplement</option><option value="2F00">Kangxi Radicals</option><option value="2FF0">Ideographic Description Characters</option><option value="3000">CJK Symbols and Punctuation</option><option value="3040">Hiragana</option><option value="30A0">Katakana</option><option value="3100">Bopomofo</option><option value="3130">Hangul Compatibility Jamo</option><option value="3190">Kanbun</option><option value="31A0">Bopomofo Extended</option><option value="31C0">CJK Strokes</option><option value="31F0">Katakana Phonetic Extensions</option><option value="3200">Enclosed CJK Letters and Months</option><option value="3300">CJK Compatibility</option><option value="3400">CJK Unified Ideographs Extension A</option><option value="4DC0">Yijing Hexagram Symbols</option><option value="4E00">CJK Unified Ideographs</option><option value="A000">Yi Syllables</option><option value="A490">Yi Radicals</option><option value="A4D0">Lisu</option><option value="A500">Vai</option><option value="A640">Cyrillic Extended-B</option><option value="A6A0">Bamum</option><option value="A700">Modifier Tone Letters</option><option value="A720">Latin Extended-D</option><option value="A800">Syloti Nagri</option><option value="A830">Common Indic Number Forms</option><option value="A840">Phags-pa</option><option value="A880">Saurashtra</option><option value="A8E0">Devanagari Extended</option><option value="A900">Kayah Li</option><option value="A930">Rejang</option><option value="A960">Hangul Jamo Extended-A</option><option value="A980">Javanese</option><option value="A9E0">Myanmar Extended-B</option><option value="AA00">Cham</option><option value="AA60">Myanmar Extended-A</option><option value="AA80">Tai Viet</option><option value="AAE0">Meetei Mayek Extensions</option><option value="AB00">Ethiopic Extended-A</option><option value="AB30">Latin Extended-E</option><option value="ABC0">Meetei Mayek</option><option value="AC00">Hangul Syllables</option><option value="D7B0">Hangul Jamo Extended-B</option><option value="D800">High Surrogates</option><option value="DB80">High Private Use Surrogates</option><option value="DC00">Low Surrogates</option><option value="E000">Private Use Area</option><option value="F900">CJK Compatibility Ideographs</option><option value="FB00">Alphabetic Presentation Forms</option><option value="FB50">Arabic Presentation Forms-A</option><option value="FE00">Variation Selectors</option><option value="FE10">Vertical Forms</option><option value="FE20">Combining Half Marks</option><option value="FE30">CJK Compatibility Forms</option><option value="FE50">Small Form Variants</option><option value="FE70">Arabic Presentation Forms-B</option><option value="FF00">Halfwidth and Fullwidth Forms</option><option value="FFF0">Specials</option></optgroup><optgroup label="Supplementary Multilingual Plane"><option value="10000">Linear B Syllabary</option><option value="10080">Linear B Ideograms</option><option value="10100">Aegean Numbers</option><option value="10140">Ancient Greek Numbers</option><option value="10190">Ancient Symbols</option><option value="101D0">Phaistos Disc</option><option value="10280">Lycian</option><option value="102A0">Carian</option><option value="102E0">Coptic Epact Numbers</option><option value="10300">Old Italic</option><option value="10330">Gothic</option><option value="10350">Old Permic</option><option value="10380">Ugaritic</option><option value="103A0">Old Persian</option><option value="10400">Deseret</option><option value="10450">Shavian</option><option value="10480">Osmanya</option><option value="10500">Elbasan</option><option value="10530">Caucasian Albanian</option><option value="10600">Linear A</option><option value="10800">Cypriot Syllabary</option><option value="10840">Imperial Aramaic</option><option value="10860">Palmyrene</option><option value="10880">Nabataean</option><option value="10900">Phoenician</option><option value="10920">Lydian</option><option value="10980">Meroitic Hieroglyphs</option><option value="109A0">Meroitic Cursive</option><option value="10A00">Kharoshthi</option><option value="10A60">Old South Arabian</option><option value="10A80">Old North Arabian</option><option value="10AC0">Manichaean</option><option value="10B00">Avestan</option><option value="10B40">Inscriptional Parthian</option><option value="10B60">Inscriptional Pahlavi</option><option value="10B80">Psalter Pahlavi</option><option value="10C00">Old Turkic</option><option value="10E60">Rumi Numeral Symbols</option><option value="11000">Brahmi</option><option value="11080">Kaithi</option><option value="110D0">Sora Sompeng</option><option value="11100">Chakma</option><option value="11150">Mahajani</option><option value="11180">Sharada</option><option value="111E0">Sinhala Archaic Numbers</option><option value="11200">Khojki</option><option value="112B0">Khudawadi</option><option value="11300">Grantha</option><option value="11480">Tirhuta</option><option value="11580">Siddham</option><option value="11600">Modi</option><option value="11680">Takri</option><option value="118A0">Warang Citi</option><option value="11AC0">Pau Cin Hau</option><option value="12000">Cuneiform</option><option value="12400">Cuneiform Numbers and Punctuation</option><option value="13000">Egyptian Hieroglyphs</option><option value="16800">Bamum Supplement</option><option value="16A40">Mro</option><option value="16AD0">Bassa Vah</option><option value="16B00">Pahawh Hmong</option><option value="16F00">Miao</option><option value="1B000">Kana Supplement</option><option value="1BC00">Duployan</option><option value="1BCA0">Shorthand Format Controls</option><option value="1D000">Byzantine Musical Symbols</option><option value="1D100">Musical Symbols</option><option value="1D200">Ancient Greek Musical Notation</option><option value="1D300">Tai Xuan Jing Symbols</option><option value="1D360">Counting Rod Numerals</option><option value="1D400">Mathematical Alphanumeric Symbols</option><option value="1E800">Mende Kikakui</option><option value="1EE00">Arabic Mathematical Alphabetic Symbols</option><option value="1F000">Mahjong Tiles</option><option value="1F030">Domino Tiles</option><option value="1F0A0">Playing Cards</option><option value="1F100">Enclosed Alphanumeric Supplement</option><option value="1F200">Enclosed Ideographic Supplement</option><option value="1F300">Miscellaneous Symbols and Pictographs</option><option value="1F600">Emoticons</option><option value="1F650">Ornamental Dingbats</option><option value="1F680">Transport and Map Symbols</option><option value="1F700">Alchemical Symbols</option><option value="1F780">Geometric Shapes Extended</option><option value="1F800">Supplemental Arrows-C</option></optgroup><optgroup label="Supplementary Ideographic Plane"><option value="20000">CJK Unified Ideographs Extension B</option><option value="2A700">CJK Unified Ideographs Extension C</option><option value="2B740">CJK Unified Ideographs Extension D</option><option value="2F800">CJK Compatibility Ideographs Supplement</option></optgroup><optgroup label="Supplementary Special-Purpose Plane"><option value="E0000">Tags</option><option value="E0100">Variation Selectors Supplement</option></optgroup><optgroup label="Supplementary Private-Use Area"><option value="F0000">Supplementary Private Use Area-A</option><option value="100000">Supplementary Private Use Area-B</option>
            </optgroup>
          </select>
        </div>
      </div>
  
      <div class="row searchUnicodeRow optionRows bottomOptionRow">
          <span class="searchUnicodeLabel col-md-3">Search U+</span>
          <input class="col-md-6 atu-ucode" placeholder="Unicode Number" size="6" maxlength="6" pattern="[0-9a-zA-Z]{1,6}" >
          <div class="col-md-3">
            <button type="button" class="atu-ucode-search-btn">
              <span class='glyphicon glyphicon-search'></span>
            </button>
            <span class="glyphicon glyphicon-question-sign"></span>
          </div>
      </div>    

      <div id="mapPopup" class="row theKeys">
        <div class="col-md-12 chars">
              <div class="row">
                <div id='mapPopupBodyInitial' class='atu-mapPopupBody col-md-12'>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,0)'> </div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,1)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,2)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,3)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,4)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,5)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,6)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,7)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,8)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,9)'> </div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,10)'>
  </div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,11)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,12)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,13)'>
  </div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,14)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,15)'></div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,16)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,17)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,18)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,19)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,20)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,21)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,22)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,23)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,24)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,25)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,26)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,27)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,28)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,29)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,30)'></div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,31)'></div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c normal' data-info='SPACE' onclick='clicked(this,32)'> </div></div><div class='sameWidth'><div class='c normal' data-info='EXCLAMATION MARK' onclick='clicked(this,33)'>!</div></div><div class='sameWidth'><div class='c normal' data-info='QUOTATION MARK' onclick='clicked(this,34)'>'</div></div><div class='sameWidth'><div class='c normal' data-info='NUMBER SIGN' onclick='clicked(this,35)'>#</div></div><div class='sameWidth'><div class='c normal' data-info='DOLLAR SIGN' onclick='clicked(this,36)'>$</div></div><div class='sameWidth'><div class='c normal' data-info='PERCENT SIGN' onclick='clicked(this,37)'>%</div></div><div class='sameWidth'><div class='c normal' data-info='AMPERSAND' onclick='clicked(this,38)'>&amp;</div></div><div class='sameWidth'><div class='c normal' data-info='APOSTROPHE' onclick='clicked(this,39)'>'</div></div><div class='sameWidth'><div class='c normal' data-info='LEFT PARENTHESIS' onclick='clicked(this,40)'>(</div></div><div class='sameWidth'><div class='c normal' data-info='RIGHT PARENTHESIS' onclick='clicked(this,41)'>)</div></div><div class='sameWidth'><div class='c normal' data-info='ASTERISK' onclick='clicked(this,42)'>*</div></div><div class='sameWidth'><div class='c normal' data-info='PLUS SIGN' onclick='clicked(this,43)'>+</div></div><div class='sameWidth'><div class='c normal' data-info='COMMA' onclick='clicked(this,44)'>,</div></div><div class='sameWidth'><div class='c normal' data-info='HYPHEN-MINUS' onclick='clicked(this,45)'>-</div></div><div class='sameWidth'><div class='c normal' data-info='FULL STOP' onclick='clicked(this,46)'>.</div></div><div class='sameWidth'><div class='c normal' data-info='SOLIDUS' onclick='clicked(this,47)'>/</div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c normal' data-info='DIGIT ZERO' onclick='clicked(this,48)'>0</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT ONE' onclick='clicked(this,49)'>1</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT TWO' onclick='clicked(this,50)'>2</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT THREE' onclick='clicked(this,51)'>3</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT FOUR' onclick='clicked(this,52)'>4</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT FIVE' onclick='clicked(this,53)'>5</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT SIX' onclick='clicked(this,54)'>6</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT SEVEN' onclick='clicked(this,55)'>7</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT EIGHT' onclick='clicked(this,56)'>8</div></div><div class='sameWidth'><div class='c normal' data-info='DIGIT NINE' onclick='clicked(this,57)'>9</div></div><div class='sameWidth'><div class='c normal' data-info='COLON' onclick='clicked(this,58)'>:</div></div><div class='sameWidth'><div class='c normal' data-info='SEMICOLON' onclick='clicked(this,59)'>;</div></div><div class='sameWidth'><div class='c normal' data-info='LESS-THAN SIGN' onclick='clicked(this,60)'>&lt;</div></div><div class='sameWidth'><div class='c normal' data-info='EQUALS SIGN' onclick='clicked(this,61)'>=</div></div><div class='sameWidth'><div class='c normal' data-info='GREATER-THAN SIGN' onclick='clicked(this,62)'>&gt;</div></div><div class='sameWidth'><div class='c normal' data-info='QUESTION MARK' onclick='clicked(this,63)'>?</div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c normal' data-info='COMMERCIAL AT' onclick='clicked(this,64)'>@</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A' onclick='clicked(this,65)'>A</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER B' onclick='clicked(this,66)'>B</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER C' onclick='clicked(this,67)'>C</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER D' onclick='clicked(this,68)'>D</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER E' onclick='clicked(this,69)'>E</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER F' onclick='clicked(this,70)'>F</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER G' onclick='clicked(this,71)'>G</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER H' onclick='clicked(this,72)'>H</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER I' onclick='clicked(this,73)'>I</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER J' onclick='clicked(this,74)'>J</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER K' onclick='clicked(this,75)'>K</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER L' onclick='clicked(this,76)'>L</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER M' onclick='clicked(this,77)'>M</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER N' onclick='clicked(this,78)'>N</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O' onclick='clicked(this,79)'>O</div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER P' onclick='clicked(this,80)'>P</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER Q' onclick='clicked(this,81)'>Q</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER R' onclick='clicked(this,82)'>R</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER S' onclick='clicked(this,83)'>S</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER T' onclick='clicked(this,84)'>T</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER U' onclick='clicked(this,85)'>U</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER V' onclick='clicked(this,86)'>V</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER W' onclick='clicked(this,87)'>W</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER X' onclick='clicked(this,88)'>X</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER Y' onclick='clicked(this,89)'>Y</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER Z' onclick='clicked(this,90)'>Z</div></div><div class='sameWidth'><div class='c normal' data-info='LEFT SQUARE BRACKET' onclick='clicked(this,91)'>[</div></div><div class='sameWidth'><div class='c normal' data-info='REVERSE SOLIDUS' onclick='clicked(this,92)'>\</div></div><div class='sameWidth'><div class='c normal' data-info='RIGHT SQUARE BRACKET' onclick='clicked(this,93)'>]</div></div><div class='sameWidth'><div class='c normal' data-info='CIRCUMFLEX ACCENT' onclick='clicked(this,94)'>^</div></div><div class='sameWidth'><div class='c normal' data-info='LOW LINE' onclick='clicked(this,95)'>_</div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c normal' data-info='GRAVE ACCENT' onclick='clicked(this,96)'></div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A' onclick='clicked(this,97)'>a</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER B' onclick='clicked(this,98)'>b</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER C' onclick='clicked(this,99)'>c</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER D' onclick='clicked(this,100)'>d</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER E' onclick='clicked(this,101)'>e</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER F' onclick='clicked(this,102)'>f</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER G' onclick='clicked(this,103)'>g</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER H' onclick='clicked(this,104)'>h</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER I' onclick='clicked(this,105)'>i</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER J' onclick='clicked(this,106)'>j</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER K' onclick='clicked(this,107)'>k</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER L' onclick='clicked(this,108)'>l</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER M' onclick='clicked(this,109)'>m</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER N' onclick='clicked(this,110)'>n</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O' onclick='clicked(this,111)'>o</div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER P' onclick='clicked(this,112)'>p</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER Q' onclick='clicked(this,113)'>q</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER R' onclick='clicked(this,114)'>r</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER S' onclick='clicked(this,115)'>s</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER T' onclick='clicked(this,116)'>t</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER U' onclick='clicked(this,117)'>u</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER V' onclick='clicked(this,118)'>v</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER W' onclick='clicked(this,119)'>w</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER X' onclick='clicked(this,120)'>x</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER Y' onclick='clicked(this,121)'>y</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER Z' onclick='clicked(this,122)'>z</div></div><div class='sameWidth'><div class='c normal' data-info='LEFT CURLY BRACKET' onclick='clicked(this,123)'>{</div></div><div class='sameWidth'><div class='c normal' data-info='VERTICAL LINE' onclick='clicked(this,124)'>|</div></div><div class='sameWidth'><div class='c normal' data-info='RIGHT CURLY BRACKET' onclick='clicked(this,125)'>}</div></div><div class='sameWidth'><div class='c normal' data-info='TILDE' onclick='clicked(this,126)'>~</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,127)'>&nbsp;</div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,128)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,129)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,130)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,131)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,132)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,133)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,134)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,135)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,136)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,137)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,138)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,139)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,140)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,141)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,142)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,143)'>&nbsp;</div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,144)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,145)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,146)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,147)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,148)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,149)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,150)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,151)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,152)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,153)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,154)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,155)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,156)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,157)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,158)'>&nbsp;</div></div><div class='sameWidth'><div class='c control' data-info='&lt;control&gt; (Other, control)' onclick='clicked(this,159)'>&nbsp;</div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c normal' data-info='NO-BREAK SPACE' onclick='clicked(this,160)'>&nbsp;</div></div><div class='sameWidth'><div class='c normal' data-info='INVERTED EXCLAMATION MARK' onclick='clicked(this,161)'>¡</div></div><div class='sameWidth'><div class='c normal' data-info='CENT SIGN' onclick='clicked(this,162)'>¢</div></div><div class='sameWidth'><div class='c normal' data-info='POUND SIGN' onclick='clicked(this,163)'>£</div></div><div class='sameWidth'><div class='c normal' data-info='CURRENCY SIGN' onclick='clicked(this,164)'>¤</div></div><div class='sameWidth'><div class='c normal' data-info='YEN SIGN' onclick='clicked(this,165)'>¥</div></div><div class='sameWidth'><div class='c normal' data-info='BROKEN BAR' onclick='clicked(this,166)'>¦</div></div><div class='sameWidth'><div class='c normal' data-info='SECTION SIGN' onclick='clicked(this,167)'>§</div></div><div class='sameWidth'><div class='c normal' data-info='DIAERESIS' onclick='clicked(this,168)'>¨</div></div><div class='sameWidth'><div class='c normal' data-info='COPYRIGHT SIGN' onclick='clicked(this,169)'>©</div></div><div class='sameWidth'><div class='c normal' data-info='FEMININE ORDINAL INDICATOR' onclick='clicked(this,170)'>ª</div></div><div class='sameWidth'><div class='c normal' data-info='LEFT-POINTING DOUBLE ANGLE QUOTATION MARK' onclick='clicked(this,171)'>«</div></div><div class='sameWidth'><div class='c normal' data-info='NOT SIGN' onclick='clicked(this,172)'>¬</div></div><div class='sameWidth'><div class='c control' data-info='SOFT HYPHEN (Other, format)' onclick='clicked(this,173)'>­</div></div><div class='sameWidth'><div class='c normal' data-info='REGISTERED SIGN' onclick='clicked(this,174)'>®</div></div><div class='sameWidth'><div class='c normal' data-info='MACRON' onclick='clicked(this,175)'>¯</div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c normal' data-info='DEGREE SIGN' onclick='clicked(this,176)'>°</div></div><div class='sameWidth'><div class='c normal' data-info='PLUS-MINUS SIGN' onclick='clicked(this,177)'>±</div></div><div class='sameWidth'><div class='c normal' data-info='SUPERSCRIPT TWO' onclick='clicked(this,178)'>²</div></div><div class='sameWidth'><div class='c normal' data-info='SUPERSCRIPT THREE' onclick='clicked(this,179)'>³</div></div><div class='sameWidth'><div class='c normal' data-info='ACUTE ACCENT' onclick='clicked(this,180)'>´</div></div><div class='sameWidth'><div class='c normal' data-info='MICRO SIGN' onclick='clicked(this,181)'>µ</div></div><div class='sameWidth'><div class='c normal' data-info='PILCROW SIGN' onclick='clicked(this,182)'>¶</div></div><div class='sameWidth'><div class='c normal' data-info='MIDDLE DOT' onclick='clicked(this,183)'>·</div></div><div class='sameWidth'><div class='c normal' data-info='CEDILLA' onclick='clicked(this,184)'>¸</div></div><div class='sameWidth'><div class='c normal' data-info='SUPERSCRIPT ONE' onclick='clicked(this,185)'>¹</div></div><div class='sameWidth'><div class='c normal' data-info='MASCULINE ORDINAL INDICATOR' onclick='clicked(this,186)'>º</div></div><div class='sameWidth'><div class='c normal' data-info='RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK' onclick='clicked(this,187)'>»</div></div><div class='sameWidth'><div class='c normal' data-info='VULGAR FRACTION ONE QUARTER' onclick='clicked(this,188)'>¼</div></div><div class='sameWidth'><div class='c normal' data-info='VULGAR FRACTION ONE HALF' onclick='clicked(this,189)'>½</div></div><div class='sameWidth'><div class='c normal' data-info='VULGAR FRACTION THREE QUARTERS' onclick='clicked(this,190)'>¾</div></div><div class='sameWidth'><div class='c normal' data-info='INVERTED QUESTION MARK' onclick='clicked(this,191)'>¿</div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A WITH GRAVE' onclick='clicked(this,192)'>À</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A WITH ACUTE' onclick='clicked(this,193)'>Á</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A WITH CIRCUMFLEX' onclick='clicked(this,194)'>Â</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A WITH TILDE' onclick='clicked(this,195)'>Ã</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A WITH DIAERESIS' onclick='clicked(this,196)'>Ä</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER A WITH RING ABOVE' onclick='clicked(this,197)'>Å</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER AE' onclick='clicked(this,198)'>Æ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER C WITH CEDILLA' onclick='clicked(this,199)'>Ç</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER E WITH GRAVE' onclick='clicked(this,200)'>È</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER E WITH ACUTE' onclick='clicked(this,201)'>É</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER E WITH CIRCUMFLEX' onclick='clicked(this,202)'>Ê</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER E WITH DIAERESIS' onclick='clicked(this,203)'>Ë</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER I WITH GRAVE' onclick='clicked(this,204)'>Ì</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER I WITH ACUTE' onclick='clicked(this,205)'>Í</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER I WITH CIRCUMFLEX' onclick='clicked(this,206)'>Î</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER I WITH DIAERESIS' onclick='clicked(this,207)'>Ï</div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER ETH' onclick='clicked(this,208)'>Ð</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER N WITH TILDE' onclick='clicked(this,209)'>Ñ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O WITH GRAVE' onclick='clicked(this,210)'>Ò</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O WITH ACUTE' onclick='clicked(this,211)'>Ó</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O WITH CIRCUMFLEX' onclick='clicked(this,212)'>Ô</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O WITH TILDE' onclick='clicked(this,213)'>Õ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O WITH DIAERESIS' onclick='clicked(this,214)'>Ö</div></div><div class='sameWidth'><div class='c normal' data-info='MULTIPLICATION SIGN' onclick='clicked(this,215)'>×</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER O WITH STROKE' onclick='clicked(this,216)'>Ø</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER U WITH GRAVE' onclick='clicked(this,217)'>Ù</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER U WITH ACUTE' onclick='clicked(this,218)'>Ú</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER U WITH CIRCUMFLEX' onclick='clicked(this,219)'>Û</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER U WITH DIAERESIS' onclick='clicked(this,220)'>Ü</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER Y WITH ACUTE' onclick='clicked(this,221)'>Ý</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN CAPITAL LETTER THORN' onclick='clicked(this,222)'>Þ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER SHARP S' onclick='clicked(this,223)'>ß</div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A WITH GRAVE' onclick='clicked(this,224)'>à</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A WITH ACUTE' onclick='clicked(this,225)'>á</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A WITH CIRCUMFLEX' onclick='clicked(this,226)'>â</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A WITH TILDE' onclick='clicked(this,227)'>ã</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A WITH DIAERESIS' onclick='clicked(this,228)'>ä</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER A WITH RING ABOVE' onclick='clicked(this,229)'>å</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER AE' onclick='clicked(this,230)'>æ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER C WITH CEDILLA' onclick='clicked(this,231)'>ç</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER E WITH GRAVE' onclick='clicked(this,232)'>è</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER E WITH ACUTE' onclick='clicked(this,233)'>é</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER E WITH CIRCUMFLEX' onclick='clicked(this,234)'>ê</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER E WITH DIAERESIS' onclick='clicked(this,235)'>ë</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER I WITH GRAVE' onclick='clicked(this,236)'>ì</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER I WITH ACUTE' onclick='clicked(this,237)'>í</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER I WITH CIRCUMFLEX' onclick='clicked(this,238)'>î</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER I WITH DIAERESIS' onclick='clicked(this,239)'>ï</div></div>
                    </div>
                    <div class='row keyRow'>
                      <div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER ETH' onclick='clicked(this,240)'>ð</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER N WITH TILDE' onclick='clicked(this,241)'>ñ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O WITH GRAVE' onclick='clicked(this,242)'>ò</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O WITH ACUTE' onclick='clicked(this,243)'>ó</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O WITH CIRCUMFLEX' onclick='clicked(this,244)'>ô</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O WITH TILDE' onclick='clicked(this,245)'>õ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O WITH DIAERESIS' onclick='clicked(this,246)'>ö</div></div><div class='sameWidth'><div class='c normal' data-info='DIVISION SIGN' onclick='clicked(this,247)'>÷</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER O WITH STROKE' onclick='clicked(this,248)'>ø</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER U WITH GRAVE' onclick='clicked(this,249)'>ù</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER U WITH ACUTE' onclick='clicked(this,250)'>ú</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER U WITH CIRCUMFLEX' onclick='clicked(this,251)'>û</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER U WITH DIAERESIS' onclick='clicked(this,252)'>ü</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER Y WITH ACUTE' onclick='clicked(this,253)'>ý</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER THORN' onclick='clicked(this,254)'>þ</div></div><div class='sameWidth'><div class='c normal' data-info='LATIN SMALL LETTER Y WITH DIAERESIS' onclick='clicked(this,255)'>ÿ</div></div>
                    </div>
                  </div>

                </div> 
            </div>
          </div>

`;

var rejectionOptions = new Set(["false",'""' , null , false , 'undefined']);

var isUseless = function(something) {
  if (rejectionOptions.has(something) || rejectionOptions.has(typeof something)) {  return true;  }
  else {  return false;  };
};

//////SETUP/////
var udata;
var startPosition;
var atu_the_code;
var uD = [];

var atu_the_input;

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // Check if the XMLHttpRequest object has a "withCredentials" property - "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, false);

  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {
    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
};

var loadUnicodeData = function() {

  var udata;

  $.ajax({
  type: "GET",
  url: "unicodetext.txt",
  async: false,
  success: 
    function (data) {
      udata = data;
    }
  });

  /////so basically Chrome hates me and Jquery AJAX and nothing appears to set the headers properly to allow CORS
/*
  var atu_xhr = new XMLHttpRequest(); //createCORSRequest('GET', "http://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt");
  atu_xhr.open('GET', "http://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt", false);
  atu_xhr.onload = function() {
      udata = atu_xhr.response;
    };

  atu_xhr.send();
*/
  var lines = udata.split('\n');
  for(var i=0; i < (lines.length-1); i++) {
        var entry = lines[i].split(';');
        if (typeof entry[14] == "undefined") { alert("on line "+i+" is "+entry)};
        entry[14] = entry[14].replace('\n', '');
        var code = parseInt(entry[0],16);
        uD[code] = {
         na: entry[1],
         gc: entry[2],
         cc: entry[3],
         bc: entry[4],
         dt: entry[5],
         nv1: entry[6],
         nv: entry[7],
         nv3: entry[8],
         bi: entry[9],
         na1: entry[10],
         is: entry[11],
         suc: entry[12],
         sl: entry[13],
         stc: entry[14]
        };
  }
  fixRange(0x3400, 0x4DB5);
  fixRange(0x4E00, 0x9FCC);
  fixRange(0xAC00, 0xD7A3);
  fixRange(0xD800, 0xDB7F);
  fixRange(0xDB80, 0xDBFF);
  fixRange(0xDC00, 0xDFFF);
  fixRange(0xE000, 0xF8FF);
  fixRange(0x20000, 0x2A6D6);
  fixRange(0x2A700, 0x2B734);
  fixRange(0x2B740, 0x2B81D);
  fixRange(0xF0000, 0xFFFFD);
  fixRange(0x100000, 0x10FFFD);
    
};

function fixRange(first, last) {
  var i;
  var desc = uD[first].na.replace(/, First/, '');
  var cat = uD[first].gc;
  for(i = first; i <= last; i++) {
      uD[i] = {
		   na: desc,
		   gc: cat
              }
    }
}

var cgName = {
  Cc: 'Other, control',
  Cf: 'Other, format',
  Cs: 'Other, surrogate',
  Co: 'Other, private use',
  Cn: 'Other, not assigned'
};

var hexMax = 0x10FFFF;

//////TYPING///////

function addstr(addition) {
  if (!isUseless(atu_the_input)) {  
    atu_the_input.value += addition;  
  };
}

function add(code) {
  addstr(fixedFromCharCode(code)); 
}

function fixedFromCharCode (codePt) {
    if (codePt > 0xFFFF) {
        codePt -= 0x10000;
        return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 +
(codePt & 0x3FF));
    }
    else {
        return String.fromCharCode(codePt);
    }
}

function clicked(elem, code) {
  //elem.style.borderStyle = 'inset';
  add(code);
  //setTimeout(function() { elem.style.borderStyle = 'outset';}, 300); ///set indeneted effect later??
}

//////// UNICODE SEARCHING ///////

////// nothing references this function??????
function addByCode(hexcodeValue) {
  var val = parseInt(hexcodeValue, 16);
  if(!isNaN(val) && val >= 0 && val <= 0x10FFFF) {
    add(val);
  } else {
    alert('Incorrect hexadecimal value');
  }    
}
/////

function handleKeyPress(e, func){
var key = e.keyCode || e.which;
if (key == 13){
  func();
  }
}

function addnewline() {
  addstr("\n");
}

function clearthem() {
  if(confirm("Really erase everything?")) {
    atu_the_input.value = '';
  }
}

function delchar() {
  var len = atu_the_input.value.length;
  if(lowSurrogate(atu_the_input.value.charCodeAt(len-1)) &&
     highSurrogate(atu_the_input.value.charCodeAt(len-2))) {
    atu_the_input.value = atu_the_input.value.substr(0, len - 2); }
  else {
    atu_the_input.value = atu_the_input.value.substr(0, len - 1); }
}

function htmlChar(num) {
  if(num == 0) {
    return ' ';
  } else if(num >= 0x7F && num <= 0x9F) {
    return '\xA0';
  } else if(num < 0x10000) {
    return String.fromCharCode(num);
  } else {
    return '&#' + thisPos + ';'; 
  }
}

function buildTheMap(ucodeVal, blockDOM, mapPopupBodyID) {
  buildMap(mapPopupBodyID, ucodeVal); 
  blockDOM.selectedIndex = 0;
}

function buildMap(mapPopupBodyID, startPos, endPos) {

  var nRows = 16;
  if(endPos) {
    nRows = (endPos - startPos) / 16;
    }

  startPosition = parseInt(startPos, 16);

  if (!isUseless(document.getElementById('atu-next-btn')) ) {
    document.getElementById('atu-next-btn').disabled = startPosition > 0x10FF00;
  };

  if (!isUseless(document.getElementById('atu-next-btn'))) {
    document.getElementById('atu-prev-btn').disabled = startPosition <= 0x000F;
  };

  var startRow = startPos.substr(0, startPos.length - 1);
  var basePos = parseInt(startRow, 16);
  if(isNaN(basePos) || basePos < 0 || basePos > 0x10FFF) {
    alert('Incorrect hexadecimal value');
    return;
  }

  var categ, categ1, annotation, chClass;

  ////
  var rows = document.getElementById(mapPopupBodyID).children;

  for(row=0; row < nRows; row++) {
    var rowno = row.toString(16);
    rowno = rowno.toUpperCase();
    var start = basePos + row;
    ///
    ///rows[row].children[0].innerHTML = pad(start.toString(16).toUpperCase(), 3) + '.'; ///
    ///
    for(col = 0; col < 0x10; col++) {

      thisPos = (basePos-0)*16 + (row*16-0) + (col-0);

      categ = uD[thisPos] ? uD[thisPos].gc : 'Cn';
      categ1 = categ.charAt(0);
      annotation = (categ1 !== 'C') ? '' : ' (' + cgName[categ] + ')';
      chClass =
        thisPos > 0x10FFFF ? 'outside' :
        categ === 'Cn' ? 'unassigned' : categ1 === 'C' ? 'control' : 'normal';

      rows[row].children[col].innerHTML = ///originally +1 for the th

        thisPos > 0x10FFFF ? 
          '<div class=outside> </div>'  :

          '<div class="c ' + chClass + '"' +
          'data-info="' + uName(thisPos) + annotation + '" ' +
          'onclick="clicked(this,' + thisPos + ')"' +
          '>' +
          htmlChar(thisPos) + '</div>';
      }
    }
};     

function setSelect(blockSelectDOM) {

  var doc ='';

  function opt(start, end, name) {
    doc += '<option value="' + start + '"';
    doc += '>' + name;
  };

  function group(name) {
    doc += '<optgroup label="' + name + '">';
  };

  var newBlockID = Math.random().toString().substring(2);
  doc += '<select id="'+newBlockID+'" class="atu-blockMenu">';

  // Data from: http://www.unicode.org/Public/UCD/latest/ucd/Blocks.txt 
  // Use an editor to generate opt() calls and add group() calls manually (for each plane).

  group('Basic Multilingual Plane');
  opt('0000', '007F', 'Basic Latin');
  opt('0080', '00FF', 'Latin-1 Supplement');
  opt('0100', '017F', 'Latin Extended-A');
  opt('0180', '024F', 'Latin Extended-B');
  opt('0250', '02AF', 'IPA Extensions');
  opt('02B0', '02FF', 'Spacing Modifier Letters');
  opt('0300', '036F', 'Combining Diacritical Marks');
  opt('0370', '03FF', 'Greek and Coptic');
  opt('0400', '04FF', 'Cyrillic');
  opt('0500', '052F', 'Cyrillic Supplement');
  opt('0530', '058F', 'Armenian');
  opt('0590', '05FF', 'Hebrew');
  opt('0600', '06FF', 'Arabic');
  opt('0700', '074F', 'Syriac');
  opt('0750', '077F', 'Arabic Supplement');
  opt('0780', '07BF', 'Thaana');
  opt('07C0', '07FF', 'NKo');
  opt('0800', '083F', 'Samaritan');
  opt('0840', '085F', 'Mandaic');
  opt('08A0', '08FF', 'Arabic Extended-A');
  opt('0900', '097F', 'Devanagari');
  opt('0980', '09FF', 'Bengali');
  opt('0A00', '0A7F', 'Gurmukhi');
  opt('0A80', '0AFF', 'Gujarati');
  opt('0B00', '0B7F', 'Oriya');
  opt('0B80', '0BFF', 'Tamil');
  opt('0C00', '0C7F', 'Telugu');
  opt('0C80', '0CFF', 'Kannada');
  opt('0D00', '0D7F', 'Malayalam');
  opt('0D80', '0DFF', 'Sinhala');
  opt('0E00', '0E7F', 'Thai');
  opt('0E80', '0EFF', 'Lao');
  opt('0F00', '0FFF', 'Tibetan');
  opt('1000', '109F', 'Myanmar');
  opt('10A0', '10FF', 'Georgian');
  opt('1100', '11FF', 'Hangul Jamo');
  opt('1200', '137F', 'Ethiopic');
  opt('1380', '139F', 'Ethiopic Supplement');
  opt('13A0', '13FF', 'Cherokee');
  opt('1400', '167F', 'Unified Canadian Aboriginal Syllabics');
  opt('1680', '169F', 'Ogham');
  opt('16A0', '16FF', 'Runic');
  opt('1700', '171F', 'Tagalog');
  opt('1720', '173F', 'Hanunoo');
  opt('1740', '175F', 'Buhid');
  opt('1760', '177F', 'Tagbanwa');
  opt('1780', '17FF', 'Khmer');
  opt('1800', '18AF', 'Mongolian');
  opt('18B0', '18FF', 'Unified Canadian Aboriginal Syllabics Extended');
  opt('1900', '194F', 'Limbu');
  opt('1950', '197F', 'Tai Le');
  opt('1980', '19DF', 'New Tai Lue');
  opt('19E0', '19FF', 'Khmer Symbols');
  opt('1A00', '1A1F', 'Buginese');
  opt('1A20', '1AAF', 'Tai Tham');
  opt('1AB0', '1AFF', 'Combining Diacritical Marks Extended');
  opt('1B00', '1B7F', 'Balinese');
  opt('1B80', '1BBF', 'Sundanese');
  opt('1BC0', '1BFF', 'Batak');
  opt('1C00', '1C4F', 'Lepcha');
  opt('1C50', '1C7F', 'Ol Chiki');
  opt('1CC0', '1CCF', 'Sundanese Supplement');
  opt('1CD0', '1CFF', 'Vedic Extensions');
  opt('1D00', '1D7F', 'Phonetic Extensions');
  opt('1D80', '1DBF', 'Phonetic Extensions Supplement');
  opt('1DC0', '1DFF', 'Combining Diacritical Marks Supplement');
  opt('1E00', '1EFF', 'Latin Extended Additional');
  opt('1F00', '1FFF', 'Greek Extended');
  opt('2000', '206F', 'General Punctuation');
  opt('2070', '209F', 'Superscripts and Subscripts');
  opt('20A0', '20CF', 'Currency Symbols');
  opt('20D0', '20FF', 'Combining Diacritical Marks for Symbols');
  opt('2100', '214F', 'Letterlike Symbols');
  opt('2150', '218F', 'Number Forms');
  opt('2190', '21FF', 'Arrows');
  opt('2200', '22FF', 'Mathematical Operators');
  opt('2300', '23FF', 'Miscellaneous Technical');
  opt('2400', '243F', 'Control Pictures');
  opt('2440', '245F', 'Optical Character Recognition');
  opt('2460', '24FF', 'Enclosed Alphanumerics');
  opt('2500', '257F', 'Box Drawing');
  opt('2580', '259F', 'Block Elements');
  opt('25A0', '25FF', 'Geometric Shapes');
  opt('2600', '26FF', 'Miscellaneous Symbols');
  opt('2700', '27BF', 'Dingbats');
  opt('27C0', '27EF', 'Miscellaneous Mathematical Symbols-A');
  opt('27F0', '27FF', 'Supplemental Arrows-A');
  opt('2800', '28FF', 'Braille Patterns');
  opt('2900', '297F', 'Supplemental Arrows-B');
  opt('2980', '29FF', 'Miscellaneous Mathematical Symbols-B');
  opt('2A00', '2AFF', 'Supplemental Mathematical Operators');
  opt('2B00', '2BFF', 'Miscellaneous Symbols and Arrows');
  opt('2C00', '2C5F', 'Glagolitic');
  opt('2C60', '2C7F', 'Latin Extended-C');
  opt('2C80', '2CFF', 'Coptic');
  opt('2D00', '2D2F', 'Georgian Supplement');
  opt('2D30', '2D7F', 'Tifinagh');
  opt('2D80', '2DDF', 'Ethiopic Extended');
  opt('2DE0', '2DFF', 'Cyrillic Extended-A');
  opt('2E00', '2E7F', 'Supplemental Punctuation');
  opt('2E80', '2EFF', 'CJK Radicals Supplement');
  opt('2F00', '2FDF', 'Kangxi Radicals');
  opt('2FF0', '2FFF', 'Ideographic Description Characters');
  opt('3000', '303F', 'CJK Symbols and Punctuation');
  opt('3040', '309F', 'Hiragana');
  opt('30A0', '30FF', 'Katakana');
  opt('3100', '312F', 'Bopomofo');
  opt('3130', '318F', 'Hangul Compatibility Jamo');
  opt('3190', '319F', 'Kanbun');
  opt('31A0', '31BF', 'Bopomofo Extended');
  opt('31C0', '31EF', 'CJK Strokes');
  opt('31F0', '31FF', 'Katakana Phonetic Extensions');
  opt('3200', '32FF', 'Enclosed CJK Letters and Months');
  opt('3300', '33FF', 'CJK Compatibility');
  opt('3400', '4DBF', 'CJK Unified Ideographs Extension A');
  opt('4DC0', '4DFF', 'Yijing Hexagram Symbols');
  opt('4E00', '9FFF', 'CJK Unified Ideographs');
  opt('A000', 'A48F', 'Yi Syllables');
  opt('A490', 'A4CF', 'Yi Radicals');
  opt('A4D0', 'A4FF', 'Lisu');
  opt('A500', 'A63F', 'Vai');
  opt('A640', 'A69F', 'Cyrillic Extended-B');
  opt('A6A0', 'A6FF', 'Bamum');
  opt('A700', 'A71F', 'Modifier Tone Letters');
  opt('A720', 'A7FF', 'Latin Extended-D');
  opt('A800', 'A82F', 'Syloti Nagri');
  opt('A830', 'A83F', 'Common Indic Number Forms');
  opt('A840', 'A87F', 'Phags-pa');
  opt('A880', 'A8DF', 'Saurashtra');
  opt('A8E0', 'A8FF', 'Devanagari Extended');
  opt('A900', 'A92F', 'Kayah Li');
  opt('A930', 'A95F', 'Rejang');
  opt('A960', 'A97F', 'Hangul Jamo Extended-A');
  opt('A980', 'A9DF', 'Javanese');
  opt('A9E0', 'A9FF', 'Myanmar Extended-B');
  opt('AA00', 'AA5F', 'Cham');
  opt('AA60', 'AA7F', 'Myanmar Extended-A');
  opt('AA80', 'AADF', 'Tai Viet');
  opt('AAE0', 'AAFF', 'Meetei Mayek Extensions');
  opt('AB00', 'AB2F', 'Ethiopic Extended-A');
  opt('AB30', 'AB6F', 'Latin Extended-E');
  opt('ABC0', 'ABFF', 'Meetei Mayek');
  opt('AC00', 'D7AF', 'Hangul Syllables');
  opt('D7B0', 'D7FF', 'Hangul Jamo Extended-B');
  opt('D800', 'DB7F', 'High Surrogates');
  opt('DB80', 'DBFF', 'High Private Use Surrogates');
  opt('DC00', 'DFFF', 'Low Surrogates');
  opt('E000', 'F8FF', 'Private Use Area');
  opt('F900', 'FAFF', 'CJK Compatibility Ideographs');
  opt('FB00', 'FB4F', 'Alphabetic Presentation Forms');
  opt('FB50', 'FDFF', 'Arabic Presentation Forms-A');
  opt('FE00', 'FE0F', 'Variation Selectors');
  opt('FE10', 'FE1F', 'Vertical Forms');
  opt('FE20', 'FE2F', 'Combining Half Marks');
  opt('FE30', 'FE4F', 'CJK Compatibility Forms');
  opt('FE50', 'FE6F', 'Small Form Variants');
  opt('FE70', 'FEFF', 'Arabic Presentation Forms-B');
  opt('FF00', 'FFEF', 'Halfwidth and Fullwidth Forms');
  opt('FFF0', 'FFFF', 'Specials');
  group('Supplementary Multilingual Plane');
  opt('10000', '1007F', 'Linear B Syllabary');
  opt('10080', '100FF', 'Linear B Ideograms');
  opt('10100', '1013F', 'Aegean Numbers');
  opt('10140', '1018F', 'Ancient Greek Numbers');
  opt('10190', '101CF', 'Ancient Symbols');
  opt('101D0', '101FF', 'Phaistos Disc');
  opt('10280', '1029F', 'Lycian');
  opt('102A0', '102DF', 'Carian');
  opt('102E0', '102FF', 'Coptic Epact Numbers');
  opt('10300', '1032F', 'Old Italic');
  opt('10330', '1034F', 'Gothic');
  opt('10350', '1037F', 'Old Permic');
  opt('10380', '1039F', 'Ugaritic');
  opt('103A0', '103DF', 'Old Persian');
  opt('10400', '1044F', 'Deseret');
  opt('10450', '1047F', 'Shavian');
  opt('10480', '104AF', 'Osmanya');
  opt('10500', '1052F', 'Elbasan');
  opt('10530', '1056F', 'Caucasian Albanian');
  opt('10600', '1077F', 'Linear A');
  opt('10800', '1083F', 'Cypriot Syllabary');
  opt('10840', '1085F', 'Imperial Aramaic');
  opt('10860', '1087F', 'Palmyrene');
  opt('10880', '108AF', 'Nabataean');
  opt('10900', '1091F', 'Phoenician');
  opt('10920', '1093F', 'Lydian');
  opt('10980', '1099F', 'Meroitic Hieroglyphs');
  opt('109A0', '109FF', 'Meroitic Cursive');
  opt('10A00', '10A5F', 'Kharoshthi');
  opt('10A60', '10A7F', 'Old South Arabian');
  opt('10A80', '10A9F', 'Old North Arabian');
  opt('10AC0', '10AFF', 'Manichaean');
  opt('10B00', '10B3F', 'Avestan');
  opt('10B40', '10B5F', 'Inscriptional Parthian');
  opt('10B60', '10B7F', 'Inscriptional Pahlavi');
  opt('10B80', '10BAF', 'Psalter Pahlavi');
  opt('10C00', '10C4F', 'Old Turkic');
  opt('10E60', '10E7F', 'Rumi Numeral Symbols');
  opt('11000', '1107F', 'Brahmi');
  opt('11080', '110CF', 'Kaithi');
  opt('110D0', '110FF', 'Sora Sompeng');
  opt('11100', '1114F', 'Chakma');
  opt('11150', '1117F', 'Mahajani');
  opt('11180', '111DF', 'Sharada');
  opt('111E0', '111FF', 'Sinhala Archaic Numbers');
  opt('11200', '1124F', 'Khojki');
  opt('112B0', '112FF', 'Khudawadi');
  opt('11300', '1137F', 'Grantha');
  opt('11480', '114DF', 'Tirhuta');
  opt('11580', '115FF', 'Siddham');
  opt('11600', '1165F', 'Modi');
  opt('11680', '116CF', 'Takri');
  opt('118A0', '118FF', 'Warang Citi');
  opt('11AC0', '11AFF', 'Pau Cin Hau');
  opt('12000', '123FF', 'Cuneiform');
  opt('12400', '1247F', 'Cuneiform Numbers and Punctuation');
  opt('13000', '1342F', 'Egyptian Hieroglyphs');
  opt('16800', '16A3F', 'Bamum Supplement');
  opt('16A40', '16A6F', 'Mro');
  opt('16AD0', '16AFF', 'Bassa Vah');
  opt('16B00', '16B8F', 'Pahawh Hmong');
  opt('16F00', '16F9F', 'Miao');
  opt('1B000', '1B0FF', 'Kana Supplement');
  opt('1BC00', '1BC9F', 'Duployan');
  opt('1BCA0', '1BCAF', 'Shorthand Format Controls');
  opt('1D000', '1D0FF', 'Byzantine Musical Symbols');
  opt('1D100', '1D1FF', 'Musical Symbols');
  opt('1D200', '1D24F', 'Ancient Greek Musical Notation');
  opt('1D300', '1D35F', 'Tai Xuan Jing Symbols');
  opt('1D360', '1D37F', 'Counting Rod Numerals');
  opt('1D400', '1D7FF', 'Mathematical Alphanumeric Symbols');
  opt('1E800', '1E8DF', 'Mende Kikakui');
  opt('1EE00', '1EEFF', 'Arabic Mathematical Alphabetic Symbols');
  opt('1F000', '1F02F', 'Mahjong Tiles');
  opt('1F030', '1F09F', 'Domino Tiles');
  opt('1F0A0', '1F0FF', 'Playing Cards');
  opt('1F100', '1F1FF', 'Enclosed Alphanumeric Supplement');
  opt('1F200', '1F2FF', 'Enclosed Ideographic Supplement');
  opt('1F300', '1F5FF', 'Miscellaneous Symbols and Pictographs');
  opt('1F600', '1F64F', 'Emoticons');
  opt('1F650', '1F67F', 'Ornamental Dingbats');
  opt('1F680', '1F6FF', 'Transport and Map Symbols');
  opt('1F700', '1F77F', 'Alchemical Symbols');
  opt('1F780', '1F7FF', 'Geometric Shapes Extended');
  opt('1F800', '1F8FF', 'Supplemental Arrows-C');
  group('Supplementary Ideographic Plane');
  opt('20000', '2A6DF', 'CJK Unified Ideographs Extension B');
  opt('2A700', '2B73F', 'CJK Unified Ideographs Extension C');
  opt('2B740', '2B81F', 'CJK Unified Ideographs Extension D');
  opt('2F800', '2FA1F', 'CJK Compatibility Ideographs Supplement');
  group('Supplementary Special-Purpose Plane');
  opt('E0000', 'E007F', 'Tags');
  opt('E0100', 'E01EF', 'Variation Selectors Supplement');
  group('Supplementary Private-Use Area');
  opt('F0000', 'FFFFF', 'Supplementary Private Use Area-A');
  opt('100000', '10FFFF', 'Supplementary Private Use Area-B');

  doc += '<\/select>';
  blockSelectDOM.innerHTML = doc;

};

function lowSurrogate(n) {
  return n >= 0xDC00 && n <= 0xDFFFF;
};

function highSurrogate(n) {
  return n >= 0xD800 && n <= 0xDB7F;
};

function fromSurrogates(high, low) {
  return (high - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000;
};

function uName(pos) {
  if(uD[pos]) {
    return uD[pos].na; }
  else {
    return Uplus(pos);
  }
};

function uNum(char) {
  return char.charCodeAt(0).toString(16).toUpperCase();
};

function toHex4(n) {
  return pad(n.toString(16).toUpperCase(), 4);
};

function Uplus(n) {
  return 'U+' + toHex4(n);
};

function pad(s, digits) {
  while(s.length < digits) {
    s = '0' + s;
  }
  return s;
};

function showU() {
  var i, c;
  atu_the_code.value = '';
  for(i = 0; i < atu_the_input.value.length; i++) {
    c = atu_the_input.value.charCodeAt(i);
    if(highSurrogate(c)) {
      atu_the_code.value += Uplus(fromSurrogates(c, atu_the_input.value.charCodeAt(++i))) + ' ';
    } else {
      atu_the_code.value += Uplus(c) + ' ';
    }
  }
  codeArea.style.display = 'block';
};

function showJS() {
  atu_the_code.value = 
    atu_the_input.value.replace(/./g,
      function(c) { return '\\u' + uNum(c); });
  codeArea.style.display = 'block';
}

function showHTML() {
  var i, c;
  atu_the_code.value = '';
  for(i = 0; i < atu_the_input.value.length; i++) {
    c = atu_the_input.value.charCodeAt(i);
    if(highSurrogate(c)) {
      c = fromSurrogates(c, atu_the_input.value.charCodeAt(++i));
    }
    atu_the_code.value += '&' + '#x' + c.toString(16).toUpperCase() + ';';
  }
  codeArea.style.display = 'block';
}

var findMapID = function(theThis) {
  /////////////not working
  return $(theThis).closest(".fullunicodesupportkeyboard").find(".atu-mapPopupBody").attr("id");
};

////// INITIALISATION 

var atu_IME_HTML = `
      <div class='polyanno-lang-selector polyanno-enable-IME-opt'>
        <select name="language" id="polyanno-lang-selector">
        </select>
      </div>
      <div class='polyanno-ime-selector polyanno-enable-IME-opt'>
        <select id="polyanno-ime-selector"></select>
      </div>
`;

////////IMEs

var atu_setup_IME_area2 = function(thisArea) {
  theCurrentIME.getLanguageCodes().forEach( function ( lang ) {
    $langSelector.append(
      $( '<option/>' ).attr( 'value', lang ).text( theCurrentIME.getAutonym( lang ) )
    );
  } );
  $langSelector.on( 'change', function () {
    var lang = $langSelector.find( 'option:selected' ).val() || null;
    theCurrentIME.setLanguage( lang );
  } );
  thisArea.on( 'imeLanguageChange', function () {
    listInputMethods( theCurrentIME.getLanguage() );
  } );

  function listInputMethods( lang ) {
    $imeSelector.empty();
    theCurrentIME.getInputMethods( lang ).forEach( function ( inputMethod ) {
      $imeSelector.append(
        $( '<option/>' ).attr( 'value', inputMethod.id ).text( inputMethod.name )
      );
    } );
    $imeSelector.trigger( 'change' );
  }

  $imeSelector.on( 'change', function () {
    var inputMethodId = $imeSelector.find( 'option:selected' ).val();
    theCurrentIME.load( inputMethodId ).done( function () {
      theCurrentIME.setIM( inputMethodId );
    } );
  } );
};

var atu_setup_IME_area1 = function(thisArea) {
  thisArea.ime({
    showSelector: false
  });
  var theCurrentIME = thisArea.data( 'ime' );
  theCurrentIME.enable();
  if (!isUseless($langSelector)) {
    atu_setup_IME_area2(thisArea);
  };
};

var atu_initialise_IMEs = function() {

  var thisArea = $(atu_the_input);
  if (!isUseless(thisArea)) {
    atu_setup_IME_area1(thisArea);
  };

}; 

var atu_load_scripts = function(the_src, callback_func) {

  var atu_script = document.createElement( 'script' );
  atu_script.type = 'text/javascript';
  //atu_script.async = true; ////???
  atu_script.setAttribute( 'src', the_src );
  atu_script.onload = function() {
    callback_func();
  };
  document.head.appendChild( atu_script );

}; 

var addIMEs = function(by_button, initialise_options, active_load) {

  $(".polyanno-enable-IME").html(atu_IME_HTML);

  var setupIMElisteners = function() {

    if ( by_button ) {
      $(".polyanno-enable-IME").css("display", "none");
      
      $(".polyanno-add-ime").on("click", function(event){
        if ($(this).hasClass("polyanno-IME-options-open")) {
          $(".polyanno-add-ime").addClass("polyanno-IME-options-closed").removeClass("polyanno-IME-options-open");
          $(".polyanno-enable-IME").css("display", "none");
        }
        else {
          $(".polyanno-add-ime").addClass("polyanno-IME-options-open").removeClass("polyanno-IME-options-closed");
          $(".polyanno-enable-IME").css("display", "inline-block");
          $langSelector = $( 'select#polyanno-lang-selector' );
          $imeSelector = $( 'select#polyanno-ime-selector' );
          if (initialise_options) { atu_initialise_IMEs(); };
        };
      });
    }
    else if ( !by_button ) {
      $langSelector = $( 'select#polyanno-lang-selector' );
      $imeSelector = $( 'select#polyanno-ime-selector' );
      if (initialise_options) { atu_initialise_IMEs(); };
    };
  };

  var loadScript2 = function() {  atu_load_scripts("https://rawgit.com/BluePigeons/alltheunicode/master/libs/jquery.ime.js", loadScript3);  };
  var loadScript3 = function() {  atu_load_scripts("https://rawgit.com/wikimedia/jquery.ime/master/src/libs/jquery.ime.selector.js", loadScript4);  };
  var loadScript4 = function() {  atu_load_scripts("https://rawgit.com/wikimedia/jquery.ime/master/src/jquery.ime.preferences.js", loadScript5);  };
  var loadScript5 = function() {  atu_load_scripts("https://rawgit.com/wikimedia/jquery.ime/master/src/jquery.ime.inputmethods.js", setupIMElisteners);  };

  ///because of different storage locations of rangy-core and the rules folder the wikimedia versions are slightly different to the ones in ATU
  ////https://cdn.rawgit.com/BluePigeons/alltheunicode/master/
  ////without CDN in the URL, it always returns the latest Github files BUT throttles traffic
  ////with CDN in the URL, it returns whatever you last submitted to rawgit.com BUT with virtually unlimited traffic
  ////the separate functions as callbacks is necessary because of Javascript being synchronous - they load in the wrong order otherwise
  if (active_load) {
    atu_load_scripts("https://rawgit.com/wikimedia/jquery.ime/master/libs/rangy/rangy-core.js", loadScript2);
  }
  else {
    setupIMElisteners();
  };

};


///////KEYBOARDS

var atu_has_setup_initialised = false; 

var atu_initialise_setup = function() {

  atu_the_code = document.getElementById('atu_the_code');
  loadUnicodeData();
  buildMap("mapPopupBodyInitial", '0000');
  var initialBlocks = document.getElementsByClassName('atu-languageChoice');
  setSelect(initialBlocks);
  document.getElementsByClassName('atu-blockMenu').selectedIndex = 1;

  $( ".atu-keyboard-parent" ).on( "resizestop", ".keyboardPopup", function( event, ui ) {
    var gridwidth = Math.round($("#ViewerBox1").width() / 12 );
    var newWidth = ui.size.width;
    var colwidth = Math.round(newWidth/gridwidth);
    var newName = "col-md-"+colwidth;
    var theClasses = $(".keyboardPopup").attr("class").toString();
    var theStartIndex = theClasses.indexOf("col-md-");
    var theEndIndex;
    var spaceIndex = theClasses.indexOf(" ", theStartIndex);
    var finishingIndex = theClasses.length;
    if (spaceIndex == -1) {  theEndIndex = finishingIndex;  }
    else {  theEndIndex = spaceIndex;  };
    var theClassName = theClasses.substring(theStartIndex, theEndIndex);
    if ((theStartIndex != -1) && (theClassName != newName)) {
      $(".keyboardPopup").removeClass(theClassName).addClass(newName+" ");
    };

  } );

  $(".atu-keyboard-parent").on("click", ".atu-options-dropdown-toggle", function(event){
      var theOptionRows = $(event.target).closest(".keyboardPopup").find(".languageRow");
      var theHandlebar = $(event.target).closest(".keyboardPopup").find(".keyboardHandlebar");
      if (theOptionRows.css("display") == "none") {
        theOptionRows.css("display", "block");
        theHandlebar.css("border-radius", "5px 5px 0px 0px");
      }
      else {
        theOptionRows.css("display", "none");
        theHandlebar.css("border-radius", "5px");
      };
  });

  $(".atu-keyboard-parent").on("click", ".atu-search-dropdown-toggle", function(event){
      var theOptionRows = $(event.target).closest(".keyboardPopup").find(".searchUnicodeRow");
      var theHandlebar = $(event.target).closest(".keyboardPopup").find(".keyboardHandlebar");
      if (theOptionRows.css("display") == "none") {
        theOptionRows.css("display", "block");
        theHandlebar.css("border-radius", "5px 5px 0px 0px");
      }
      else {
        theOptionRows.css("display", "none");
        theHandlebar.css("border-radius", "5px");
      };
  });

  $(".atu-keyboard-parent").on("change", ".atu-blockMenu", function(event) {
    buildMap(findMapID(event.target), event.target.options[event.target.selectedIndex].value);
  });

  $(".atu-keyboard-parent").on("keypress", ".atu-ucode", function(event) {
    handleKeyPress(event, buildTheMap);
  });

  $(".atu-keyboard-parent").on("click", ".atu-ucode-search-btn", function(event){
    var ucodeVal = $(event.target).closest(".searchUnicodeRow").find(".atu-ucode").val();
    var theBlockID = $(event.target).closest(".keyboardPopup").find(".atu-blockMenu").attr("id");
    var blockDOM = document.getElementById(theBlockID);
    buildTheMap(ucodeVal, blockDOM, findMapID(event.target));
  });

  $(".atu-keyboard-parent").on("click", ".atu-prev-btn", function(event){
    buildMap(findMapID(event.target), toHex4(startPosition - 256));
  });

  $(".atu-keyboard-parent").on("click", ".atu-next-btn", function(event){
    buildMap(findMapID(event.target), toHex4(startPosition + 256));
  });

  $(".atu-keyboard-parent").on("mouseover", ".c", function(event){
//////show value????
  });
/*
  var atu_new_style = document.createElement('style');

  //notocoloremoji, notoemoji-regular, notosanstc-regular, notosanssc-regular, notosansmonocjktc-regular, notosansmonocjksc-regular, notosansmonocjkkr-regular, notosansmonocjkjp-regular, notosanskr-regular, notosansjp-regular, notosanscjktc-regular, notosanscjksc-regular, notosanscjkkr-regular, notosanscjkjp-regular, notosanscjk-regular, notoserifthai-regular, notoseriftelugu-regular, notoseriftamil-regular, notoserifmalayalam-regular, notoseriflao-regular, notoserifkhmer-regular, notoserifkannada-regular, notoserifgujarati-regular, notoserifgeorgian-regular, notoserifdevanagari-regular, notoserifbengali-regular, notoserifarmenian-regular, notoserif-regular, notosansyi-regular, notosansvai-regular, notosansugaritic-regular, notosansui-regular, notosanstifinagh-regular, notosanstibetan-regular, notosansthaiui-regular, notosansthai-regular, notosansthaana-regular, notosansteluguui-regular, notosanstelugu-regular, notosanstamilui-regular, notosanstamil-regular, notosanstaiviet-regular, notosanstaitham-regular, notosanstaile-regular, notosanstagbanwa-regular, notosanstagalog-regular, notosanssyriacwestern-regular, notosanssyriacestrangela-regular, notosanssyriaceastern-regular, notosanssymbols-regular, notosanssylotinagri-regular, notosanssundanese-regular, notosanssinhala-regular, notosansshavian-regular, notosanssaurashtra-regular, notosanssamaritan-regular, notosansrunic-regular, notosansrejang-regular, notosansphoenician-regular, notosansphagspa-regular, notosansosmanya-regular, notosansoriyaui-regular, notosansoriya-regular, notosansoldturkic-regular, notosansoldsoutharabian-regular, notosansoldpersian-regular, notosansolditalic-regular, notosansolchiki-regular, notosansogham-regular, notosansnewtailue-regular, notosansnko-regular, notosansmyanmarui-regular, notosansmyanmar-regular, notosansmongolian-regular, notosansmeeteimayek-regular, notosansmandaic-regular, notosansmalayalamui-regular, notosansmalayalam-regular, notosanslydian-regular, notosanslycian-regular, notosanslisu-regular, notosanslinearb-regular, notosanslimbu-regular, notosanslepcha-regular, notosanslaoui-regular, notosanslao-regular, notosanskhmerui-regular, notosanskhmer-regular, notosanskharoshthi-regular, notosanskayahli-regular, notosanskannadaui-regular, notosanskannada-regular, notosanskaithi-regular, notosansjavanese-regular, notosansinscriptionalparthian-regular, notosansinscriptionalpahlavi-regular, notosansimperialaramaic-regular, notosanshebrew-regular, notosanshanunoo-regular, notosansgurmukhiui-regular, notosansgurmukhi-regular, notosansgujaratiui-regular, notosansgujarati-regular, notosansgothic-regular, notosansglagolitic-regular, notosansgeorgian-regular, notosansethiopic-regular, notosansegyptianhieroglyphs-regular, notosansdevanagariui-regular, notosansdevanagari-regular, notosansdeseret-regular, notosanscypriot-regular, notosanscuneiform-regular, notosanscoptic-regular, notosanscherokee-regular, notosanscham-regular, notosanscarian-regular, notosanscanadianaboriginal-regular, notosansbuhid-regular, notosansbuginese-regular, notosansbrahmi-regular, notosansbengaliui-regular, notosansbengali-regular, notosansbatak-regular, notosansbamum-regular, notosansbalinese-regular, notosansavestan-regular, notosansarmenian-regular, notosans-regular, notosans-regular, notonastaliqurdu-regular, notonaskharabicui-regular, notonaskharabic-regular, notokufiarabic-regular, lastresort, Helvetica, Arial, sans-serif ;
  //removed notocoloremoji because of loading times
  atu_new_style.appendChild(document.createTextNode(`
@import url(atu_fonts.css);
.c {
  font-family: notoemoji-regular, notosanstc-regular, notosanssc-regular, notosansmonocjktc-regular, notosansmonocjksc-regular, notosansmonocjkkr-regular, notosansmonocjkjp-regular, notosanskr-regular, notosansjp-regular, notosanscjktc-regular, notosanscjksc-regular, notosanscjkkr-regular, notosanscjkjp-regular, notosanscjk-regular, notoserifthai-regular, notoseriftelugu-regular, notoseriftamil-regular, notoserifmalayalam-regular, notoseriflao-regular, notoserifkhmer-regular, notoserifkannada-regular, notoserifgujarati-regular, notoserifgeorgian-regular, notoserifdevanagari-regular, notoserifbengali-regular, notoserifarmenian-regular, notoserif-regular, notosansyi-regular, notosansvai-regular, notosansugaritic-regular, notosansui-regular, notosanstifinagh-regular, notosanstibetan-regular, notosansthaiui-regular, notosansthai-regular, notosansthaana-regular, notosansteluguui-regular, notosanstelugu-regular, notosanstamilui-regular, notosanstamil-regular, notosanstaiviet-regular, notosanstaitham-regular, notosanstaile-regular, notosanstagbanwa-regular, notosanstagalog-regular, notosanssyriacwestern-regular, notosanssyriacestrangela-regular, notosanssyriaceastern-regular, notosanssymbols-regular, notosanssylotinagri-regular, notosanssundanese-regular, notosanssinhala-regular, notosansshavian-regular, notosanssaurashtra-regular, notosanssamaritan-regular, notosansrunic-regular, notosansrejang-regular, notosansphoenician-regular, notosansphagspa-regular, notosansosmanya-regular, notosansoriyaui-regular, notosansoriya-regular, notosansoldturkic-regular, notosansoldsoutharabian-regular, notosansoldpersian-regular, notosansolditalic-regular, notosansolchiki-regular, notosansogham-regular, notosansnewtailue-regular, notosansnko-regular, notosansmyanmarui-regular, notosansmyanmar-regular, notosansmongolian-regular, notosansmeeteimayek-regular, notosansmandaic-regular, notosansmalayalamui-regular, notosansmalayalam-regular, notosanslydian-regular, notosanslycian-regular, notosanslisu-regular, notosanslinearb-regular, notosanslimbu-regular, notosanslepcha-regular, notosanslaoui-regular, notosanslao-regular, notosanskhmerui-regular, notosanskhmer-regular, notosanskharoshthi-regular, notosanskayahli-regular, notosanskannadaui-regular, notosanskannada-regular, notosanskaithi-regular, notosansjavanese-regular, notosansinscriptionalparthian-regular, notosansinscriptionalpahlavi-regular, notosansimperialaramaic-regular, notosanshebrew-regular, notosanshanunoo-regular, notosansgurmukhiui-regular, notosansgurmukhi-regular, notosansgujaratiui-regular, notosansgujarati-regular, notosansgothic-regular, notosansglagolitic-regular, notosansgeorgian-regular, notosansethiopic-regular, notosansegyptianhieroglyphs-regular, notosansdevanagariui-regular, notosansdevanagari-regular, notosansdeseret-regular, notosanscypriot-regular, notosanscuneiform-regular, notosanscoptic-regular, notosanscherokee-regular, notosanscham-regular, notosanscarian-regular, notosanscanadianaboriginal-regular, notosansbuhid-regular, notosansbuginese-regular, notosansbrahmi-regular, notosansbengaliui-regular, notosansbengali-regular, notosansbatak-regular, notosansbamum-regular, notosansbalinese-regular, notosansavestan-regular, notosansarmenian-regular, notosans-regular, notosans-regular, notonastaliqurdu-regular, notonaskharabicui-regular, notonaskharabic-regular, notokufiarabic-regular, Helvetica, Arial, sans-serif ;
}
  `));
  document.head.appendChild(atu_new_style);
*/
  atu_has_setup_initialised = true;

};

var addKeyboard = function(the_drag_options) {

  var newKeyboardID = add_dragondrop_pop("keyboardPopup", atu_main_HTML, $(".atu-keyboard-parent").attr("id"), the_drag_options.minimise,  atu_handlebar_HTML);
  initialise_dragondrop( $(".atu-keyboard-parent").attr("id"), the_drag_options );
  if (atu_has_setup_initialised == false) { atu_initialise_setup(); };

};

/////take unicode range options???


