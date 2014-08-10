// Created by iWeb 3.0.4 local-build-20140730

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id6" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="545" height="444" style="height: 428px; left: 103px; position: absolute; top: 64px; width: 545px; z-index: 1; "><param name="src" value="Media/Cherry%20Bowl.mov" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id6" type="video/quicktime" width="545" height="444" style="height: 428px; left: 103px; position: absolute; top: 64px; width: 545px; z-index: 1; "><param name="src" value="Cherry_Bowl_files/Cherry%20Bowl-1.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Cherry%20Bowl.mov"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id6" type="video/quicktime" width="545" height="444" data="Media/Cherry%20Bowl.mov" style="height: 428px; left: 103px; position: absolute; top: 64px; width: 545px; z-index: 1; "><param name="src" value="Media/Cherry%20Bowl.mov"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Cherry_Bowl_files/Cherry_BowlMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
