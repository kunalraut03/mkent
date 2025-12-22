var SHEET_NAME = "contact_form";

function doPost(e) {
    var lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        var doc = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = doc.getSheetByName(SHEET_NAME);

        var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        var nextRow = sheet.getLastRow() + 1;

        var newRow = headers.map(function (header) {
            if (header === 'Date') return new Date();
            return e.parameter[header];
        });

        sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

        // Send email notification
        var emailRecipient = "admin@mksolars.in";
        var subject = "New Enquiry from mksolars.in - " + e.parameter['Name'];
        var body = "You have received a new product enquiry:\n\n" +
            "Source: " + e.parameter['Source'] + "\n" +
            "Name: " + e.parameter['Name'] + "\n" +
            "Category: " + e.parameter['Category'] + "\n" +
            "Phone: " + e.parameter['Phone'] + "\n" +
            "City: " + e.parameter['City'] + "\n" +
            "Area: " + e.parameter['Area'] + "\n" +
            "Crops: " + e.parameter['Crops'] + "\n" +
            "Products: " + e.parameter['Interested Products'] + "\n" +
            "Requirement: " + e.parameter['Requirement'] + "\n\n" +
            "Date: " + new Date().toLocaleString();

        try {
            MailApp.sendEmail(emailRecipient, subject, body);
        } catch (emailError) {
            console.log("Failed to send email: " + emailError);
            // We don't fail the request if email fails, but we log it
        }

        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
            .setMimeType(ContentService.MimeType.JSON);
    }

    catch (e) {
        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
            .setMimeType(ContentService.MimeType.JSON);
    }

    finally {
        lock.releaseLock();
    }
}

function setup() {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(SHEET_NAME);

    if (!sheet) {
        sheet = doc.insertSheet(SHEET_NAME);
    }

    var headers = ["Date", "Source", "Name", "Category", "Phone", "City", "Area", "Crops", "Interested Products", "Requirement"];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
}
