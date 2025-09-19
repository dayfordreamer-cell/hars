function doPost(e) {
  var sheet = SpreadsheetApp.openById("1QOoHhinsshGL9hFeWwTwhfpGrYDDjsutP95n5yoDvKw").getSheetByName("Bookings");
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.name, data.phone, data.date]);
  return ContentService.createTextOutput(JSON.stringify({status: "success"}))
           .setMimeType(ContentService.MimeType.JSON);
}