/* eslint-disable */

const supercargoSnsPacket = {
	Records: [{
		"EventVersion": "1.0",
		"EventSubscriptionArn": `arn:aws:sns:region:account-id:topicname:subscriptionid`,
		"EventSource": "aws:sns",
		"Sns": {
			"SignatureVersion": "1",
			"Timestamp": "1970-01-01T00:00:00.000Z",
			"Signature": "EXAMPLE",
			"SigningCertUrl": "EXAMPLE",
			"MessageId": "95df01b4-ee98-5cb9-9903-4c221d41eb5e",
			"Message":"{\"options\": {\"color\": \"warning\", \"format\": \"raw\"}, \"origin\": \"supercargo\", \"slack_channel\": \"#a_channel\", \"message\": \"some message to #a_channel\"}",
			"Type": "Notification",
			"UnsubscribeUrl": "EXAMPLE",
			"TopicArn": `arn:aws:sns:region:account-id:topicname`,
			"Subject": "TestInvoke"
		}
	}]
};

const mock = require("./_parser_mock").named("supercargo");
mock.matchesEvent(supercargoSnsPacket);

mock.matchesEventWithDetail(supercargoSnsPacket, {
	"color": "warning",
	"fallback": "some message to #a_channel",
	"title": "TestInvoke",
});
