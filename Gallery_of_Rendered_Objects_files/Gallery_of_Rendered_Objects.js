// Created by iWeb 3.0.4 local-build-20140730

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="500" height="409" style="height: 393px; left: 100px; position: absolute; top: 135px; width: 500px; z-index: 1; "><param name="src" value="Media/Silver%20Candle%20Holder_Anim-1.mov" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="500" height="409" style="height: 393px; left: 100px; position: absolute; top: 135px; width: 500px; z-index: 1; "><param name="src" value="Gallery_of_Rendered_Objects_files/Silver%20Candle%20Holder_Anim.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Silver%20Candle%20Holder_Anim-1.mov"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="500" height="409" data="Media/Silver%20Candle%20Holder_Anim-1.mov" style="height: 393px; left: 100px; position: absolute; top: 135px; width: 500px; z-index: 1; "><param name="src" value="Media/Silver%20Candle%20Holder_Anim-1.mov"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Gallery_of_Rendered_Objects_files/Gallery_of_Rendered_ObjectsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
