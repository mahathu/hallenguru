from flask import Flask, send_from_directory, jsonify
from datetime import datetime
import scraping
app = Flask(__name__)

@app.route("/")
def index():
    return send_from_directory('client/public', 'index.html')

# Serve static files generated by svelte
@app.route("/<path:path>")
def home(path):
    return send_from_directory('client/public', path)

@app.route("/api/ticketinfo/<int:bath_id>")
def get_tickets_for_bath(bath_id):
    today = datetime.now()
    events = [dict(event, name=scraping.baths[bath_id])
                for event in scraping.get_slot_info(bath_id, today.year, today.month)]
    return jsonify(events)

@app.route("/api/ticketinfo")
def get_ticket_info():
    # events = [dict(event, name=scraping.baths[bath_id])
    #             for bath_id in scraping.baths.keys()
    #             for event in scraping.get_slot_info(bath_id, 2022, 2)]
    # return jsonify(events)
    return jsonify([
    {
        "bath_id": 1, 
        "date": "Sat, 26 Feb 2022 00:00:00 GMT", 
        "end_time": "08:30", 
        "from_date": "", 
        "id": "2561103", 
        "link": "https://pretix.eu/Baeder/1/2561103/", 
        "name": "Stadtbad Mitte", 
        "start_time": "06:30", 
        "state": "available"
    }, 
    {
        "bath_id": 1, 
        "date": "Sat, 26 Feb 2022 00:00:00 GMT", 
        "end_time": "13:00", 
        "from_date": "", 
        "id": "2561105", 
        "link": "https://pretix.eu/Baeder/1/2561105/", 
        "name": "Stadtbad Mitte", 
        "start_time": "11:00", 
        "state": "available"
    }, 
    {
        "bath_id": 1, 
        "date": "Sat, 26 Feb 2022 00:00:00 GMT", 
        "end_time": "13:00", 
        "from_date": "", 
        "id": "2561105", 
        "link": "https://pretix.eu/Baeder/1/2561105/", 
        "name": "Stadtbad Mitte", 
        "start_time": "11:00", 
        "state": "reserved"
    }, 
    {
        "bath_id": 1, 
        "date": "Sat, 26 Feb 2022 00:00:00 GMT", 
        "end_time": "13:00", 
        "from_date": "", 
        "id": "2561105", 
        "link": "https://pretix.eu/Baeder/1/2561105/", 
        "name": "Stadtbad Mitte", 
        "start_time": "11:00", 
        "state": "available"
    }, 
    {
        "bath_id": 1, 
        "date": "Sat, 26 Feb 2022 00:00:00 GMT", 
        "end_time": "15:15", 
        "from_date": "", 
        "id": "2561106", 
        "link": "https://pretix.eu/Baeder/1/2561106/", 
        "name": "Stadtbad Mitte", 
        "start_time": "05:15", 
        "state": "available"
    }])

if __name__ == "__main__":
    app.run(debug=True)
