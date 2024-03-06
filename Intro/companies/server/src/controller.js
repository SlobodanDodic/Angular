"use strict";

var model = require("./model.js");

module.exports.query = query;
module.exports.query_v2 = query_v2;
module.exports.save = save;
module.exports.show = show;
module.exports.update = update;
module.exports.remove = remove;

module.exports.queryRelationship = queryRelationship;
module.exports.saveRelationship = saveRelationship;
module.exports.showRelationship = showRelationship;
module.exports.updateRelationship = updateRelationship;
module.exports.removeRelationship = removeRelationship;

function query(req, res) {
    model.load(req.params.entity, function(entities) {
        if(req.query.filter){
            try {
                req.query.filter = JSON.parse(req.query.filter);
            } catch {
                console.log("invalid filter")
            }
        }
        console.log(req.query);
        for(var key in req.query.filter) {            
            entities = entities.filter(function(obj) {
                if(obj[key] !== undefined) {
                    return obj[key].toString().toLowerCase().indexOf(req.query.filter[key].toLowerCase()) > -1;
                }
                return true;
            });
        }
		
		if(req.query.filter) {
			var ratingFrom = parseInt(req.query.filter.ratingFrom, 10);
			if(ratingFrom !== undefined  && !isNaN(ratingFrom)) {
				entities = entities.filter(function(obj) {
					return parseInt(obj.rating, 10) >= ratingFrom;
				});
			}
			var ratingTo = parseInt(req.query.filter.ratingTo, 10);
			if(ratingTo !== undefined && !isNaN(ratingTo)) {
				entities = entities.filter(function(obj) {
					return parseInt(obj.rating, 10) <= ratingTo;
				});
			}
		}
		
		if(req.query.sort) {
            entities = sort(entities, req.query.sort, req.query.sortDirection);
        }
        var count = entities.length;
        console.log(count)
        entities = pagination(entities, req.query.page, req.query.pageSize);

        res.status(200).json(entities);
    });
}

function query_v2(req, res) {
    model.load(req.params.entity, function(entities) {
        if(req.query.filter){
            try {
                req.query.filter = JSON.parse(req.query.filter);
            } catch {
                console.log("invalid filter")
            }
        }
        console.log(req.query);
        for(var key in req.query.filter) {            
            entities = entities.filter(function(obj) {
                if(obj[key] !== undefined) {
                    return obj[key].toString().toLowerCase().indexOf(req.query.filter[key].toLowerCase()) > -1;
                }
                return true;
            });
        }
		
		if(req.query.filter) {
			var ratingFrom = parseInt(req.query.filter.ratingFrom, 10);
			if(ratingFrom !== undefined  && !isNaN(ratingFrom)) {
				entities = entities.filter(function(obj) {
					return parseInt(obj.rating, 10) >= ratingFrom;
				});
			}
			var ratingTo = parseInt(req.query.filter.ratingTo, 10);
			if(ratingTo !== undefined && !isNaN(ratingTo)) {
				entities = entities.filter(function(obj) {
					return parseInt(obj.rating, 10) <= ratingTo;
				});
			}
		}
		
		if(req.query.sort) {
            entities = sort(entities, req.query.sort, req.query.sortDirection);
        }
        var count = entities.length;
        console.log(count)
        entities = pagination(entities, req.query.page, req.query.pageSize);

        res.status(200).json({count, results: entities});
    });
}


function save(req, res) {
    // console.log(req);
    model.load(req.params.entity, function(entities) {
        var lastId = 1
        if(entities.length > 0){
            lastId = parseInt(entities[entities.length - 1]._id);
        }
        req.body._id = lastId + 1;
        entities.push(req.body);
        model.save(req.params.entity, entities);
        res.status(200).json(req.body);
    });
}

function show(req, res) {
    model.load(req.params.entity, function(entities) {
        for(var i = 0, n = entities.length; i < n; i++) {
            var elem = entities[i];
            if(req.params.id === elem._id.toString()) {
                res.status(200).json(elem);
                return;
            }
        }
        res.status(404).json({});
    });
}

function update(req, res) {
    model.load(req.params.entity, function(entities) {
        for(var i = 0, n = entities.length; i < n; i++) {
            var elem = entities[i];
            if(req.params.id === elem._id.toString()) {
                entities[i] = req.body;
                model.save(req.params.entity, entities);
                res.status(200).json(req.body);
                return;
            }
        }
        res.status(404).json({});
    });
}

function remove(req, res) {
    model.load(req.params.entity, function(entities) {
        for(var i = 0, n = entities.length; i < n; i++) {
            var elem = entities[i];
            if(req.params.id === elem._id.toString()) {
                entities.splice(i, 1);
                model.save(req.params.entity, entities);
                res.status(200).json(elem);
                return;
            }
        }
        res.status(404).json({});
    });
}

function sort(array, field, sortDirection) {
    if(sortDirection && sortDirection === 'desc') {
        return array.sort(function(a, b) { return (a[field] > b[field]) ? -1 : ((b[field] > a[field]) ? 1 : 0); });
    } else {
        return array.sort(function(a, b) { return (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0); });
    }
}

function pagination(array, pageNumber, pageSize) {
    pageNumber = pageNumber || 1
    pageSize = pageSize || 50;

    var endIndex = pageSize * pageNumber,
        startIndex = endIndex - pageSize;
    if(endIndex > array.length) {
        return array.slice(startIndex);
    }
    return array.slice(startIndex, endIndex);
}



function queryRelationship(req, res) {
    model.load(req.params.related, function(entities) {
        console.log(req.query);
        if(req.query.sort) {
            entities = sort(entities, req.query.sort, req.query.sortDirection);
        }
        if(!req.query.filter) {
            req.query.filter = {};
        }
        for(var key in req.query.filter) {
            entities = entities.filter(function(obj) {
                if(obj[key] !== undefined) {
                    return obj[key].toString().toLowerCase().indexOf(req.query.filter[key].toLowerCase()) > -1;
                }
                return false;
            });
        }
		entities = entities.filter(function(obj) {
            let attribute_name = req.params.entity.substring(0, req.params.entity.length-1) + '_id'
            if(obj[attribute_name] !== undefined) {
                return obj[attribute_name] == parseInt(req.params.entityId);
            }
            return false;
            });
        var count = entities.length;
        entities = pagination(entities, req.query.page, req.query.pageSize);

        res.status(200).json(entities);
    });
}

function saveRelationship(req, res) {
    model.load(req.params.related, function(entities) {
        var lastId = 1
        if(entities.length > 0){
            lastId = parseInt(entities[entities.length - 1]._id);
        }
        req.body._id = lastId + 1;
        req.body[req.params.entity] = req.params.entityId;
        entities.push(req.body);
        model.save(req.params.related, entities);
        res.status(200).json(req.body);
    });
}

function showRelationship(req, res) {
    model.load(req.params.related, function(entities) {
        for(var i = 0, n = entities.length; i < n; i++) {
            var elem = entities[i];
            if(req.params.relatedId === elem._id.toString() && req.params.entityId == elem[req.params.entity]) {
                res.status(200).json(elem);
                return;
            }
        }
        res.status(404).json({});
    });
}

function updateRelationship(req, res) {
    model.load(req.params.related, function(entities) {
        for(var i = 0, n = entities.length; i < n; i++) {
            var elem = entities[i];
            if(req.params.relatedId === elem._id.toString() && req.params.entityId == elem[req.params.entity]) {
                entities[i] = req.body;
                model.save(req.params.related, entities);
                res.status(200).json(elem);
                return;
            }
        }
        res.status(404).json({});
    });
}

function removeRelationship(req, res) {
    model.load(req.params.related, function(entities) {
        for(var i = 0, n = entities.length; i < n; i++) {
            var elem = entities[i];
            if(req.params.relatedId === elem._id.toString() && req.params.entityId == elem[req.params.entity]) {
                entities.splice(i, 1);
                model.save(req.params.related, entities);
                res.status(200).json(elem);
                return;
            }
        }
        res.status(404).json({});
    });
}