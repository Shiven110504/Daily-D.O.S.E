"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/encoding";
exports.ids = ["vendor-chunks/encoding"];
exports.modules = {

/***/ "(rsc)/./node_modules/encoding/lib/encoding.js":
/*!***********************************************!*\
  !*** ./node_modules/encoding/lib/encoding.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar iconvLite = __webpack_require__(/*! iconv-lite */ \"(rsc)/./node_modules/iconv-lite/lib/index.js\");\n// Expose to the world\nmodule.exports.convert = convert;\n/**\n * Convert encoding of an UTF-8 string or a buffer\n *\n * @param {String|Buffer} str String to be converted\n * @param {String} to Encoding to be converted to\n * @param {String} [from='UTF-8'] Encoding to be converted from\n * @return {Buffer} Encoded string\n */ function convert(str, to, from) {\n    from = checkEncoding(from || \"UTF-8\");\n    to = checkEncoding(to || \"UTF-8\");\n    str = str || \"\";\n    var result;\n    if (from !== \"UTF-8\" && typeof str === \"string\") {\n        str = Buffer.from(str, \"binary\");\n    }\n    if (from === to) {\n        if (typeof str === \"string\") {\n            result = Buffer.from(str);\n        } else {\n            result = str;\n        }\n    } else {\n        try {\n            result = convertIconvLite(str, to, from);\n        } catch (E) {\n            console.error(E);\n            result = str;\n        }\n    }\n    if (typeof result === \"string\") {\n        result = Buffer.from(result, \"utf-8\");\n    }\n    return result;\n}\n/**\n * Convert encoding of astring with iconv-lite\n *\n * @param {String|Buffer} str String to be converted\n * @param {String} to Encoding to be converted to\n * @param {String} [from='UTF-8'] Encoding to be converted from\n * @return {Buffer} Encoded string\n */ function convertIconvLite(str, to, from) {\n    if (to === \"UTF-8\") {\n        return iconvLite.decode(str, from);\n    } else if (from === \"UTF-8\") {\n        return iconvLite.encode(str, to);\n    } else {\n        return iconvLite.encode(iconvLite.decode(str, from), to);\n    }\n}\n/**\n * Converts charset name if needed\n *\n * @param {String} name Character set\n * @return {String} Character set name\n */ function checkEncoding(name) {\n    return (name || \"\").toString().trim().replace(/^latin[\\-_]?(\\d+)$/i, \"ISO-8859-$1\").replace(/^win(?:dows)?[\\-_]?(\\d+)$/i, \"WINDOWS-$1\").replace(/^utf[\\-_]?(\\d+)$/i, \"UTF-$1\").replace(/^ks_c_5601\\-1987$/i, \"CP949\").replace(/^us[\\-_]?ascii$/i, \"ASCII\").toUpperCase();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZW5jb2RpbmcvbGliL2VuY29kaW5nLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsWUFBWUMsbUJBQU9BLENBQUM7QUFFeEIsc0JBQXNCO0FBQ3RCQyxzQkFBc0IsR0FBR0U7QUFFekI7Ozs7Ozs7Q0FPQyxHQUNELFNBQVNBLFFBQVFDLEdBQUcsRUFBRUMsRUFBRSxFQUFFQyxJQUFJO0lBQzFCQSxPQUFPQyxjQUFjRCxRQUFRO0lBQzdCRCxLQUFLRSxjQUFjRixNQUFNO0lBQ3pCRCxNQUFNQSxPQUFPO0lBRWIsSUFBSUk7SUFFSixJQUFJRixTQUFTLFdBQVcsT0FBT0YsUUFBUSxVQUFVO1FBQzdDQSxNQUFNSyxPQUFPSCxJQUFJLENBQUNGLEtBQUs7SUFDM0I7SUFFQSxJQUFJRSxTQUFTRCxJQUFJO1FBQ2IsSUFBSSxPQUFPRCxRQUFRLFVBQVU7WUFDekJJLFNBQVNDLE9BQU9ILElBQUksQ0FBQ0Y7UUFDekIsT0FBTztZQUNISSxTQUFTSjtRQUNiO0lBQ0osT0FBTztRQUNILElBQUk7WUFDQUksU0FBU0UsaUJBQWlCTixLQUFLQyxJQUFJQztRQUN2QyxFQUFFLE9BQU9LLEdBQUc7WUFDUkMsUUFBUUMsS0FBSyxDQUFDRjtZQUNkSCxTQUFTSjtRQUNiO0lBQ0o7SUFFQSxJQUFJLE9BQU9JLFdBQVcsVUFBVTtRQUM1QkEsU0FBU0MsT0FBT0gsSUFBSSxDQUFDRSxRQUFRO0lBQ2pDO0lBRUEsT0FBT0E7QUFDWDtBQUVBOzs7Ozs7O0NBT0MsR0FDRCxTQUFTRSxpQkFBaUJOLEdBQUcsRUFBRUMsRUFBRSxFQUFFQyxJQUFJO0lBQ25DLElBQUlELE9BQU8sU0FBUztRQUNoQixPQUFPTixVQUFVZSxNQUFNLENBQUNWLEtBQUtFO0lBQ2pDLE9BQU8sSUFBSUEsU0FBUyxTQUFTO1FBQ3pCLE9BQU9QLFVBQVVnQixNQUFNLENBQUNYLEtBQUtDO0lBQ2pDLE9BQU87UUFDSCxPQUFPTixVQUFVZ0IsTUFBTSxDQUFDaEIsVUFBVWUsTUFBTSxDQUFDVixLQUFLRSxPQUFPRDtJQUN6RDtBQUNKO0FBRUE7Ozs7O0NBS0MsR0FDRCxTQUFTRSxjQUFjUyxJQUFJO0lBQ3ZCLE9BQU8sQ0FBQ0EsUUFBUSxFQUFDLEVBQ1pDLFFBQVEsR0FDUkMsSUFBSSxHQUNKQyxPQUFPLENBQUMsdUJBQXVCLGVBQy9CQSxPQUFPLENBQUMsOEJBQThCLGNBQ3RDQSxPQUFPLENBQUMscUJBQXFCLFVBQzdCQSxPQUFPLENBQUMsc0JBQXNCLFNBQzlCQSxPQUFPLENBQUMsb0JBQW9CLFNBQzVCQyxXQUFXO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtcGxlLW5leHQtYXBwLy4vbm9kZV9tb2R1bGVzL2VuY29kaW5nL2xpYi9lbmNvZGluZy5qcz8yMzEzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGljb252TGl0ZSA9IHJlcXVpcmUoJ2ljb252LWxpdGUnKTtcblxuLy8gRXhwb3NlIHRvIHRoZSB3b3JsZFxubW9kdWxlLmV4cG9ydHMuY29udmVydCA9IGNvbnZlcnQ7XG5cbi8qKlxuICogQ29udmVydCBlbmNvZGluZyBvZiBhbiBVVEYtOCBzdHJpbmcgb3IgYSBidWZmZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xCdWZmZXJ9IHN0ciBTdHJpbmcgdG8gYmUgY29udmVydGVkXG4gKiBAcGFyYW0ge1N0cmluZ30gdG8gRW5jb2RpbmcgdG8gYmUgY29udmVydGVkIHRvXG4gKiBAcGFyYW0ge1N0cmluZ30gW2Zyb209J1VURi04J10gRW5jb2RpbmcgdG8gYmUgY29udmVydGVkIGZyb21cbiAqIEByZXR1cm4ge0J1ZmZlcn0gRW5jb2RlZCBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gY29udmVydChzdHIsIHRvLCBmcm9tKSB7XG4gICAgZnJvbSA9IGNoZWNrRW5jb2RpbmcoZnJvbSB8fCAnVVRGLTgnKTtcbiAgICB0byA9IGNoZWNrRW5jb2RpbmcodG8gfHwgJ1VURi04Jyk7XG4gICAgc3RyID0gc3RyIHx8ICcnO1xuXG4gICAgdmFyIHJlc3VsdDtcblxuICAgIGlmIChmcm9tICE9PSAnVVRGLTgnICYmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN0ciA9IEJ1ZmZlci5mcm9tKHN0ciwgJ2JpbmFyeScpO1xuICAgIH1cblxuICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICBpZiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IEJ1ZmZlci5mcm9tKHN0cik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBzdHI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gY29udmVydEljb252TGl0ZShzdHIsIHRvLCBmcm9tKTtcbiAgICAgICAgfSBjYXRjaCAoRSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihFKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHN0cjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXN1bHQgPSBCdWZmZXIuZnJvbShyZXN1bHQsICd1dGYtOCcpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydCBlbmNvZGluZyBvZiBhc3RyaW5nIHdpdGggaWNvbnYtbGl0ZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEJ1ZmZlcn0gc3RyIFN0cmluZyB0byBiZSBjb252ZXJ0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0byBFbmNvZGluZyB0byBiZSBjb252ZXJ0ZWQgdG9cbiAqIEBwYXJhbSB7U3RyaW5nfSBbZnJvbT0nVVRGLTgnXSBFbmNvZGluZyB0byBiZSBjb252ZXJ0ZWQgZnJvbVxuICogQHJldHVybiB7QnVmZmVyfSBFbmNvZGVkIHN0cmluZ1xuICovXG5mdW5jdGlvbiBjb252ZXJ0SWNvbnZMaXRlKHN0ciwgdG8sIGZyb20pIHtcbiAgICBpZiAodG8gPT09ICdVVEYtOCcpIHtcbiAgICAgICAgcmV0dXJuIGljb252TGl0ZS5kZWNvZGUoc3RyLCBmcm9tKTtcbiAgICB9IGVsc2UgaWYgKGZyb20gPT09ICdVVEYtOCcpIHtcbiAgICAgICAgcmV0dXJuIGljb252TGl0ZS5lbmNvZGUoc3RyLCB0byk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGljb252TGl0ZS5lbmNvZGUoaWNvbnZMaXRlLmRlY29kZShzdHIsIGZyb20pLCB0byk7XG4gICAgfVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGNoYXJzZXQgbmFtZSBpZiBuZWVkZWRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBDaGFyYWN0ZXIgc2V0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IENoYXJhY3RlciBzZXQgbmFtZVxuICovXG5mdW5jdGlvbiBjaGVja0VuY29kaW5nKG5hbWUpIHtcbiAgICByZXR1cm4gKG5hbWUgfHwgJycpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnJlcGxhY2UoL15sYXRpbltcXC1fXT8oXFxkKykkL2ksICdJU08tODg1OS0kMScpXG4gICAgICAgIC5yZXBsYWNlKC9ed2luKD86ZG93cyk/W1xcLV9dPyhcXGQrKSQvaSwgJ1dJTkRPV1MtJDEnKVxuICAgICAgICAucmVwbGFjZSgvXnV0ZltcXC1fXT8oXFxkKykkL2ksICdVVEYtJDEnKVxuICAgICAgICAucmVwbGFjZSgvXmtzX2NfNTYwMVxcLTE5ODckL2ksICdDUDk0OScpXG4gICAgICAgIC5yZXBsYWNlKC9edXNbXFwtX10/YXNjaWkkL2ksICdBU0NJSScpXG4gICAgICAgIC50b1VwcGVyQ2FzZSgpO1xufVxuIl0sIm5hbWVzIjpbImljb252TGl0ZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29udmVydCIsInN0ciIsInRvIiwiZnJvbSIsImNoZWNrRW5jb2RpbmciLCJyZXN1bHQiLCJCdWZmZXIiLCJjb252ZXJ0SWNvbnZMaXRlIiwiRSIsImNvbnNvbGUiLCJlcnJvciIsImRlY29kZSIsImVuY29kZSIsIm5hbWUiLCJ0b1N0cmluZyIsInRyaW0iLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/encoding/lib/encoding.js\n");

/***/ })

};
;