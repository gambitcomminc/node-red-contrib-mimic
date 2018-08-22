var screenDebugFlag = 0;
var consoleDebugFlag = 0;

var isNode = new Function("try {return this===global;}catch(e){return false;}");

if (isNode()) {
    console.log("running under node.js");
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    exports.setServerLocation = setServerLocation;
    exports.getServerLocation = getServerLocation;
    exports.mimic_get_free_vm = mimic_get_free_vm;
    exports.mimic_get_max = mimic_get_max;
    exports.mimic_get_protocols = mimic_get_protocols;
    exports.mimic_get_log = mimic_get_log;
    exports.mimic_get_last = mimic_get_last;
    exports.mimic_get_version = mimic_get_version;
    exports.mimic_get_clients = mimic_get_clients;
    exports.mimic_get_cfgfile = mimic_get_cfgfile;
    exports.mimic_get_configured_list = mimic_get_configured_list;
    exports.mimic_get_active_list = mimic_get_active_list;
    exports.mimic_get_active_data_list = mimic_get_active_data_list;
    exports.mimic_get_changed_config_list = mimic_get_changed_config_list;
    exports.mimic_get_changed_state_list = mimic_get_changed_state_list;
    exports.mimic_get_interfaces = mimic_get_interfaces;
    exports.mimic_get_cfg_file_changed = mimic_get_cfg_file_changed;
    exports.mimic_get_sim_privdir = mimic_get_sim_privdir;
    exports.mimic_get_product = mimic_get_product;
    exports.mimic_get_netaddr = mimic_get_netaddr;
    exports.mimic_get_netdev = mimic_get_netdev;
    exports.mimic_get_expiration = mimic_get_expiration;
    exports.mimic_get_licensing = mimic_get_licensing;
    exports.mimic_set_log = mimic_set_log;
    exports.mimic_store_save = mimic_store_save;
    exports.mimic_get_access_adminuser = mimic_get_access_adminuser;
    exports.mimic_get_access_admindir = mimic_get_access_admindir;
    exports.mimic_get_access_acldb = mimic_get_access_acldb;
    exports.mimic_get_access_enabled = mimic_get_access_enabled;
    exports.mimic_set_access_adminuser = mimic_set_access_adminuser;
    exports.mimic_set_access_admindir = mimic_set_access_admindir;
    exports.mimic_set_access_acldb = mimic_set_access_acldb;
    exports.mimic_set_access_enabled = mimic_set_access_enabled;
    exports.mimic_agent_get_state = mimic_agent_get_state;
    exports.mimic_agent_get_protocols = mimic_agent_get_protocols;
    exports.mimic_agent_get_interface = mimic_agent_get_interface;
    exports.mimic_agent_get_host = mimic_agent_get_host;
    exports.mimic_agent_get_mask = mimic_agent_get_mask;
    exports.mimic_agent_get_port = mimic_agent_get_port;
    exports.mimic_agent_get_read_community = mimic_agent_get_read_community;
    exports.mimic_agent_get_write_community = mimic_agent_get_write_community;
    exports.mimic_agent_get_mibs = mimic_agent_get_mibs;
    exports.mimic_agent_get_sim = mimic_agent_get_sim;
    exports.mimic_agent_get_scen = mimic_agent_get_scen;
    exports.mimic_agent_get_pdusize = mimic_agent_get_pdusize;
    exports.mimic_agent_get_delay = mimic_agent_get_delay;
    exports.mimic_agent_get_starttime = mimic_agent_get_starttime;
    exports.mimic_agent_get_statistics = mimic_agent_get_statistics;
    exports.mimic_agent_get_drops = mimic_agent_get_drops;
    exports.mimic_agent_get_changed = mimic_agent_get_changed;
    exports.mimic_agent_get_config_changed = mimic_agent_get_config_changed;
    exports.mimic_agent_get_state_changed = mimic_agent_get_state_changed;
    exports.mimic_agent_get_trace = mimic_agent_get_trace;
    exports.mimic_agent_get_validate = mimic_agent_get_validate;
    exports.mimic_agent_get_owner = mimic_agent_get_owner;
    exports.mimic_agent_get_privdir = mimic_agent_get_privdir;
    exports.mimic_agent_get_oiddir = mimic_agent_get_oiddir;
    exports.mimic_agent_get_inform_timeout = mimic_agent_get_inform_timeout;
    exports.mimic_agent_get_inform_retries = mimic_agent_get_inform_retries;
    exports.mimic_agent_set_protocols = mimic_agent_set_protocols;
    exports.mimic_agent_set_interface = mimic_agent_set_interface;
    exports.mimic_agent_set_host = mimic_agent_set_host;
    exports.mimic_agent_set_mask = mimic_agent_set_mask;
    exports.mimic_agent_set_port = mimic_agent_set_port;
    exports.mimic_agent_set_read_community = mimic_agent_set_read_community;
    exports.mimic_agent_set_write_community = mimic_agent_set_write_community;
    exports.mimic_agent_set_mibs = mimic_agent_set_mibs;
    exports.mimic_agent_set_pdusize = mimic_agent_set_pdusize;
    exports.mimic_agent_set_delay = mimic_agent_set_delay;
    exports.mimic_agent_set_starttime = mimic_agent_set_starttime;
    exports.mimic_agent_set_drops = mimic_agent_set_drops;
    exports.mimic_agent_set_trace = mimic_agent_set_trace;
    exports.mimic_agent_set_validate = mimic_agent_set_validate;
    exports.mimic_agent_set_oiddir = mimic_agent_set_oiddir;
    exports.mimic_agent_set_inform_timeout = mimic_agent_set_inform_timeout;
    exports.mimic_agent_set_inform_retries = mimic_agent_set_inform_retries;
    exports.mimic_agent_mget_protocols = mimic_agent_mget_protocols;
    exports.mimic_agent_mget_interface = mimic_agent_mget_interface;
    exports.mimic_agent_mget_host = mimic_agent_mget_host;
    exports.mimic_agent_mget_mask = mimic_agent_mget_mask;
    exports.mimic_agent_mget_port = mimic_agent_mget_port;
    exports.mimic_agent_mget_read_community = mimic_agent_mget_read_community;
    exports.mimic_agent_mget_write_community = mimic_agent_mget_write_community;
    exports.mimic_agent_mget_mibs = mimic_agent_mget_mibs;
    exports.mimic_agent_mget_sim = mimic_agent_mget_sim;
    exports.mimic_agent_mget_scen = mimic_agent_mget_scen;
    exports.mimic_agent_mget_pdusize = mimic_agent_mget_pdusize;
    exports.mimic_agent_mget_delay = mimic_agent_mget_delay;
    exports.mimic_agent_mget_starttime = mimic_agent_mget_starttime;
    exports.mimic_agent_mget_state = mimic_agent_mget_state;
    exports.mimic_agent_mget_statistics = mimic_agent_mget_statistics;
    exports.mimic_agent_mget_drops = mimic_agent_mget_drops;
    exports.mimic_agent_mget_changed = mimic_agent_mget_changed;
    exports.mimic_agent_mget_config_changed = mimic_agent_mget_config_changed;
    exports.mimic_agent_mget_state_changed = mimic_agent_mget_state_changed;
    exports.mimic_agent_mget_trace = mimic_agent_mget_trace;
    exports.mimic_agent_mget_validate = mimic_agent_mget_validate;
    exports.mimic_agent_mget_owner = mimic_agent_mget_owner;
    exports.mimic_agent_mget_privdir = mimic_agent_mget_privdir;
    exports.mimic_agent_mget_oiddir = mimic_agent_mget_oiddir;
    exports.mimic_agent_mget_inform_timeout = mimic_agent_mget_inform_timeout;
    exports.mimic_agent_mget_inform_retries = mimic_agent_mget_inform_retries;
    exports.mimic_agent_mset_protocol = mimic_agent_mset_protocol;
    exports.mimic_agent_mset_host = mimic_agent_mset_host;
    exports.mimic_agent_mset_mask = mimic_agent_mset_mask;
    exports.mimic_agent_mset_port = mimic_agent_mset_port;
    exports.mimic_agent_mset_delay = mimic_agent_mset_delay;
    exports.mimic_agent_mset_starttime = mimic_agent_mset_starttime;
    exports.mimic_agent_mset_trace = mimic_agent_mset_trace;
    exports.mimic_agent_mset_pdusize = mimic_agent_mset_pdusize;
    exports.mimic_agent_mset_drops = mimic_agent_mset_drops;
    exports.mimic_agent_mset_validate = mimic_agent_mset_validate;
    exports.mimic_agent_mset_inform_timeout = mimic_agent_mset_inform_timeout;
    exports.mimic_agent_mset_inform_retries = mimic_agent_mset_inform_retries;
    exports.mimic_start_all_agents = mimic_start_all_agents;
    exports.mimic_stop_all_agents = mimic_stop_all_agents;
    exports.mimic_protocol_msg = mimic_protocol_msg;
    exports.mimic_store_list = mimic_store_list;
    exports.mimic_store_get = mimic_store_get;
    exports.mimic_cfg_new = mimic_cfg_new;
    exports.mimic_cfg_load = mimic_cfg_load;
    exports.mimic_cfg_save = mimic_cfg_save;
    exports.mimic_cfg_saveas = mimic_cfg_saveas;
    exports.mimic_add_timer_script = mimic_add_timer_script;
    exports.mimic_del_timer_script = mimic_del_timer_script;
    exports.mimic_list_timer_scripts = mimic_list_timer_scripts;
    exports.mimic_add_access = mimic_add_access;
    exports.mimic_del_access = mimic_del_access;
    exports.mimic_list_access = mimic_list_access;
    exports.mimic_save_access = mimic_save_access;
    exports.mimic_load_access = mimic_load_access;
    exports.mimic_store_unset = mimic_store_unset;
    exports.mimic_store_exists = mimic_store_exists;
    exports.mimic_store_mget = mimic_store_mget;
    exports.mimic_agent_start = mimic_agent_start;
    exports.mimic_agent_stop = mimic_agent_stop;
    exports.mimic_agent_pause_now = mimic_agent_pause_now;
    exports.mimic_agent_pause_at = mimic_agent_pause_at;
    exports.mimic_agent_halt = mimic_agent_halt;
    exports.mimic_agent_resume = mimic_agent_resume;
    exports.mimic_agent_configure = mimic_agent_configure;
    exports.mimic_agent_remove = mimic_agent_remove;
    exports.mimic_agent_trap_list = mimic_agent_trap_list;
    exports.mimic_agent_trap_config_list = mimic_agent_trap_config_list;
    exports.mimic_agent_trap_config_add = mimic_agent_trap_config_add;
    exports.mimic_agent_trap_config_del = mimic_agent_trap_config_del;
    exports.mimic_agent_save = mimic_agent_save;
    exports.mimic_agent_add_ipalias = mimic_agent_add_ipalias;
    exports.mimic_agent_del_ipalias = mimic_agent_del_ipalias;
    exports.mimic_agent_start_ipalias = mimic_agent_start_ipalias;
    exports.mimic_agent_stop_ipalias = mimic_agent_stop_ipalias;
    exports.mimic_agent_status_ipalias = mimic_agent_status_ipalias;
    exports.mimic_agent_list_ipaliases = mimic_agent_list_ipaliases;
    exports.mimic_agent_add_timer_script = mimic_agent_add_timer_script;
    exports.mimic_agent_del_timer_script = mimic_agent_del_timer_script;
    exports.mimic_agent_list_timer_scripts = mimic_agent_list_timer_scripts;
    exports.mimic_agent_protocol_msg = mimic_agent_protocol_msg;
    exports.mimic_agent_store_lreplace = mimic_agent_store_lreplace;
    exports.mimic_agent_store_unset = mimic_agent_store_unset;
    exports.mimic_agent_store_list = mimic_agent_store_list;
    exports.mimic_agent_store_exists = mimic_agent_store_exists;
    exports.mimic_agent_store_get = mimic_agent_store_get;
    exports.mimic_agent_store_mget = mimic_agent_store_mget;
    exports.mimic_agent_store_copy = mimic_agent_store_copy;
    exports.mimic_agent_from_list = mimic_agent_from_list;
    exports.mimic_agent_from_add = mimic_agent_from_add;
    exports.mimic_agent_from_del = mimic_agent_from_del;
    exports.mimic_agent_valuespace_set_pos = mimic_agent_valuespace_set_pos;
    exports.mimic_agent_valuespace_get_objects = mimic_agent_valuespace_get_objects;
    exports.mimic_agent_valuespace_get_instances = mimic_agent_valuespace_get_instances;
    exports.mimic_agent_valuespace_get_variables = mimic_agent_valuespace_get_variables;
    exports.mimic_agent_valuespace_get_oid = mimic_agent_valuespace_get_oid;
    exports.mimic_agent_valuespace_get_name = mimic_agent_valuespace_get_name;
    exports.mimic_agent_valuespace_get_info = mimic_agent_valuespace_get_info;
    exports.mimic_agent_valuespace_eval_value = mimic_agent_valuespace_eval_value;
    exports.mimic_agent_valuespace_split_oid = mimic_agent_valuespace_split_oid;
    exports.mimic_agent_valuespace_get_mib = mimic_agent_valuespace_get_mib;
    exports.mimic_agent_valuespace_set_state = mimic_agent_valuespace_set_state;
    exports.mimic_agent_valuespace_get_state = mimic_agent_valuespace_get_state;
    exports.mimic_agent_mset_interface = mimic_agent_mset_interface;
    exports.mimic_agent_mset_read = mimic_agent_mset_read;
    exports.mimic_agent_mset_write = mimic_agent_mset_write;
    exports.mimic_agent_mset_mibs = mimic_agent_mset_mibs;
    exports.mimic_agent_mset_oiddir = mimic_agent_mset_oiddir;
    exports.mimic_store_set = mimic_store_set;
    exports.mimic_store_append = mimic_store_append;
    exports.mimic_store_lreplace = mimic_store_lreplace;
    exports.mimic_store_mlreplace = mimic_store_mlreplace;
    exports.mimic_trap_config_add = mimic_trap_config_add;
    exports.mimic_trap_config_delete = mimic_trap_config_delete;
    exports.mimic_agent_store_set = mimic_agent_store_set;
    exports.mimic_agent_store_append = mimic_agent_store_append;
    exports.mimic_agent_valuespace_meval_value = mimic_agent_valuespace_meval_value;
    exports.mimic_agent_valuespace_get_minfo = mimic_agent_valuespace_get_minfo;
    exports.mimic_agent_valuespace_add = mimic_agent_valuespace_add;
    exports.mimic_agent_valuespace_remove = mimic_agent_valuespace_remove;
    exports.mimic_agent_valuespace_set_value = mimic_agent_valuespace_set_value;
    exports.mimic_agent_valuespace_mset_value = mimic_agent_valuespace_mset_value;
    exports.mimic_agent_valuespace_unset_value = mimic_agent_valuespace_unset_value;
    exports.mimic_agent_valuespace_munset_value = mimic_agent_valuespace_munset_value;
    exports.mimic_agent_valuespace_get_value = mimic_agent_valuespace_get_value;
    exports.mimic_agent_valuespace_mget_value = mimic_agent_valuespace_mget_value;
    
    // get parameter names
    function getParameterNames(func) {  
        return (func + '')
          .replace(/[/][/].*$/mg,'') // strip single-line comments
          .replace(/\s+/g, '') // strip white space
          .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments  
          .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters  
          .replace(/=[^,]+/g, '') // strip any ES6 defaults  
          .split(',').filter(Boolean); // split & filter [""]
    }  
    
    exports.getParameterNames = getParameterNames;    
}

var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");

if (isBrowser()) {
    window.addEventListener("load", function() {
        ScriptPath();
    });
}

var serverLocation = "http://127.0.0.1:8080/";

function setServerLocation(url) {
    serverLocation = url;
}

function getServerLocation() {
    return serverLocation;
}

function enableDebug() {
    consoleDebugFlag = 1;
}

function disableDebug() {
    consoleDebugFlag = 0;
}

function ScriptPath() {
    var scriptPath = '';
    try {
        // Throw an error to generate a stack trace
        throw new Error();
    } catch (e) {
        // Split the stack trace into each line
        var stackLines = e.stack.split('\n');
        // Now walk though each line until we find a path reference
        for (var i in stackLines) {
            if (!stackLines[i].match(/http[s]?:\/\//)) continue;
            // We skipped all the lines with out an http so we now have a script reference
            // This one is the class constructor, the next is the getScriptPath() call
            // The one after that is the user code requesting the path info (so offset by 2)
            //pathParts = stackLines[callerIndex].match(/((http[s]?:\/\/.+\/)([^\/]+\.js)):/);
            pathParts = stackLines[i].match(/((http[s]?:\/\/.+\/)([^\/]+\.js)):/);
            // Now parse the string for each section we want to return
            if (pathParts !== undefined) {
                serverLocation = pathParts[2];
            }
            break;
        }
    }
}

function testMimicConnectivity() {
    var v = mimic.get_version();
    if (typeof v === 'undefined' || v === "" || v * 1 !== v) {
        consoleDebug("Mimic Session is not connected");
        return;
    }

    consoleDebug("MIMIC API Version " + v + " is ready");
}

function response_to_number(input, conversionType) {
    // remove the first and the last double quotes from the string
    var str = input.replace(/^"(.*)"$/, '$1');
    str = str.replace(/^{(.*)}$/, '$1');
    // convert depending on the return type.
    switch (conversionType) {
        case "int":
            return parseInt(str);
        case "float":
            return parseFloat(str);
    }
}

function response_to_string(input) {
    // remove the first and the last double quotes from the string
    var str = input.replace(/^"(.*)"$/, '$1');
    str = str.replace(/^{(.*)}$/, '$1');
    // convert it into string
    return String(str);
}

function response_to_list(input, seperator, type) {
    // remove the first and the last double quotes from the string
    var str = input.replace(/^"(.*)"$/, '$1');
    str = str.replace(/^{(.*)}$/, '$1');
    if ((seperator === undefined) || (seperator === "")) {
        seperator = ' ';
    }
    if ((seperator === "/\s+/g")) {
        seperator = new RegExp(/\s+/g);
    }
    
	var result = [];
    // if string is empty, return a empty array
    if (str.trim().length === 0) {
        return result;
    }

    if (input.substring(0, 1) === '{') {
        result = create_array(input);
    } else {
        if (type === "string" || type === "string_list") {
            result = str.split(seperator);
        } else if (type === "int" || type === "int_list") {
            result = str.split(seperator).map(parseFloat);
        }
    }
    return result;
}

function dispatch_message(request_str) {
    consoleDebug("request string: " + request_str);
    var response_str;
    var error = false;
    // code to send and receive request to and from server.
    
    xhr = new XMLHttpRequest();

    xhr.open('POST', serverLocation, false);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
    	// console.log("Status : " + xhr.status);
    	// console.log("Content: " + xhr.responseText);
        if (xhr.status === 200) {
            response_str = xhr.responseText;
        } else if (xhr.status !== 200) {
            response_str = xhr.statusText;
            if (xhr.responseText !== undefined)
                response_str = xhr.responseText;
            error = true;
        }
    };
    xhr.send(encodeURI("cmd=" + request_str));

    if (error === true) {
        var ev = "arguments.callee.caller";
        var nm = arguments.callee.name;
        while (nm.startsWith("mimic_") !== true) {
            nm = eval(ev).name;
            ev += ".caller";
        }
        throw new Error(nm + " : " + response_str);
        // throw(response_str);
    }
    
    var response_string = return_response_message(response_str, request_str);
    response_string = response_string.replace(/^"(.*)"$/, '$1');
    if (response_string.substring(0, 1) === '{') {
        response_string = bracket_detecter(response_string);
        while (response_string.flag === 1) {
            response_string = bracket_detecter(response_string.string);
        }
    }
    if (response_string.flag === undefined) {
        var mod_response_string = response_string;
    } else {
        var mod_response_string = response_string.string;
    }
    consoleDebug('modified response: ' + mod_response_string);
    return mod_response_string;
}

function return_response_message(response, request) {
    // check the lenght of response after spliting based on space.
    var responseArray = response.split(' ');
    if (responseArray.length < 2) {
        // length error
        throw new Error("bad reply, incorrect data/format.");
    } else {
        // no length error, check the first value
        var ipFirstVal = parseInt(request.split(' ')[0], 10);
        if (ipFirstVal === parseInt(responseArray[0])) {
            // if first correct proceed to check second value
            if (parseInt(responseArray[1]) === 0) {
                // if second correct return message, which is returned to
                // dispatch_message.
                return return_message(response);
            } else {
                // second catch value error
                // proceed to check if message exist by dividing the whole
                // string into two parts 1.main/sub cmd 2.message
                var parts = response.match(/^(\S+? \S+?) ([\s\S]+?)$/);
                if (parts !== null) {
                    // if exists then display the second part
                    var error_msg = String(parts.slice(2)).replace(/^"(.*)"$/, '$1');
                    consoleError(error_msg);
                    
                    var ev = "arguments.callee.caller";
                    var nm = arguments.callee.name;
                    while (nm.startsWith("mimic_") !== true) {
                        nm = eval(ev).name;
                        ev += ".caller";
                    }
                    throw new Error(nm + " : " + error_msg);
                    
                }
            }
        } else {
            // first cmd value error
            consoleError("bad reply, response-id != request-id.");
            throw new Error("bad reply, response-id != request-id.");
        }
    }
}

function return_message(response) {
    // proceed to check if message exist by dividing the whole string into two
    // parts 1.main/sub cmd 2.message
    var parts = response.match(/^(\S+? \S+?) ([\s\S]+?)$/);
    if (parts !== null) {
        // yes message exists, show message by taking the second part
        var response_msg = parts.slice(2);
        // return the second part
        // return String(response_msg);
    } else {
        // there is no response output it may be a set operation
        var response_msg = "";
    }
    return String(response_msg);
}

function bracket_detecter(string) {
    var string_array = string.split('');
    var counter = 1;
    var flag = 0;
    for (var i = 1; i < string_array.length; i++) {
        if (string_array[i] === '{') {
            counter = counter + 1;
        } else if (string_array[i] === '}') {
            counter = counter - 1;
        }
        if (counter === 0) {
            break;
        }
    }
    if (string_array.length - i === 1) {
        string = string.replace(/^{(.*)}$/, '$1');
        flag = 1;
    }
    var ret = {
        string: string,
        flag: flag
    };
    return ret;
}

function create_array(string) {
    var string_array = string.split('');
    var counter = 0;
    var start;
    my_array = [];
    for (var i = 0; i < string_array.length; i++) {
        if (string_array[i] === '{') {
            counter = counter + 1;
            if (counter === 1) {
                start = i;
            }
        } else if (string_array[i] === '}') {
            counter = counter - 1;
            if (counter === 0) {
                my_array.push(string.substring(start, i + 1));
            }
        }
    }
    return my_array;
}

function debugScreen(str) {
    if (screenDebugFlag === 1) {
        var display_element = document.getElementById('displayResultDiv');
        display_element.innerHTML += str;
    }
}

function consoleDebug(str) {
    if (consoleDebugFlag === 1) {
        console.log(str);
    }
}

function consoleError(error_str) {
    console.error(error_str);
}

function param_verifier(paramTypes, argus, lenChecker) {
    var paramLenFlag = 0;
    var param_len;
    for (var i = 0; i < argus.length; i++) {
        if (paramTypes[i].indexOf('object') !== -1) {
            if (typeof argus[i] === 'object') {
                if ((lenChecker !== undefined) && (lenChecker === true)) {
                    if (paramLenFlag === 0) {
                        param_len = argus[i].length;
                        paramLenFlag = 1;
                    }
                    if (argus[i].length !== param_len) {
                        consoleError('Insufficient elemnts in parameter number ' + (i + 1) + '.');
                        return 1;
                    }
                }
                var param_type = paramTypes[i].substring(paramTypes[i].indexOf('.') + 1);
                for (var j = 0; j < argus[i].length; j++) {
                    if (typeof argus[i][j] !== param_type) {
                        consoleError('The elemnt at index ' + j + ' in parameter number ' + (i + 1) + ' is invalid.');
                        return 1;
                    }
                }
            } else {
                consoleError('The elemnt ' + (i + 1) + ' should be an array.');
                return 1;
            }
        } else {
            if (typeof argus[i] !== paramTypes[i]) {
                consoleError('The parameter number ' + (i + 1) + ' is invalid.');
                return 1;
            }
        }
    }
    return 0;
}

function array_merger(aep1, sep2) {
    var arg = arguments;
    var str = '';
    if (arg.length >= 4) {
        var arg2Length = arg[2].length;
        var flag = 0;
        for (var i = 3; i < arg.length; i++) {
            if (arg[i].length !== arg2Length) {
                throw new Error('One or more element is missing in parameter number ' + (i + 1));
            }
        }
        //do the string formation
        for (var i = 0; i < arg2Length; i++) {
            for (var j = 2; j < arg.length; j++) {
                str += arg[j][i];
                if (arg.length - j !== 1) {
                    if (arg[0] === '') {
                        str += ' ';
                    } else {
                        str += arg[0];
                    }
                }
            }
            if (arg2Length - i !== 1) {
                if (arg[0] === '') {
                    str += ' ';
                } else {
                    str += arg[1];
                }
            }
        }
        return str;
    }
}

function dump_on_screen(cmd) {
    if (screenDebugFlag === 1) {
        var display_element = document.getElementById('displayResultDiv');
        if (cmd !== '') {
            display_element.innerHTML += " Executing command - " + cmd + "";
        }
        if ((arguments[1] !== undefined) && (arguments[1].length !== 0)) {
            for (var i = 0; i < arguments[1].length; i++) {
                if (typeof arguments[1][i] !== 'object') {
                    display_element.innerHTML += " parameter " + i + ": " + arguments[1][i] + "";
                } else {
                    display_element.innerHTML += " parameter " + i + ": ";
                    for (var j = 0; j < arguments[1][i].length; j++) {
                        display_element.innerHTML += '[' + j + '] "' + arguments[1][i][j] + '"';
                        if ((arguments[1][i].length - j) !== 1) {
                            display_element.innerHTML += " ; ";
                        }
                    }
                }
            }
        }
    }
}

function agent_mset_common(cmdName, cmdNo, main_func_params) { /**/
    //The further code will not run until all the parameters are correct.
    var request_str = '';
    request_str += 57; //api_json.cmdCode.MGMT_AGENT_MSET
    request_str += ' ' + cmdNo;
    var str = '';
    for (var i = 0; i < main_func_params[0].length; i++) {
        str += main_func_params[0][i] + " {" + main_func_params[1][i] + "}";
        if (main_func_params[0].length - i !== 1) {
            str += ' ';
        }
    }
    request_str += ' ' + str;
    request_str += '\r\n';
    dump_on_screen(cmdName, main_func_params);
    common_send_request(request_str); /**/
}

function store_common(cmdName, cmdNo, main_func_params) {
    var request_str = '';
    request_str += cmdNo;
    var param_str = store_common_part(cmdName, main_func_params);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen(cmdName, main_func_params);
    common_send_request(request_str);
}

function agent_store_common(cmdName, cmdNo, main_func_params) {
    //The further code will not run until all the parameters are correct.
    var request_str = '';
    request_str += cmdNo;
    request_str += " " + main_func_params[0];
    /**/
    var newargs = main_func_params;
    Array.prototype.shift.apply(newargs);
    /**/
    var param_str = store_common_part(cmdName, newargs);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen(cmdName, main_func_params);
    common_send_request(request_str);
}

function mimic_agent_store_mlreplace(agentNo, varlist, indexlist, vallist) {
    if (arguments.length !== 4) {
        throw new Error('Invalid number of parameter in "mimic_agent_store_mlreplace".');
    }
    var param_types = ['number', 'object.string', 'object.number', 'object.string'];
    if (param_verifier(param_types, arguments, true) !== 0) {
        throw new Error('Invalid parameter in "mimic_agent_store_mlreplace".');
    }
    //The further code will not run until all the parameters are correct.
    var request_str = '';
    request_str += 99; //api_json.cmdCode.MGMT_AGENT_STORE_MLREPLACE
    request_str += " " + agentNo;
    var str = '';
    for (var i = 0; i < varlist.length; i++) {
        str += varlist[i] + " " + String(indexlist[i]) + " {" + vallist[i] + "}";
        if ((varlist.length - i) !== 1) {
            str += " ";
        }
    }
    request_str += ' ' + str;
    request_str += '\r\n';
    dump_on_screen("mimic_agent_store_mlreplace", arguments);
    common_send_request(request_str);
}

function store_common_part(cmdName, main_func_params) {
    var str = '';
    switch (cmdName) {
        //case "store_set":
        case "mimic_store_set":
        case "mimic_store_append":
        case "mimic_agent_store_set":
        case "mimic_agent_store_append":
            str += main_func_params[0] + " {" + main_func_params[1] + "} " + String(main_func_params[2]);
            break;
        case "mimic_store_lreplace":
            str += main_func_params[0] + " " + String(main_func_params[1]) + " {" + main_func_params[2] + "}";
            break;
        case "mimic_store_mlreplace":
            for (var i = 0; i < main_func_params[0].length; i++) {
                str += main_func_params[0][i] + " " + String(main_func_params[1][i]) + " {" + main_func_params[2][i] +
                    "}";
                if ((main_func_params[0].length - i) !== 1) {
                    str += " ";
                }
            }
            break;
    }
    return str;
}

function common_send_request(request_str) {
    try {
        debugScreen('Request string with Parameter is:- ' + request_str + '');
        var response_message = dispatch_message(request_str);
        debugScreen('Result is undefined');
    } catch (err) {
        throw err;
    }
}

function mimic_trap_config_list() {
    var request_str = '';
    request_str += 31; //api_json.cmdCode.MGMT_TRAP_LIST
    request_str += " " + 1;
    request_str += '\r\n';
    dump_on_screen("mimic_trap_config_list");
    try {
        var response_message = dispatch_message(request_str);
        if (response_message !== undefined) {
            var seperator = '/s+/g';
            var final_output = response_to_list(response_message, seperator, 'string');
            debugScreen('Result is ' + final_output + '');
            return final_output;
        }
    } catch (err) {
        consoleError('Error: ' + err.message);
    }
}

function trap_config_common(cmdName, cmdNo, main_func_params) {
    //The further code will not run until all the parameters are correct.
    var request_str = '';
    request_str += cmdNo;
    request_str += " " + 1;
    var sep = " ";
    var main_func_param = Array.prototype.slice.call(main_func_params);
    request_str += ' ' + main_func_param.join(sep);
    request_str += '\r\n';
    dump_on_screen(cmdName, main_func_params);
    common_send_request(request_str);
}

function mimic_agent_valuespace_get_pos(agentNo) {
    if (arguments.length !== 1) {
        throw new Error('Invalid number of parameter in "mimic_agent_valuespace_get_pos".');
    }
    var request_str = '';
    request_str += 19; //api_json.cmdCode.MGMT_MIB_POS
    request_str += " " + agentNo;
    request_str += '\r\n';
    dump_on_screen("mimic_agent_valuespace_get_pos", arguments);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        //var seperator = '/s+/g';
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

function valuespace_common_part(cmdName, main_cmd_code, main_func_params) {
    var request_str = '';
    var str = '';
    request_str += main_cmd_code;
    switch (cmdName) {
        case "mimic_agent_valuespace_get_value":
            request_str += " " + main_func_params[0] + " " + main_func_params[1] + " " + "1" + " " + main_func_params[
                2] + " " + main_func_params[3];
            break;
        case "mimic_agent_valuespace_mget_value":
            request_str += " " + main_func_params[0];
            for (var i = 0; i < main_func_params[1].length; i++) {
                str += main_func_params[1][i] + " " + "1" + " " + main_func_params[2][i] + " " + main_func_params[3][i];
                if ((main_func_params[1].length - i) !== 1) {
                    str += " ";
                }
            }
            request_str += " " + str;
            break;
    }
    request_str += '\r\n';
    dump_on_screen(cmdName, main_func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output;
        switch (cmdName) {
            case "mimic_agent_valuespace_get_value":
                final_output = response_to_string(response_message);
                break;
            case "mimic_agent_valuespace_mget_value":
                final_output = response_to_list(response_message, seperator, 'string');
                break;
        }
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

function valuespace_addRemove_common(cmdName, main_cmd_code, main_func_params) {
    var request_str = '';
    var str = '';
    request_str += main_cmd_code;
    switch (cmdName) {
        case "mimic_agent_valuespace_add":
        case "mimic_agent_valuespace_remove":
            request_str += " " + main_func_params[0] + " " + main_func_params[1] + " " + "1" + " " + main_func_params[
                2] + " " + "v";
            break;
        case "mimic_agent_valuespace_set_value":
            request_str += " " + main_func_params[0] + " " + main_func_params[1] + " " + "1" + " " + main_func_params[
                2] + " " + main_func_params[3] + " " + main_func_params[4];
            break;
        case "mimic_agent_valuespace_mset_value":
            request_str += " " + main_func_params[0];
            for (var i = 0; i < main_func_params[1].length; i++) {
                str += main_func_params[1][i] + " " + "1" + " " + main_func_params[2][i] + " " + main_func_params[3][i] +
                    " " + "{" + main_func_params[4][i] + "}";
                if ((main_func_params[1].length - i) !== 1) {
                    str += " ";
                }
            }
            request_str += " " + str;
            break;
        case "mimic_agent_valuespace_unset_value":
            request_str += " " + main_func_params[0] + " " + main_func_params[1] + " " + "1" + " " + main_func_params[
                2] + " " + main_func_params[3];
            break;
        case "mimic_agent_valuespace_munset_value":
            request_str += " " + main_func_params[0];
            for (var i = 0; i < main_func_params[1].length; i++) {
                str += main_func_params[1][i] + " " + "1" + " " + main_func_params[2][i] + " " + main_func_params[3][i];
                if ((main_func_params[1].length - i) !== 1) {
                    str += " ";
                }
            }
            request_str += " " + str;
            break;
    }
    request_str += '\r\n';
    dump_on_screen(cmdName, main_func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

function valuespace_mlist_common(cmdName, main_cmd_code, main_func_params) {
    var request_str = '';
    request_str += main_cmd_code;
    request_str += " " + main_func_params[0];
    var str = '';
    for (var i = 0; i < main_func_params[1].length; i++) {
        switch (cmdName) {
            case "mimic_agent_valuespace_get_minfo":
                str += main_func_params[1][i];
                break;
            case "mimic_agent_valuespace_meval_value":
                for (var i = 0; i < main_func_params[1].length; i++) {
                    str += main_func_params[1][i] + " " + main_func_params[2][i];
                    if ((main_func_params[1].length - i) !== 1) {
                        str += " ";
                    }
                }
                request_str += " " + str;
                break;
        }
        if ((main_func_params[1].length - i) !== 1) {
            str += " ";
        }
    }
    request_str += " " + str;
    request_str += '\r\n';
    dump_on_screen(cmdName, main_func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}



/*--------------------------------------------------------------------------------------------------*/


var mimic = {};
mimic["agent"] = {};
mimic["agent"]["valuespace"] = {};

var m = {};
m["a"] = {};
m["a"]["vs"] = {};

mimic['agent']['store_mlreplace'] = mimic_agent_store_mlreplace;
mimic['trap_config_list'] = mimic_trap_config_list;
mimic['agent']['valuespace']['get_pos'] = mimic_agent_valuespace_get_pos;

m['a']['store_mlreplace'] = mimic_agent_store_mlreplace;
m['trap_config_list'] = mimic_trap_config_list;
m['a']['vs']['get_pos'] = mimic_agent_valuespace_get_pos;

function mimic_get_free_vm() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_free_vm.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 21; /*'MGMT_MIMIC_FREE_VM'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_free_vm"] = mimic["get_free_vm"] = mimic_get_free_vm;

function mimic_get_max() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_max.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 1; /*'MGMT_MIMIC_MAX_AGENTS'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_max"] = mimic["get_max"] = mimic_get_max;

function mimic_get_protocols() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_protocols.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 13; /*'MGMT_MIMIC_PROTOCOLS'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = ',';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_protocols"] = mimic["get_protocols"] = mimic_get_protocols;

function mimic_get_log() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_log.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 12; /*'MGMT_MIMIC_LOGFILE'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_log"] = mimic["get_log"] = mimic_get_log;

function mimic_get_last() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_last.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 2; /*'MGMT_MIMIC_LAST_AGENT'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_last"] = mimic["get_last"] = mimic_get_last;

function mimic_get_version() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_version.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 4; /*'MGMT_MIMIC_VERSION'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'float';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_version"] = mimic["get_version"] = mimic_get_version;

function mimic_get_clients() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_clients.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 5; /*'MGMT_MIMIC_CLIENTS'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_clients"] = mimic["get_clients"] = mimic_get_clients;

function mimic_get_cfgfile() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_cfgfile.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 6; /*'MGMT_MIMIC_CFG_FILE'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_cfgfile"] = mimic["get_cfgfile"] = mimic_get_cfgfile;

function mimic_get_configured_list() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_configured_list.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 7; /*'MGMT_MIMIC_CONFIGURED_LIST'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'int_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_configured_list"] = mimic["get_configured_list"] = mimic_get_configured_list;

function mimic_get_active_list() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_active_list.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 8; /*'MGMT_MIMIC_ACTIVE_LIST'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'int_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_active_list"] = mimic["get_active_list"] = mimic_get_active_list;

function mimic_get_active_data_list() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_active_data_list.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 9; /*'MGMT_MIMIC_ACTIVE_DATA_LIST'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_active_data_list"] = mimic["get_active_data_list"] = mimic_get_active_data_list;

function mimic_get_changed_config_list() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_changed_config_list.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 10; /*'MGMT_MIMIC_CHANGED_CONFIG_LIST'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'int_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_changed_config_list"] = mimic["get_changed_config_list"] = mimic_get_changed_config_list;

function mimic_get_changed_state_list() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_changed_state_list.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 11; /*'MGMT_MIMIC_CHANGED_STATE_LIST'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_changed_state_list"] = mimic["get_changed_state_list"] = mimic_get_changed_state_list;

function mimic_get_interfaces() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_interfaces.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 14; /*'MGMT_MIMIC_INTERFACES'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_interfaces"] = mimic["get_interfaces"] = mimic_get_interfaces;

function mimic_get_cfg_file_changed() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_cfg_file_changed.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 15; /*'MGMT_MIMIC_CFG_FILE_CHANGED'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_cfg_file_changed"] = mimic["get_cfg_file_changed"] = mimic_get_cfg_file_changed;

function mimic_get_sim_privdir() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_sim_privdir.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 16; /*'MGMT_MIMIC_PRIVDIR'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_sim_privdir"] = mimic["get_sim_privdir"] = mimic_get_sim_privdir;

function mimic_get_product() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_product.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 17; /*'MGMT_MIMIC_PRODUCT'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_product"] = mimic["get_product"] = mimic_get_product;

function mimic_get_netaddr() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_netaddr.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 18; /*'MGMT_MIMIC_NETADDR'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_netaddr"] = mimic["get_netaddr"] = mimic_get_netaddr;

function mimic_get_netdev() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_netdev.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 19; /*'MGMT_MIMIC_NETDEV'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_netdev"] = mimic["get_netdev"] = mimic_get_netdev;

function mimic_get_expiration(days) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_get_expiration.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_get_expiration.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 20; /*'MGMT_MIMIC_EXPIRATION'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_get_expiration', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_expiration"] = mimic["get_expiration"] = mimic_get_expiration;

function mimic_get_licensing() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_licensing.');
    }
    var request_str = '';
    request_str += 3; /*'MGMT_MIMIC_GET'*/
    request_str += ' ' + 23; /*'MGMT_MIMIC_LICENSING'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_licensing"] = mimic["get_licensing"] = mimic_get_licensing;

function mimic_set_log(logfile) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_set_log.');
        return;
    }
    var param_types = ['string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_set_log.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 52; /*'MGMT_MIMIC_SET'*/
    request_str += ' ' + 12; /*'MGMT_MIMIC_LOGFILE'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_set_log', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["set_log"] = mimic["set_log"] = mimic_set_log;

function mimic_store_save() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_store_save.');
    }
    var request_str = '';
    request_str += 52; /*'MGMT_MIMIC_SET'*/
    request_str += ' ' + 22; /*'MGMT_MIMIC_PERSISTENT'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["store_save"] = mimic["store_save"] = mimic_store_save;

function mimic_get_access_adminuser() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_access_adminuser.');
    }
    var request_str = '';
    request_str += 68; /*'MGMT_ACCESS_GET'*/
    request_str += ' ' + 1; /*'MGMT_ACCESS_ADMIN_USER'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_access_adminuser"] = mimic["get_access_adminuser"] = mimic_get_access_adminuser;

function mimic_get_access_admindir() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_access_admindir.');
    }
    var request_str = '';
    request_str += 68; /*'MGMT_ACCESS_GET'*/
    request_str += ' ' + 2; /*'MGMT_ACCESS_ADMIN_DIR'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_access_admindir"] = mimic["get_access_admindir"] = mimic_get_access_admindir;

function mimic_get_access_acldb() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_access_acldb.');
    }
    var request_str = '';
    request_str += 68; /*'MGMT_ACCESS_GET'*/
    request_str += ' ' + 3; /*'MGMT_ACCESS_ACLDB'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_access_acldb"] = mimic["get_access_acldb"] = mimic_get_access_acldb;

function mimic_get_access_enabled() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_get_access_enabled.');
    }
    var request_str = '';
    request_str += 68; /*'MGMT_ACCESS_GET'*/
    request_str += ' ' + 4; /*'MGMT_ACCESS_ENABLED'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["get_access_enabled"] = mimic["get_access_enabled"] = mimic_get_access_enabled;

function mimic_set_access_adminuser(user) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_set_access_adminuser.');
        return;
    }
    var param_types = ['string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_set_access_adminuser.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 69; /*'MGMT_ACCESS_SET'*/
    request_str += ' ' + 1; /*'MGMT_ACCESS_ADMIN_USER'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_set_access_adminuser', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["set_access_adminuser"] = mimic["set_access_adminuser"] = mimic_set_access_adminuser;

function mimic_set_access_admindir(dir) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_set_access_admindir.');
        return;
    }
    var param_types = ['string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_set_access_admindir.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 69; /*'MGMT_ACCESS_SET'*/
    request_str += ' ' + 2; /*'MGMT_ACCESS_ADMIN_DIR'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_set_access_admindir', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["set_access_admindir"] = mimic["set_access_admindir"] = mimic_set_access_admindir;

function mimic_set_access_acldb(acldb) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_set_access_acldb.');
        return;
    }
    var param_types = ['string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_set_access_acldb.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 69; /*'MGMT_ACCESS_SET'*/
    request_str += ' ' + 3; /*'MGMT_ACCESS_ACLDB'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_set_access_acldb', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["set_access_acldb"] = mimic["set_access_acldb"] = mimic_set_access_acldb;

function mimic_set_access_enabled(arg) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_set_access_enabled.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_set_access_enabled.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 69; /*'MGMT_ACCESS_SET'*/
    request_str += ' ' + 4; /*'MGMT_ACCESS_ENABLED'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_set_access_enabled', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["set_access_enabled"] = mimic["set_access_enabled"] = mimic_set_access_enabled;

function mimic_agent_get_state(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_state.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_state.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 8; /*'AGENT_STAT'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_state', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_state"] = mimic["agent"]["get_state"] = mimic_agent_get_state;

function mimic_agent_get_protocols(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_protocols.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_protocols.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 16; /*'AGENT_PROTOCOL'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_protocols', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = ',';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_protocols"] = mimic["agent"]["get_protocols"] = mimic_agent_get_protocols;

function mimic_agent_get_interface(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_interface.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_interface.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 15; /*'AGENT_INTERFACE'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_interface', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_interface"] = mimic["agent"]["get_interface"] = mimic_agent_get_interface;

function mimic_agent_get_host(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_host.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_host.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 1; /*'AGENT_HOSTNAME'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_host', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_host"] = mimic["agent"]["get_host"] = mimic_agent_get_host;

function mimic_agent_get_mask(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_mask.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_mask.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 13; /*'AGENT_ADDRMASK'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_mask', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_mask"] = mimic["agent"]["get_mask"] = mimic_agent_get_mask;

function mimic_agent_get_port(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_port.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_port.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 2; /*'AGENT_PORTNO'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_port', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_port"] = mimic["agent"]["get_port"] = mimic_agent_get_port;

function mimic_agent_get_read_community(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_read_community.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_read_community.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 3; /*'AGENT_READSTR'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_read_community', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_read_community"] = mimic["agent"]["get_read_community"] = mimic_agent_get_read_community;

function mimic_agent_get_write_community(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_write_community.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_write_community.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 4; /*'AGENT_WRITESTR'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_write_community', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_write_community"] = mimic["agent"]["get_write_community"] = mimic_agent_get_write_community;

function mimic_agent_get_mibs(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_mibs.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_mibs.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 7; /*'AGENT_MIBNAME'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_mibs', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_mibs"] = mimic["agent"]["get_mibs"] = mimic_agent_get_mibs;

function mimic_agent_get_sim(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_sim.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_sim.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 25; /*'AGENT_SIM'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_sim', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_sim"] = mimic["agent"]["get_sim"] = mimic_agent_get_sim;

function mimic_agent_get_scen(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_scen.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_scen.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 26; /*'AGENT_SCENARIO'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_scen', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_scen"] = mimic["agent"]["get_scen"] = mimic_agent_get_scen;

function mimic_agent_get_pdusize(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_pdusize.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_pdusize.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 12; /*'AGENT_PDUSIZE'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_pdusize', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_pdusize"] = mimic["agent"]["get_pdusize"] = mimic_agent_get_pdusize;

function mimic_agent_get_delay(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_delay.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_delay.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 5; /*'AGENT_DELAY'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_delay', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_delay"] = mimic["agent"]["get_delay"] = mimic_agent_get_delay;

function mimic_agent_get_starttime(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_starttime.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_starttime.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 6; /*'AGENT_STARTTIME'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_starttime', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_starttime"] = mimic["agent"]["get_starttime"] = mimic_agent_get_starttime;

function mimic_agent_get_statistics(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_statistics.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_statistics.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 9; /*'AGENT_STATISTICS'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_statistics', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'int_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_statistics"] = mimic["agent"]["get_statistics"] = mimic_agent_get_statistics;

function mimic_agent_get_drops(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_drops.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_drops.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 14; /*'AGENT_DROPNTH'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_drops', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_drops"] = mimic["agent"]["get_drops"] = mimic_agent_get_drops;

function mimic_agent_get_changed(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_changed.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_changed.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 10; /*'AGENT_CHANGED'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_changed', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_changed"] = mimic["agent"]["get_changed"] = mimic_agent_get_changed;

function mimic_agent_get_config_changed(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_config_changed.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_config_changed.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 20; /*'AGENT_CHANGED_CONFIG'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_config_changed', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_config_changed"] = mimic["agent"]["get_config_changed"] = mimic_agent_get_config_changed;

function mimic_agent_get_state_changed(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_state_changed.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_state_changed.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 21; /*'AGENT_CHANGED_STATE'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_state_changed', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_state_changed"] = mimic["agent"]["get_state_changed"] = mimic_agent_get_state_changed;

function mimic_agent_get_trace(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_trace.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_trace.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 11; /*'AGENT_TRACE'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_trace', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_trace"] = mimic["agent"]["get_trace"] = mimic_agent_get_trace;

function mimic_agent_get_validate(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_validate.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_validate.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 17; /*'AGENT_VALIDATE'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_validate', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_validate"] = mimic["agent"]["get_validate"] = mimic_agent_get_validate;

function mimic_agent_get_owner(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_owner.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_owner.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 18; /*'AGENT_OWNER'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_owner', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_owner"] = mimic["agent"]["get_owner"] = mimic_agent_get_owner;

function mimic_agent_get_privdir(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_privdir.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_privdir.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 19; /*'AGENT_PRIVDIR'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_privdir', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_privdir"] = mimic["agent"]["get_privdir"] = mimic_agent_get_privdir;

function mimic_agent_get_oiddir(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_oiddir.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_oiddir.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 22; /*'AGENT_OIDDIR'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_oiddir', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_oiddir"] = mimic["agent"]["get_oiddir"] = mimic_agent_get_oiddir;

function mimic_agent_get_inform_timeout(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_inform_timeout.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_inform_timeout.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 23; /*'AGENT_INFORM_TIMEOUT'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_inform_timeout', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_inform_timeout"] = mimic["agent"]["get_inform_timeout"] = mimic_agent_get_inform_timeout;

function mimic_agent_get_inform_retries(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_get_inform_retries.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_get_inform_retries.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 18; /*'MGMT_AGENT_GET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 24; /*'AGENT_INFORM_RETRIES'*/
    var sep = ' ';
    request_str += '\r\n';
    dump_on_screen('mimic_agent_get_inform_retries', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["get_inform_retries"] = mimic["agent"]["get_inform_retries"] = mimic_agent_get_inform_retries;

function mimic_agent_set_protocols(agentNo, protocols) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_protocols.');
        return;
    }
    var param_types = ['number', 'object.string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_protocols.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 16; /*'AGENT_PROTOCOL'*/
    var sep = ',';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        if (newArg[0].length > 0) {
            request_str += ' ' + newArg[0].join(sep);
        }
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_protocols', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_protocols"] = mimic["agent"]["set_protocols"] = mimic_agent_set_protocols;

function mimic_agent_set_interface(agentNo, iface) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_interface.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_interface.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 15; /*'AGENT_INTERFACE'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_interface', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_interface"] = mimic["agent"]["set_interface"] = mimic_agent_set_interface;

function mimic_agent_set_host(agentNo, host) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_host.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_host.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 1; /*'AGENT_HOSTNAME'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_host', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_host"] = mimic["agent"]["set_host"] = mimic_agent_set_host;

function mimic_agent_set_mask(agentNo, mask) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_mask.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_mask.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 13; /*'AGENT_ADDRMASK'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_mask', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_mask"] = mimic["agent"]["set_mask"] = mimic_agent_set_mask;

function mimic_agent_set_port(agentNo, port) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_port.');
        return;
    }
    var param_types = ['number', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_port.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 2; /*'AGENT_PORTNO'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_port', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_port"] = mimic["agent"]["set_port"] = mimic_agent_set_port;

function mimic_agent_set_read_community(agentNo, readcomm) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_read_community.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_read_community.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 3; /*'AGENT_READSTR'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_read_community', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_read_community"] = mimic["agent"]["set_read_community"] = mimic_agent_set_read_community;

function mimic_agent_set_write_community(agentNo, writecomm) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_write_community.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_write_community.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 4; /*'AGENT_WRITESTR'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_write_community', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_write_community"] = mimic["agent"]["set_write_community"] = mimic_agent_set_write_community;

function mimic_agent_set_mibs(agentNo, values) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_mibs.');
        return;
    }
    var param_types = ['number', 'object.string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_mibs.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 7; /*'AGENT_MIBNAME'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        if (newArg[0].length > 0) {
            request_str += ' ' + newArg[0].join(sep);
        }
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_mibs', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_mibs"] = mimic["agent"]["set_mibs"] = mimic_agent_set_mibs;

function mimic_agent_set_pdusize(agentNo, pdusize) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_pdusize.');
        return;
    }
    var param_types = ['number', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_pdusize.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 12; /*'AGENT_PDUSIZE'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_pdusize', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_pdusize"] = mimic["agent"]["set_pdusize"] = mimic_agent_set_pdusize;

function mimic_agent_set_delay(agentNo, delay) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_delay.');
        return;
    }
    var param_types = ['number', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_delay.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 5; /*'AGENT_DELAY'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_delay', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_delay"] = mimic["agent"]["set_delay"] = mimic_agent_set_delay;

function mimic_agent_set_starttime(agentNo, starttime) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_starttime.');
        return;
    }
    var param_types = ['number', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_starttime.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 6; /*'AGENT_STARTTIME'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_starttime', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_starttime"] = mimic["agent"]["set_starttime"] = mimic_agent_set_starttime;

function mimic_agent_set_drops(agentNo, drop) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_drops.');
        return;
    }
    var param_types = ['number', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_drops.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 14; /*'AGENT_DROPNTH'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_drops', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_drops"] = mimic["agent"]["set_drops"] = mimic_agent_set_drops;

function mimic_agent_set_trace(agentNo, flag) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_trace.');
        return;
    }
    var param_types = ['number', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_trace.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 11; /*'AGENT_TRACE'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_trace', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_trace"] = mimic["agent"]["set_trace"] = mimic_agent_set_trace;

function mimic_agent_set_validate(agentNo, flag) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_validate.');
        return;
    }
    var param_types = ['number', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_validate.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 17; /*'AGENT_VALIDATE'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_validate', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_validate"] = mimic["agent"]["set_validate"] = mimic_agent_set_validate;

function mimic_agent_set_oiddir(agentNo, oiddir) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_oiddir.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_oiddir.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 22; /*'AGENT_OIDDIR'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_oiddir', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_oiddir"] = mimic["agent"]["set_oiddir"] = mimic_agent_set_oiddir;

function mimic_agent_set_inform_timeout(agentNo, timeout) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_inform_timeout.');
        return;
    }
    var param_types = ['number', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_inform_timeout.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 23; /*'AGENT_INFORM_TIMEOUT'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_inform_timeout', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_inform_timeout"] = mimic["agent"]["set_inform_timeout"] = mimic_agent_set_inform_timeout;

function mimic_agent_set_inform_retries(agentNo, retry) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_set_inform_retries.');
        return;
    }
    var param_types = ['number', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_set_inform_retries.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 7; /*'MGMT_AGENT_SET'*/
    request_str += ' ' + agentNo;
    request_str += ' ' + 24; /*'AGENT_INFORM_RETRIES'*/
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_set_inform_retries', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["set_inform_retries"] = mimic["agent"]["set_inform_retries"] = mimic_agent_set_inform_retries;

function mimic_agent_mget_protocols(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_protocols.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_protocols.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 16; /*'AGENT_PROTOCOL'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_protocols', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_protocols"] = mimic["agent_mget_protocols"] = mimic_agent_mget_protocols;

function mimic_agent_mget_interface(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_interface.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_interface.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 15; /*'AGENT_INTERFACE'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_interface', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_interface"] = mimic["agent_mget_interface"] = mimic_agent_mget_interface;

function mimic_agent_mget_host(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_host.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_host.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 1; /*'AGENT_HOSTNAME'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_host', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_host"] = mimic["agent_mget_host"] = mimic_agent_mget_host;

function mimic_agent_mget_mask(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_mask.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_mask.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 13; /*'AGENT_ADDRMASK'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_mask', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_mask"] = mimic["agent_mget_mask"] = mimic_agent_mget_mask;

function mimic_agent_mget_port(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_port.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_port.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 2; /*'AGENT_PORTNO'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_port', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_port"] = mimic["agent_mget_port"] = mimic_agent_mget_port;

function mimic_agent_mget_read_community(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_read_community.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_read_community.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 3; /*'AGENT_READSTR'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_read_community', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_read_community"] = mimic["agent_mget_read_community"] = mimic_agent_mget_read_community;

function mimic_agent_mget_write_community(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_write_community.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_write_community.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 4; /*'AGENT_WRITESTR'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_write_community', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_write_community"] = mimic["agent_mget_write_community"] = mimic_agent_mget_write_community;

function mimic_agent_mget_mibs(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_mibs.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_mibs.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 7; /*'AGENT_MIBNAME'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_mibs', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_mibs"] = mimic["agent_mget_mibs"] = mimic_agent_mget_mibs;

function mimic_agent_mget_sim(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_sim.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_sim.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 25; /*'AGENT_SIM'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_sim', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_sim"] = mimic["agent_mget_sim"] = mimic_agent_mget_sim;

function mimic_agent_mget_scen(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_scen.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_scen.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 26; /*'AGENT_SCENARIO'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_scen', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_scen"] = mimic["agent_mget_scen"] = mimic_agent_mget_scen;

function mimic_agent_mget_pdusize(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_pdusize.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_pdusize.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 12; /*'AGENT_PDUSIZE'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_pdusize', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_pdusize"] = mimic["agent_mget_pdusize"] = mimic_agent_mget_pdusize;

function mimic_agent_mget_delay(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_delay.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_delay.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 5; /*'AGENT_DELAY'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_delay', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_delay"] = mimic["agent_mget_delay"] = mimic_agent_mget_delay;

function mimic_agent_mget_starttime(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_starttime.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_starttime.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 6; /*'AGENT_STARTTIME'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_starttime', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_starttime"] = mimic["agent_mget_starttime"] = mimic_agent_mget_starttime;

function mimic_agent_mget_state(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_state.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_state.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 8; /*'AGENT_STAT'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_state', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_state"] = mimic["agent_mget_state"] = mimic_agent_mget_state;

function mimic_agent_mget_statistics(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_statistics.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_statistics.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 9; /*'AGENT_STATISTICS'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_statistics', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_statistics"] = mimic["agent_mget_statistics"] = mimic_agent_mget_statistics;

function mimic_agent_mget_drops(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_drops.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_drops.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 14; /*'AGENT_DROPNTH'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_drops', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_drops"] = mimic["agent_mget_drops"] = mimic_agent_mget_drops;

function mimic_agent_mget_changed(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_changed.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_changed.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 10; /*'AGENT_CHANGED'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_changed', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_changed"] = mimic["agent_mget_changed"] = mimic_agent_mget_changed;

function mimic_agent_mget_config_changed(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_config_changed.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_config_changed.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 20; /*'AGENT_CHANGED_CONFIG'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_config_changed', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_config_changed"] = mimic["agent_mget_config_changed"] = mimic_agent_mget_config_changed;

function mimic_agent_mget_state_changed(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_state_changed.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_state_changed.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 21; /*'AGENT_CHANGED_STATE'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_state_changed', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_state_changed"] = mimic["agent_mget_state_changed"] = mimic_agent_mget_state_changed;

function mimic_agent_mget_trace(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_trace.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_trace.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 11; /*'AGENT_TRACE'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_trace', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_trace"] = mimic["agent_mget_trace"] = mimic_agent_mget_trace;

function mimic_agent_mget_validate(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_validate.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_validate.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 17; /*'AGENT_VALIDATE'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_validate', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_validate"] = mimic["agent_mget_validate"] = mimic_agent_mget_validate;

function mimic_agent_mget_owner(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_owner.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_owner.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 18; /*'AGENT_OWNER'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_owner', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_owner"] = mimic["agent_mget_owner"] = mimic_agent_mget_owner;

function mimic_agent_mget_privdir(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_privdir.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_privdir.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 19; /*'AGENT_PRIVDIR'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_privdir', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_privdir"] = mimic["agent_mget_privdir"] = mimic_agent_mget_privdir;

function mimic_agent_mget_oiddir(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_oiddir.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_oiddir.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 22; /*'AGENT_OIDDIR'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_oiddir', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_oiddir"] = mimic["agent_mget_oiddir"] = mimic_agent_mget_oiddir;

function mimic_agent_mget_inform_timeout(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_inform_timeout.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_inform_timeout.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 23; /*'AGENT_INFORM_TIMEOUT'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_inform_timeout', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_inform_timeout"] = mimic["agent_mget_inform_timeout"] = mimic_agent_mget_inform_timeout;

function mimic_agent_mget_inform_retries(agentNos) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_mget_inform_retries.');
        return;
    }
    var param_types = ['object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mget_inform_retries.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 25; /*'MGMT_AGENT_MGET'*/
    request_str += ' ' + 24; /*'AGENT_INFORM_RETRIES'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mget_inform_retries', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["agent_mget_inform_retries"] = mimic["agent_mget_inform_retries"] = mimic_agent_mget_inform_retries;

function mimic_agent_mset_protocol(agentNos, protocols) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_mset_protocol.');
        return;
    }
    var param_types = ['object.number', 'object.string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mset_protocol.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 57; /*'MGMT_AGENT_MSET'*/
    request_str += ' ' + 16; /*'AGENT_PROTOCOL'*/
    var sep = ' ';
    var param_str = array_merger('', '', func_params[0], func_params[1]);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mset_protocol', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["agent_mset_protocol"] = mimic["agent_mset_protocol"] = mimic_agent_mset_protocol;

function mimic_agent_mset_host(agentNos, hosts) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_mset_host.');
        return;
    }
    var param_types = ['object.number', 'object.string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mset_host.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 57; /*'MGMT_AGENT_MSET'*/
    request_str += ' ' + 1; /*'AGENT_HOSTNAME'*/
    var sep = ' ';
    var param_str = array_merger('', '', func_params[0], func_params[1]);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mset_host', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["agent_mset_host"] = mimic["agent_mset_host"] = mimic_agent_mset_host;

function mimic_agent_mset_mask(agentNos, masks) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_mset_mask.');
        return;
    }
    var param_types = ['object.number', 'object.string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mset_mask.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 57; /*'MGMT_AGENT_MSET'*/
    request_str += ' ' + 13; /*'AGENT_ADDRMASK'*/
    var sep = ' ';
    var param_str = array_merger('', '', func_params[0], func_params[1]);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mset_mask', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["agent_mset_mask"] = mimic["agent_mset_mask"] = mimic_agent_mset_mask;

function mimic_agent_mset_port(agentNos, ports) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_mset_port.');
        return;
    }
    var param_types = ['object.number', 'object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mset_port.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 57; /*'MGMT_AGENT_MSET'*/
    request_str += ' ' + 2; /*'AGENT_PORTNO'*/
    var sep = ' ';
    var param_str = array_merger('', '', func_params[0], func_params[1]);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mset_port', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["agent_mset_port"] = mimic["agent_mset_port"] = mimic_agent_mset_port;

function mimic_agent_mset_delay(agentNos, delays) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_mset_delay.');
        return;
    }
    var param_types = ['object.number', 'object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mset_delay.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 57; /*'MGMT_AGENT_MSET'*/
    request_str += ' ' + 5; /*'AGENT_DELAY'*/
    var sep = ' ';
    var param_str = array_merger('', '', func_params[0], func_params[1]);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mset_delay', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["agent_mset_delay"] = mimic["agent_mset_delay"] = mimic_agent_mset_delay;

function mimic_agent_mset_starttime(agentNos, starttimes) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_mset_starttime.');
        return;
    }
    var param_types = ['object.number', 'object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mset_starttime.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 57; /*'MGMT_AGENT_MSET'*/
    request_str += ' ' + 6; /*'AGENT_STARTTIME'*/
    var sep = ' ';
    var param_str = array_merger('', '', func_params[0], func_params[1]);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mset_starttime', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["agent_mset_starttime"] = mimic["agent_mset_starttime"] = mimic_agent_mset_starttime;

function mimic_agent_mset_trace(agentNos, flags) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_mset_trace.');
        return;
    }
    var param_types = ['object.number', 'object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mset_trace.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 57; /*'MGMT_AGENT_MSET'*/
    request_str += ' ' + 11; /*'AGENT_TRACE'*/
    var sep = ' ';
    var param_str = array_merger('', '', func_params[0], func_params[1]);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mset_trace', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["agent_mset_trace"] = mimic["agent_mset_trace"] = mimic_agent_mset_trace;

function mimic_agent_mset_pdusize(agentNos, pdusizes) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_mset_pdusize.');
        return;
    }
    var param_types = ['object.number', 'object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mset_pdusize.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 57; /*'MGMT_AGENT_MSET'*/
    request_str += ' ' + 12; /*'AGENT_PDUSIZE'*/
    var sep = ' ';
    var param_str = array_merger('', '', func_params[0], func_params[1]);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mset_pdusize', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["agent_mset_pdusize"] = mimic["agent_mset_pdusize"] = mimic_agent_mset_pdusize;

function mimic_agent_mset_drops(agentNos, drops) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_mset_drops.');
        return;
    }
    var param_types = ['object.number', 'object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mset_drops.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 57; /*'MGMT_AGENT_MSET'*/
    request_str += ' ' + 14; /*'AGENT_DROPNTH'*/
    var sep = ' ';
    var param_str = array_merger('', '', func_params[0], func_params[1]);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mset_drops', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["agent_mset_drops"] = mimic["agent_mset_drops"] = mimic_agent_mset_drops;

function mimic_agent_mset_validate(agentNos, flags) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_mset_validate.');
        return;
    }
    var param_types = ['object.number', 'object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mset_validate.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 57; /*'MGMT_AGENT_MSET'*/
    request_str += ' ' + 17; /*'AGENT_VALIDATE'*/
    var sep = ' ';
    var param_str = array_merger('', '', func_params[0], func_params[1]);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mset_validate', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["agent_mset_validate"] = mimic["agent_mset_validate"] = mimic_agent_mset_validate;

function mimic_agent_mset_inform_timeout(agentNos, timeouts) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_mset_inform_timeout.');
        return;
    }
    var param_types = ['object.number', 'object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mset_inform_timeout.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 57; /*'MGMT_AGENT_MSET'*/
    request_str += ' ' + 23; /*'AGENT_INFORM_TIMEOUT'*/
    var sep = ' ';
    var param_str = array_merger('', '', func_params[0], func_params[1]);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mset_inform_timeout', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["agent_mset_inform_timeout"] = mimic["agent_mset_inform_timeout"] = mimic_agent_mset_inform_timeout;

function mimic_agent_mset_inform_retries(agentNos, retries) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_mset_inform_retries.');
        return;
    }
    var param_types = ['object.number', 'object.number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_mset_inform_retries.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 57; /*'MGMT_AGENT_MSET'*/
    request_str += ' ' + 24; /*'AGENT_INFORM_RETRIES'*/
    var sep = ' ';
    var param_str = array_merger('', '', func_params[0], func_params[1]);
    request_str += ' ' + param_str;
    request_str += '\r\n';
    dump_on_screen('mimic_agent_mset_inform_retries', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["agent_mset_inform_retries"] = mimic["agent_mset_inform_retries"] = mimic_agent_mset_inform_retries;

function mimic_start_all_agents() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_start_all_agents.');
    }
    var request_str = '';
    request_str += 1; /*'MGMT_MIMIC_START'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["start_all_agents"] = mimic["start_all_agents"] = mimic_start_all_agents;

function mimic_stop_all_agents() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_stop_all_agents.');
    }
    var request_str = '';
    request_str += 2; /*'MGMT_MIMIC_STOP'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["stop_all_agents"] = mimic["stop_all_agents"] = mimic_stop_all_agents;

function mimic_protocol_msg(protocol, msg) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_protocol_msg.');
        return;
    }
    var param_types = ['string', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_protocol_msg.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 53; /*'MGMT_MIMIC_PROTOCOL_MSG'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_protocol_msg', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["protocol_msg"] = mimic["protocol_msg"] = mimic_protocol_msg;

function mimic_store_list() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_store_list.');
    }
    var request_str = '';
    request_str += 79; /*'MGMT_STORE_LIST'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["store_list"] = mimic["store_list"] = mimic_store_list;

function mimic_store_get(varName) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_store_get.');
        return;
    }
    var param_types = ['string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_store_get.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 77; /*'MGMT_STORE_GET'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_store_get', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["store_get"] = mimic["store_get"] = mimic_store_get;

function mimic_cfg_new() {
    if ((arguments.length > 1)) {
        consoleError('Invalid number of parameter in mimic_cfg_new.');
        return;
    }
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 67; /*'MIMIC_CFG_CLEAR'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_cfg_new', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["cfg_new"] = mimic["cfg_new"] = mimic_cfg_new;

function mimic_cfg_load(file) {
    if ((arguments.length < 1) || (arguments.length > 3)) {
        consoleError('Invalid number of parameter in mimic_cfg_load.');
        return;
    }
    var param_types = ['string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_cfg_load.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 17; /*'MIMIC_CFG_LOAD'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_cfg_load', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["cfg_load"] = mimic["cfg_load"] = mimic_cfg_load;

function mimic_cfg_save() {
    if ((arguments.length > 1)) {
        consoleError('Invalid number of parameter in mimic_cfg_save.');
        return;
    }
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 15; /*'MIMIC_CFG_SAVE'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_cfg_save', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["cfg_save"] = mimic["cfg_save"] = mimic_cfg_save;

function mimic_cfg_saveas(file) {
    if ((arguments.length < 1) || (arguments.length > 2)) {
        consoleError('Invalid number of parameter in mimic_cfg_saveas.');
        return;
    }
    var param_types = ['string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_cfg_saveas.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 16; /*'MIMIC_CFG_SAVEAS'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_cfg_saveas', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["cfg_saveas"] = mimic["cfg_saveas"] = mimic_cfg_saveas;

function mimic_add_timer_script(script, interval, argums) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_add_timer_script.');
        return;
    }
    var param_types = ['string', 'number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_add_timer_script.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 43; /*'MGMT_TIMER_SCRIPTS_ADD'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_add_timer_script', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["add_timer_script"] = mimic["add_timer_script"] = mimic_add_timer_script;

function mimic_del_timer_script(script, interval) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_del_timer_script.');
        return;
    }
    var param_types = ['string', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_del_timer_script.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 44; /*'MGMT_TIMER_SCRIPTS_DEL'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_del_timer_script', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["del_timer_script"] = mimic["del_timer_script"] = mimic_del_timer_script;

function mimic_list_timer_scripts() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_list_timer_scripts.');
    }
    var request_str = '';
    request_str += 42; /*'MGMT_TIMER_SCRIPTS_LIST'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["list_timer_scripts"] = mimic["list_timer_scripts"] = mimic_list_timer_scripts;

function mimic_add_access(user, Accessagents, mask) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_add_access.');
        return;
    }
    var param_types = ['string', 'string', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_add_access.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 73; /*'MGMT_ACCESS_ADD'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_add_access', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["add_access"] = mimic["add_access"] = mimic_add_access;

function mimic_del_access(user) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_del_access.');
        return;
    }
    var param_types = ['string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_del_access.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 74; /*'MGMT_ACCESS_DEL'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_del_access', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["del_access"] = mimic["del_access"] = mimic_del_access;

function mimic_list_access() {
    if (arguments.length !== 0) {
        throw new Error('No parameter required in mimic_list_access.');
    }
    var request_str = '';
    request_str += 72; /*'MGMT_ACCESS_LIST'*/
    request_str += '\r\n';
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["list_access"] = mimic["list_access"] = mimic_list_access;

function mimic_save_access(file) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_save_access.');
        return;
    }
    var param_types = ['string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_save_access.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 71; /*'MGMT_ACCESS_SAVE'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_save_access', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["save_access"] = mimic["save_access"] = mimic_save_access;

function mimic_load_access(file) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_load_access.');
        return;
    }
    var param_types = ['string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_load_access.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 70; /*'MGMT_ACCESS_LOAD'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_load_access', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["load_access"] = mimic["load_access"] = mimic_load_access;

function mimic_store_unset(varName) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_store_unset.');
        return;
    }
    var param_types = ['string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_store_unset.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 76; /*'MGMT_STORE_UNSET'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_store_unset', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["store_unset"] = mimic["store_unset"] = mimic_store_unset;

function mimic_store_exists(varName) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_store_exists.');
        return;
    }
    var param_types = ['string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_store_exists.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 78; /*'MGMT_STORE_EXISTS'*/
    var sep = ' ';
    request_str += ' ' + func_params.join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_store_exists', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["store_exists"] = mimic["store_exists"] = mimic_store_exists;

function mimic_store_mget(varNames) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_store_mget.');
        return;
    }
    var param_types = ['object.string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_store_mget.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 94; /*'MGMT_STORE_MGET'*/
    var sep = ' ';
    request_str += ' ' + func_params[0].join(sep);
    request_str += '\r\n';
    dump_on_screen('mimic_store_mget', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["store_mget"] = mimic["store_mget"] = mimic_store_mget;

function mimic_agent_start(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_start.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_start.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 5; /*'MGMT_AGENT_START'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_start', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["start"] = mimic["agent"]["start"] = mimic_agent_start;

function mimic_agent_stop(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_stop.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_stop.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 6; /*'MGMT_AGENT_STOP'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_stop', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["stop"] = mimic["agent"]["stop"] = mimic_agent_stop;

function mimic_agent_pause_now(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_pause_now.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_pause_now.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 13; /*'MGMT_AGENT_PAUSE1'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_pause_now', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["pause_now"] = mimic["agent"]["pause_now"] = mimic_agent_pause_now;

function mimic_agent_pause_at(agentNo, time) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_pause_at.');
        return;
    }
    var param_types = ['number', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_pause_at.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 14; /*'MGMT_AGENT_PAUSE2'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_pause_at', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["pause_at"] = mimic["agent"]["pause_at"] = mimic_agent_pause_at;

function mimic_agent_halt(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_halt.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_halt.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 8; /*'MGMT_AGENT_HALT'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_halt', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["halt"] = mimic["agent"]["halt"] = mimic_agent_halt;

function mimic_agent_resume(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_resume.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_resume.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 9; /*'MGMT_AGENT_RESUME'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_resume', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["resume"] = mimic["agent"]["resume"] = mimic_agent_resume;

function mimic_agent_configure(agentNo, address, mibs) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_configure.');
        return;
    }
    var param_types = ['number', 'string', 'object.string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_configure.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 4; /*'MGMT_AGENT_CONFIG'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_configure', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["configure"] = mimic["agent"]["configure"] = mimic_agent_configure;

function mimic_agent_remove(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_remove.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_remove.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 21; /*'MGMT_AGENT_DELETE'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_remove', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["remove"] = mimic["agent"]["remove"] = mimic_agent_remove;

function mimic_agent_trap_list(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_trap_list.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_trap_list.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 59; /*'MGMT_AGENT_TRAP_LIST'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_trap_list', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["trap_list"] = mimic["agent"]["trap_list"] = mimic_agent_trap_list;

function mimic_agent_trap_config_list(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_trap_config_list.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_trap_config_list.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 60; /*'MGMT_AGENT_TRAP_DEST_LIST'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_trap_config_list', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["trap_config_list"] = mimic["agent"]["trap_config_list"] = mimic_agent_trap_config_list;

function mimic_agent_trap_config_add(agentNo, address, port) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_trap_config_add.');
        return;
    }
    var param_types = ['number', 'string', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_trap_config_add.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 61; /*'MGMT_AGENT_TRAP_DEST_ADD'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_trap_config_add', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["trap_config_add"] = mimic["agent"]["trap_config_add"] = mimic_agent_trap_config_add;

function mimic_agent_trap_config_del(agentNo, address, port) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_trap_config_del.');
        return;
    }
    var param_types = ['number', 'string', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_trap_config_del.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 62; /*'MGMT_AGENT_TRAP_DEST_DEL'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_trap_config_del', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["trap_config_del"] = mimic["agent"]["trap_config_del"] = mimic_agent_trap_config_del;

function mimic_agent_save(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_save.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_save.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 28; /*'MGMT_AGENT_SAVE'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_save', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["save"] = mimic["agent"]["save"] = mimic_agent_save;

function mimic_agent_add_ipalias(agentNo, address, port, mask, iface) {
    if (arguments.length !== 5) {
        consoleError('Invalid number of parameter in mimic_agent_add_ipalias.');
        return;
    }
    var param_types = ['number', 'string', 'number', 'string', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_add_ipalias.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 47; /*'MGMT_AGENT_IPALIAS_ADD'*/
    request_str += ' ' + agentNo;
    var sep = ',';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_add_ipalias', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["add_ipalias"] = mimic["agent"]["add_ipalias"] = mimic_agent_add_ipalias;

function mimic_agent_del_ipalias(agentNo, address, port) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_del_ipalias.');
        return;
    }
    var param_types = ['number', 'string', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_del_ipalias.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 48; /*'MGMT_AGENT_IPALIAS_DEL'*/
    request_str += ' ' + agentNo;
    var sep = ',';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_del_ipalias', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["del_ipalias"] = mimic["agent"]["del_ipalias"] = mimic_agent_del_ipalias;

function mimic_agent_start_ipalias(agentNo, address, port) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_start_ipalias.');
        return;
    }
    var param_types = ['number', 'string', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_start_ipalias.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 49; /*'MGMT_AGENT_IPALIAS_START'*/
    request_str += ' ' + agentNo;
    var sep = ',';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_start_ipalias', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["start_ipalias"] = mimic["agent"]["start_ipalias"] = mimic_agent_start_ipalias;

function mimic_agent_stop_ipalias(agentNo, address, port) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_stop_ipalias.');
        return;
    }
    var param_types = ['number', 'string', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_stop_ipalias.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 50; /*'MGMT_AGENT_IPALIAS_STOP'*/
    request_str += ' ' + agentNo;
    var sep = ',';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_stop_ipalias', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["stop_ipalias"] = mimic["agent"]["stop_ipalias"] = mimic_agent_stop_ipalias;

function mimic_agent_status_ipalias(agentNo, address, port) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_status_ipalias.');
        return;
    }
    var param_types = ['number', 'string', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_status_ipalias.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 87; /*'MGMT_AGENT_IPALIAS_STATUS'*/
    request_str += ' ' + agentNo;
    var sep = ',';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_status_ipalias', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["status_ipalias"] = mimic["agent"]["status_ipalias"] = mimic_agent_status_ipalias;

function mimic_agent_list_ipaliases(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_list_ipaliases.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_list_ipaliases.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 46; /*'MGMT_AGENT_IPALIAS_LIST'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_list_ipaliases', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '\t';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["list_ipaliases"] = mimic["agent"]["list_ipaliases"] = mimic_agent_list_ipaliases;

function mimic_agent_add_timer_script(agentNo, script, interval, argums) {
    if (arguments.length !== 4) {
        consoleError('Invalid number of parameter in mimic_agent_add_timer_script.');
        return;
    }
    var param_types = ['number', 'string', 'number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_add_timer_script.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 65; /*'MGMT_AGENT_TIMER_SCRIPTS_ADD'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_add_timer_script', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["add_timer_script"] = mimic["agent"]["add_timer_script"] = mimic_agent_add_timer_script;

function mimic_agent_del_timer_script(agentNo, script, interval) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_del_timer_script.');
        return;
    }
    var param_types = ['number', 'string', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_del_timer_script.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 66; /*'MGMT_AGENT_TIMER_SCRIPTS_DEL'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_del_timer_script', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["del_timer_script"] = mimic["agent"]["del_timer_script"] = mimic_agent_del_timer_script;

function mimic_agent_list_timer_scripts(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_list_timer_scripts.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_list_timer_scripts.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 64; /*'MGMT_AGENT_TIMER_SCRIPTS_LIST'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_list_timer_scripts', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["list_timer_scripts"] = mimic["agent"]["list_timer_scripts"] = mimic_agent_list_timer_scripts;

function mimic_agent_protocol_msg(agentNo, protocol, msg) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_protocol_msg.');
        return;
    }
    var param_types = ['number', 'string', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_protocol_msg.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 54; /*'MGMT_AGENT_PROTOCOL_MSG'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_protocol_msg', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["protocol_msg"] = mimic["agent"]["protocol_msg"] = mimic_agent_protocol_msg;

function mimic_agent_store_lreplace(agentNo, varName, index, value) {
    if (arguments.length !== 4) {
        consoleError('Invalid number of parameter in mimic_agent_store_lreplace.');
        return;
    }
    var param_types = ['number', 'string', 'number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_store_lreplace.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 98; /*'MGMT_AGENT_STORE_LREPLACE'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_store_lreplace', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["store_lreplace"] = mimic["agent"]["store_lreplace"] = mimic_agent_store_lreplace;

function mimic_agent_store_unset(agentNo, varName) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_store_unset.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_store_unset.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 81; /*'MGMT_AGENT_STORE_UNSET'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_store_unset', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["store_unset"] = mimic["agent"]["store_unset"] = mimic_agent_store_unset;

function mimic_agent_store_list(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_store_list.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_store_list.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 84; /*'MGMT_AGENT_STORE_LIST'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_store_list', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["store_list"] = mimic["agent"]["store_list"] = mimic_agent_store_list;

function mimic_agent_store_exists(agentNo, varName) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_store_exists.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_store_exists.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 83; /*'MGMT_AGENT_STORE_EXISTS'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_store_exists', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var return_type = 'int';
        var final_output = response_to_number(response_message, return_type);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["store_exists"] = mimic["agent"]["store_exists"] = mimic_agent_store_exists;

function mimic_agent_store_get(agentNo, varName) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_store_get.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_store_get.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 82; /*'MGMT_AGENT_STORE_GET'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_store_get', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["store_get"] = mimic["agent"]["store_get"] = mimic_agent_store_get;

function mimic_agent_store_mget(agentNo, varNames) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_store_mget.');
        return;
    }
    var param_types = ['number', 'object.string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_store_mget.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 97; /*'MGMT_AGENT_STORE_MGET'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        if (newArg[0].length > 0) {
            request_str += ' ' + newArg[0].join(sep);
        }
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_store_mget', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["store_mget"] = mimic["agent"]["store_mget"] = mimic_agent_store_mget;

function mimic_agent_store_copy(agentNo, other) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_store_copy.');
        return;
    }
    var param_types = ['number', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_store_copy.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 100; /*'MGMT_AGENT_STORE_COPY'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_store_copy', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["store_copy"] = mimic["agent"]["store_copy"] = mimic_agent_store_copy;

function mimic_agent_from_list(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_from_list.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_from_list.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 90; /*'MGMT_AGENT_FROM_LIST'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_from_list', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["from_list"] = mimic["agent"]["from_list"] = mimic_agent_from_list;

function mimic_agent_from_add(agentNo, host, port) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_from_add.');
        return;
    }
    var param_types = ['number', 'string', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_from_add.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 91; /*'MGMT_AGENT_FROM_ADD'*/
    request_str += ' ' + agentNo;
    var sep = ',';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_from_add', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["from_add"] = mimic["agent"]["from_add"] = mimic_agent_from_add;

function mimic_agent_from_del(agentNo, host, port) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_from_del.');
        return;
    }
    var param_types = ['number', 'string', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_from_del.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 92; /*'MGMT_AGENT_FROM_DEL'*/
    request_str += ' ' + agentNo;
    var sep = ',';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_from_del', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["from_del"] = mimic["agent"]["from_del"] = mimic_agent_from_del;

function mimic_agent_valuespace_set_pos(agentNo, pos) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_valuespace_set_pos.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_valuespace_set_pos.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 19; /*'MGMT_MIB_POS'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_valuespace_set_pos', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["vs"]["set_pos"] = mimic["agent"]["valuespace"]["set_pos"] = mimic_agent_valuespace_set_pos;

function mimic_agent_valuespace_get_objects(agentNo) {
    if (arguments.length !== 1) {
        consoleError('Invalid number of parameter in mimic_agent_valuespace_get_objects.');
        return;
    }
    var param_types = ['number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_valuespace_get_objects.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 20; /*'MGMT_LIST_MIB'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_valuespace_get_objects', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["vs"]["get_objects"] = mimic["agent"]["valuespace"]["get_objects"] = mimic_agent_valuespace_get_objects;

function mimic_agent_valuespace_get_instances(agentNo, obj) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_valuespace_get_instances.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_valuespace_get_instances.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 23; /*'MGMT_LIST_INSTANCES'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_valuespace_get_instances', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["vs"]["get_instances"] = mimic["agent"]["valuespace"]["get_instances"] = mimic_agent_valuespace_get_instances;

function mimic_agent_valuespace_get_variables(agentNo, obj, instance) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_valuespace_get_variables.');
        return;
    }
    var param_types = ['number', 'string', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_valuespace_get_variables.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 24; /*'MGMT_LIST_VARIABLES'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_valuespace_get_variables', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["vs"]["get_variables"] = mimic["agent"]["valuespace"]["get_variables"] = mimic_agent_valuespace_get_variables;

function mimic_agent_valuespace_get_oid(agentNo, obj) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_valuespace_get_oid.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_valuespace_get_oid.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 34; /*'MGMT_MIB_OID'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_valuespace_get_oid', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["vs"]["get_oid"] = mimic["agent"]["valuespace"]["get_oid"] = mimic_agent_valuespace_get_oid;

function mimic_agent_valuespace_get_name(agentNo, oid) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_valuespace_get_name.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_valuespace_get_name.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 37; /*'MGMT_MIB_NAME'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_valuespace_get_name', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["vs"]["get_name"] = mimic["agent"]["valuespace"]["get_name"] = mimic_agent_valuespace_get_name;

function mimic_agent_valuespace_get_info(agentNo, obj) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_valuespace_get_info.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_valuespace_get_info.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 35; /*'MGMT_MIB_INFO'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_valuespace_get_info', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["vs"]["get_info"] = mimic["agent"]["valuespace"]["get_info"] = mimic_agent_valuespace_get_info;

function mimic_agent_valuespace_eval_value(agentNo, obj, instance) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_valuespace_eval_value.');
        return;
    }
    var param_types = ['number', 'string', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_valuespace_eval_value.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 38; /*'MGMT_VAR_EVAL'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_valuespace_eval_value', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["vs"]["eval_value"] = mimic["agent"]["valuespace"]["eval_value"] = mimic_agent_valuespace_eval_value;

function mimic_agent_valuespace_split_oid(agentNo, oid) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_valuespace_split_oid.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_valuespace_split_oid.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 41; /*'MGMT_SPLIT_OID_INDEX'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_valuespace_split_oid', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var seperator = '/s+/g';
        var final_output = response_to_list(response_message, seperator, 'string_list');
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["vs"]["split_oid"] = mimic["agent"]["valuespace"]["split_oid"] = mimic_agent_valuespace_split_oid;

function mimic_agent_valuespace_get_mib(agentNo, obj) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_valuespace_get_mib.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_valuespace_get_mib.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 45; /*'MGMT_MIBNAME'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_valuespace_get_mib', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["vs"]["get_mib"] = mimic["agent"]["valuespace"]["get_mib"] = mimic_agent_valuespace_get_mib;

function mimic_agent_valuespace_set_state(agentNo, obj, state) {
    if (arguments.length !== 3) {
        consoleError('Invalid number of parameter in mimic_agent_valuespace_set_state.');
        return;
    }
    var param_types = ['number', 'string', 'number'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_valuespace_set_state.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 86; /*'MGMT_MIB_STATE_SET'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_valuespace_set_state', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    debugScreen('Result is undefined');
}

m["a"]["vs"]["set_state"] = mimic["agent"]["valuespace"]["set_state"] = mimic_agent_valuespace_set_state;

function mimic_agent_valuespace_get_state(agentNo, obj) {
    if (arguments.length !== 2) {
        consoleError('Invalid number of parameter in mimic_agent_valuespace_get_state.');
        return;
    }
    var param_types = ['number', 'string'];
    if (param_verifier(param_types, arguments) !== 0) {
        consoleError('Invalid parameter in mimic_agent_valuespace_get_state.');
        return;
    } /*The further code will not run until all the parameters are correct.*/
    var func_params = Array.prototype.slice.call(arguments);
    var request_str = '';
    request_str += 85; /*'MGMT_MIB_STATE_GET'*/
    request_str += ' ' + agentNo;
    var sep = ' ';
    var newArg = func_params.slice(1);
    if (newArg.length > 0) {
        request_str += ' ' + newArg.join(sep);
    }
    request_str += '\r\n';
    dump_on_screen('mimic_agent_valuespace_get_state', func_params);
    debugScreen('Request string with Parameter is:- ' + request_str + '');
    var response_message = dispatch_message(request_str);
    if (response_message !== undefined) {
        var final_output = response_to_string(response_message);
        debugScreen('Result is ' + final_output + '');
        return final_output;
    }
}

m["a"]["vs"]["get_state"] = mimic["agent"]["valuespace"]["get_state"] = mimic_agent_valuespace_get_state;

function mimic_agent_mset_interface(agentNos, interfaces) {
    var argTypes = ['object.number', 'object.string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_mset_interface.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_mset_interface.');
    }
    var newArgs = ['mimic_agent_mset_interface', 15];
    agent_mset_common.apply(null, newArgs.concat(arguments));
}

m["agent_mset_interface"] = mimic["agent_mset_interface"] = mimic_agent_mset_interface;

function mimic_agent_mset_read(agentNos, readcomms) {
    var argTypes = ['object.number', 'object.string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_mset_read.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_mset_read.');
    }
    var newArgs = ['mimic_agent_mset_read', 3];
    agent_mset_common.apply(null, newArgs.concat(arguments));
}

m["agent_mset_read"] = mimic["agent_mset_read"] = mimic_agent_mset_read;

function mimic_agent_mset_write(agentNos, writecomms) {
    var argTypes = ['object.number', 'object.string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_mset_write.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_mset_write.');
    }
    var newArgs = ['mimic_agent_mset_write', 4];
    agent_mset_common.apply(null, newArgs.concat(arguments));
}

m["agent_mset_write"] = mimic["agent_mset_write"] = mimic_agent_mset_write;

function mimic_agent_mset_mibs(agentNos, mibs) {
    var argTypes = ['object.number', 'object.string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_mset_mibs.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_mset_mibs.');
    }
    var newArgs = ['mimic_agent_mset_mibs', 7];
    agent_mset_common.apply(null, newArgs.concat(arguments));
}

m["agent_mset_mibs"] = mimic["agent_mset_mibs"] = mimic_agent_mset_mibs;

function mimic_agent_mset_oiddir(agentNos, oids) {
    var argTypes = ['object.number', 'object.string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_mset_oiddir.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_mset_oiddir.');
    }
    var newArgs = ['mimic_agent_mset_oiddir', 22];
    agent_mset_common.apply(null, newArgs.concat(arguments));
}

m["agent_mset_oiddir"] = mimic["agent_mset_oiddir"] = mimic_agent_mset_oiddir;

function mimic_store_set(varName, value, persist) {
    var argTypes = ['string', 'string', 'number'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_store_set.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_store_set.');
    }
    var newArgs = ['mimic_store_set', 75];
    store_common.apply(null, newArgs.concat(arguments));
}

m["store_set"] = mimic["store_set"] = mimic_store_set;

function mimic_store_append(varName, value, persist) {
    var argTypes = ['string', 'string', 'number'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_store_append.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_store_append.');
    }
    var newArgs = ['mimic_store_append', 88];
    store_common.apply(null, newArgs.concat(arguments));
}

m["store_append"] = mimic["store_append"] = mimic_store_append;

function mimic_store_lreplace(varName, index, value) {
    var argTypes = ['string', 'number', 'string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_store_lreplace.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_store_lreplace.');
    }
    var newArgs = ['mimic_store_lreplace', 95];
    store_common.apply(null, newArgs.concat(arguments));
}

m["store_lreplace"] = mimic["store_lreplace"] = mimic_store_lreplace;

function mimic_store_mlreplace(varNames, indexs, values) {
    var argTypes = ['object.string', 'object.number', 'object.string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_store_mlreplace.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_store_mlreplace.');
    }
    var newArgs = ['mimic_store_mlreplace', 96];
    store_common.apply(null, newArgs.concat(arguments));
}

m["store_mlreplace"] = mimic["store_mlreplace"] = mimic_store_mlreplace;

function mimic_trap_config_add(destination, port) {
    var argTypes = ['string', 'number'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_trap_config_add.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_trap_config_add.');
    }
    var newArgs = ['mimic_trap_config_add', 32];
    trap_config_common.apply(null, newArgs.concat(arguments));
}

m["trap_config_add"] = mimic["trap_config_add"] = mimic_trap_config_add;

function mimic_trap_config_delete(destination, port) {
    var argTypes = ['string', 'number'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_trap_config_delete.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_trap_config_delete.');
    }
    var newArgs = ['mimic_trap_config_delete', 33];
    trap_config_common.apply(null, newArgs.concat(arguments));
}

m["trap_config_delete"] = mimic["trap_config_delete"] = mimic_trap_config_delete;

function mimic_agent_store_set(agentNo, varName, value, persist) {
    var argTypes = ['number', 'string', 'string', 'number'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_store_set.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_store_set.');
    }
    var newArgs = ['mimic_agent_store_set', 80];
    agent_store_common.apply(null, newArgs.concat(arguments));
}

m["a"]["store_set"] = mimic["agent"]["store_set"] = mimic_agent_store_set;

function mimic_agent_store_append(agentNo, varName, value, persist) {
    var argTypes = ['number', 'string', 'string', 'number'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_store_append.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_store_append.');
    }
    var newArgs = ['mimic_agent_store_append', 89];
    agent_store_common.apply(null, newArgs.concat(arguments));
}

m["a"]["store_append"] = mimic["agent"]["store_append"] = mimic_agent_store_append;

function mimic_agent_valuespace_meval_value(agentNo, objs, instances) {
    var argTypes = ['number', 'object.string', 'object.string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_valuespace_meval_value.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_valuespace_meval_value.');
    }
    var newArgs = ['mimic_agent_valuespace_meval_value', 58];
    return valuespace_mlist_common.apply(null, newArgs.concat(arguments));
}

m["a"]["vs"]["meval_value"] = mimic["agent"]["valuespace"]["meval_value"] = mimic_agent_valuespace_meval_value;

function mimic_agent_valuespace_get_minfo(agentNo, objs) {
    var argTypes = ['number', 'object.string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_valuespace_get_minfo.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_valuespace_get_minfo.');
    }
    var newArgs = ['mimic_agent_valuespace_get_minfo', 36];
    return valuespace_mlist_common.apply(null, newArgs.concat(arguments));
}

m["a"]["vs"]["get_minfo"] = mimic["agent"]["valuespace"]["get_minfo"] = mimic_agent_valuespace_get_minfo;

function mimic_agent_valuespace_add(agentNo, obj, instance) {
    var argTypes = ['number', 'string', 'string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_valuespace_add.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_valuespace_add.');
    }
    var newArgs = ['mimic_agent_valuespace_add', 26];
    valuespace_addRemove_common.apply(null, newArgs.concat(arguments));
}

m["a"]["vs"]["add"] = mimic["agent"]["valuespace"]["add"] = mimic_agent_valuespace_add;

function mimic_agent_valuespace_remove(agentNo, obj, instance) {
    var argTypes = ['number', 'string', 'string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_valuespace_remove.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_valuespace_remove.');
    }
    var newArgs = ['mimic_agent_valuespace_remove', 27];
    valuespace_addRemove_common.apply(null, newArgs.concat(arguments));
}

m["a"]["vs"]["remove"] = mimic["agent"]["valuespace"]["remove"] = mimic_agent_valuespace_remove;

function mimic_agent_valuespace_set_value(agentNo, obj, instance, varName, value) {
    var argTypes = ['number', 'string', 'string', 'string', 'string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_valuespace_set_value.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_valuespace_set_value.');
    }
    var newArgs = ['mimic_agent_valuespace_set_value', 11];
    valuespace_addRemove_common.apply(null, newArgs.concat(arguments));
}

m["a"]["vs"]["set_value"] = mimic["agent"]["valuespace"]["set_value"] = mimic_agent_valuespace_set_value;

function mimic_agent_valuespace_mset_value(agentNo, objs, instances, varNames, values) {
    var argTypes = ['number', 'object.string', 'object.string', 'object.string', 'object.string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_valuespace_mset_value.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_valuespace_mset_value.');
    }
    var newArgs = ['mimic_agent_valuespace_mset_value', 56];
    valuespace_addRemove_common.apply(null, newArgs.concat(arguments));
}

m["a"]["vs"]["mset_value"] = mimic["agent"]["valuespace"]["mset_value"] = mimic_agent_valuespace_mset_value;

function mimic_agent_valuespace_unset_value(agentNo, obj, instance, varName) {
    var argTypes = ['number', 'string', 'string', 'string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_valuespace_unset_value.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_valuespace_unset_value.');
    }
    var newArgs = ['mimic_agent_valuespace_unset_value', 51];
    valuespace_addRemove_common.apply(null, newArgs.concat(arguments));
}

m["a"]["vs"]["unset_value"] = mimic["agent"]["valuespace"]["unset_value"] = mimic_agent_valuespace_unset_value;

function mimic_agent_valuespace_munset_value(agentNo, objs, instances, varNames) {
    var argTypes = ['number', 'object.string', 'object.string', 'object.string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_valuespace_munset_value.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_valuespace_munset_value.');
    }
    var newArgs = ['mimic_agent_valuespace_munset_value', 29];
    valuespace_addRemove_common.apply(null, newArgs.concat(arguments));
}

m["a"]["vs"]["munset_value"] = mimic["agent"]["valuespace"]["munset_value"] = mimic_agent_valuespace_munset_value;

function mimic_agent_valuespace_get_value(agentNo, obj, instance, varName) {
    var argTypes = ['number', 'string', 'string', 'string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_valuespace_get_value.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_valuespace_get_value.');
    }
    var newArgs = ['mimic_agent_valuespace_get_value', 10];
    return valuespace_common_part.apply(null, newArgs.concat(arguments));
}

m["a"]["vs"]["get_value"] = mimic["agent"]["valuespace"]["get_value"] = mimic_agent_valuespace_get_value;

function mimic_agent_valuespace_mget_value(agentNo, objs, instances, varNames) {
    var argTypes = ['number', 'object.string', 'object.string', 'object.string'];
    if (arguments.length !== argTypes.length) {
        throw new Error('Invalid number of parameter in mimic_agent_valuespace_mget_value.');
    }
    if (param_verifier(argTypes, arguments) !== 0) {
        throw new Error('Invalid parameter in mimic_agent_valuespace_mget_value.');
    }
    var newArgs = ['mimic_agent_valuespace_mget_value', 55];
    return valuespace_common_part.apply(null, newArgs.concat(arguments));
}

m["a"]["vs"]["mget_value"] = mimic["agent"]["valuespace"]["mget_value"] = mimic_agent_valuespace_mget_value;