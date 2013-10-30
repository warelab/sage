Ext.data.JsonP.Collection({"meta":{},"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Resource' rel='Resource' class='docClass'>Resource</a><div class='subclass '><strong>Collection</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/collection.html#Collection' target='_blank'>collection.js</a></div></pre><div class='doc-contents'><p>A collection of <a href=\"#!/api/Resource\" rel=\"Resource\" class=\"docClass\">Resource</a>s.</p>\n\n<pre class='inline-example '><code>var Cats = <a href=\"#!/api/Collection-static-method-extend\" rel=\"Collection-static-method-extend\" class=\"docClass\">Collection.extend</a>({ url: \"http://catserver.com\" });\nvar cats = new Cats();\ncats.add(new Resource());\ncats.fetch().done(function () { ... });\n</code></pre>\n\n<p>A collection acts as a pseudo-{link Array}, exposing Array API (while not\nhaving an {link Array} prototype, for <a href=\"http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/\">very obscure reasons</a>.)</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Collection'>Collection</span><br/><a href='source/collection.html#Collection-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Collection-method-constructor' class='name expandable'>Collection</a>( <span class='pre'></span> ) : <a href=\"#!/api/Collection\" rel=\"Collection\" class=\"docClass\">Collection</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Collection\" rel=\"Collection\" class=\"docClass\">Collection</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Resource-method-constructor\" rel=\"Resource-method-constructor\" class=\"docClass\">Resource.constructor</a></p></div></div></div><div id='method-add' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Collection'>Collection</span><br/><a href='source/collection.html#Collection-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Collection-method-add' class='name expandable'>add</a>( <span class='pre'>resource</span> ) : <a href=\"#!/api/Collection\" rel=\"Collection\" class=\"docClass\">Collection</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Adds a resource to the collection. ...</div><div class='long'><p>Adds a resource to the collection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resource</span> : <a href=\"#!/api/Resource\" rel=\"Resource\" class=\"docClass\">Resource</a><div class='sub-desc'><p>The resource to add</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Collection\" rel=\"Collection\" class=\"docClass\">Collection</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-fetch' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Resource' rel='Resource' class='defined-in docClass'>Resource</a><br/><a href='source/resource.html#Resource-method-fetch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Resource-method-fetch' class='name expandable'>fetch</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Fetches the resource from a remote service. ...</div><div class='long'><p>Fetches the resource from a remote service.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>A promise</p>\n<ul><li><span class='pre'>done</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>A handler for after the resource is\n        fetched from the server.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Collection'>Collection</span><br/><a href='source/collection.html#Collection-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Collection-method-get' class='name expandable'>get</a>( <span class='pre'>index</span> ) : <a href=\"#!/api/Resource\" rel=\"Resource\" class=\"docClass\">Resource</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves a resource from the collection ...</div><div class='long'><p>Retrieves a resource from the collection</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The 0-based index of the resource to fetch</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Resource\" rel=\"Resource\" class=\"docClass\">Resource</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Collection'>Collection</span><br/><a href='source/collection.html#Collection-method-parse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Collection-method-parse' class='name expandable'>parse</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Parses multiple resources into the collection. ...</div><div class='long'><p>Parses multiple resources into the collection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The JSON object to be parsed</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>A JSON object</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Resource-method-parse\" rel=\"Resource-method-parse\" class=\"docClass\">Resource.parse</a></p></div></div></div><div id='method-properties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Resource' rel='Resource' class='defined-in docClass'>Resource</a><br/><a href='source/resource.html#Resource-method-properties' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Resource-method-properties' class='name expandable'>properties</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the set of service properties. ...</div><div class='long'><p>Gets the set of service properties.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>The set of properties</p>\n</div></li></ul></div></div></div><div id='method-property' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Resource' rel='Resource' class='defined-in docClass'>Resource</a><br/><a href='source/resource.html#Resource-method-property' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Resource-method-property' class='name expandable'>property</a>( <span class='pre'>name, [value]</span> ) : Mixed<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets or sets a property. ...</div><div class='long'><p>Gets or sets a property. If the property has a schema defined, then the\nvalue is validated.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the property</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The value of the property</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>The value of the property</p>\n\n<p>See <a href=\"#!/api/Resource-static-method-extend\" rel=\"Resource-static-method-extend\" class=\"docClass\">extend</a></p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Collection'>Collection</span><br/><a href='source/collection.html#Collection-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Collection-method-remove' class='name expandable'>remove</a>( <span class='pre'>resource</span> ) : <a href=\"#!/api/Resource\" rel=\"Resource\" class=\"docClass\">Resource</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Removes a resource from the collection ...</div><div class='long'><p>Removes a resource from the collection</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resource</span> : <a href=\"#!/api/Resource\" rel=\"Resource\" class=\"docClass\">Resource</a><div class='sub-desc'><p>The resource to remove</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Resource\" rel=\"Resource\" class=\"docClass\">Resource</a></span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Error</span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-schema' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Resource' rel='Resource' class='defined-in docClass'>Resource</a><br/><a href='source/resource.html#Resource-method-schema' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Resource-method-schema' class='name expandable'>schema</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the schema that describes the resource. ...</div><div class='long'><p>Returns the schema that describes the resource.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>A schema object</p>\n</div></li></ul></div></div></div><div id='method-size' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Collection'>Collection</span><br/><a href='source/collection.html#Collection-method-size' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Collection-method-size' class='name expandable'>size</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the number of items in the collection ...</div><div class='long'><p>Gets the number of items in the collection</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-extend' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Collection'>Collection</span><br/><a href='source/collection.html#Collection-static-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Collection-static-method-extend' class='name expandable'>extend</a>( <span class='pre'>schema</span> ) : <a href=\"#!/api/Resource\" rel=\"Resource\" class=\"docClass\">Resource</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Extends the resource by specifying a validating schema. ...</div><div class='long'><p>Extends the resource by specifying a validating schema.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>schema</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The schema to use</p>\n<ul><li><span class='pre'>key</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of a property</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Descriptor of the property</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Resource\" rel=\"Resource\" class=\"docClass\">Resource</a></span><div class='sub-desc'><p>the extended resource</p>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"alternateClassNames":[],"autodetected":{},"aliases":{},"mixedInto":[],"parentMixins":[],"superclasses":["Resource"],"members":[{"meta":{},"owner":"Collection","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{"chainable":true},"owner":"Collection","name":"add","id":"method-add","tagname":"method"},{"meta":{},"owner":"Resource","name":"fetch","id":"method-fetch","tagname":"method"},{"meta":{},"owner":"Collection","name":"get","id":"method-get","tagname":"method"},{"meta":{},"owner":"Collection","name":"parse","id":"method-parse","tagname":"method"},{"meta":{},"owner":"Resource","name":"properties","id":"method-properties","tagname":"method"},{"meta":{},"owner":"Resource","name":"property","id":"method-property","tagname":"method"},{"meta":{},"owner":"Collection","name":"remove","id":"method-remove","tagname":"method"},{"meta":{},"owner":"Resource","name":"schema","id":"method-schema","tagname":"method"},{"meta":{},"owner":"Collection","name":"size","id":"method-size","tagname":"method"},{"meta":{"static":true},"owner":"Collection","name":"extend","id":"static-method-extend","tagname":"method"}],"mixins":[],"extends":"Resource","subclasses":[],"name":"Collection","requires":[],"id":"class-Collection","tagname":"class","short_doc":"A collection of Resources. ...","files":[{"href":"collection.html#Collection","filename":"collection.js"}]});