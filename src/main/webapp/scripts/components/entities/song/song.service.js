'use strict';

angular.module('soundxtreamappApp')
    .factory('Song', function ($resource, DateUtils) {
        return $resource('api/songs/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.date_posted = DateUtils.convertDateTimeFromServer(data.date_posted);
                    return data;
                }
            },
            'queryForPlayer': {
                method: 'GET',
                isArray: true,
                url: 'api/tracksPlayer/user/logged'
            },
            'update': { method:'PUT' },
            'getComments': {
                method: 'GET',
                isArray: true,
                url: 'api/comments_song/:id_song'
            },
            'getPlaylistWithSong':{
                method: 'GET',
                isArray: true,
                url: 'api/song/:id/playlists'
            },
            'getSongsWithLess':{
                method: 'GET',
                isArray: true,
                url: 'api/songs/duration-less/:seconds'
            },
            'getSongsWithMore':{
                method: 'GET',
                isArray: true,
                url: 'api/songs/duration-more/:seconds'
            },
            'getTracksFollowing':{
                method: 'GET',
                isArray: true,
                url: 'api/activityFollowing'
            },
            'allTracks':{
                method: 'GET',
                isArray: true,
                url: 'api/songsApp'
            },
            'getAccessUrl': {
                method: 'GET',
                url: 'api/trackUrl/:accessUrl/by/:user',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.date_posted = DateUtils.convertDateTimeFromServer(data.date_posted);
                    return data;
                }
            },
            'getTracksUser': {
                method: 'GET',
                isArray: true,
                url: 'api/trackByUser',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.date_posted = DateUtils.convertDateTimeFromServer(data.date_posted);
                    return data;
                }
            },
        });
    });
