// Created by iWeb 3.0.4 local-build-20140730

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="452" height="371" style="height: 355px; left: 150px; position: absolute; top: 122px; width: 452px; z-index: 1; "><param name="src" value="Media/Green%20Bowl.mov" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="452" height="371" style="height: 355px; left: 150px; position: absolute; top: 122px; width: 452px; z-index: 1; "><param name="src" value="Bowl_files/Green%20Bowl-1.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Green%20Bowl.mov"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="452" height="371" data="Media/Green%20Bowl.mov" style="height: 355px; left: 150px; position: absolute; top: 122px; width: 452px; z-index: 1; "><param name="src" value="Media/Green%20Bowl.mov"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Bowl_files/BowlMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
