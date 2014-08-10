// Created by iWeb 3.0.4 local-build-20140730

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id5" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="508" height="415" style="height: 399px; left: 122px; position: absolute; top: 78px; width: 508px; z-index: 1; "><param name="src" value="Media/Coin%20Bank_Anim.mov" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id5" type="video/quicktime" width="508" height="415" style="height: 399px; left: 122px; position: absolute; top: 78px; width: 508px; z-index: 1; "><param name="src" value="Coin_Bank_files/Coin%20Bank_Anim-1.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Coin%20Bank_Anim.mov"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id5" type="video/quicktime" width="508" height="415" data="Media/Coin%20Bank_Anim.mov" style="height: 399px; left: 122px; position: absolute; top: 78px; width: 508px; z-index: 1; "><param name="src" value="Media/Coin%20Bank_Anim.mov"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Coin_Bank_files/Coin_BankMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
