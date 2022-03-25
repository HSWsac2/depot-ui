import { ErrorCode } from "./Error-Codes";

const ErrorMessages = {
	[ErrorCode.INVALID_POSITION_ID]:
		"Die Positions-ID ist ungültig, bitte stellen Sie sicher, dass ein Depot ausgewählt ist.",
	[ErrorCode.INVALID_SUB_POSITION_ID]:
		"Die Unterpositions-ID ist ungültig, bitte stellen Sie sicher, dass ein Depot ausgewählt ist.",
	[ErrorCode.TRANSACTION_NOT_PERMITTED]: "Die Transaktion ist nicht erlaubt.",
	[ErrorCode.PRICE_LARGER_THAN_BUYING_POWER]:
		"Die Kaufkraft ist für diese Transaktion nicht ausreichend!",
	[ErrorCode.PRICE_LARGER_THAN_BALANCE_AMT]:
		"Ihr Guthaben ist für diese Transaktion nicht ausreichend!",
	[ErrorCode.CLIENT_ID_NOT_FOUND]:
		"Die Benutzer ID konnte nicht gefunden werden. Bitte stellen Sie sicher, dass Sie mit einem aktiven Benutzer angemeldet sind.",
	[ErrorCode.CLIENT_EMAIL_NOT_FOUND]:
		"Die eingegebene E-Mail Adresse konnte nicht gefunden werden.",
	[ErrorCode.INVALID_BIRTHDATE]:
		"Das eingegebene Geburtsdatum ist nicht korrekt.",
	[ErrorCode.INVALID_EMAIL]:
		"Die eingegebene E-Mail Adresse ist nicht korrekt.",
	[ErrorCode.INVALID_PLZ]: "Die eingegebene Postleitzahl ist nicht korrekt.",
	[ErrorCode.INVALID_POSITION_ID_OR_POSITION_SUB_ID]:
		"Eine Positions-ID ist ungültig, bitte stellen Sie sicher, dass ein Depot ausgewählt ist.",
	[ErrorCode.CLIENT_HAS_NO_DEPOTS]:
		"Sie haben keine aktiven Depots. Bitte erstellen Sie zunächst ein Depot.",
};

export function getErrorMessage(error) {
	if (error.response) {
		let errorCodeString = error.response.data.detail;
		for (const code in ErrorCode) {
			if (code === errorCodeString) {
				return ErrorMessages[code];
			}
		}
	}
	console.error("Unbekannter Fehler:", error)
	return `Ein unbekannter Fehler ist aufgetreten!, Fehler: ${error.response.data.detail}`;
}
