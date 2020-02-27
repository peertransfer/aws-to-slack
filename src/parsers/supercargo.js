//
// Supercargo event parser
//
exports.matches = event =>
	_.get(event.message, 'slack_channel') === '#victoria-monitoring';

exports.parse = event => {
	
	const payload = _.clone(event.message);
  let title = event.getSubject();

  slack_message_with_channel = event.attachmentWithDefaults({
		fallback: payload.message,
		color: payload.options.color,
		// author_name: "Victoria Supercargo",
		title: title,
		text: payload.message,
	});
  
  slack_message_with_channel.channel = payload.slack_channel
  // slack_message_with_channel.hookUrl = payload.slack_hook_url
  slack_message_with_channel.username = process.env.USERNAME + " [Supercargo]"
  slack_message_with_channel.icon_emoji = ":aws:"
  
	return slack_message_with_channel

};
