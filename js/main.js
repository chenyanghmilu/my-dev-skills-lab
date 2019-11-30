//storage
const getSkills = localStorage.getItem('skills');
$(".add-list").html(getSkills);

//function
function addSkill() {
	let $skill = $("input").val();
	let $newSkill = $(`<li><button id="delete">X</button><span> ${$skill} </span></li>`);
	if ($skill) {
        $(".add-list").append($newSkill);
		localStorage.setItem('skills', $(".add-list").html()); 
        $("input").val(''); 
	}
};

//event listener
$("input").on('keypress',(evt) => {if (evt.which == 13) addSkill();});
$("button").on('click', addSkill);

//delete
$('.add-list').on('click', 'button', function() {
	$(this).closest('li').fadeOut(500, function() {
        $(this).remove(); 
		localStorage.setItem('skills', $(".add-list").html());
		});
});

