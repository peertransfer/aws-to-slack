/* eslint-disable */

const coreOperationsSnsPacket = {
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
			"Message":"{\"options\": {\"color\": \"warning\", \"format\": \"raw\"}, \"slack_channel\": \"#victoria-monitoring\", \"message\": \"some core ops message\", \"origin\": \"core-operations\"}",
			"Type": "Notification",
			"UnsubscribeUrl": "EXAMPLE",
			"TopicArn": `arn:aws:sns:region:account-id:topicname`,
			"Subject": "wadus"
		}
	}]
};

const mock = require("./_parser_mock").named("core-operations");
mock.matchesEvent(coreOperationsSnsPacket);

mock.matchesEventWithDetail(coreOperationsSnsPacket, {
	"color": "warning",
	"fallback": "some core ops message",
	"title": "wadus"
});
