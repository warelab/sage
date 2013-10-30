Ext.data.JsonP.Registry({"meta":{},"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Service' rel='Service' class='docClass'>Service</a><div class='subclass '><strong>Registry</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/registry.html#Registry' target='_blank'>registry.js</a></div></pre><div class='doc-contents'><p>Describes a set of registered services.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Service-method-constructor' class='name expandable'>Registry</a>( <span class='pre'>properties</span> ) : <a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>properties</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>A set of properties. These properties will be\n                used to describe the service within the <a href=\"#!/api/Registry\" rel=\"Registry\" class=\"docClass\">Registry</a>.\n                The constructor has some specially-handled properties:</p>\n<ul><li><span class='pre'>initialize</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>A function called when a service is started</p>\n</div></li><li><span class='pre'>registry</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The address of a remote registry</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-add' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Registry'>Registry</span><br/><a href='source/registry.html#Registry-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Registry-method-add' class='name expandable'>add</a>( <span class='pre'>service</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a service to the registry. ...</div><div class='long'><p>Adds a service to the registry.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>service</span> : <a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>A service object or plain object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The assigned ID</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-address' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-address' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-address' class='name expandable'>address</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets URL address info about the service ...</div><div class='long'><p>Gets URL address info about the service</p>\n</div></div></div><div id='method-client' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-client' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-client' class='name expandable'>client</a>( <span class='pre'>[url]</span> ) : <a href=\"#!/api/Client\" rel=\"Client\" class=\"docClass\">Client</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns an HTTP client. ...</div><div class='long'><p>Returns an HTTP client.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The address of the remote service\n    (defaults to <a href=\"#!/api/Service-method-url\" rel=\"Service-method-url\" class=\"docClass\">Service.url</a>()).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Client\" rel=\"Client\" class=\"docClass\">Client</a></span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-find' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Registry'>Registry</span><br/><a href='source/registry.html#Registry-method-find' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Registry-method-find' class='name expandable'>find</a>( <span class='pre'>key, value</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Finds a registered service based on parameters. ...</div><div class='long'><p>Finds a registered service based on parameters. Returns a found\nservice's metadata or null if a service is not found.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Mixed<div class='sub-desc'><p>The name of the parameter</p>\n</div></li><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The value of the parameter</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Service metadata</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-get' class='name expandable'>get</a>( <span class='pre'>path, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines HTTP GET ...</div><div class='long'><p>Defines HTTP GET</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : <a href=\"#!/api/ClientRequest\" rel=\"ClientRequest\" class=\"docClass\">ClientRequest</a><div class='sub-desc'><p>The server request</p>\n</div></li><li><span class='pre'>response</span> : <a href=\"#!/api/ServerResponse\" rel=\"ServerResponse\" class=\"docClass\">ServerResponse</a><div class='sub-desc'><p>The server response</p>\n</div></li><li><span class='pre'>next</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The next callback</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-head' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-head' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-head' class='name expandable'>head</a>( <span class='pre'>path, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines HTTP HEAD ...</div><div class='long'><p>Defines HTTP HEAD</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : <a href=\"#!/api/ClientRequest\" rel=\"ClientRequest\" class=\"docClass\">ClientRequest</a><div class='sub-desc'><p>The server request</p>\n</div></li><li><span class='pre'>response</span> : <a href=\"#!/api/ServerResponse\" rel=\"ServerResponse\" class=\"docClass\">ServerResponse</a><div class='sub-desc'><p>The server response</p>\n</div></li><li><span class='pre'>next</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The next callback</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-initialize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>A virtual method called when the service is started. ...</div><div class='long'><p>A virtual method called when the service is started.</p>\n</div></div></div><div id='method-listen' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-listen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-listen' class='name expandable'>listen</a>( <span class='pre'></span> ) : <a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Listens to a given port. ...</div><div class='long'><p>Listens to a given port. Same effect as <a href=\"#!/api/Service-method-start\" rel=\"Service-method-start\" class=\"docClass\">start</a>, used for\ncompatibility with Connect.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-listening' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-listening' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-listening' class='name expandable'>listening</a>( <span class='pre'></span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Whether the service is currently running. ...</div><div class='long'><p>Whether the service is currently running.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>Is the service running?</p>\n</div></li></ul></div></div></div><div id='method-post' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-post' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-post' class='name expandable'>post</a>( <span class='pre'>path, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines HTTP POST ...</div><div class='long'><p>Defines HTTP POST</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : <a href=\"#!/api/ClientRequest\" rel=\"ClientRequest\" class=\"docClass\">ClientRequest</a><div class='sub-desc'><p>The server request</p>\n</div></li><li><span class='pre'>response</span> : <a href=\"#!/api/ServerResponse\" rel=\"ServerResponse\" class=\"docClass\">ServerResponse</a><div class='sub-desc'><p>The server response</p>\n</div></li><li><span class='pre'>next</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The next callback</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-properties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-properties' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-properties' class='name expandable'>properties</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the set of service properties. ...</div><div class='long'><p>Gets the set of service properties.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>The set of properties</p>\n</div></li></ul></div></div></div><div id='method-property' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-property' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-property' class='name expandable'>property</a>( <span class='pre'>name, [value]</span> ) : Mixed<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets or sets a property ...</div><div class='long'><p>Gets or sets a property</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the property</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The value of the property</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>The value of the property</p>\n</div></li></ul></div></div></div><div id='method-proxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Registry'>Registry</span><br/><a href='source/registry.html#Registry-method-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Registry-method-proxy' class='name expandable'>proxy</a>( <span class='pre'>url</span> ) : <a href=\"#!/api/Registry\" rel=\"Registry\" class=\"docClass\">Registry</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a proxy object for a remote registry. ...</div><div class='long'><p>Create a proxy object for a remote registry. The proxy object\nsupports similar operations as a local registry.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The address of the remote registry</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Registry\" rel=\"Registry\" class=\"docClass\">Registry</a></span><div class='sub-desc'><p>A proxy object representing the registry</p>\n</div></li></ul></div></div></div><div id='method-put' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-put' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-put' class='name expandable'>put</a>( <span class='pre'>path, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines HTTP PUT ...</div><div class='long'><p>Defines HTTP PUT</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : <a href=\"#!/api/ClientRequest\" rel=\"ClientRequest\" class=\"docClass\">ClientRequest</a><div class='sub-desc'><p>The server request</p>\n</div></li><li><span class='pre'>response</span> : <a href=\"#!/api/ServerResponse\" rel=\"ServerResponse\" class=\"docClass\">ServerResponse</a><div class='sub-desc'><p>The server response</p>\n</div></li><li><span class='pre'>next</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The next callback</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-registryURL' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-registryURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-registryURL' class='name expandable'>registryURL</a>( <span class='pre'>address</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the address of a remote registry. ...</div><div class='long'><p>Sets the address of a remote registry.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>address</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The remote URL</p>\n</div></li></ul></div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Registry'>Registry</span><br/><a href='source/registry.html#Registry-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Registry-method-reset' class='name expandable'>reset</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove any registered services from the registry ...</div><div class='long'><p>Remove any registered services from the registry</p>\n</div></div></div><div id='method-resource' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-resource' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-resource' class='name expandable'>resource</a>( <span class='pre'>name, [resource]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets or sets a resource for this service. ...</div><div class='long'><p>Gets or sets a resource for this service.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the resource</p>\n</div></li><li><span class='pre'>resource</span> : <a href=\"#!/api/Resource\" rel=\"Resource\" class=\"docClass\">Resource</a> (optional)<div class='sub-desc'><p>The resource to set</p>\n</div></li></ul></div></div></div><div id='method-resources' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-resources' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-resources' class='name expandable'>resources</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the set of resources for this service. ...</div><div class='long'><p>Gets the set of resources for this service.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>The set of resources</p>\n<ul><li><span class='pre'>key</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The key of the resource</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Resource\" rel=\"Resource\" class=\"docClass\">Resource</a><div class='sub-desc'><p>The resource itself</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-services' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Registry'>Registry</span><br/><a href='source/registry.html#Registry-method-services' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Registry-method-services' class='name expandable'>services</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Shows the currently-registered services. ...</div><div class='long'><p>Shows the currently-registered services.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n<ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></li></ul></div></div></div><div id='method-start' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-start' class='name expandable'>start</a>( <span class='pre'>params</span> ) : <a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Starts the service. ...</div><div class='long'><p>Starts the service.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Start parameters</p>\n<ul><li><span class='pre'>port</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The port on which to start the service</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-stop' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> ) : <a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Stops the service. ...</div><div class='long'><p>Stops the service.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-url' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Service' rel='Service' class='defined-in docClass'>Service</a><br/><a href='source/service.html#Service-method-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-url' class='name expandable'>url</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the URL for the running service. ...</div><div class='long'><p>Gets the URL for the running service.</p>\n</div></div></div></div></div></div></div>","component":false,"alternateClassNames":[],"autodetected":{},"aliases":{},"mixedInto":[],"parentMixins":[],"superclasses":["Service"],"members":[{"meta":{},"owner":"Service","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"Registry","name":"add","id":"method-add","tagname":"method"},{"meta":{},"owner":"Service","name":"address","id":"method-address","tagname":"method"},{"meta":{},"owner":"Service","name":"client","id":"method-client","tagname":"method"},{"meta":{},"owner":"Registry","name":"find","id":"method-find","tagname":"method"},{"meta":{},"owner":"Service","name":"get","id":"method-get","tagname":"method"},{"meta":{},"owner":"Service","name":"head","id":"method-head","tagname":"method"},{"meta":{},"owner":"Service","name":"initialize","id":"method-initialize","tagname":"method"},{"meta":{"chainable":true},"owner":"Service","name":"listen","id":"method-listen","tagname":"method"},{"meta":{},"owner":"Service","name":"listening","id":"method-listening","tagname":"method"},{"meta":{},"owner":"Service","name":"post","id":"method-post","tagname":"method"},{"meta":{},"owner":"Service","name":"properties","id":"method-properties","tagname":"method"},{"meta":{},"owner":"Service","name":"property","id":"method-property","tagname":"method"},{"meta":{},"owner":"Registry","name":"proxy","id":"method-proxy","tagname":"method"},{"meta":{},"owner":"Service","name":"put","id":"method-put","tagname":"method"},{"meta":{},"owner":"Service","name":"registryURL","id":"method-registryURL","tagname":"method"},{"meta":{},"owner":"Registry","name":"reset","id":"method-reset","tagname":"method"},{"meta":{},"owner":"Service","name":"resource","id":"method-resource","tagname":"method"},{"meta":{},"owner":"Service","name":"resources","id":"method-resources","tagname":"method"},{"meta":{},"owner":"Registry","name":"services","id":"method-services","tagname":"method"},{"meta":{"chainable":true},"owner":"Service","name":"start","id":"method-start","tagname":"method"},{"meta":{},"owner":"Service","name":"stop","id":"method-stop","tagname":"method"},{"meta":{},"owner":"Service","name":"url","id":"method-url","tagname":"method"}],"mixins":[],"extends":"Service","subclasses":[],"name":"Registry","requires":[],"id":"class-Registry","tagname":"class","files":[{"href":"registry.html#Registry","filename":"registry.js"}]});