module.exports = function(RED) {
	function MimicServerURLNode(config) {
		var api = require("./mimic-api-clientside-node.js");

		RED.nodes.createNode(this, config);
		var node = this;

		this.on('input', function(msg) {
			var fn = "api.setServerLocation((typeof msg.payload.url !== 'undefined' ? msg.payload.url : config.name))";

			console.log("about to invoke " + fn);
			
			msg.payload = eval(fn);
			node.send(msg);
		});
	}
	RED.nodes.registerType("ServerURL", MimicServerURLNode);
	
	function MimicNode(config) {
		var api = require("./mimic-api-clientside-node.js");

		RED.nodes.createNode(this, config);
		var node = this;

		this.on('input', function(msg) {
			var fn = "api." + config.api;

			// console.log(config);

			// get param names for API function
			// console.log("get params for " + fn);
			var params = api.getParameterNames(eval(fn));

			// console.log("get params for resulted in " + params);
			
			fn += "(";

			if (params.length !== 0) {
				fn += createFunctionString(config, msg, params);
			}
			
			fn += ")";

			// console.log("about to invoke " + fn);

			msg.payload = eval(fn);
			msg.api = config.api;
			node.send(msg);
		});
	}
	RED.nodes.registerType("mimic", MimicNode);
	RED.nodes.registerType("agent", MimicNode);
	RED.nodes.registerType("valuespace", MimicNode);
	
	function createFunctionString (config, msg, params) {
			var str = "";

			var paramDataTypes = {"number":["agentNo","arg","days","delay","drop","flag","index","interval","other","pdusize","port","retry","starttime","time","timeout","state", "persist"],
					"string":["acldb","address","dir","file","host","iface","value","logfile","mask","msg","oiddir","readcomm","writecomm","script","user","varName","protocol","Accessagents","argums","obj", "instance","oid","pos", "variable", "destination"],
					"object":{"number":["agentNos","delays","drops","flags","ports","pdusizes","starttimes","timeouts","retries", "indexs"], "string":["hosts","masks","mibs","protocols","varNames","values","objs", "instances", "variables", "interfaces", "readcomms", "writecomms", "oids"]}
			};
				
			msg.inputs = {};
			
			for (var p = 0; p < params.length; p++) {
				var v;
				
				for (key2 in paramDataTypes) {
					if (key2 === 'object') {
						for (key3 in paramDataTypes.object) {
							if (paramDataTypes.object[key3].includes(params[p]) === true) {
								v = eval("config.arg" + p);
								v = JSON.parse(v);
									
								str += "(typeof msg.payload." + params[p] +
										" !== 'undefined' ? msg.payload." + params[p] +
										" : [" + v + "])";
								
								eval ("msg.inputs." + params[p] + "=" + "(typeof msg.payload." + params[p] +
										" !== 'undefined' ? msg.payload." + params[p] +
										" : [" + v + "])"); 
								break;
							}
						}
					} else {
						if (paramDataTypes[key2].includes(params[p]) === true) {
							switch(key2) {
								case "number":
									// console.log('inside number');
									
									v = parseInt(eval("config.arg" + p));
									
									str += "(typeof msg.payload." + params[p] +
											" !== 'undefined' ? msg.payload." + params[p] +
											" : " + v + ")";

									eval ("msg.inputs." + params[p] + "=" + "(typeof msg.payload." + params[p] +
											" !== 'undefined' ? msg.payload." + params[p] +
											" : " + v + ")"); 
									
									//console.log(v);
								break;
								case "string":
									v = eval("config.arg" + p);
									
									str += "(typeof msg.payload." + params[p] +
											" !== 'undefined' ? msg.payload." + params[p] +
											" : '" + v + "')";
									
									eval ("msg.inputs." + params[p] + "=" + "(typeof msg.payload." + params[p] +
											" !== 'undefined' ? msg.payload." + params[p] +
											" : '" + v + "')"); 									
									
								break;
							}
							break;
						}
					}
				}

				if (params.length - p > 1) {
					str += ",";
				}
				// console.log(str);
			}
			
			return str;
	}
}