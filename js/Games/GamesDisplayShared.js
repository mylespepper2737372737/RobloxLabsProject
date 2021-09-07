// Games/GamesDisplayShared.js
var Roblox = Roblox || {};
(Roblox.GamesDisplayShared = {}),
	(Roblox.GamesDisplayShared.search = function () {
		var n = $('#searchbox').val();
		return (
			(typeof n == 'undefined' || n == 'Search') && (n = ''),
			(window.location = '/Catalog/Lists.aspx?m=TopFavorites&c=9&t=AllTime&d=All&q=' + n),
			!1
		);
	}),
	(Roblox.GamesDisplayShared.hookUpSearch = function () {
		$('#searchbox').focus(function () {
			$(this).css('color', '#000'), this.value == Roblox.SearchBox.Resources.search ? (this.value = '') : this.select();
		}),
			$('#searchbox').blur(function () {
				$.trim(this.value) == '' && ($(this).css('color', '#888'), (this.value = Roblox.SearchBox.Resources.search));
			});
	}),
	$(function () {
		$('#searchbox').val(Roblox.SearchBox.Resources.search);
	});
