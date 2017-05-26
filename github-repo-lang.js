var langStyle = "\
				background-color:#ffffff;\
				border-radius:5px;\
				color:#0366D6;\
				padding:5px";

var githubUrl = window.location.toString();
if (githubUrl.split('github.com') && githubUrl.split('github.com').length && githubUrl.split('github.com')[1]) {
	var postFixGithub = githubUrl.split('github.com')[1];
	if (postFixGithub && postFixGithub.split('/') && postFixGithub.split('/').length && postFixGithub.split('/')[2]) {
		var githubUser = postFixGithub.split('/')[1];
		var currentRepo = postFixGithub.split('/')[2];
		$('.repohead-details-container').append("<div id='repo-lang'> <br> <br> <h3> Loading ... </h3> </div>");
		$.get('https://api.github.com/users/' + githubUser + '/repos', function(userRepos) {
			for (var repo = 0; repo < userRepos.length; repo++) {
				if (userRepos[repo].name === currentRepo) {
					var activeRepoLanguage = userRepos[repo].language;
					break;
				}
			}
			if (activeRepoLanguage) {
				if (resources[activeRepoLanguage.toLowerCase()]) {
					var imageTemplate = `<img style="margin:3px;"  src="${resources[activeRepoLanguage.toLowerCase()]}" width="${imageDimension.width}" height="${imageDimension.height}"/>`;
				} else {
					var imageTemplate = "";
				}
				$('#repo-lang').html(`<br> <br> <span style='` + langStyle + `'>  ${activeRepoLanguage} </span> ${imageTemplate}`)
			} else {
				$('#repo-lang').html(`<br> <br> <span style='` + langStyle + `'>  ${'No language information available'} </span> `)
			}
		});
	}
}