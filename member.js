function skillsMember() {
	var member = document.getElementById('member');
	var memberSkills = document.getElementById('member-skills');
	var memberSkillsClose = document.getElementById('member-skills-close');

	member.onclick = function() {
		memberSkills.style.display = 'block';
	}

	memberSkillsClose.onclick = function() {
		memberSkills.style.display = 'none';
	}
}