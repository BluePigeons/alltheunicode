///Javascript used to generate the relevant CSS files to use the full Noto fonts collection - can be used to update it

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
    atu_new_style.appendChild(document.createTextNode(atu_new_font_face));
  });
};
/////use the following to update values of font lists in CSS

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

