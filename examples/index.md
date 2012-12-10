# 演示文档

---

<span class="colorful">jquery</span>
<span class="colorful">  jquery-easing  </span>
<span class="colorful">jquery-ui</span>

<span class="colorful">base</span>
<span class="colorful">backbone</span>
<span class="colorful">back</span>
<span class="colorful">backup</span>
<span class="colorful">basic</span>

<span class="colorful">position</span>
<span class="colorful">popup</span>

<span class="colorful">color</span>
<span class="colorful">cookie</span>
<span class="colorful">cook</span>

<span class="colorful">overlay</span>
<span class="colorful">over</span>
<span class="colorful">ova</span>
<span class="colorful">overload</span>

<span class="colorful">seajs</span>
<span class="colorful">sea</span>
<span class="colorful">seed</span>

<span class="colorful">word</span>
<span class="colorful">world</span>
<span class="colorful">wolf</span>

<span class="colorful">node</span>
<span class="colorful">noodle</span>
<span class="colorful">noddle</span>

<span class="colorful">arale</span>
<span class="colorful">aralex</span>
<span class="colorful">are</span>

<span class="colorful">event</span>
<span class="colorful">even</span>
<span class="colorful">evernote</span>

<span class="colorful">red</span>
<span class="colorful">read</span>
<span class="colorful">reader</span>
<span class="colorful">readbility</span>
<span class="colorful">record</span>

````javascript
seajs.use(['$', 'word-color'], function($, wordColor){

    $('.colorful').each(function(index, item) {
        item = $(item);
        item.css('color', wordColor(item.html()));
    });

});
````
