var githubUrl = window.content.location.href;

if (githubUrl.split('github.com') && githubUrl.split('github.com').length && githubUrl.split('github.com')[1]) {
	var postFixGithub = githubUrl.split('github.com')[1];
	if (postFixGithub && postFixGithub.split('/') && postFixGithub.split('/').length && postFixGithub.split('/')[2]) {
		var githubUser = postFixGithub.split('/')[1];
		var currentRepo = postFixGithub.split('/')[2];
		alert(githubUser);
		alert(currentRepo);
		$('.repohead-details-container').append("<br> Hello </br>")
	}

}