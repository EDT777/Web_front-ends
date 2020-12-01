$(document).ready(function() {

	/* -- 头部header 置顶广告区域 */
	$('#header1').slideDown(500);

	var job_data;
	$('#header3 form span').click(function() {
		$('#header3 .position-box').show();
		buildTrees();
	})
	$('#header3 .position-box').mouseleave(function() {
		$(this).hide();
		$(this).empty();
	})
	//获取所有目录
	$.get('./data/position.json').done(function(data) {
		job_data = data;
		//buildTrees();
		buildAsideTrees();
	});
	//构建目录树
	function buildTrees() {

		if (job_data && job_data.zpData) {
			var tree1 = $('<ul class="tree1 scroll"></ul>');
			var tree2 = $('<ul class="tree2 scroll"></ul>');
			var tree3 = $('<ul class="tree3 scroll"></ul>');

			$('#header3 .position-box').append(tree1);
			$('#header3 .position-box').append(tree2);
			$('#header3 .position-box').append(tree3);

			tree1.append('<li>不限</li>')

			buildSubTrees(tree1, job_data.zpData);
		}
	}

	function buildSubTrees(tree, list) {
		tree.empty();
		var nextTree = tree.next('ul');
		if (nextTree) {
			nextTree.empty();
		}
		if (list) {
			for (var zp of list) {
				var li = $(`<li>${zp.name}</li>`);
				li.data('zp', zp);
				tree.append(li);
				//子树
				if (nextTree) {
					li.mouseover(function() {
						var data = $(this).data('zp');
						buildSubTrees(nextTree, data.subLevelModelList);
					})
				}
			}
		}
	}

	//左侧职位选择
	function buildAsideTrees() {
		if (job_data && job_data.zpData) {
			for (var zp of job_data.zpData) {
				var dl = $('<dl></dl>');
				dl.appendTo($('main .home-aside'));
				var dd = $('<dd></dd>');
				dl.append(dd);
				dd.append(`<b>${zp.name}</b>`)
				if (zp.subLevelModelList) {
					for (var i = 0; i < zp.subLevelModelList.length && i < 3; i++) {
						dd.append(`<a href="#">${zp.subLevelModelList[i].name}</a>`);
					}
					dd.append('<i></i>')
				}

				var submenu = $('<div class="submenu"></div>');
				dd.append(submenu);
				submenu.hide();
				dl.mouseover(function() {
					$('main .home-aside .submenu.cur').toggle().removeClass('cur');
					$(this).find(".submenu").addClass('cur').toggle();
				});
				submenu.append(`<p>${zp.name}</p>`);
				var ul = $('<ul></ul>');
				submenu.append(ul);
				for (var sub of zp.subLevelModelList) {
					var li = $('<li></li>');
					li.append(`<h4>${sub.name}</h4>`);
					ul.append(li);
					var div = $('<div></div>');
					li.append(div);
					for (var last of sub.subLevelModelList) {
						div.append(`<a href="#">${last.name}</a>`)
					}
				}

			}
			$('main .home-aside dl:gt(8)').hide();
			var allBtn = $('<div class="showAll">显示全部职位</div>');
			$('main .home-aside dl:eq(8)').after(allBtn);
			allBtn.mouseenter(function() {
				$('main .home-aside dl').show();
				$(this).hide();
			});
			$('main .home-aside').mouseleave(function() {
				$('main .home-aside dl:gt(8)').hide();
				$('main .home-aside .showAll').show();
				$('main .home-aside .submenu.cur').toggle().removeClass('cur');
			})
		}

	}


	// 监视滚动条,调整搜索栏状态
	$('body').scroll(function(e) {
		var bar = $('#header3');
		if (bar.hasClass('fix')) {
			//getBoundingClientRect方法获取元素相对于浏览器窗口的位置信息
			if ($('main').get(0).getBoundingClientRect().top > 0) {
				bar.removeClass('fix');
				bar.find('.search-hot').show();
			}
		} else {
			if ($('main').get(0).getBoundingClientRect().top <= 0) {
				bar.addClass('fix');
				bar.find('.search-hot').hide();
				bar.slideDown(500);
			}
		}
		//console.log($('main').get(0).getBoundingClientRect().top)

		//侧边栏
		var aside_top = Math.max($('#nav1').get(0).getBoundingClientRect().bottom, 0);
		$('aside').css('top', aside_top + 'px');
	})


	// 侧边栏
	$('aside').hover(
		function() {
			$(this).animate({
				width: 60
			}, 200, function() {
				$(this).find('ul:first a').css('color', '#414a60');
			});

		},
		function() {
			$(this).animate({
				width: 40
			}, 200, function() {
				$(this).find('ul:first a').css('color', 'transparent')
			});
		}
	)
	$('aside ul:first a').hover(function() {
			$(this).find('i').css('background-position-x', '+21px')
				.end().css('color', '#00d7c6');
		},
		function() {
			$(this).find('i').css('background-position-x', '0px')
				.end().css('color', '#414a60');
		})
})
