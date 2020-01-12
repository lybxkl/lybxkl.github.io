(function(e) {
	e.fn.reponsetable = function(obj) {
		var tableid = $(this).attr("id");
		reponse.rendertable(obj, tableid);
		var tr=$(this).find("tr");
		$("tr").click(function(e) {
			 var dd = reponse.resiverowdata(this, tableid);
		})
	}
	var reponse = {
		//加载表格
		rendertable: function(tableobj, tableid) {
			var thead = "<thead><tr>";
			var tbody = "<tbody>";
			for (var i = 0; i < tableobj.colum.length; i++) {
				var th = '<th data-field="' + tableobj.colum[i].field + '">' + tableobj.colum[i].title + '</th>';
				thead += th;
			}
			thead += '</tr></thead>';
			for (var i = 0; i < tableobj.data.length; i++) {
				tbody += '<tr>'
				for (var j = 0; j < tableobj.colum.length; j++) {
					var field = tableobj.colum[j].field;
					var datath = tableobj.colum[j].title;
					var content = tableobj.data[i][field];
					if (content == undefined) content = "";
					var td = '<td data-field="' + field + '" data-th="' + datath + '">' + content + '</td>';
					tbody += td;
				}
				tbody += '</tr>'
			}
			tbody += "</tbody>"
			$("#" + tableid).prepend(thead);
			$("#" + tableid).append(tbody);
			//存table对象
			var tbodytr=$("#"+tableid).find("tbody tr");
			var data=[];
			for(var i=0;i<tbodytr.length;i++){
				var tbodytd=$(tbodytr[i]).find("td");
				var colobj={};
				for(var j=0;j<tbodytd.length;j++){
					var field=$(tbodytd[j]).attr("data-field");
					var text=$(tbodytd[j]).text();
					if(field!=undefined){
					 colobj[field]=text;
					}
				}
				data.push(colobj);
			}
			tableobj.data=data;
			$("#" + tableid).data('tableObj', tableobj);
		},

		msieversion: function() {
			var ua = window.navigator.userAgent;
			var msie = ua.indexOf("MSIE ");
			if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) 
			{
				return true;
			} else { // If another browser,
				return false;
			}
			return false;
		},
	}
	window.reponse = reponse;
}(jQuery));
