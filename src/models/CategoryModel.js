import Backbone from 'backbone';
import $ from 'jquery';

const CategoryModel = Backbone.Model.extend({
	idAttribute: 'id',
	urlRoot: `http://jservice.io/api/category?id=4`,
	defaults: {
		category: {},
	},
	getCategory(categoryId) {
		$.ajax({
			type: 'GET',
			url: `http://jservice.io/api/category?id=${categoryId}`,
			success: (response) => {
				let filterN = 200;
				let category = response;

				let cluesArr = category.clues.filter(clue => {
					if (clue.value === filterN) {
						filterN += 200;
					}
						return clue;
				});
				
				if (cluesArr.length === 5) {
					category.clues = cluesArr;
					this.set('category', category);
				} else {
					this.getCategory(Math.floor(Math.random() * 18415));
				}
			}
		});
	},
	wasViewed(item) {
		item.trigger('change');
	},
	answeredCorrect(item) {
		item.removeClass('wrongAnswer');
		item.trigger('change');
	},
	answeredWrong(item) {
		item.removeClass('correctAnswer');
		item.trigger('change');
	},
});

export default CategoryModel;
